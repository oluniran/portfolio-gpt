export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
];

export const contact = {
  email: "oluniran.olutimayin@gmail.com",
  emailHref: "mailto:oluniran.olutimayin@gmail.com",
  phone: "437-410-5060",
  phoneHref: "tel:4374105060",
  linkedinHref: "https://www.linkedin.com/in/niranolutimayin/",
};

export const competencies = {
  platforms: [
    "GA4",
    "Google Ads",
    "LinkedIn Ads",
    "Meta Ads",
    "GTM",
    "HubSpot",
    "Tableau",
    "TikTok",
  ],
  performance: [
    "Paid Search",
    "Paid Social",
    "A/B Testing",
    "Programmatic",
    "Content Syndication",
    "UTM",
    "AEO/GEO",
    "CRO",
  ],
};

export type ServiceChip = { label: string; icon: string };
export type ServiceDiscipline = { number: string; title: string; copy: string; chips: ServiceChip[] };

export const services: ServiceDiscipline[] = [
  {
    number: "01",
    title: "Demand generation",
    copy: "Create the audience, message, and nurture programs that turn unfamiliar buyers into qualified pipeline.",
    chips: [
      { label: "Content marketing", icon: "content" },
      { label: "Case studies", icon: "case-study" },
      { label: "Webinars", icon: "webinar" },
      { label: "Paid social", icon: "paid-social" },
      { label: "Email nurture", icon: "email" },
    ],
  },
  {
    number: "02",
    title: "Demand capture",
    copy: "Build intent-led paid media that finds buyers at the moment they are ready to act.",
    chips: [
      { label: "Landing pages", icon: "landing-page" },
      { label: "Forms", icon: "form" },
      { label: "Lead scoring", icon: "lead-scoring" },
      { label: "A/B testing", icon: "ab-testing" },
      { label: "Retargeting", icon: "retargeting" },
    ],
  },
  {
    number: "03",
    title: "Revenue operations",
    copy: "Connect analytics, attribution, CRM, and automation so marketing outcomes are visible and repeatable.",
    chips: [
      { label: "CRM sync", icon: "crm" },
      { label: "Workflow automation", icon: "automation" },
      { label: "Attribution", icon: "attribution" },
      { label: "Segmentation", icon: "segmentation" },
      { label: "Reporting", icon: "reporting" },
    ],
  },
];

export type TimelineEntry = { date: string; title: string; copy: string; logo: string };

export const timeline: TimelineEntry[] = [
  { date: "2026–Present", title: "Laserglow Technologies", copy: "Performance Marketing Manager — building full-funnel systems that grew qualified pipeline by 20%.", logo: "/logos/laserglow.png" },
  { date: "2025", title: "Ivey Business School", copy: "MBA — sharpened strategic leadership and analytical decision-making.", logo: "/logos/ivey-main-full-signature.jpg" },
  { date: "2021–2025", title: "Alerzo", copy: "Commercial Lead, Growth & Campaign Strategy — grew monthly GMV 10× while serving 40,000+ retailers.", logo: "/logos/alerzo.png" },
  { date: "2018–2021", title: "Landmark Africa", copy: "Business Development Lead — generated $2M+ in annual revenue with multi-channel partner and lead-generation programs.", logo: "/logos/landmark-africa.jpg" },
];

export const caseStudyPreviews = [
  {
    slug: "laserglow",
    href: "/work/laserglow",
    name: "Laserglow Technologies",
    image: "/case-studies/laserglow/main.jpg",
    teaser:
      "Industrial OEM for hazard-awareness solutions that mitigate risk in industrial environments.",
  },
  {
    slug: "alerzo",
    href: "/work/alerzo",
    name: "Alerzo",
    image: "/case-studies/alerzo/main.jpg",
    teaser:
      "B2B e-commerce and payments company providing inclusive finance and consumer packaged goods to last-mile retailers.",
  },
  {
    slug: "landmark-africa",
    href: "/work/landmark-africa",
    name: "Landmark Africa",
    image: "/case-studies/landmark-africa/main.jpg",
    teaser:
      "Real estate development group behind the famous Landmark ecosystem — a one-stop location for business, leisure, and lifestyle amenities.",
  },
];

