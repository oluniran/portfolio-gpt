export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work/laserglow", label: "Laserglow" },
  { href: "/work/alerzo", label: "Alerzo" },
  { href: "/work/landmark-africa", label: "Landmark Africa" },
];

export const contact = {
  email: "oluniran.olutimayin@gmail.com",
  phone: "437-410-5060",
  phoneHref: "tel:4374105060",
  // TODO: swap in the real LinkedIn profile URL — resume lists "LinkedIn" as a
  // hyperlink label but the plain-text extraction didn't carry the URL.
  linkedinHref: "#",
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
    "DV360",
    "Clay",
    "AirOps",
    "SA360",
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

export const achievements = [
  {
    stat: "20%",
    label: "Qualified pipeline growth",
    company: "Laserglow · 2026–present",
  },
  {
    stat: "3×",
    label: "Return on ad spend delivered",
    company: "Alerzo",
  },
  {
    stat: "10×",
    label: "Monthly GMV growth over three years",
    company: "Alerzo",
  },
  {
    stat: "40,000+",
    label: "Active retailers served monthly",
    company: "Alerzo",
  },
  {
    stat: "$2M+",
    label: "Annual revenue generated via lead-gen campaigns",
    company: "Landmark Africa",
  },
];

export const caseStudyPreviews = [
  {
    slug: "laserglow",
    href: "/work/laserglow",
    name: "Laserglow Technologies",
    swatch: "linear-gradient(90deg,#2B5672,#FF3A42)",
    teaser:
      "Leading full-funnel performance marketing for an industrial safety brand — GA4 attribution, HubSpot automation, and tradeshow demand gen across North America.",
  },
  {
    slug: "alerzo",
    href: "/work/alerzo",
    name: "Alerzo",
    swatch: "linear-gradient(90deg,#ED8F2B,#68EDFF)",
    teaser:
      "Scaled a B2B e-commerce platform for informal retailers across Nigeria — 10x GMV growth and a manufacturer growth partnership with Seven Up.",
  },
  {
    slug: "landmark-africa",
    href: "/work/landmark-africa",
    name: "Landmark Africa",
    swatch: "linear-gradient(90deg,#1E3A5F,#FF8300)",
    teaser:
      "Built the visitor-analytics and partnership-pitch engine behind one of Lagos's largest mixed-use lifestyle destinations.",
  },
];

export const about = {
  bio: "I'm a performance marketing manager based in Toronto with an MBA from Ivey Business School and over five years scaling demand generation across B2B and B2C markets in Canada, Nigeria, and the UAE. My work spans industrial safety technology, African B2B e-commerce, and hospitality/lifestyle real estate — different categories, same throughline: turn data into a growth engine and prove it with numbers.",
  education: [
    {
      school: "Ivey Business School, Western University — MBA",
      where: "London, ON · 2025",
    },
    {
      school: "Middlesex University — MA, Marketing Communications",
      where: "Dubai, UAE · 2015",
    },
    {
      school: "University of the West of England — BSc, Computing",
      where: "Bristol, UK · 2012",
    },
  ],
  certifications: [
    "Google Analytics",
    "Search Ads 360",
    "Display & Video 360",
    "Google Ads Search",
    "Google Ads Display",
  ],
};

export type CaseStudyMetric = { value: string; label: string };

export type CaseStudy = {
  brand: "laserglow" | "alerzo" | "landmark";
  name: string;
  role: string;
  dates: string;
  intro: string;
  metrics: CaseStudyMetric[];
  callout?: string;
  tactics: string[];
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
      "At Laserglow Technologies, a B2B provider of LED-based visual safety systems for industrial buyers, I lead performance marketing strategy across Google Ads, Meta, and LinkedIn — partnering with brand and content teams to grow qualified pipeline by 20% through full-funnel attribution modeling in GA4.",
    metrics: [
      { value: "20%", label: "Qualified pipeline growth" },
      { value: "83", label: "Diagnostic responses at MODEX 2026" },
      {
        value: "Caterpillar · John Deere · Toyota · UPS · GXO · Amgen · GSK · Deloitte Canada",
        label: "Named accounts engaged",
      },
    ],
    callout:
      "Buyer research from the MODEX diagnostic found that most safety leaders aren't confident hazards are consistently noticed on the floor — a finding that helped sharpen Laserglow's Smart Hazard Awareness positioning.",
    tactics: [
      "Designed and ran an interactive Hazard Awareness diagnostic at the MODEX 2026 booth — turning booth traffic into structured, first-party data instead of a static brochure",
      "Audited GA4 conversion tracking and Google Tag Manager (GTM) implementation to close attribution gaps between ad platforms and site data",
      "Built and administered HubSpot CRM infrastructure — automated lead scoring, lifecycle workflows, and nurture sequences that accelerate MQL to opportunity",
      "Structured search, Performance Max, lead-generation, and thought-leadership campaigns mapped to ICP personas across industrial verticals",
      "Led tradeshow marketing strategy across North America in material handling and logistics to build category authority",
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
      { value: "200,000+", label: "Retailers onboarded platform-wide (context)" },
    ],
    tactics: [
      "Co-authored the Seven Up and Alerzo Growth Strategy (October 2023), turning a 200,000+ retailer network and its purchase data into a growth channel for a major beverage manufacturer",
      "Designed a three-month, fully measured campaign calendar: bulk-order incentives, in-app advertising, tiered loyalty, a top-200 retailer leaderboard, and SMS/social pushes",
      "Applied RFM segmentation and cohort analysis to identify high-value customer segments and optimize assortment and basket composition",
      "Secured commercial partnerships with leading CPG manufacturers, delivering sell-through analytics that shaped partner procurement decisions and rebate structures",
      "Designed a data-monetization model: a 1% rebate for manufacturer sell-in/sell-out/inventory dashboards, plus paid API access for real-time data sync",
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
      { value: "7,787 / 2,816", label: "Cars / pedestrians counted that week" },
    ],
    tactics: [
      "Built a repeatable footfall measurement system combining pedestrian and vehicle counts (with average occupancy per car) into a weekly, location-level view of traffic",
      "Broke traffic down by asset — exhibition halls, beach, cinema, hotel, restaurants — so each could be valued on its own footfall",
      "Flagged data-quality issues transparently in reporting (e.g. an inactive counter during a power outage) to keep numbers honest for decision-makers",
      "Used that traffic evidence to support leasing, sponsorship, and advertising pitches to partners including Access Bank, Fidelity, Stanbic, and Mastercard",
      "Executed off-plan residential interest campaigns, beach activations, and retail-facing events with brand and agency teams",
    ],
    prev: { href: "/work/alerzo", label: "Alerzo" },
    next: { href: "/work/laserglow", label: "Laserglow" },
  },
};
