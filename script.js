/* ============================================================
   EDIT YOUR CONTENT HERE — everything on the case-study pages
   comes from this PROJECTS array. Replace the notes marked
   "ADD" with your real numbers and quotes.
   ============================================================ */
const PROJECTS = [
  {
    id: 'ids360',
    title: 'IDS360',
    tag: ['Enterprise SaaS', 'RV & Marine DMS', 'Design system'],
    summary: 'A web-based dealer management system that unifies sales CRM, service CRM, parts requests, work orders and invoicing for RV and boat dealerships.',
    glow: 'rgba(60,140,255,.30)',
    kpis: [['6 yrs', 'owning product UX'], ['6+', 'connected modules'], ['1', 'shared design system']],
    role: 'Senior UX Designer', company: 'Contour Software · IDS Astra', time: '2020 — 2026', platform: 'Web (SaaS)',
    cover: { src: 'assets/ids-leads.webp', type: 'browser' },
    float: 'assets/ids-tasks.webp',
    problem: [
      'Dealerships run on a patchwork of legacy screens. Sales, service, parts and billing each lived in separate workflows, so staff re-keyed data, lost context between departments and needed weeks of training.',
      'The goal: one coherent platform that scales across modules and stays fast for people who use it eight hours a day.'
    ],
    process: [
      'Mapped end-to-end dealership workflows with advisors, sales staff and operations leads.',
      'Audited legacy screens to find repeated patterns, then rebuilt them as reusable components.',
      'Designed a consistent list-and-filter pattern (search, tabs, bulk select, applied filters) used across every module.',
      'Partnered with engineering and the VP of Innovation to validate feasibility and phase the rollout.'
    ],
    solution: [
      'A modular shell with a global app switcher, location context and role-aware navigation.',
      'Data-dense tables designed for scanning: colour-coded status edges, inline actions, avatars for assignment and clear overdue signals.',
      'A documented design system covering the filter bar states — unchecked, checked, tabs, applied filters and scroll behaviour.'
    ],
    impact: [
      'Consistent patterns across Sales CRM, Service CRM, parts and invoicing — faster design and build for every new module.',
      'ADD: training-time, task-time or satisfaction metrics from your team.'
    ],
    gallery: [
      ['assets/ids-leads.webp', 'Sales CRM — Leads'],
      ['assets/ids-tasks.webp', 'Service CRM — Tasks'],
      ['assets/ids-2.webp', 'Module view'],
      ['assets/ids-4.webp', 'Module view'],
      ['assets/ids-design-system.webp', 'Design system — filter bar states'],
      ['assets/ids-palette.png', 'Colour palette']
    ]
  },
  {
    id: 'rowriter',
    title: 'RO Writer',
    tag: ['Auto repair shops', 'Complex workflow UX', 'Repair orders'],
    summary: 'A shop management solution where advisors build repair orders from labor, parts, fees, discounts and notes — across packages, sublets and declined work.',
    glow: 'rgba(0,140,200,.32)',
    kpis: [['4', 'line-item states designed'], ['5', 'cost categories per job'], ['1', 'expandable work view']],
    role: 'Senior UX Designer', company: 'Constellation · R.O. Writer', time: '2024', platform: 'Web (SaaS)',
    cover: { src: 'assets/ro-3.png', type: 'browser' },
    float: 'assets/ro-2.png',
    problem: [
      'A single repair job can contain labor, parts, fees, discounts and notes — and part of it may be approved, in progress, sublet to another shop or declined by the customer.',
      'Advisors needed to understand the status and the total at a glance without opening ten screens.'
    ],
    process: [
      'Broke each job into its parts: labor, parts, fee, discount and notes.',
      'Defined the states a line can be in: awaiting approval, approved, in-progress, package, sublet and declined.',
      'Iterated an expandable card so a whole job reads in one place, with totals always visible.'
    ],
    solution: [
      'An expanded work view with colour-coded states (e.g. green for packages, blue for sublets, red for declined).',
      'Quick-add controls for parts, labor, fees, discounts and notes, plus inline Decline / Move / Edit actions.',
      'A persistent totals bar: labor, parts, sublet, fees, discounts, subtotal, taxes and total.'
    ],
    impact: [
      'Complex jobs become scannable, and declined or sublet work is impossible to miss.',
      'ADD: reduction in errors, time to build an order, or advisor feedback.'
    ],
    gallery: [
      ['assets/ro-3.png', 'Expanded view — job states'],
      ['assets/ro-2.png', 'Login'],
      ['assets/ro-1.png', 'Shop workflow']
    ]
  },
  {
    id: 'geekseek',
    title: 'GeekSeek',
    tag: ['Two-sided marketplace', 'Job board', 'Dashboard'],
    summary: 'The recruiter side of a job platform, designed so recruiters can post jobs quickly and search a wide pool of CVs to find and hire qualified candidates.',
    glow: 'rgba(40,110,220,.35)',
    kpis: [['18%', 'conversion lift'], ['2', 'user types + admin'], ['3', 'core flows']],
    role: 'UX Designer Lead', company: 'WorkFello', time: '2019 — 2020', platform: 'Web',
    cover: { src: 'assets/job-1.png', type: 'browser' },
    float: 'assets/job-3.png',
    heroImg: 'assets/geekseek-hero.png',
    tools: 'Figma · Miro · Trello · interviews · surveys · usability testing',
    myRole: 'I worked closely with the product team, stakeholders and developers to understand what recruiters needed and turn it into design. My responsibilities covered user research, UX strategy and wireframing, interaction design, visual design, usability testing and iteration, and day-to-day collaboration with the team.',
    problem: [
      'Recruiters found creating and managing job postings slow and cumbersome, with too many steps and fields to get through.',
      'They also struggled to find qualified candidates efficiently: sourcing methods did not give access to a diverse, extensive pool, and it was hard to judge candidates by their qualifications and experience.'
    ],
    research: [
      'Research combined interviews, surveys and usability testing with recruiters. They were frustrated by the time-consuming posting process and wanted a wide candidate pool, better evaluation tools, smooth communication with candidates, and useful analytics and reporting.'
    ],
    findings: [
      'Pain point: the job posting process is complex and time-consuming.',
      'Pain point: it is hard to reach a diverse, extensive pool of qualified candidates.',
      'Pain point: evaluating qualifications and experience takes too long.',
      'Goal: a streamlined, intuitive, quicker posting flow.',
      'Goal: access to a wide range of candidates.',
      'Goal: comprehensive candidate profiles that make evaluation efficient.'
    ],
    process: [
      'Followed a design-thinking loop: Empathize, Define, Ideate, Prototype, Test.',
      'Defined the audiences — candidates, employers and admins — and mapped their journeys.',
      'Prototyped the dashboard, job posting and CV search experience, then tested with recruiters.',
      'Iterated on content hierarchy and calls to action based on what the sessions showed.'
    ],
    artifacts: [
      { src: 'assets/geekseek-process.png', title: 'Design process', text: 'The five-stage loop that guided the work, from empathising with recruiters to testing the prototype.' },
      { src: 'assets/geekseek-pains.png', title: 'Pain points and goals', text: 'Research findings translated into goals the design had to meet.' }
    ],
    solution: [
      'An employer dashboard with job, view, application and cost stats, recent activity by stage and an application-response chart.',
      'A CV Search flow with credits, plans and invoices built in.',
      'Rich candidate profiles: availability, notice period, qualifications, experience, skills and projects.'
    ],
    impact: [
      '18% improvement in conversion through iterative usability testing, stronger content hierarchy and CTA optimisation.',
      'ADD: applications per job, time-to-hire, or recruiter feedback.'
    ],
    gallery: [
      ['assets/job-1.png', 'Employer dashboard'],
      ['assets/job-3.png', 'Candidate profile'],
      ['assets/job-2.png', 'Flow'],
      ['assets/job-4.png', 'Flow']
    ]
  },
  {
    id: 'swipee',
    title: 'Swipee',
    tag: ['Mobile app', 'Vendor web app', 'Video commerce'],
    summary: 'A video-based shopping platform with a stringent quality-check process: shoppers see products in motion and buy with confidence, while vendors run their stores through a dedicated web app.',
    glow: 'rgba(150,70,255,.38)',
    kpis: [['2', 'apps: shopper mobile + vendor web'], ['4', 'research methods'], ['5', 'stage design process']],
    role: 'UX Designer Lead', company: 'WorkFello', time: '2019 — 2020', platform: 'iOS & Android',
    cover: { type: 'phones', srcs: ['assets/swipee-1.png', 'assets/swipee-2.png', 'assets/swipee-3.png'] },
    gallery: [
      ['assets/swipee-1.png', 'Splash'],
      ['assets/swipee-2.png', 'Video product feed'],
      ['assets/swipee-3.png', 'Flow']
    ],
    tools: 'Figma · Miro · Trello · market research · interviews · usability testing · competitive audit',
    myRole: 'UX designer across both products: the shopper mobile app and the vendor web app. My work covered user research, user flows, the design system, prototyping and A/B testing, in close collaboration with developers.',
    problem: [
      'Online shoppers struggle to judge product quality before they buy. Limited descriptions and static images do not show how an item really looks, feels or lasts, so people hesitate.',
      'On the other side, vendors needed a simple way to run an online store: upload and manage listings, hand orders to Swipee for fulfilment, communicate clearly and get paid securely and on time.'
    ],
    research: [
      'Research used four methods: market research on the online shopping industry, user interviews about shopping habits and quality concerns, usability testing with representative users on the prototype, and a competitive audit of video-based shopping apps.'
    ],
    findings: [
      'Limited product representation: static images and text were not enough for informed decisions.',
      'Difficulty choosing vendors: shoppers wanted trustworthy sellers and clear credibility.',
      'Lack of quality assurance: people were unsure of quality without inspecting a product first.',
      'Limited personalisation: shoppers wanted recommendations based on their preferences and history.',
      'Vendor goal: track stock, get low-inventory alerts and avoid overselling.',
      'Vendor goal: smooth coordination with Swipee for order processing.'
    ],
    process: [
      'Followed a five-stage process for the shopper app: Empathize, Define, Ideate, Prototype and Understand.',
      'Built personas for shoppers and vendors, then mapped user flows and the vendor information architecture.',
      'Ideated video-based browsing and a quality-check process as the answer to the trust gap.',
      'Created low-fidelity wireframes and interactive prototypes, tested them, and worked with developers on accurate implementation.'
    ],
    artifacts: [
      { src: 'assets/swipee-user-process.png', title: 'Shopper app: design process', text: 'Empathize, Define, Ideate, Prototype and Understand, with what was done in each stage.' },
      { src: 'assets/swipee-user-research.png', title: 'Shopper app: research and pain points', text: 'Four research methods and the four pain points they surfaced.' },
      { src: 'assets/swipee-user-persona.png', title: 'Shopper persona: Sarah', text: 'A busy parent who wants reliable quality and a more confident way to shop online.' },
      { src: 'assets/swipee-user-audit.png', title: 'Competitive audit', text: 'Swipee compared with four local shopping platforms on video, reviews, QA process, ratings and recommendations.' },
      { src: 'assets/swipee-user-flow.png', title: 'Shopper information architecture and user flow', text: 'From sign-in or skip to home video feed, search, store details, product details and settings.' },
      { src: 'assets/swipee-user-sketches.png', title: 'Low-fidelity sketches', text: 'Hand-drawn wireframes for sign-up, verification, password reset, video feed, categories, listings and product details.' },
      { src: 'assets/swipee-user-usability.png', title: 'Usability testing: before and after', text: 'Findings from testing reshaped the profile and settings screens and the verification step.' },
      { src: 'assets/swipee-user-style.png', title: 'Style guide', text: 'Colour palette, typefaces and type scale used across the app.' },
      { src: 'assets/swipee-vendor-process.png', title: 'Vendor app: design process', text: 'User research, ideation and sketches, prototyping and usability testing.' },
      { src: 'assets/swipee-vendor-personas.png', title: 'Vendor personas', text: 'Two small-business owners: their goals, frustrations, values and motivation.' },
      { src: 'assets/swipee-vendor-flow.png', title: 'Vendor user flow and information architecture', text: 'From sign-in to dashboard, orders, store, management and settings.' }
    ],
    solution: [
      'Shopper app: video-based browsing, with a full-screen feed showing name, description and price and a side rail for rating, likes, views, share and buy.',
      'A quality-check process so shoppers can trust what arrives, plus reviews and ratings on every product.',
      'A bottom tab bar for home, explore, cart, favourites and profile.',
      'Vendor web app: a dashboard with orders, store and product management, inventory and reviews, and settings for delivery, business info and bank details.'
    ],
    impact: [
      'Enhanced shopping experience: immersive, video-based product browsing instead of static images.',
      'Improved quality assurance: a “Swipee Quality Check” so listed products go through a rigorous review.',
      'More exposure for vendors: a platform where they can create stores and showcase products.',
      'Clear differentiation: video shopping, quality assurance and recommendations set it apart from competing marketplaces.',
      'ADD: measurable results such as conversion, retention or vendor sales.'
    ],
    phones: true
  },
  {
    id: 'sonderblu',
    title: 'SonderBlu',
    tag: ['Entertainment platform', 'Social + streaming', 'Subscriptions'],
    summary: 'A movie platform that blends discovery, social engagement and subscriptions — from taste-based onboarding to plan selection and shared sub-accounts.',
    glow: 'rgba(40,200,210,.30)',
    kpis: [['4', 'subscription tiers'], ['3', 'core flows designed'], ['1', 'dark, cinematic UI']],
    role: 'Product Designer', company: 'SonderBlu', time: 'ADD year', platform: 'Web platform',
    cover: { src: 'assets/sonderblu-plans.jpg', type: 'browser' },
    float: 'assets/sonderblu-genres.jpg',
    problem: [
      'People discover films through friends as much as through catalogues, yet most platforms treat watching as a solo activity and recommendations as a black box.',
      'SonderBlu needed an onboarding and account system that learns taste quickly, explains pricing clearly and lets people share their experience with others.'
    ],
    process: [
      'Mapped the sign-up journey: taste, plan, payment and account management.',
      'Designed the genre picker so each choice feels visual and quick, with a nudge to choose three or more for better recommendations.',
      'Simplified plan comparison into four clear tiers, with the recommended plan highlighted and the discount shown before checkout.',
      'Structured settings around membership, socials and sub-accounts so family and friends can be managed in one place.'
    ],
    solution: [
      'A cinematic dark interface with a teal-to-violet gradient, film-themed illustration and large poster-led cards.',
      'Genre onboarding with poster tiles and a persistent Connect action.',
      'A plans page with Free, Basic, Standard and Premium tiers, an “all plans include” summary, promo code field and live subtotal.',
      'A settings area for account, billing, socials and sub-accounts, with separate requests and invitations that can be accepted or declined in one tap.'
    ],
    impact: [
      'A clear, low-friction path from sign-up to first recommendation, with pricing and sub-account rules easy to understand.',
      'ADD: sign-up completion, plan conversion or user feedback.'
    ],
    gallery: [
      ['assets/sonderblu-plans.jpg', 'Choose your plan'],
      ['assets/sonderblu-genres.jpg', 'Genre onboarding'],
      ['assets/sonderblu-subaccounts.jpg', 'Settings — sub-account invitations']
    ]
  }
];