export const about = {
  bio: "I'm a performance marketing manager based in Toronto with an MBA from Ivey Business School and over five years scaling demand generation across B2B and B2C markets in Canada, Nigeria, and the UAE. My work spans industrial safety technology, African B2B e-commerce, and hospitality/lifestyle real estate — different categories, same throughline: turn data into a growth engine and prove it with numbers.",
  education: [
    {
      school: "Ivey Business School, Western University",
      degree: "Master of Business Administration (MBA)",
      where: "London, ON · 2025 · Richard Ivey Excellence Award",
      logo: "/logos/ivey-main-full-signature.jpg",
    },
    {
      school: "Middlesex University",
      degree: "MA, Marketing Communications",
      where: "Dubai, UAE · 2015",
      logo: "/logos/middlesex-dubai.png",
    },
    {
      school: "University of the West of England",
      degree: "BSc, Computing",
      where: "Bristol, UK · 2012",
      logo: "/logos/uwe-bristol.png",
    },
  ],
  certifications: [
    "Google Analytics",
    "Search Ads 360",
    "Display & Video 360",
    "Google Ads Search",
    "Google Ads Display",
    "Google Tag Manager",
  ],
  leadership: [
    {
      title: "LIGHT UP Initiative",
      where: "Program Lead · Alerzo × Schneider Electric · 2022–Present",
      description:
        "Delivered solar-powered lamps to 3,000 women entrepreneurs in Oyo State, Nigeria, advancing UN SDG goals on gender equality and financial inclusion.",
      images: ["/design/images/light-up-classroom.jpeg", "/design/images/light-up-group.jpeg"],
      tags: ["Program Lead", "2022–Present"],
    },
    {
      title: "Financial Inclusion Partnership",
      where: "Financial Inclusion Lead · Alerzo × Mastercard / e-Trade Alliance · 2023–Present",
      description:
        "Extended financial-inclusion tools to 10,000 MSMEs across Nigeria in partnership with Mastercard and the e-Trade Alliance.",
      images: ["/design/images/financial-inclusion-mastercard.png"],
      imageFit: "contain",
      link: "https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2024/december/mastercard-alerzo-and-e-trade-alliance-collaborate-to-drive-financial-inclusion-for-10-000-nigerian-msmes/",
      tags: ["Financial Inclusion Lead", "2023–Present"],
    },
  ],
};

export type CaseStudyMetric = { value: string; label: string };
export type ClientLogo = { name: string; src: string };
export type ExternalCaseStudy = { title: string; company: string; location?: string; href: string; image?: string };

