<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>লক্ষ্মীপুর সদর তথ্য পোর্টাল</title>
  <meta name="description" content="লক্ষ্মীপুর সদর উপজেলার জরুরি নম্বর, সেবা, আপডেট, মানচিত্র ও যোগাযোগ—সব এক জায়গায়।" />
  <meta name="theme-color" content="#0ea5e9" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect rx='10' ry='10' width='48' height='48' fill='%230ea5e9'/%3E%3Cpath fill='white' d='M24 8a14 14 0 100 28 14 14 0 000-28zm0 4a10 10 0 110 20 10 10 0 010-20zm-2 5h4v12h-4V17zm0 14h4v4h-4v-4z'/%3E%3C/svg%3E" />
  <style>
    :root{--bg:#0b1120;--panel:#0f172a;--muted:#94a3b8;--text:#e2e8f0;--accent:#0ea5e9;--accent2:#22c55e;--warn:#ef4444;--card:#111827}
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,Noto Sans,sans-serif;color:var(--text);background:linear-gradient(180deg,#0b1120 0%,#0f172a 100%);}
    a{color:var(--accent)}
    .container{width:min(1100px,100%);margin-inline:auto;padding:16px}
    header.nav{position:sticky;top:0;z-index:50;background:rgba(15,23,42,.8);backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid rgba(148,163,184,.15)}
    .nav-inner{display:flex;align-items:center;gap:12px;justify-content:space-between;padding:12px 16px}
    .brand{display:flex;align-items:center;gap:10px;font-weight:700}
    .brand .logo{width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#60a5fa);display:grid;place-items:center;box-shadow:0 6px 20px rgba(14,165,233,.4)}
    .brand .logo svg{width:22px;height:22px}
    nav a{margin:0 10px;text-decoration:none;color:var(--text);opacity:.9}
    nav a:hover,nav a:focus{opacity:1;color:#fff}
    .cta{background:linear-gradient(135deg,var(--accent),#60a5fa);color:#0b1120;border:0;padding:10px 14px;border-radius:14px;font-weight:700;cursor:pointer;box-shadow:0 10px 20px rgba(14,165,233,.35)}

    .hero{padding:36px 16px 18px}
    .hero-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:18px}
    .card{background:rgba(17,24,39,.85);border:1px solid rgba(148,163,184,.15);border-radius:18px;padding:18px;box-shadow:0 20px 50px rgba(0,0,0,.25)}
    .title{font-size:clamp(22px,3.2vw,36px);margin:.2em 0 .3em}
    .subtitle{color:var(--muted)}
    .kbd{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border:1px solid rgba(148,163,184,.25);padding:.12em .45em;border-radius:8px;background:rgba(2,6,23,.6)}

    .emergency{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
    .em-item{display:flex;gap:12px;align-items:center;background:linear-gradient(180deg,#111827,#0b1220);border:1px solid rgba(148,163,184,.12);padding:14px;border-radius:14px}
    .em-item strong{font-size:18px}
    .em-item a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
    .badge{font-size:12px;padding:.15rem .5rem;border-radius:999px;border:1px solid rgba(148,163,184,.25);color:var(--muted)}

    .section{padding:22px 0}
    .section h2{font-size:clamp(18px,2.6vw,26px);margin:0 0 10px}

    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .service,.dir-card{background:linear-gradient(180deg,#0f172a,#0b1120);border:1px solid rgba(148,163,184,.12);border-radius:16px;padding:14px}
    .service h3{margin:.2em 0}
    .muted{color:var(--muted)}

    .toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0}
    input[type="text"], input[type="search"], select, textarea{width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(148,163,184,.2);background:#0b1220;color:var(--text)}
    .toolbar input, .toolbar select{max-width:280px}

    .dir-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
    .dir-card h4{margin:.1em 0 .35em}
    .tag{display:inline-block;font-size:12px;margin-right:6px;margin-top:6px;padding:.15rem .45rem;border:1px solid rgba(148,163,184,.25);border-radius:999px;color:var(--muted)}
    .actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
    .btn{border:1px solid rgba(148,163,184,.25);background:#0b1220;color:var(--text);padding:8px 10px;border-radius:12px;cursor:pointer}
    .btn.primary{background:linear-gradient(135deg,var(--accent),#60a5fa);border:0;color:#0b1120;font-weight:700}
    .btn.success{background:linear-gradient(135deg,var(--accent2),#86efac);border:0;color:#052e16;font-weight:700}
    .btn.warn{background:linear-gradient(135deg,var(--warn),#fb7185);border:0;color:#450a0a;font-weight:700}

    .updates{display:grid;gap:12px}
    .update{border:1px solid rgba(148,163,184,.15);padding:12px;border-radius:14px;background:linear-gradient(180deg,#111827,#0b1120)}
    .update small{color:var(--muted)}

    .map-wrap iframe{width:100%;height:360px;border:0;border-radius:16px}

    .footer{margin-top:28px;padding:18px;border-top:1px solid rgba(148,163,184,.15);color:var(--muted);text-align:center}

    .sticky-call{position:fixed;right:16px;bottom:16px;z-index:60}

    @media (max-width: 900px){
      .hero-grid{grid-template-columns:1fr}
      .grid{grid-template-columns:1fr 1fr}
      .dir-list{grid-template-columns:1fr}
      .emergency{grid-template-columns:repeat(2,minmax(0,1fr))}
    }
    @media (max-width: 560px){
      nav{display:none}
      .grid{grid-template-columns:1fr}
    }

    @media print{
      header.nav,.sticky-call,.actions .btn{display:none!important}
      body{background:#fff;color:#000}
      .card,.service,.dir-card,.update{box-shadow:none;border:1px solid #ddd}
    }
  </style>
</head>
<body>
  <header class="nav" aria-label="প্রধান নেভিগেশন">
    <div class="nav-inner container">
      <div class="brand" aria-label="ব্র্যান্ড">
        <span class="logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="currentColor"/>
          </svg>
        </span>
        <span>লক্ষ্মীপুর সদর তথ্য পোর্টাল</span>
      </div>
      <nav>
        <a href="#home">হোম</a>
        <a href="#emergency">জরুরি নম্বর</a>
        <a href="#services">সেবা</a>
        <a href="#directory">ডিরেক্টরি</a>
        <a href="#updates">আপডেট</a>
        <a href="#map">মানচিত্র</a>
        <a href="#feedback">মতামত</a>
      </nav>
      <button class="cta" onclick="document.getElementById('search').focus()">খুঁজুন ⌕</button>
    </div>
  </header>

  <main id="home" class="container">
    <section class="hero">
      <div class="hero-grid">
        <div class="card" role="region" aria-labelledby="hero-title">
          <div class="badge">বিটা সংস্করণ</div>
          <h1 id="hero-title" class="title">লক্ষ্মীপুর সদর—সব সেবা এক জায়গায়</h1>
          <p class="subtitle">জরুরি সহায়তা, সরকারি/বেসরকারি সেবা, আপডেট, মানচিত্র ও যোগাযোগ। এই সাইটটি অফলাইন-ফ্রেন্ডলি এবং মোবাইল-ফার্স্ট ডিজাইনে তৈরি।</p>
          <div class="toolbar">
            <input id="search" type="search" placeholder="যেমন: অ্যাম্বুলেন্স, থানা, হাসপাতাল…" aria-label="ডিরেক্টরি সার্চ" />
            <select id="filterCat" aria-label="ক্যাটাগরি ফিল্টার">
              <option value="all">সব ক্যাটাগরি</option>
            </select>
            <button class="btn primary" onclick="scrollToId('directory')">ডিরেক্টরিতে যান</button>
            <span class="muted">টিপ: <span class="kbd">/</span> চাপলে সার্চ খুলবে</span>
          </div>
        </div>
        <div class="card" id="emergency" role="region" aria-labelledby="em-title">
          <h2 id="em-title">জরুরি নম্বর</h2>
          <div class="emergency" id="emergencyGrid" aria-live="polite"></div>
          <div class="actions">
            <button class="btn" onclick="addQuickEmergency()">লোকাল জরুরি নম্বর যোগ করুন</button>
            <button class="btn" onclick="resetEmergency()">ডিফল্টে রিসেট</button>
          </div>
          <p class="muted">জাতীয় জরুরি: 999 • সিটিজেন সার্ভিস: 333 • নারী ও শিশু সহায়তা: 109</p>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <h2>প্রধান সেবা</h2>
      <div class="grid" id="serviceGrid"></div>
    </section>

    <section id="directory" class="section">
      <h2>সেবা ডিরেক্টরি</h2>
      <div class="toolbar">
        <input id="dirSearch" type="search" placeholder="নাম/এলাকা/সেবা…" aria-label="ডিরেক্টরি খুঁজুন" />
        <select id="dirCat">
          <option value="all">সব</option>
        </select>
        <button class="btn success" onclick="openAddEntry()">নতুন এন্ট্রি যোগ করুন</button>
        <button class="btn" onclick="exportDirectory()">ডেটা এক্সপোর্ট (JSON)</button>
        <input id="importFile" type="file" accept="application/json" hidden />
        <button class="btn" onclick="document.getElementById('importFile').click()">ইম্পোর্ট</button>
      </div>
      <div class="dir-list" id="dirList" aria-live="polite"></div>
    </section>

    <section id="updates" class="section">
      <h2>আপডেট/ঘোষণা</h2>
      <div class="toolbar">
        <input id="updTitle" type="text" placeholder="শিরোনাম" />
        <input id="updText" type="text" placeholder="বার্তা" />
        <button class="btn success" onclick="addUpdate()">পোস্ট করুন</button>
        <button class="btn" onclick="clearUpdates()">সব মুছুন</button>
      </div>
      <div class="updates" id="updateList"></div>
    </section>

    <section id="map" class="section">
      <h2>মানচিত্র</h2>
      <div class="map-wrap card">
        <iframe title="লক্ষ্মীপুর মানচিত্র" src="https://www.openstreetmap.org/export/embed.html?bbox=90.75%2C22.88%2C90.92%2C23.02&amp;layer=mapnik" loading="lazy" referrerpolicy="no-referrer"></iframe>
        <p class="muted">লোকেশন ডিফল্ট—প্রয়োজনে <strong>iframe</strong> লিঙ্কে বাউন্ডারি/জুম বদলান।</p>
      </div>
    </section>

    <section id="feedback" class="section">
      <h2>মতামত/ফিডব্যাক</h2>
      <div class="grid">
        <form class="service" onsubmit="return submitFeedback(event)">
          <h3>বার্তা পাঠান</h3>
          <label>আপনার নাম
            <input id="fbName" type="text" required />
          </label>
          <label>মোবাইল/ইমেইল
            <input id="fbContact" type="text" required />
          </label>
          <label>বার্তা
            <textarea id="fbMessage" rows="4" required></textarea>
          </label>
          <div class="actions">
            <button class="btn primary" type="submit">সাবমিট</button>
            <button class="btn" type="reset">রিসেট</button>
          </div>
          <p id="fbStatus" class="muted" aria-live="polite"></p>
        </form>
        <div class="service">
          <h3>কীভাবে কাস্টমাইজ করবেন</h3>
          <ul>
            <li><strong>জরুরি নম্বর</strong> অংশে লোকাল ফোন যোগ করতে “লোকাল জরুরি নম্বর যোগ করুন” ক্লিক করুন।</li>
            <li><strong>ডিরেক্টরি</strong>তে হাসপাতাল/অ্যাম্বুলেন্স/থানা ইত্যাদি যোগ করুন। ডেটা <em>Export/Import</em> করা যায়।</li>
            <li>সব কন্টেন্ট এই ফাইলেই—কোড ওপেন করে টেক্সট বদলান।</li>
            <li>ডিপ্লয়: শুধু এই ফাইলটি যে কোন হোস্টিংয়ে আপলোড করুন (যেমন GitHub Pages, Netlify)।</li>
          </ul>
          <p class="muted">দ্রষ্টব্য: এখানে থাকা লোকাল নম্বরগুলো ডিফল্টে ফাঁকা রাখা হয়েছে—সঠিক নম্বর যাচাই করে যোগ করুন।</p>
        </div>
        <div class="service">
          <h3>গোপনীয়তা</h3>
          <p class="muted">আপনার যোগ করা ডিরেক্টরি ও আপডেট ব্রাউজারের <em>localStorage</em> এ সেভ হয়—শুধু আপনার ডিভাইসে দৃশ্যমান। সার্ভারে যায় না।</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>© <span id="year"></span> লক্ষ্মীপুর সদর তথ্য পোর্টাল • নির্মাণ সহায়তা: আপনার টিম</p>
    </footer>
  </main>

  <div class="sticky-call" aria-hidden="false">
    <a class="cta" href="tel:999" title="999 কল করুন">জরুরি কল 999</a>
  </div>

  <!-- Dialogs -->
  <dialog id="entryDialog">
    <form method="dialog" class="card" style="max-width:560px">
      <h3>নতুন ডিরেক্টরি এন্ট্রি</h3>
      <div class="grid" style="grid-template-columns:1fr 1fr">
        <label>নাম<input id="enName" type="text" required /></label>
        <label>ক্যাটাগরি
          <select id="enCat" required></select>
        </label>
        <label>এলাকা/ঠিকানা<input id="enArea" type="text" required /></label>
        <label>ফোন (কলযোগ্য)<input id="enPhone" type="tel" placeholder="01xxxxxxxxx" /></label>
        <label>WhatsApp (ঐচ্ছিক)<input id="enWa" type="tel" placeholder="01xxxxxxxxx" /></label>
        <label>ওয়েব/ফেসবুক (ঐচ্ছিক)<input id="enWeb" type="url" placeholder="https://" /></label>
      </div>
      <label>বিবরণ
        <textarea id="enDesc" rows="3" placeholder="সেবা, সময়সূচি ইত্যাদি"></textarea>
      </label>
      <div class="actions">
        <button class="btn" value="cancel">বাতিল</button>
        <button class="btn success" id="enSave" value="default">সেভ</button>
      </div>
    </form>
  </dialog>

  <dialog id="emDialog">
    <form method="dialog" class="card" style="max-width:520px">
      <h3>লোকাল জরুরি নম্বর যোগ করুন</h3>
      <div class="grid" style="grid-template-columns:1fr 1fr">
        <label>শিরোনাম<input id="emTitle" type="text" placeholder="যেমন: সদর থানা" required /></label>
        <label>ফোন<input id="emPhone" type="tel" placeholder="কলযোগ্য নম্বর" required /></label>
        <label>নোট (ঐচ্ছিক)<input id="emNote" type="text" placeholder="ডিউটি অফিসার, ২৪/৭" /></label>
        <label>টাইপ
          <select id="emType">
            <option>পুলিশ</option>
            <option>অ্যাম্বুলেন্স</option>
            <option>হাসপাতাল</option>
            <option>ফায়ার সার্ভিস</option>
            <option>বিদ্যুৎ</option>
            <option>গ্যাস</option>
            <option>অন্যান্য</option>
          </select>
        </label>
      </div>
      <div class="actions">
        <button class="btn" value="cancel">বাতিল</button>
        <button class="btn success" id="emSave" value="default">সেভ</button>
      </div>
    </form>
  </dialog>

  <script>
    // --- Data (starter) --- //
    const DEFAULT_EMERGENCY = [
      { title: 'জাতীয় জরুরি (Police/Fire/Ambulance)', phone: '999', type: 'জাতীয়', note: '২৪/৭' },
      { title: 'সিটিজেন সার্ভিস', phone: '333', type: 'জাতীয়', note: 'সরকারি তথ্য/সেবা' },
      { title: 'নারী ও শিশু সহায়তা', phone: '109', type: 'জাতীয়', note: '' },
      { title: 'টোল-ফ্রি স্বাস্থ্য সেবা', phone: '16263', type: 'জাতীয়', note: 'হেলথলাইন' }
    ];

    const CATEGORIES = ['হাসপাতাল','অ্যাম্বুলেন্স','পুলিশ','ফায়ার সার্ভিস','রক্তদান','ফার্মেসি','সরকারি অফিস','শিক্ষা প্রতিষ্ঠান','বিদ্যুৎ/গ্যাস','অন্যান্য'];

    // Sample starter directory (placeholders—replace with verified local info)
    const STARTER_DIR = [
      { name:'২৫০ শয্যা জেনারেল হাসপাতাল, লক্ষ্মীপুর', cat:'হাসপাতাল', area:'লক্ষ্মীপুর সদর', phone:'', wa:'', web:'', desc:'জরুরি বিভাগ, বহির্বিভাগ—সময়সূচি আপডেট প্রয়োজন' },
      { name:'লক্ষ্মীপুর সদর মডেল থানা', cat:'পুলিশ', area:'লক্ষ্মীপুর সদর', phone:'', wa:'', web:'', desc:'ডিউটি অফিসার নাম্বার আপডেট করুন' },
      { name:'ফায়ার সার্ভিস ও সিভিল ডিফেন্স, লক্ষ্মীপুর', cat:'ফায়ার সার্ভিস', area:'লক্ষ্মীপুর', phone:'', wa:'', web:'', desc:'জরুরি ডিউটি নম্বর যোগ করুন' },
      { name:'অ্যাম্বুলেন্স সার্ভিস (প্রাইভেট)', cat:'অ্যাম্বুলেন্স', area:'সদর', phone:'', wa:'', web:'', desc:'লোকাল সার্ভিস যোগ করুন' },
    ];

    // --- Utility --- //
    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    const store = {
      get(k, fallback){ try{ return JSON.parse(localStorage.getItem(k)) ?? fallback }catch{ return fallback } },
      set(k, v){ localStorage.setItem(k, JSON.stringify(v)) }
    };

    function telLink(num){ return `tel:${num.replace(/\s|-/g,'')}` }
    function waLink(num){ return `https://wa.me/88${num.replace(/\s|-/g,'')}` }
    function scrollToId(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }

    // Keyboard: focus search with /
    window.addEventListener('keydown', e=>{ if(e.key==='/' && !/input|textarea/i.test(document.activeElement.tagName)){ e.preventDefault(); $('#search').focus() } })

    // --- Emergency Section --- //
    function loadEmergency(){
      const list = store.get('emergencyList', DEFAULT_EMERGENCY);
      renderEmergency(list);
    }
    function renderEmergency(list){
      const grid = $('#emergencyGrid');
      grid.innerHTML = '';
      list.forEach(item => {
        const el = document.createElement('div');
        el.className = 'em-item';
        el.innerHTML = `
          <div>
            <div class="badge">${item.type||'জরুরি'}</div>
            <strong>${item.title}</strong>
            <div class="muted">${item.note||''}</div>
          </div>
          <div style="margin-left:auto" class="actions">
            ${item.phone?`<a class="btn primary" href="${telLink(item.phone)}" aria-label="কল করুন ${item.phone}">কল: ${item.phone}</a>`:''}
            ${item.phone?`<a class="btn" target="_blank" rel="noopener" href="${waLink(item.phone)}">WhatsApp</a>`:''}
          </div>`;
        grid.appendChild(el);
      })
    }
    function addQuickEmergency(){
      const dlg = document.getElementById('emDialog');
      dlg.returnValue='';
      dlg.showModal();
      document.getElementById('emSave').onclick = () => {
        const title = $('#emTitle').value.trim();
        const phone = $('#emPhone').value.trim();
        const note = $('#emNote').value.trim();
        const type = $('#emType').value.trim();
        if(!title || !phone){ return }
        const list = store.get('emergencyList', DEFAULT_EMERGENCY);
        list.push({title, phone, note, type});
        store.set('emergencyList', list);
        renderEmergency(list);
        dlg.close();
        $('#emTitle').value = $('#emPhone').value = $('#emNote').value = '';
      }
    }
    function resetEmergency(){ store.set('emergencyList', DEFAULT_EMERGENCY); renderEmergency(DEFAULT_EMERGENCY) }

    // --- Services (static) --- //
    const SERVICES = [
      {icon:'🏥', title:'স্বাস্থ্য', text:'হাসপাতাল, ক্লিনিক, অ্যাম্বুলেন্স' },
      {icon:'👮‍♂️', title:'নিরাপত্তা', text:'থানা, বিট পুলিশিং, ট্রাফিক' },
      {icon:'🔥', title:'দুর্যোগ', text:'ফায়ার সার্ভিস, সিভিল ডিফেন্স' },
      {icon:'🏛️', title:'সরকারি সেবা', text:'ইউনিয়ন পরিষদ, পাসপোর্ট, জন্ম নিবন্ধন' },
      {icon:'💡', title:'ইউটিলিটি', text:'বিদ্যুৎ, গ্যাস, পানি' },
      {icon:'🩸', title:'রক্তদান', text:'ডোনার গ্রুপ, সংগঠন' }
    ];
    function renderServices(){
      const grid = document.getElementById('serviceGrid');
      grid.innerHTML = SERVICES.map(s=>`<div class="service"><div class="badge">${s.icon}</div><h3>${s.title}</h3><p class="muted">${s.text}</p></div>`).join('');
    }

    // --- Directory --- //
    function initCategories(){
      const set = new Set(CATEGORIES);
      store.get('directory', STARTER_DIR).forEach(d=>set.add(d.cat));
      const cats = Array.from(set);
      const sel1 = document.getElementById('dirCat');
      const sel2 = document.getElementById('enCat');
      const sel3 = document.getElementById('filterCat');
      cats.forEach(c=>{
        const o1 = new Option(c,c); sel1.add(o1);
        const o2 = new Option(c,c); sel2.add(o2);
        const o3 = new Option(c,c); sel3.add(o3);
      });
    }

    function renderDirectory(){
      const q = ($('#dirSearch').value || $('#search').value || '').toLowerCase();
      const cat = document.getElementById('dirCat').value;
      const data = store.get('directory', STARTER_DIR);
      const list = document.getElementById('dirList');
      const filtered = data.filter(d=>{
        const matchQ = `${d.name} ${d.area} ${d.desc}`.toLowerCase().includes(q);
        const matchC = cat==='all' || d.cat===cat;
        return matchQ && matchC;
      });
      if(!filtered.length){ list.innerHTML = `<div class="muted">কোনো ফলাফল নেই। নতুন এন্ট্রি যোগ করুন।</div>`; return }
      list.innerHTML = filtered.map(d=>`
        <div class="dir-card" role="article" aria-label="${d.name}">
          <div class="badge">${d.cat}</div>
          <h4>${d.name}</h4>
          <div class="muted">${d.area||''}</div>
          <p>${d.desc||''}</p>
          <div class="actions">
            ${d.phone?`<a class="btn primary" href="${telLink(d.phone)}">কল: ${d.phone}</a>`:''}
            ${d.wa?`<a class="btn" target="_blank" rel="noopener" href="${waLink(d.wa)}">WhatsApp</a>`:''}
            ${d.web?`<a class="btn" target="_blank" rel="noopener" href="${d.web}">ওয়েব</a>`:''}
            <button class="btn" onclick='editEntry(${JSON.stringify(d.name)})'>এডিট</button>
            <button class="btn warn" onclick='deleteEntry(${JSON.stringify(d.name)})'>ডিলিট</button>
          </div>
        </div>`).join('');
    }

    function openAddEntry(){
      const dlg = document.getElementById('entryDialog');
      dlg.returnValue='';
      dlg.showModal();
      document.getElementById('enSave').onclick = () => {
        const item = {
          name: $('#enName').value.trim(),
          cat: $('#enCat').value,
          area: $('#enArea').value.trim(),
          phone: $('#enPhone').value.trim(),
          wa: $('#enWa').value.trim(),
          web: $('#enWeb').value.trim(),
          desc: $('#enDesc').value.trim(),
        };
        if(!item.name) return;
        const data = store.get('directory', STARTER_DIR);
        const exists = data.find(d=>d.name===item.name);
        if(exists){ Object.assign(exists, item) } else { data.push(item) }
        store.set('directory', data);
        renderDirectory();
        dlg.close();
        ['#enName','#enArea','#enPhone','#enWa','#enWeb','#enDesc'].forEach(s=>$(s).value='');
      }
    }

    function editEntry(name){
      const data = store.get('directory', STARTER_DIR);
      const d = data.find(x=>x.name===name);
      if(!d) return;
      const dlg = document.getElementById('entryDialog');
      $('#enName').value = d.name;
      $('#enCat').value = d.cat;
      $('#enArea').value = d.area;
      $('#enPhone').value = d.phone;
      $('#enWa').value = d.wa;
      $('#enWeb').value = d.web;
      $('#enDesc').value = d.desc;
      dlg.showModal();
      document.getElementById('enSave').onclick = () => {
        Object.assign(d, {
          name: $('#enName').value.trim(),
          cat: $('#enCat').value,
          area: $('#enArea').value.trim(),
          phone: $('#enPhone').value.trim(),
          wa: $('#enWa').value.trim(),
          web: $('#enWeb').value.trim(),
          desc: $('#enDesc').value.trim(),
        });
        store.set('directory', data);
        renderDirectory();
        dlg.close();
      }
    }

    function deleteEntry(name){
      if(!confirm('এন্ট্রি ডিলিট করবেন?')) return;
      const data = store.get('directory', STARTER_DIR).filter(d=>d.name!==name);
      store.set('directory', data);
      renderDirectory();
    }

    function exportDirectory(){
      const data = store.get('directory', STARTER_DIR);
      const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'lakshmipur-directory.json'; a.click();
      URL.revokeObjectURL(url);
    }

    document.getElementById('importFile').addEventListener('change', (e)=>{
      const file = e.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{
        try{ const json = JSON.parse(reader.result); store.set('directory', json); renderDirectory() }
        catch{ alert('ফাইলটি সঠিক JSON নয়'); }
      };
      reader.readAsText(file);
    });

    // --- Updates --- //
    function addUpdate(){
      const t = $('#updTitle').value.trim();
      const m = $('#updText').value.trim();
      if(!t || !m) return;
      const list = store.get('updates', []);
      list.unshift({t, m, time: new Date().toISOString()});
      store.set('updates', list);
      $('#updTitle').value = $('#updText').value = '';
      renderUpdates();
    }
    function renderUpdates(){
      const list = store.get('updates', []);
      const box = document.getElementById('updateList');
      if(!list.length){ box.innerHTML = '<div class="muted">এখনও কোনো আপডেট নেই।</div>'; return }
      box.innerHTML = list.map(u=>`<div class="update"><strong>${u.t}</strong><div class="muted">${new Date(u.time).toLocaleString()}</div><p>${u.m}</p></div>`).join('');
    }
    function clearUpdates(){ if(confirm('সব আপডেট মুছবেন?')){ store.set('updates', []); renderUpdates() } }

    // --- Feedback (demo only) --- //
    function submitFeedback(e){
      e.preventDefault();
      const name = $('#fbName').value.trim();
      const contact = $('#fbContact').value.trim();
      const msg = $('#fbMessage').value.trim();
      const f = store.get('feedback', []);
      f.push({name, contact, msg, time: new Date().toISOString()});
      store.set('feedback', f);
      $('#fbStatus').textContent = 'ধন্যবাদ! আপনার বার্তা সেভ হয়েছে (ডিভাইসে)';
      e.target.reset();
      return false;
    }

    // --- Wiring --- //
    function init(){
      document.getElementById('year').textContent = new Date().getFullYear();
      initCategories();
      renderServices();
      loadEmergency();
      renderDirectory();
      renderUpdates();
      ['#search','#dirSearch','#dirCat'].forEach(sel=> $(sel)?.addEventListener('input', renderDirectory));
    }

    // Accessibility: close dialogs with Esc (native supported), focus trap simple
    ['entryDialog','emDialog'].forEach(id=>{
      const dlg = document.getElementById(id);
      dlg?.addEventListener('click', e=>{ if(e.target===dlg) dlg.close() })
    });

    // Kickoff
    document.addEventListener('DOMContentLoaded', init);
  </script>
</body>
</html>
