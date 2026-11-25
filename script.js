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
    cover: { src: 'ids-leads.webp', type: 'browser' },
    float: 'ids-tasks.webp',
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
      ['ids-leads.webp', 'Sales CRM — Leads'],
      ['ids-tasks.webp', 'Service CRM — Tasks'],
      ['ids-2.webp', 'Module view'],
      ['ids-4.webp', 'Module view'],
      ['ids-design-system.webp', 'Design system — filter bar states'],
      ['ids-palette.png', 'Colour palette']
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
    cover: { src: 'ro-3.png', type: 'browser' },
    float: 'ro-2.png',
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
      ['ro-3.png', 'Expanded view — job states'],
      ['ro-2.png', 'Login'],
      ['ro-1.png', 'Shop workflow']
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
    cover: { src: 'job-1.png', type: 'browser' },
    float: 'job-3.png',
    heroImg: 'geekseek-hero.png',
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
      { src: 'geekseek-process.png', title: 'Design process', text: 'The five-stage loop that guided the work, from empathising with recruiters to testing the prototype.' },
      { src: 'geekseek-pains.png', title: 'Pain points and goals', text: 'Research findings translated into goals the design had to meet.' }
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
      ['job-1.png', 'Employer dashboard'],
      ['job-3.png', 'Candidate profile'],
      ['job-2.png', 'Flow'],
      ['job-4.png', 'Flow']
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
    cover: { type: 'phones', srcs: ['swipee-1.png', 'swipee-2.png', 'swipee-3.png'] },
    gallery: [
      ['swipee-1.png', 'Splash'],
      ['swipee-2.png', 'Video product feed'],
      ['swipee-3.png', 'Flow']
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
      { src: 'swipee-user-process.png', title: 'Shopper app: design process', text: 'Empathize, Define, Ideate, Prototype and Understand, with what was done in each stage.' },
      { src: 'swipee-user-research.png', title: 'Shopper app: research and pain points', text: 'Four research methods and the four pain points they surfaced.' },
      { src: 'swipee-user-persona.png', title: 'Shopper persona: Sarah', text: 'A busy parent who wants reliable quality and a more confident way to shop online.' },
      { src: 'swipee-user-audit.png', title: 'Competitive audit', text: 'Swipee compared with four local shopping platforms on video, reviews, QA process, ratings and recommendations.' },
      { src: 'swipee-user-flow.png', title: 'Shopper information architecture and user flow', text: 'From sign-in or skip to home video feed, search, store details, product details and settings.' },
      { src: 'swipee-user-sketches.png', title: 'Low-fidelity sketches', text: 'Hand-drawn wireframes for sign-up, verification, password reset, video feed, categories, listings and product details.' },
      { src: 'swipee-user-usability.png', title: 'Usability testing: before and after', text: 'Findings from testing reshaped the profile and settings screens and the verification step.' },
      { src: 'swipee-user-style.png', title: 'Style guide', text: 'Colour palette, typefaces and type scale used across the app.' },
      { src: 'swipee-vendor-process.png', title: 'Vendor app: design process', text: 'User research, ideation and sketches, prototyping and usability testing.' },
      { src: 'swipee-vendor-personas.png', title: 'Vendor personas', text: 'Two small-business owners: their goals, frustrations, values and motivation.' },
      { src: 'swipee-vendor-flow.png', title: 'Vendor user flow and information architecture', text: 'From sign-in to dashboard, orders, store, management and settings.' }
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
    cover: { src: 'sonderblu-plans.jpg', type: 'browser' },
    float: 'sonderblu-genres.jpg',
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
      ['sonderblu-plans.jpg', 'Choose your plan'],
      ['sonderblu-genres.jpg', 'Genre onboarding'],
      ['sonderblu-subaccounts.jpg', 'Settings — sub-account invitations']
    ]
  }
];


/* ============================================================
   BRANDING & MARKETING WORK  (cat: 'branding')
   Shown when the "Branding" toggle is selected.
   Images live in /branding (served as branding/…).
   ============================================================ */