export type CaseStudy = {
  brand: "laserglow" | "alerzo" | "landmark";
  name: string;
  role: string;
  dates: string;
  intro: string;
  metrics: CaseStudyMetric[];
  callout?: string;
  clientLogos?: ClientLogo[];
  externalCaseStudies?: ExternalCaseStudy[];
  tactics: string[];
  closingLine?: { pre: string; emphasis: string };
  prev: { href: string; label: string };
  next: { href: string; label: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  laserglow: {
    brand: "laserglow",
    name: "Laserglow Technologies",
    role: "Performance Marketing Manager · Toronto, ON",
    dates: "January 2026 – Present",
    intro:
      "At Laserglow Technologies, an industrial OEM for hazard-awareness solutions that mitigate risk in industrial environments, I lead performance marketing strategy across Google Ads, Meta, and LinkedIn — growing qualified pipeline by 20% in my first year.",
    metrics: [
      { value: "20%", label: "Qualified pipeline growth" },
      { value: "83", label: "Diagnostic responses at MODEX 2026" },
      { value: "$73", label: "Cost per Google Ads conversion, down from ~$143" },
      { value: "391", label: "Google Ads conversions, +67% QoQ" },
      { value: "100%", label: "QoQ LinkedIn lead-volume growth (76 leads)" },
      { value: "$200K+", label: "Quotes raised from LinkedIn-sourced leads" },
    ],
    callout:
      "Laserglow's strategy names the pillar plainly: proof points, not promises — earned through deployment scale and solutions tailored by facility, not off-the-shelf SKUs. I ran every channel on that same standard, rebuilding attribution so results are demonstrable and turning a trade-show diagnostic into structured first-party data.",
    clientLogos: [
      { name: "John Deere", src: "/logos/clients/john-deere.jpg" },
      { name: "UPS", src: "/logos/clients/ups.svg" },
      { name: "GXO", src: "/logos/clients/gxo.svg" },
      { name: "Amgen", src: "/logos/clients/amgen.svg" },
      { name: "GSK", src: "/logos/clients/gsk.png" },
      { name: "Deloitte Canada", src: "/logos/clients/deloitte.svg" },
    ],
    tactics: [
      "Audited GA4 conversion tracking and Google Tag Manager (GTM) implementation to close attribution gaps between ad platforms and site data",
      "Built and administered HubSpot CRM infrastructure — automated lead scoring, lifecycle workflows, and nurture sequences that accelerate MQL to opportunity",
      "Structured search, Performance Max, lead-generation, and thought-leadership campaigns mapped to ICP personas across industrial verticals",
      "Built reusable AI-assisted creative workflows — prompt systems and content variants — to speed up campaign asset production across search, social, and tradeshow materials without losing message consistency",
      "Built demand generation beyond paid ads — webinars, podcasts, and automated email nurture sequences that support movement from MQL to opportunity",
      "Sharpened category positioning — translating MODEX diagnostic findings into a specific, buyer-tension-led narrative around Smart Hazard Awareness instead of generic industrial-safety messaging",
      "Led tradeshow marketing strategy across North America in material handling and logistics to build category authority",
      "Designed and ran an interactive Hazard Awareness diagnostic at the MODEX 2026 booth — turning booth traffic into structured, first-party data instead of a static brochure",
      "Partnered cross-functionally with brand, content, and sales-facing teams to connect the campaign plan to the commercial outcome",
    ],
    closingLine: { pre: "The goal isn't more campaigns. The goal is marketing that ", emphasis: "compounds." },
    externalCaseStudies: [
      { title: "Virtual Walkways and Projected Signage", company: "Corning", location: "Harrodsburg, KY", href: "https://www.laserglow.com/post/virtual-walkways-and-projected-signage-a-case-study-in-visual-warehouse-hazard-management", image: "/design/images/case-study-placeholder.png" },
      { title: "Virtual Safety Zones", company: "Veoneer", location: "Markham, ON", href: "https://www.laserglow.com/post/virtual-safety-zones-a-case-study-in-visual-hazard-awareness-management", image: "/design/images/case-study-placeholder.png" },
      { title: "Improving Warehouse Safety with Laserglow Safety Solutions", company: "Gordon Food Service", location: "Michigan", href: "https://www.laserglow.com/post/improving-warehouse-safety-with-laserglow-safety-solutions-at-gfs", image: "/design/images/case-study-placeholder.png" },
    ],
    prev: { href: "/work/landmark-africa", label: "Landmark Africa" },
    next: { href: "/work/alerzo", label: "Alerzo" },
  },
  alerzo: {
    brand: "alerzo",
    name: "Alerzo",
    role: "Commercial Lead – Growth and Campaign Strategy",
    dates: "March 2021 – December 2025",
    intro:
      "At Alerzo, a B2B e-commerce and fintech platform for informal retailers across Nigeria, I led commercial growth strategy across the AlerzoShop platform — driving monthly Gross Merchandise Value (GMV) 10x over three years while serving 40,000+ active retailers monthly.",
    metrics: [
      { value: "3×", label: "ROAS delivered" },
      { value: "10×", label: "Monthly GMV growth, 3 years" },
      { value: "40,000+", label: "Active retailers / month" },
      { value: "$100+", label: "Average order value" },
      { value: "$6M+", label: "Deposits unlocked via fintech/MFB partners" },
      { value: "7,000+", label: "Smart POS terminals deployed ($17M+ monthly txn volume)" },
    ],
    callout:
      "Growth compounds when the product mix, the promotion, and the retailer's next order all point in the same direction.",
    tactics: [
      "Co-authored the Seven Up and Alerzo Growth Strategy (October 2023), turning a 200,000+ retailer network and its purchase data into a growth channel for a major beverage manufacturer",
      "Designed a three-month, fully measured campaign calendar: bulk-order incentives, in-app advertising, tiered loyalty, a top-200 retailer leaderboard, and SMS/social pushes",
      "Applied RFM segmentation and cohort analysis to identify high-value customer segments and optimize assortment and basket composition — lifting repeat-purchase rate by 24% and average basket volumes by 30%",
      "Secured commercial partnerships with leading CPG manufacturers — including Flour Mills and UAC Foods via a Zeebly ERP integration — delivering sell-through analytics that shaped partner procurement decisions, assortment, pricing, and promotion, and rebate structures",
      "Designed a data-monetization model: a 1% rebate for manufacturer sell-in/sell-out/inventory dashboards, plus paid API access for real-time data sync",
      "Ran a full-funnel regional activation campaign that generated $1.3M+ in sales within 12 days (7% above forecast) and 5,000+ incremental orders",
      "Drove 18% YoY category growth across pasta, flour, noodles, and agro-allied SKUs through data-informed category planning",
      "Led AlerzoShop GTM and customer-journey mapping, using workflow automation and digital campaigns to expand personalized retailer outreach and onboarding",
      "Built a revenue-optimized inventory mix model that contributed to a 15% reduction in stockouts and over 15% lower excess inventory on key lines",
    ],
    prev: { href: "/work/laserglow", label: "Laserglow" },
    next: { href: "/work/landmark-africa", label: "Landmark Africa" },
  },
  "landmark-africa": {
    brand: "landmark",
    name: "Landmark Africa",
    role: "Business Development Lead",
    dates: "April 2018 – February 2021",
    intro:
      "At Landmark Africa, a mixed-use retail, leisure, and hospitality destination in Lagos, I designed and executed multi-channel lead-generation campaigns that attracted anchor tenants and retail partners, generating $2M+ in annual revenue.",
    metrics: [
      { value: "$2M+", label: "Annual revenue generated" },
      { value: "96,260", label: "Weekly visitors, Landmark Village (w/o Dec 13, 2020)" },
      { value: "102,149", label: "Weekly visitors, full ecosystem" },
      { value: "7,787", label: "Cars counted that week" },
      { value: "2,816", label: "Pedestrians counted that week" },
      { value: "86%", label: "Average occupancy across the retail boulevard" },
    ],
    callout:
      "The most valuable destination is one where every new tenant makes the next visit — and the next deal — more compelling.",
    clientLogos: [
      { name: "PwC", src: "/logos/clients/pwc.png" },
      { name: "Hard Rock Café", src: "/logos/clients/hard-rock-cafe.webp" },
      { name: "Novartis", src: "/logos/clients/novartis.png" },
      { name: "Shiro", src: "/logos/clients/shiro.jpg" },
      { name: "UMG", src: "/logos/clients/umg.png" },
      { name: "CrossBoundary", src: "/logos/clients/crossboundary.jpeg" },
      { name: "Spur Steak Ranches", src: "/logos/clients/spur.png" },
    ],
    tactics: [
      "Built a repeatable footfall measurement system combining pedestrian and vehicle counts (with average occupancy per car) into a weekly, location-level view of traffic",
      "Broke traffic down by asset — exhibition halls, beach, cinema, hotel, restaurants — so each could be valued on its own footfall",
      "Flagged data-quality issues transparently in reporting (e.g. an inactive counter during a power outage) to keep numbers honest for decision-makers",
      "Used that traffic evidence to support leasing, sponsorship, and advertising pitches to partners including Access Bank, Fidelity, Stanbic, and Mastercard",
      "Ran full-funnel digital acquisition campaigns (Google Search, Facebook Lead Ads, Instagram Stories) for Landmark Waterview Apartments, using MEDDPICC-based lead qualification and buyer personas to convert high-net-worth buyer interest into a multi-million-dollar pre-sales pipeline",
      "Secured anchor tenants across commercial, F&B, and QSR categories — including PwC, Johnson & Johnson, KFC, and Hard Rock Café — contributing to 86% average occupancy",
      "Grew weekly destination footfall 3.6× (55,000 to 200,000) through inbound marketing, brand activations, and an experience-led content strategy",
      "Used sales-based lease agreements to align tenant success with property performance, lifting rental margins by 10%",
    ],
    prev: { href: "/work/alerzo", label: "Alerzo" },
    next: { href: "/work/laserglow", label: "Laserglow" },
  },
};
