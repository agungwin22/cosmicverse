/* ============================================================
   A. READING PROGRESS BAR
   ============================================================ */
(function () {
  const bar = document.getElementById('readingProgress');
  const article = document.querySelector('.article-page');
  if (!bar || !article) return;

  function update() {
    const rect = article.getBoundingClientRect();
    const total = article.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
    bar.style.width = pct + '%';
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();

/* ============================================================
   B. STARFIELD
   ============================================================ */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, dpr = 1;
  let stars = [];
  let shooting = [];
  let nextShoot = 1800;

  const COLORS = [
    '243,244,246', '243,244,246', '243,244,246', '243,244,246',
    '255,170,0', '255,107,0', '190,205,255'
  ];

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width  = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';

    const density = w < 640 ? 11000 : w < 1024 ? 9500 : 8000;
    const count = Math.min(260, Math.max(70, Math.floor((w * h) / density)));

    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.15 + 0.35),
      base: Math.random() * 0.55 + 0.25,
      twinkle: Math.random() * 1.6 + 0.5,
      phase: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.045,
      color: COLORS[(Math.random() * COLORS.length) | 0]
    }));
  }

  function spawnShooting() {
    const fromLeft = Math.random() > 0.5;
    shooting.push({
      x: fromLeft ? -60 : w * (0.4 + Math.random() * 0.6),
      y: Math.random() * h * 0.55,
      vx: (fromLeft ? 1 : -1) * (4.2 + Math.random() * 3.4),
      vy: 1.6 + Math.random() * 1.4,
      len: 90 + Math.random() * 120,
      life: 0,
      max: 110
    });
  }

  function renderStatic() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + s.color + ',' + s.base + ')';
      ctx.fill();
    });
    ctx.restore();
  }

  let last = performance.now();

  function loop(now) {
    const dt = Math.min((now - last) / 16.666, 3);
    last = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.y += s.drift * dt;
      if (s.y > h + 4) s.y = -4;
      if (s.y < -4) s.y = h + 4;

      const tw = 0.55 + 0.45 * Math.sin(now * 0.0011 * s.twinkle + s.phase);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + s.color + ',' + (s.base * tw).toFixed(3) + ')';
      ctx.fill();
    }

    if (now > nextShoot && shooting.length < 2) {
      spawnShooting();
      nextShoot = now + 4200 + Math.random() * 6500;
    }

    for (let i = shooting.length - 1; i >= 0; i--) {
      const m = shooting[i];
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      m.life += dt;

      const alpha = Math.max(0, 1 - m.life / m.max);
      const nx = m.x - m.vx * (m.len / 9);
      const ny = m.y - m.vy * (m.len / 9);

      const grad = ctx.createLinearGradient(m.x, m.y, nx, ny);
      grad.addColorStop(0, 'rgba(255,220,160,' + alpha + ')');
      grad.addColorStop(0.4, 'rgba(255,140,0,' + (alpha * 0.5) + ')');
      grad.addColorStop(1, 'rgba(255,107,0,0)');

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      if (m.life >= m.max || m.x < -200 || m.x > w + 200 || m.y > h + 100) {
        shooting.splice(i, 1);
      }
    }

    ctx.restore();
    requestAnimationFrame(loop);
  }

  build();

  if (reduceMotion) {
    renderStatic();
    window.addEventListener('resize', () => { build(); renderStatic(); });
  } else {
    requestAnimationFrame(loop);
    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(build, 160);
    });
  }
})();

/* ============================================================
   C. NAVBAR
   ============================================================ */
(function () {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('hamburger');
  const menu   = document.getElementById('navMenu');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Buka menu navigasi');
  }

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('click', e => {
    if (!menu.classList.contains('open')) return;
    if (!menu.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 880) closeMenu();
  });
})();

/* ============================================================
   D. SCROLL TO TOP
   ============================================================ */
(function () {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  function toggle() {
    btn.classList.toggle('show', window.scrollY > 600);
  }
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   E. COPY LINK
   ============================================================ */
(function () {
  const btn = document.getElementById('copyLink');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      const original = btn.innerHTML;
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
      btn.style.color = '#1A0C00';
      btn.style.background = 'linear-gradient(135deg, #FF6B00, #FFAA00)';
      btn.style.borderColor = 'transparent';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.color = '';
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 1600);
    } catch (err) {
      /* Fallback sederhana */
      const tmp = document.createElement('input');
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      try { document.execCommand('copy'); } catch(e){}
      document.body.removeChild(tmp);
    }
  });
})();

/* ============================================================
   F. SCROLL REVEAL
   ============================================================ */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  items.forEach(el => io.observe(el));
})();

/* ============================================================
   G. INIT
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();