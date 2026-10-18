/* ============================================================
   A. DATA ARTIKEL
   Field `image` opsional. Kalau kosong / gagal dimuat,
   emoji di thumbnail otomatis jadi fallback.
   ============================================================ */
const ARTICLES = [
  { id:1,  title:"Misteri Lubang Hitam Pertama yang Difoto: Antara Teori Einstein dan Realita Visual", excerpt:"Selama lebih dari satu abad, lubang hitam hanya hidup dalam persamaan matematis.", category:"astronomi", categoryLabel:"Astronomi", emoji:"🌌", thumb:"thumb-1", image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop&q=80&auto=format", author:"Penjelajah", authorInitials:"AL", date:"2026-08-16", dateLabel:"16 Okt 2026", read:7, views:4820, popularity:92, url:"article-detail.html?id=1" },

  { id:2,  title:"Eksperimen Celah Ganda: Ketika Realitas Menolak Diamati", excerpt:"Satu eksperimen sederhana yang meruntuhkan intuisi kita tentang materi, gelombang, dan pengamatan.", category:"fisika", categoryLabel:"Fisika", emoji:"⚛️", thumb:"thumb-2", image:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=500&fit=crop&q=80&auto=format", author:"Raka Pratama", authorInitials:"RP", date:"2026-02-09", dateLabel:"9 Feb 2026", read:6, views:5310, popularity:96, url:"article-detail.html?id=2" },

  { id:3,  title:"Aurora Borealis: Tarian Cahaya dari Badai Matahari", excerpt:"Partikel matahari bertabrakan dengan atmosfer Bumi dan melahirkan cahaya hijau yang memukau.", category:"fenomena", categoryLabel:"Fenomena Langit", emoji:"🌠", thumb:"thumb-3", image:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop&q=80&auto=format", author:"Nadia Kusuma", authorInitials:"NK", date:"2026-02-05", dateLabel:"5 Feb 2026", read:4, views:3120, popularity:78, url:"article-detail.html?id=3" },

  { id:4,  title:"Bagaimana Manusia Pertama Kali Mengukur Jarak Bintang", excerpt:"Sebelum teleskop canggih, para ilmuwan kuno sudah menaksir jarak langit dengan geometri sederhana.", category:"sejarah", categoryLabel:"Sejarah", emoji:"📜", thumb:"thumb-4", image:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&h=500&fit=crop&q=80&auto=format", author:"Bimo Hartono", authorInitials:"BH", date:"2026-02-01", dateLabel:"1 Feb 2026", read:8, views:2740, popularity:71, url:"article-detail.html?id=4" },

  { id:5,  title:"Hujan Meteor Perseid 2026: Panduan Lengkap Mengamati", excerpt:"Waktu terbaik, lokasi ideal, dan cara memotret jejak meteor tanpa peralatan mahal.", category:"fenomena", categoryLabel:"Fenomena Langit", emoji:"☄️", thumb:"thumb-5", image:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=500&fit=crop&q=80&auto=format", author:"Nadia Kusuma", authorInitials:"NK", date:"2026-01-28", dateLabel:"28 Jan 2026", read:5, views:6180, popularity:88, url:"article-detail.html?id=5" },

  { id:6,  title:"Mekanika Kuantum di Balik Jam Atom Paling Presisi", excerpt:"Bagaimana getaran elektron menjadi standar waktu paling akurat yang pernah dibuat manusia.", category:"fisika", categoryLabel:"Fisika", emoji:"🕰️", thumb:"thumb-6", image:"https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=500&fit=crop&q=80&auto=format", author:"Raka Pratama", authorInitials:"RP", date:"2026-01-24", dateLabel:"24 Jan 2026", read:9, views:2240, popularity:64, url:"article-detail.html?id=6" },

  { id:7,  title:"Mengapa Mars Berwarna Merah? Menelusuri Jejak Besi di Planet Tetangga", excerpt:"Warna khas Mars bukan sekadar estetika — ia menyimpan kisah air, oksidasi, dan masa lalu yang lebih basah.", category:"astronomi", categoryLabel:"Astronomi", emoji:"🔴", thumb:"thumb-7", image:"https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=500&fit=crop&q=80&auto=format", author:"Dr. Ayu Lestari", authorInitials:"AL", date:"2026-01-20", dateLabel:"20 Jan 2026", read:6, views:3980, popularity:82, url:"article-detail.html?id=7" },

  { id:8,  title:"Supernova 1987A: Ledakan Bintang yang Mengubah Astronomi Modern", excerpt:"Ledakan bintang terdekat dalam 400 tahun terakhir membuka pintu baru dalam memahami kematian bintang masif.", category:"astronomi", categoryLabel:"Astronomi", emoji:"💥", thumb:"thumb-8", image:"https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&h=500&fit=crop&q=80&auto=format", author:"Bimo Hartono", authorInitials:"BH", date:"2026-01-16", dateLabel:"16 Jan 2026", read:8, views:2870, popularity:74, url:"article-detail.html?id=8" },

  { id:9,  title:"Prinsip Ketidakpastian Heisenberg: Batas Fundamental Pengetahuan", excerpt:"Bukan soal alat yang kurang canggih — alam semesta memang menolak memberi kita kepastian mutlak.", category:"fisika", categoryLabel:"Fisika", emoji:"🌀", thumb:"thumb-2", image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop&q=80&auto=format", author:"Raka Pratama", authorInitials:"RP", date:"2026-01-12", dateLabel:"12 Jan 2026", read:7, views:4510, popularity:90, url:"article-detail.html?id=9" },

  { id:10, title:"Gerhana Matahari Total 2026: Jalur, Waktu, dan Cara Aman Mengamati", excerpt:"Panduan lengkap menyambut salah satu fenomena langit paling ditunggu tahun ini.", category:"fenomena", categoryLabel:"Fenomena Langit", emoji:"🌑", thumb:"thumb-3", image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop&q=80&auto=format", author:"Nadia Kusuma", authorInitials:"NK", date:"2026-01-08", dateLabel:"8 Jan 2026", read:5, views:7320, popularity:98, url:"article-detail.html?id=10" },

  { id:11, title:"Aristarchus dari Samos: Astronom yang Mendahului Zamannya", excerpt:"Ribuan tahun sebelum Copernicus, ia sudah berani mengatakan bahwa Bumi mengelilingi Matahari.", category:"sejarah", categoryLabel:"Sejarah", emoji:"🏛️", thumb:"thumb-4", image:"https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&h=500&fit=crop&q=80&auto=format", author:"Bimo Hartono", authorInitials:"BH", date:"2026-01-04", dateLabel:"4 Jan 2026", read:6, views:1890, popularity:58, url:"article-detail.html?id=11" },

  { id:12, title:"Materi Gelap: 27% Alam Semesta yang Tidak Terlihat", excerpt:"Kita bisa mengukur gravitasinya, tapi belum pernah melihatnya langsung. Apa sebenarnya materi gelap?", category:"fisika", categoryLabel:"Fisika", emoji:"🌑", thumb:"thumb-5", image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80&auto=format", author:"Dr. Ayu Lestari", authorInitials:"AL", date:"2025-12-28", dateLabel:"28 Des 2025", read:10, views:5640, popularity:94, url:"article-detail.html?id=12" },

  { id:13, title:"Voyager 1: Pesan dari Tepi Tata Surya", excerpt:"Setelah hampir 50 tahun mengembara, wahana ini masih mengirim data dari ruang antarbintang.", category:"sejarah", categoryLabel:"Sejarah", emoji:"🛰️", thumb:"thumb-6", image:"https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=500&fit=crop&q=80&auto=format", author:"Bimo Hartono", authorInitials:"BH", date:"2025-12-22", dateLabel:"22 Des 2025", read:7, views:3400, popularity:80, url:"article-detail.html?id=13" },

  { id:14, title:"Medan Magnet Bumi: Perisai Tak Terlihat yang Menjaga Kehidupan", excerpt:"Tanpa medan magnet, atmosfer kita bisa terkikis angin matahari — dan Bumi menjadi dunia mati.", category:"fenomena", categoryLabel:"Fenomena Langit", emoji:"🧲", thumb:"thumb-7", image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop&q=80&auto=format", author:"Nadia Kusuma", authorInitials:"NK", date:"2025-12-18", dateLabel:"18 Des 2025", read:6, views:4120, popularity:84, url:"article-detail.html?id=14" }
];

/* ============================================================
   B. STATE
   ============================================================ */
const state = {
  query: "",
  category: "all",
  sort: "terbaru",
  visible: 6,
  step: 3
};

/* ============================================================
   C. DOM REFS
   ============================================================ */
const grid          = document.getElementById('articleGrid');
const searchInput   = document.getElementById('searchInput');
const searchClear   = document.getElementById('searchClear');
const pills         = document.querySelectorAll('.pill');
const sortSelect    = document.getElementById('sortSelect');
const shownNum      = document.getElementById('shownNum');
const totalNum      = document.getElementById('totalNum');
const loadMoreBtn   = document.getElementById('loadMoreBtn');
const loadBar       = document.getElementById('loadBar');
const progressShown = document.getElementById('progressShown');
const progressTotal = document.getElementById('progressTotal');

/* ============================================================
   D. HELPERS
   ============================================================ */
function escapeHTML(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ============================================================
   Card sebagai <a> utuh + thumbnail gambar
   - <img> = layer utama, cover penuh
   - <span.thumb-emoji> = fallback (otomatis tampil jika img
     error / dihapus lewat onerror)
   ============================================================ */
function cardHTML(a, index){
  const safeTitle = escapeHTML(a.title);
  const url       = a.url || `article-detail.html?id=${a.id}`;
  const safeImage = a.image ? escapeHTML(a.image) : '';

  const imgTag = safeImage
    ? `<img
         class="thumb-img"
         src="${safeImage}"
         alt=""
         loading="lazy"
         decoding="async"
         onerror="this.remove()"
         aria-hidden="true">`
    : '';

  return `
    <a
      class="article-card"
      href="${escapeHTML(url)}"
      data-id="${a.id}"
      style="animation-delay:${Math.min(index * 40, 240)}ms"
      aria-label="Baca artikel: ${safeTitle}">

      <div class="thumb ${a.thumb}">
        ${imgTag}
        <span class="thumb-emoji" aria-hidden="true">${a.emoji}</span>
        <span class="badge">${escapeHTML(a.categoryLabel)}</span>
      </div>

      <div class="article-body">
        <h3>${safeTitle}</h3>
        <p>${escapeHTML(a.excerpt)}</p>
        <div class="meta">
          <span class="author">
            <span class="author-avatar" aria-hidden="true">${escapeHTML(a.authorInitials)}</span>
            ${escapeHTML(a.author)}
          </span>
          <span class="dot" aria-hidden="true"></span>
          <time datetime="${a.date}">${a.dateLabel}</time>
          <span class="read">${a.read} min read</span>
        </div>
      </div>

    </a>
  `;
}

/* ============================================================
   E. FILTER + SORT
   ============================================================ */
function getFiltered(){
  const q = state.query.trim().toLowerCase();

  let list = ARTICLES.filter(a => {
    const matchCat = state.category === 'all' || a.category === state.category;
    if (!matchCat) return false;
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q)
    );
  });

  if (state.sort === 'terbaru'){
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (state.sort === 'terpopuler'){
    list.sort((a, b) => b.popularity - a.popularity);
  } else if (state.sort === 'dibaca'){
    list.sort((a, b) => b.views - a.views);
  }

  return list;
}

/* ============================================================
   F. RENDER
   ============================================================ */
function render(){
  const filtered = getFiltered();
  const total = filtered.length;
  const slice = filtered.slice(0, state.visible);

  if (slice.length === 0){
    grid.innerHTML = `
      <div class="empty-state">
        <div class="icon" aria-hidden="true">🔭</div>
        <h3>Tidak ada artikel ditemukan</h3>
        <p>Coba ubah kata kunci pencarian atau pilih kategori lain untuk menemukan tulisan yang cocok.</p>
      </div>
    `;
  } else {
    grid.innerHTML = slice.map((a, i) => cardHTML(a, i)).join('');
  }

  shownNum.textContent = slice.length;
  totalNum.textContent = total;
  progressShown.textContent = slice.length;
  progressTotal.textContent = total;

  const pct = total === 0 ? 0 : Math.round((slice.length / total) * 100);
  loadBar.style.width = pct + '%';

  if (slice.length >= total){
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = 'Semua Artikel Telah Dimuat <span aria-hidden="true">✓</span>';
  } else {
    loadMoreBtn.disabled = false;
    loadMoreBtn.innerHTML = 'Muat Lebih Banyak Artikel <span aria-hidden="true">↓</span>';
  }
}

/* ============================================================
   G. UPDATE JUMLAH PER KATEGORI (PILLS)
   ============================================================ */
function updateCounts(){
  const counts = { all: ARTICLES.length, astronomi: 0, fisika: 0, fenomena: 0, sejarah: 0 };
  ARTICLES.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });

  document.querySelectorAll('.count').forEach(el => {
    const key = el.dataset.count;
    if (counts[key] !== undefined) el.textContent = counts[key];
  });
}

/* ============================================================
   H. EVENTS
   ============================================================ */

let searchTimer;
searchInput.addEventListener('input', e => {
  state.query = e.target.value;
  searchClear.classList.toggle('show', state.query.length > 0);
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.visible = 6;
    render();
  }, 140);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  searchClear.classList.remove('show');
  state.visible = 6;
  render();
  searchInput.focus();
});

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.category = pill.dataset.cat;
    state.visible = 6;
    render();
  });
});

sortSelect.addEventListener('change', e => {
  state.sort = e.target.value;
  state.visible = 6;
  render();
});

loadMoreBtn.addEventListener('click', () => {
  state.visible += state.step;
  render();
});

document.querySelectorAll('[data-jump]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cat = link.dataset.jump;
    const target = document.querySelector(`.pill[data-cat="${cat}"]`);
    if (!target) return;
    pills.forEach(p => p.classList.remove('active'));
    target.classList.add('active');
    state.category = cat;
    state.visible = 6;
    render();
    document.querySelector('.toolbar').scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

/* ============================================================
   I. STARFIELD
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
   J. NAVBAR
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
   K. SCROLL REVEAL
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
   L. INIT
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();
updateCounts();
render();