/* ============================================================
   Helpers
   ============================================================ */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   Theme (light by default, dark on toggle, remembered)
   ============================================================ */
(function theme() {
  const root = document.documentElement, btn = $('#themeToggle'), meta = $('#metaTheme');
  const apply = t => {
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    if (meta) meta.content = t === 'dark' ? '#06080a' : '#f5f4ee';
    try { localStorage.setItem('theme', t); } catch (e) {}
    window.dispatchEvent(new Event('themechange'));
  };
  btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  btn.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();

/* ============================================================
   Loader
   ============================================================ */
(function loader() {
  const bar = $('#loaderBar'), txt = $('#loaderText'), el = $('#loader');
  const msgs = ['initialising design agent…', 'loading case studies…', 'calibrating pixels…', 'ready.'];
  document.body.classList.add('locked');
  let p = 0;
  const t = setInterval(() => {
    p = Math.min(100, p + Math.random() * 18 + 6);
    bar.style.width = p + '%';
    txt.textContent = msgs[Math.min(3, Math.floor(p / 26))];
    if (p >= 100) {
      clearInterval(t);
      setTimeout(() => {
        el.classList.add('done');
        document.body.classList.remove('locked');
        document.body.classList.add('go');
        startAgent();
      }, 350);
    }
  }, 130);
})();

/* ============================================================
   Network canvas (neural constellation reacting to the cursor)
   ============================================================ */
(function network() {
  const c = $('#net'), ctx = c.getContext('2d');
  let W, H, pts = [], mouse = { x: -999, y: -999 }, dpr = Math.min(devicePixelRatio || 1, 2);
  function size() {
    W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr;
    c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px';
    const n = Math.round(Math.min(110, innerWidth / 14));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35 * dpr, vy: (Math.random() - .5) * .35 * dpr, r: (Math.random() * 1.4 + .6) * dpr
    }));
  }
  size(); addEventListener('resize', size);
  addEventListener('pointermove', e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
  const link = 150 * dpr;
  let ca = '216,255,61', cb = '120,255,170';
  const readColors = () => {
    const s = getComputedStyle(document.documentElement);
    ca = s.getPropertyValue('--net-a').trim() || ca; cb = s.getPropertyValue('--net-b').trim() || cb;
  };
  readColors(); addEventListener('themechange', readColors);
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 160 * dpr) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283);
      ctx.fillStyle = `rgba(${ca},.55)`; ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < link) {
          ctx.strokeStyle = `rgba(${cb},${(1 - d / link) * .22})`;
          ctx.lineWidth = dpr * .8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 200 * dpr) {
        ctx.strokeStyle = `rgba(${ca},${(1 - dm / (200 * dpr)) * .5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    requestAnimationFrame(frame);
  }
  if (!reduced) frame();
})();

/* ============================================================
   Spotlight + custom cursor + progress + nav
   ============================================================ */
(function pointer() {
  const sp = $('#spotlight'), cur = $('#cursor');
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener('pointermove', e => {
    sp.style.setProperty('--mx', e.clientX + 'px'); sp.style.setProperty('--my', e.clientY + 'px');
    tx = e.clientX; ty = e.clientY;
  });
  if (finePointer) {
    document.body.classList.add('has-cursor');
    (function loop() {
      cx += (tx - cx) * .2; cy += (ty - cy) * .2;
      cur.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('pointerover', e => {
      cur.classList.toggle('big', !!e.target.closest('a,button,.pcard,.cs-gallery figure'));
    });
  }
  const bar = $('#progress'), nav = $('#nav'); let last = 0;
  addEventListener('scroll', () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (y / h * 100) + '%';
    nav.classList.toggle('hide', y > last && y > 500 && !$('#cs').classList.contains('open'));
    last = y;
  }, { passive: true });
  const burger = $('#burger'), links = $('.nav-links');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); links.classList.toggle('open'); });
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); links.classList.remove('open'); }));
})();

/* ============================================================
   Reveal on scroll + count-up
   ============================================================ */
(function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    $$('[data-count]', e.target).forEach(countUp);
  }), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
  window.observeReveals = () => $$('.reveal:not(.in)').forEach(el => io.observe(el));
  observeReveals();
  function countUp(el) {
    const to = +el.dataset.count; let s = null;
    const step = t => {
      s ??= t; const k = Math.min(1, (t - s) / 1400);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
})();

/* ============================================================
   3D tilt + magnetic buttons
   ============================================================ */
function bindTilt(root = document) {
  if (!finePointer) return;
  $$('.tilt, .frame, .phone', root).forEach(el => {
    if (el._tilt) return; el._tilt = 1;
    const host = el.closest('.p-shot') || el;
    host.addEventListener('pointermove', e => {
      const r = host.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });
    host.addEventListener('pointerleave', () => el.style.transform = '');
  });
}
(function magnetic() {
  if (!finePointer) return;
  $$('.magnetic').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener('pointerleave', () => b.style.transform = '');
  });
})();

/* ============================================================
   Agent card — typed "design process"
   ============================================================ */
function startAgent() {
  const log = $('#agentLog'), status = $('#agentStatus'), check = $('#agentCheck');
  const script = [
    ['reading brief', 'complex dealership workflow', 'Reading the brief…'],
    ['interviewing', 'users · ops · stakeholders', 'Talking to users…'],
    ['mapping', 'journeys → pain points', 'Mapping the problem…'],
    ['wireframing', 'flows & screens in Figma', 'Sketching solutions…'],
    ['prototyping', 'AI-assisted · Claude', 'Prototyping fast…'],
    ['testing', 'task success ↑', 'Validating with users…'],
    ['shipping', 'handoff to engineering', 'Issue closed without confusion ✓']
  ];
  const run = () => {
    log.innerHTML = ''; check.classList.remove('ok');
    script.forEach((s, i) => setTimeout(() => {
      const row = document.createElement('div'); row.className = 'row';
      row.innerHTML = `<em>▸</em><b>${s[0]}</b><span>${s[1]}</span>`;
      log.appendChild(row); status.textContent = s[2];
      if (i === script.length - 1) { check.classList.add('ok'); }
    }, 700 + i * 950));
    setTimeout(run, 700 + script.length * 950 + 4200);
  };
  run();
}

/* ============================================================
   Case study cards
   ============================================================ */
function shotHTML(p) {
  const c = p.cover;
  if (c.type === 'phones') {
    return `<div class="phones">${c.srcs.map(s => `<div class="phone"><img src="${s}" alt="${p.title} screen" loading="lazy"></div>`).join('')}</div>`;
  }
  return `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="view"><img src="${c.src}" alt="${p.title} screen" loading="lazy"></div></div>` +
    (p.float ? `<div class="float a"><img src="${p.float}" alt="" loading="lazy"></div>` : '');
}
const stack = $('#stack');
PROJECTS.forEach((p, i) => {
  const el = document.createElement('article');
  el.className = 'pcard reveal'; el.style.top = (90 + i * 16) + 'px'; el.style.setProperty('--glow', p.glow);
  el.dataset.i = i;
  el.innerHTML = `
    <div class="p-copy">
      <div class="p-meta">${p.tag.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h3>${p.title}</h3>
      <p class="p-sum">${p.summary}</p>
      <div class="p-kpis">${p.kpis.map(k => `<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>
      <button class="btn btn-lime magnetic open-hint" data-open="${i}">Read case study
        <span class="arrow"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6l6 6-6 6"/></svg></span>
      </button>
    </div>
    <div class="p-shot">${shotHTML(p)}</div>`;
  stack.appendChild(el);
});
observeReveals(); bindTilt();
$$('.pcard .magnetic').forEach(b => {
  if (!finePointer) return;
  b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .2}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
  b.addEventListener('pointerleave', () => b.style.transform = '');
});

/* ============================================================
   Case study overlay
   ============================================================ */
const cs = $('#cs'), csBody = $('#csBody'), csScroll = $('#csScroll'), lb = $('#lb');
function renderCS(i) {
  const p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
  const list = a => `<ul>${a.map(x => `<li>${x.startsWith('ADD') ? `<span class="note" style="display:block;margin:0">${x}</span>` : x}</li>`).join('')}</ul>`;
  const para = a => a.map(x => `<p>${x}</p>`).join('');
  const phone = p.phones;
  const cover = phone
    ? `<div class="cs-cover phones-bg"><div class="phones">${p.cover.srcs.map(s => `<div class="phone"><img src="${s}" alt=""></div>`).join('')}</div></div>`
    : `<div class="cs-cover"><img src="${p.heroImg || p.cover.src}" alt="${p.title}"></div>`;
  const gal = `<div class="cs-gallery ${phone ? 'phone-row' : ''}">${p.gallery.map(g => `<figure class="${phone ? 'dk' : ''}"><img src="${g[0]}" alt="${g[1]}" loading="lazy"><figcaption>${g[1]}</figcaption></figure>`).join('')}</div>`;
  const art = a => `<div class="cs-art">${a.map(x => `<figure class="cs-artfig"><img src="${x.src}" alt="${x.title}" loading="lazy"><figcaption><b>${x.title}</b><span>${x.text}</span></figcaption></figure>`).join('')}</div>`;
  const sections = [];
  if (p.myRole) sections.push(['My role', `<p>${p.myRole}</p>`]);
  sections.push(['Problem', para(p.problem)]);
  if (p.research) sections.push(['Research', para(p.research) + (p.findings ? list(p.findings) : '')]);
  sections.push(['Process', list(p.process)]);
  if (p.artifacts) sections.push(['Process artifacts', art(p.artifacts), true]);
  sections.push(['Solution', list(p.solution)]);
  sections.push(['Screens', gal, true]);
  sections.push(['Impact', list(p.impact)]);
  csBody.innerHTML = `
    <div class="cs-hero">
      <div class="p-meta">${p.tag.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h1>${p.title}</h1><p class="sum">${p.summary}</p>
    </div>
    ${cover}
    <div class="cs-facts">
      <div><small>Role</small><span>${p.role}</span></div>
      <div><small>Company</small><span>${p.company}</span></div>
      <div><small>Timeline</small><span>${p.time}</span></div>
      <div><small>Platform</small><span>${p.platform}</span></div>
      ${p.tools ? `<div style="grid-column:1/-1;border-top:1px solid var(--line)"><small>Tools &amp; methods</small><span>${p.tools}</span></div>` : ''}
    </div>
    ${sections.map((s, n) => `<section class="cs-sec"><h2>${String(n + 1).padStart(2, '0')} · ${s[0]}</h2><div class="${s[2] ? 'wide' : 'txt'}">${s[1]}</div></section>`).join('')}
    <div class="cs-next"><span class="mono muted">Next case study</span><button data-open="${(i + 1) % PROJECTS.length}" data-swap="1">${next.title} →</button></div>`;
  csScroll.scrollTop = 0;
  $$('.cs-gallery figure, .cs-artfig', csBody).forEach(f => f.addEventListener('click', () => { $('img', lb).src = $('img', f).src; lb.classList.add('open'); }));
  $$('[data-swap]', csBody).forEach(b => b.addEventListener('click', () => renderCS(+b.dataset.open)));
  bindTilt(csBody);
}
function openCS(i, e) {
  renderCS(i);
  if (e) { cs.style.setProperty('--cx', e.clientX + 'px'); cs.style.setProperty('--cy', e.clientY + 'px'); }
  cs.classList.add('open'); cs.setAttribute('aria-hidden', 'false'); document.body.classList.add('locked');
  history.replaceState(null, '', '#' + PROJECTS[i].id);
}
function closeCS() {
  cs.classList.remove('open'); cs.setAttribute('aria-hidden', 'true'); document.body.classList.remove('locked');
  history.replaceState(null, '', '#work');
}
document.addEventListener('click', e => {
  const b = e.target.closest('.pcard');
  if (b && !e.target.closest('a')) openCS(+b.dataset.i, e);
});
$('#csClose').addEventListener('click', closeCS);
lb.addEventListener('click', () => lb.classList.remove('open'));
addEventListener('keydown', e => { if (e.key === 'Escape') { lb.classList.contains('open') ? lb.classList.remove('open') : closeCS(); } });
const hashIdx = PROJECTS.findIndex(p => '#' + p.id === location.hash);
if (hashIdx > -1) setTimeout(() => openCS(hashIdx), 2200);