const bi = n => 'branding/' + n + '.webp';
const BRANDING = [
  {
    id: 'premier', cat: 'branding', cta: 'View project',
    title: 'Premier CS Campaign',
    tag: ['Sales one-pager', 'LinkedIn ad', 'Email', 'Landing page', 'Team merch'],
    summary: 'A concept campaign and brand kit for a construction ERP: a CFO-targeted sales one-pager, LinkedIn ad, outbound email and landing page that carry one idea — know your job costs before your accountant does — plus printable team merch, from tees and hard hats to a desk-model excavator.',
    glow: 'rgba(84,0,233,.34)',
    role: 'Brand & Marketing Designer', company: 'Concept for Premier Construction Software', platform: 'Print / PDF · LinkedIn · Email · Web · Merch',
    tools: 'Adobe Illustrator · Figma',
    cover: { src: bi('premier-landing'), type: 'browser' },
    float: bi('premier-linkedin'),
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'Construction finance buyers (CFOs and controllers at 50–300 person contractors) are tired of feature lists. They respond to a specific, costly problem: WIP reports that arrive two weeks late and margin that leaks through change orders.',
      'The exercise: design a sales one-pager and a matching marketing campaign using Premier’s real logo, violet-and-black palette and Outfit typeface, so every asset feels like it came from the same team.'
    ],
    process: [
      'Started from the buyer and funnel stage (consideration to decision), not from the product feature list.',
      'Led every asset with the problem, then what Premier does about it, then one clear action: book a demo.',
      'Built the campaign as a system: the same headline idea adapted to a print one-pager, a 1200×628 LinkedIn ad, an outbound email and a landing page with a short form.',
      'Used Premier’s own brand system throughout: the cloud logo, electric violet, black and soft lavender, with the Outfit typeface and a bold black hero panel on every format.'
    ],
    solution: [
      'A one-page sales sheet: pain points, four capabilities and a demo CTA, designed to work both as a PDF and in print.',
      'A LinkedIn ad with a single headline question and a violet CTA on a black field with the brand’s purple glow.',
      'An outbound email and a landing page that repeat the same promise so the journey never resets.',
      'An internal merch kit for the team: tees, a cap, a hard hat, mug, tote, notebook, lanyard and ID, stickers, and an excavator desk model in Premier’s violet and black, the kind of collectible a product team keeps on the desk to mark a milestone.'
    ],
    impact: [
      'Shows strategy and execution together: audience, message hierarchy and CTA design across print and digital, extended into physical brand pieces.',
      'Built as an unsolicited design exercise from public brand material, so treat it as a concept rather than shipped client work.'
    ],
    groups: [
      ['Sales one-pager', 'one', [[bi('premier-onepager'), 'Sales one-pager: CFO / Controller']]],
      ['Marketing campaign', 'two', [[bi('premier-linkedin'), 'LinkedIn ad, 1200×628'], [bi('premier-email'), 'Outbound email']]],
      ['Landing page', 'one', [[bi('premier-landing'), 'Campaign landing page with demo form']]],
      ['Team merch & desk prototype', 'one', [[bi('premier-merch-apparel'), 'Team apparel: white, black and violet tees, cap, hard hat'], [bi('premier-merch-everyday'), 'Mug, tote, notebook, lanyard & ID, stickers'], [bi('premier-merch-toy'), 'Prototype 01: excavator desk model and packaging concept']]]
    ]
  },
  {
    id: 'superpatch', cat: 'branding', cta: 'View project',
    title: 'SuperPatch Challenge',
    tag: ['Email campaign', 'Social media', 'Landing page'],
    summary: 'A full launch system for a 30-day fitness challenge: a 12-email journey, Instagram posts and stories, and a landing page in desktop and mobile layouts, all in one bold black-and-white look.',
    glow: 'rgba(40,40,40,.28)',
    role: 'Brand & Marketing Designer', company: 'The Super Patch Company', time: 'Aug – Sep 2025', platform: 'Email · Instagram · Web',
    tools: 'Adobe Illustrator · Figma',
    cover: { type: 'phones', srcs: [bi('sp-post-final'), bi('sp-story-register'), bi('sp-post-week1')] },
    coverBg: 'radial-gradient(circle at 50% 0,#3b3b3b,#0b0b0b)',
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'A free 30-day squats and sit-ups challenge needed to fill registrations before launch and keep people taking part for a month, with prizes as the hook.',
      'Every touchpoint had to feel like the same campaign: the email, the social posts and stories, and the sign-up page.'
    ],
    process: [
      'Mapped the campaign timeline: teaser, announcement and sign-up, week-one check-in, share-your-progress and final-week countdown.',
      'Built one visual system around the challenge badge, full-bleed fitness photography and large condensed headlines.',
      'Designed the emails as a series so each one carries a single message and one button.'
    ],
    solution: [
      'A 12-email journey plus a registration confirmation, from “Something fun is coming” to “The finish line is in sight”.',
      'Instagram feed posts and stories for the announcement, three-step sign-up, prizes, one week to go and the final countdown.',
      'A long-form landing page with prizes, training tiers, a progress tracker and a sign-up form, with a matching mobile layout.'
    ],
    impact: [
      'Shows campaign thinking across channels: pacing, consistency and a clear call to action in every format.',
      'Strong example of email, social and web design working as one system.'
    ],
    groups: [
      ['Landing page, desktop', 'one', [[bi('sp-landing-1'), 'Hero and challenge overview'], [bi('sp-landing-2'), 'Prizes and how to win'], [bi('sp-landing-3'), 'Training tiers, tracker and hashtag']]],
      ['Landing page, mobile', 'm3', [[bi('sp-mobile-1'), 'Mobile layout, top'], [bi('sp-mobile-2'), 'Mobile layout, prizes']]],
      ['Email journey', 'm3', [[bi('sp-email-01'), 'Teaser'], [bi('sp-email-02'), 'Registration open'], [bi('sp-email-reg'), 'Registration confirmed'], [bi('sp-email-03'), 'Launch day'], [bi('sp-email-05'), 'Week 1 complete'], [bi('sp-email-09'), 'Final week']]],
      ['Instagram posts and stories', 'm3', [[bi('sp-post-teaser'), 'Teaser post'], [bi('sp-post-1'), 'Announcement'], [bi('sp-post-2'), 'Three simple steps'], [bi('sp-post-week1'), 'One week to go'], [bi('sp-post-share'), 'Share your progress'], [bi('sp-post-final'), 'Final week countdown'], [bi('sp-story-register'), 'Story: register'], [bi('sp-story-prize'), 'Story: grand prize']]]
    ]
  },
  {
    id: 'pitchdecks', cat: 'branding', cta: 'View project',
    title: 'Investor & Pitch Decks',
    tag: ['Pitch decks', 'Investor materials', 'Presentation design'],
    summary: 'Pitch and investor decks for four different businesses (real estate, livestock, a community app and vehicle imports), each turning dense numbers into a story an investor can follow.',
    glow: 'rgba(249,115,22,.30)',
    role: 'Presentation & Brand Designer', company: 'Client pitches', platform: 'PDF decks · HTML pitch',
    cover: { src: bi('turkey-3'), type: 'browser' },
    float: bi('bookofh-1'),
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'Founders and developers had solid numbers but no clear way to present them: costs, margins, timelines and returns spread across spreadsheets and notes.',
      'Each pitch had to feel credible to an investor and also match the brand of the business it represented.'
    ],
    process: [
      'Opened each deck with the offer in one line, then the market, the numbers, the advantage and the ask.',
      'Used one strong visual idea per business: an executive summary with a hero image for real estate, a monochrome bold look for livestock, a vivid orange system for the app.',
      'Kept financial slides scannable: totals, margins and returns surfaced first, detail underneath.'
    ],
    solution: [
      'A property investment deck (executive summary, vision, financial breakdown, unique selling point, investor benefits).',
      'A livestock ventures pitch with local context, cost structure, land sites and an executive summary.',
      'A product MVP deck for a collectors’ community app, and an investor pitch page for a vehicle import business covering market, supply chain, unit economics and projections.'
    ],
    impact: [
      'Shows the sales-pitch skill set: structure, hierarchy and design that make a business case easy to say yes to.',
      'Range across four industries and four visual identities.'
    ],
    groups: [
      ['Property investment deck', 'two', [[bi('turkey-1'), 'Cover'], [bi('turkey-3'), 'Executive summary'], [bi('turkey-4'), 'Project vision'], [bi('turkey-5'), 'Financial breakdown'], [bi('turkey-6'), 'Unique selling point'], [bi('turkey-8'), 'Market opportunity'], [bi('turkey-9'), 'Investor benefits']]],
      ['Livestock ventures pitch', 'two', [[bi('livestock-1'), 'Cover'], [bi('livestock-3'), 'Local context'], [bi('livestock-4'), 'Investment cost structure'], [bi('livestock-7'), 'Land sites'], [bi('livestock-8'), 'Executive summary'], [bi('livestock-10'), 'Returns']]],
      ['Community app MVP deck', 'two', [[bi('bookofh-1'), 'Cover'], [bi('bookofh-2'), 'About the project'], [bi('bookofh-3'), 'Community and discussions'], [bi('bookofh-4'), 'Shelves'], [bi('bookofh-5'), 'Reputation system'], [bi('bookofh-8'), 'Admin console']]],
      ['Vehicle import investor pitch', 'one', [[bi('ampitch-1'), 'Market snapshot and demand'], [bi('ampitch-2'), 'Supply chain and policy'], [bi('ampitch-3'), 'Revenue model and unit economics']]]
    ]
  },
  {
    id: 'truckscribe', cat: 'branding', cta: 'View project',
    title: 'TruckScribe Ads',
    tag: ['Paid social', 'Motion ad', 'SaaS marketing'],
    summary: 'A four-slide, ten-second ad pack for a carrier-vetting product: one message per slide, built to stop a thumb on a square social feed and end on a free-trial CTA.',
    glow: 'rgba(30,80,200,.34)',
    role: 'Brand & Marketing Designer', company: 'TruckScribe', platform: 'Social ads · 1080×1080',
    tools: 'Adobe Illustrator · Figma',
    cover: { type: 'tiles', ratio: '1/1', srcs: [bi('ts-slide1'), bi('ts-slide2'), bi('ts-slide3'), bi('ts-slide4')] },
    coverBg: 'radial-gradient(circle at 50% 0,#1d4ed8,#0a1230)',
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'Freight brokers and dispatchers scroll fast. The product’s value (find and verify carriers, spot new authorities, vet instantly) needed to be understood in a few seconds.'
    ],
    process: [
      'One idea per slide: find and verify, new authority leads, instant vetting, free trial.',
      'Large numbers and a real product UI snippet on each slide as proof, instead of generic stock imagery.',
      'Built to run as four static slides or as a single ten-second animated ad.'
    ],
    solution: [
      'A consistent blue brand system with a bold headline, one hero visual and one takeaway per slide.',
      'A closing slide with a single CTA: start a 14-day free trial.'
    ],
    impact: [
      'Shows performance-style creative: tight messaging, clear hierarchy and a CTA built into the sequence.'
    ],
    groups: [
      ['10-second animated ad', 'one', [['branding/truckscribe-ad.gif', 'Animated ad, 1080×1080']]],
      ['Static slides', 'two', [[bi('ts-slide1'), 'Find and verify'], [bi('ts-slide2'), 'New FMCSA authority'], [bi('ts-slide3'), 'Instant carrier vetting'], [bi('ts-slide4'), 'Free trial']]]
    ]
  },
  {
    id: 'jam', cat: 'branding', cta: 'View project',
    title: 'JAM Management',
    tag: ['Social media', 'Recruitment brand', 'Carousel design'],
    summary: 'A social media kit for an IT and telecom recruitment consultancy: culture carousels to attract candidates and a four-step approach series to win clients, all in one red, black and white identity.',
    glow: 'rgba(225,30,40,.32)',
    role: 'Brand & Social Designer', company: 'JAM Management', platform: 'LinkedIn · Instagram · 1080×1350',
    tools: 'Adobe Illustrator · Figma',
    cover: { type: 'tiles', ratio: '1/1', srcs: [bi('jam-134'), bi('jam-136'), bi('jam-144'), bi('jam-146')] },
    coverBg: 'radial-gradient(circle at 50% 0,#b3141c,#1a0507)',
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'A recruitment firm needs to speak to two audiences at once: candidates deciding where to work, and companies deciding who to hire through.',
      'Posts had to look professional and recognisable in a crowded feed.'
    ],
    process: [
      'Created a flexible layout: a curved red shape, a photo window and a highlighted key phrase that can be reused for any message.',
      'Split content into series so the feed tells a story: “be empowered, be included, be valued, be heard” for talent, and “our approach is simple” for clients.',
      'Used a consistent illustration style for the process posts.'
    ],
    solution: [
      'Culture carousel posts built around a highlighted headline and a team photo.',
      'A four-step approach series with large numerals and flat vector illustrations.',
      'Service posts for telecom consulting and IT strategy.'
    ],
    impact: [
      'Shows a repeatable social system rather than one-off posts: fast to extend, easy to recognise.'
    ],
    groups: [
      ['For candidates: culture series', 'm3', [107,134,135,136,137,138,139].map((n, k) => [bi('jam-' + n), 'Culture post ' + (k + 1)])],
      ['For clients: our approach', 'm3', [144,145,146,147].map((n, k) => [bi('jam-' + n), 'Approach step ' + (k + 1)])],
      ['Services', 'm3', [[bi('jam-104'), 'Develop your team'], [bi('jam-108'), 'Consulting process'], [bi('jam-98'), 'IT strategy']]]
    ]
  },
  {
    id: 'digitalfello', cat: 'branding', cta: 'View project',
    title: 'DigitalFello Social',
    tag: ['Social media', 'Infographics', 'Agency brand'],
    summary: 'Social posts for a software agency: a custom-software services explainer and a “Do you know?” series that turns developer survey data into bite-sized, branded infographics.',
    glow: 'rgba(110,60,220,.36)',
    role: 'Brand & Social Designer', company: 'DigitalFello', platform: 'LinkedIn · Instagram · 1080×1400',
    tools: 'Adobe Illustrator · Figma',
    cover: { type: 'tiles', ratio: '1080/1400', srcs: [bi('df-159'), bi('df-60'), bi('df-61'), bi('df-64')] },
    coverBg: 'radial-gradient(circle at 50% 0,#5b2bb8,#14082c)',
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'A software agency needs to look credible and approachable online, and explain what it builds without a wall of text.'
    ],
    process: [
      'Turned one big message per post into a single visual: a numbered services path, a ring chart, a pyramid and a pie chart.',
      'Used orange highlights on a deep purple field so the key number is the first thing read.'
    ],
    solution: [
      'A “What can you develop with custom software?” explainer with eight numbered services.',
      'A “Do you know?” series with database, cloud and framework statistics rendered as custom charts.'
    ],
    impact: [
      'Shows data storytelling and brand consistency for a B2B tech audience.'
    ],
    groups: [
      ['Social series', 'm3', [[bi('df-159'), 'Services explainer'], [bi('df-60'), 'Do you know? Databases'], [bi('df-61'), 'Do you know? Cloud'], [bi('df-64'), 'Do you know? Frameworks']]]
    ]
  },
  {
    id: 'collateral', cat: 'branding', cta: 'View project',
    title: 'Brochures & Print',
    tag: ['Print design', 'Brochures', 'Company profile'],
    summary: 'Print-ready collateral: a tri-fold for a Dubai delivery company, a hostel flyer for student accommodation and a three-page company profile for a medical supply distributor.',
    glow: 'rgba(30,160,120,.30)',
    role: 'Print & Brand Designer', company: 'Client collateral', platform: 'Print / PDF',
    tools: 'Adobe Illustrator · Figma',
    cover: { src: bi('dubai-1'), type: 'browser' },
    float: bi('vital-1'),
    labels: { problem: 'The brief', process: 'Approach', solution: 'What I made', impact: 'What this shows' },
    problem: [
      'Small and mid-sized businesses need a printed or PDF piece that a salesperson can hand over to explain who they are, what they offer and how to get in touch.'
    ],
    process: [
      'Led each piece with the single most useful thing for that reader: services for the delivery company, facilities and a phone number for the hostel, credentials and partners for the distributor.',
      'Kept the layouts clean with strong colour blocking and clear contact points.'
    ],
    solution: [
      'A tri-fold brochure with bold red and navy colour blocks, services, vision and a QR code to get in touch.',
      'A single-page flyer with facilities and a booking call to action.',
      'A three-page company profile covering mission, partners, product ranges and market focus.'
    ],
    impact: [
      'Shows the sell-sheet and brochure skill set directly: information hierarchy for print, with a clear next step.'
    ],
    groups: [
      ['Tri-fold brochure', 'one', [[bi('dubai-1'), 'Outside'], [bi('dubai-2'), 'Inside']]],
      ['Flyer', 'one', [[bi('hostel-1'), 'Hostel flyer, A4']]],
      ['Company profile', 'm3', [[bi('vital-1'), 'Page 1'], [bi('vital-2'), 'Page 2'], [bi('vital-3'), 'Page 3']]]
    ]
  }
];
PROJECTS.push(...BRANDING);

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
  $$('.tilt, .frame, .phone, .tile', root).forEach(el => {
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
  if (c.type === 'tiles') {
    return `<div class="tiles" style="--ar:${c.ratio || '1/1'}">${c.srcs.map(s => `<div class="tile"><img src="${s}" alt="${p.title} design" loading="lazy"></div>`).join('')}</div>`;
  }
  if (c.type === 'phones') {
    return `<div class="phones">${c.srcs.map(s => `<div class="phone"><img src="${s}" alt="${p.title} screen" loading="lazy"></div>`).join('')}</div>`;
  }
  return `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="view"><img src="${c.src}" alt="${p.title} screen" loading="lazy"></div></div>` +
    (p.float ? `<div class="float a"><img src="${p.float}" alt="" loading="lazy"></div>` : '');
}
const stacks = { ux: $('#stack'), branding: $('#stackBranding') };
const catCount = { ux: 0, branding: 0 };
PROJECTS.forEach((p, i) => {
  const cat = p.cat || 'ux', n = catCount[cat]++;
  const el = document.createElement('article');
  el.className = 'pcard reveal'; el.style.top = (90 + n * 16) + 'px'; el.style.setProperty('--glow', p.glow);
  el.dataset.i = i;
  el.innerHTML = `
    <div class="p-copy">
      <div class="p-meta">${p.tag.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h3>${p.title}</h3>
      <p class="p-sum">${p.summary}</p>
      ${p.kpis && p.kpis.length ? `<div class="p-kpis">${p.kpis.map(k => `<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>` : ''}
      <button class="btn btn-lime magnetic open-hint" data-open="${i}">${p.cta || 'Read case study'}
        <span class="arrow"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6l6 6-6 6"/></svg></span>
      </button>
    </div>
    <div class="p-shot">${shotHTML(p)}</div>`;
  stacks[cat].appendChild(el);
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
  const p = PROJECTS[i], cat = p.cat || 'ux';
  const same = PROJECTS.map((q, k) => k).filter(k => (PROJECTS[k].cat || 'ux') === cat);
  const nextI = same[(same.indexOf(i) + 1) % same.length], next = PROJECTS[nextI];
  const L = Object.assign({ problem: 'Problem', process: 'Process', solution: 'Solution', impact: 'Impact', screens: 'Screens' }, p.labels || {});
  const list = a => `<ul>${a.map(x => `<li>${x.startsWith('ADD') ? `<span class="note" style="display:block;margin:0">${x}</span>` : x}</li>`).join('')}</ul>`;
  const para = a => a.map(x => `<p>${x}</p>`).join('');
  const phone = p.phones;
  const ct = p.cover.type;
  const bg = p.coverBg ? ` style="background:${p.coverBg}"` : '';
  const cover = ct === 'phones'
    ? `<div class="cs-cover phones-bg"${bg}><div class="phones">${p.cover.srcs.map(s => `<div class="phone"><img src="${s}" alt=""></div>`).join('')}</div></div>`
    : ct === 'tiles'
    ? `<div class="cs-cover tiles-bg"${bg}><div class="tiles big" style="--ar:${p.cover.ratio || '1/1'}">${p.cover.srcs.map(s => `<div class="tile"><img src="${s}" alt=""></div>`).join('')}</div></div>`
    : `<div class="cs-cover"><img src="${p.heroImg || p.cover.src}" alt="${p.title}"></div>`;
  const fig = (g, dk) => `<figure class="${dk ? 'dk' : ''}"><img src="${g[0]}" alt="${g[1]}" loading="lazy"><figcaption>${g[1]}</figcaption></figure>`;
  const gal = p.groups
    ? p.groups.map(g => `<h3 class="cs-gh">${g[0]}</h3><div class="cs-gallery ${g[1]}">${g[2].map(x => fig(x)).join('')}</div>`).join('')
    : `<div class="cs-gallery ${phone ? 'phone-row' : ''}">${p.gallery.map(g => fig(g, phone)).join('')}</div>`;
  const art = a => `<div class="cs-art">${a.map(x => `<figure class="cs-artfig"><img src="${x.src}" alt="${x.title}" loading="lazy"><figcaption><b>${x.title}</b><span>${x.text}</span></figcaption></figure>`).join('')}</div>`;
  const sections = [];
  if (p.myRole) sections.push(['My role', `<p>${p.myRole}</p>`]);
  sections.push([L.problem, para(p.problem)]);
  if (p.research) sections.push(['Research', para(p.research) + (p.findings ? list(p.findings) : '')]);
  sections.push([L.process, list(p.process)]);
  if (p.artifacts) sections.push(['Process artifacts', art(p.artifacts), true]);
  sections.push([L.solution, list(p.solution)]);
  sections.push([L.screens, gal, true]);
  sections.push([L.impact, list(p.impact)]);
  const facts = [['Role', p.role], ['Company', p.company], ['Timeline', p.time], ['Platform', p.platform]].filter(f => f[1]);
  csBody.innerHTML = `
    <div class="cs-hero">
      <div class="p-meta">${p.tag.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h1>${p.title}</h1><p class="sum">${p.summary}</p>
    </div>
    ${cover}
    <div class="cs-facts f${facts.length}">
      ${facts.map(f => `<div><small>${f[0]}</small><span>${f[1]}</span></div>`).join('')}
      ${p.tools ? `<div style="grid-column:1/-1;border-top:1px solid var(--line)"><small>Tools &amp; methods</small><span>${p.tools}</span></div>` : ''}
    </div>
    ${sections.map((s, n) => `<section class="cs-sec"><h2>${String(n + 1).padStart(2, '0')} · ${s[0]}</h2><div class="${s[2] ? 'wide' : 'txt'}">${s[1]}</div></section>`).join('')}
    <div class="cs-next"><span class="mono muted">${cat === 'branding' ? 'Next project' : 'Next case study'}</span><button data-open="${nextI}" data-swap="1">${next.title} →</button></div>`;
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

/* ============================================================
   UX / Branding category toggle
   ============================================================ */
function setCategory(cat) {
  $$('.seg-btn').forEach(b => { const on = b.dataset.cat === cat; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
  $$('[data-pane]').forEach(el => {
    const show = el.dataset.pane === cat;
    if (show && el.hidden) { el.hidden = false; el.classList.remove('pane-in'); void el.offsetWidth; el.classList.add('pane-in'); }
    else if (!show) el.hidden = true;
  });
  observeReveals(); bindTilt();
}
$$('.seg-btn').forEach(b => b.addEventListener('click', () => setCategory(b.dataset.cat)));
$$('a[href="#branding"]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault(); setCategory('branding'); $('#work').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  history.replaceState(null, '', '#branding');
}));
setCategory('ux');

const hashIdx = PROJECTS.findIndex(p => '#' + p.id === location.hash);
if (hashIdx > -1) { setCategory(PROJECTS[hashIdx].cat || 'ux'); setTimeout(() => openCS(hashIdx), 2200); }
else if (location.hash === '#branding') { setCategory('branding'); setTimeout(() => $('#work').scrollIntoView(), 2300); }
