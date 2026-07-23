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
      { label: "Video", icon: "video" },
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
      { label: "Surveys", icon: "survey" },
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
      { label: "AI automations", icon: "ai-chip" },
    ],
  },
];

export type TimelineEntry = { date: string; title: string; copy: string; logo: string };

export const timeline: TimelineEntry[] = [
  { date: "2026–Present", title: "Laserglow Technologies", copy: "Performance Marketing Manager.", logo: "/logos/laserglow.png" },
  { date: "2021–2025", title: "Alerzo", copy: "Commercial Lead, Growth & Campaign Strategy.", logo: "/logos/alerzo-2.avif" },
  { date: "2018–2021", title: "Landmark Africa", copy: "Business Development Lead.", logo: "/logos/landmark-africa.jpg" },
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
      where: "Program Lead · Alerzo × Schneider Electric · 2022–2025",
      description:
        "Delivered solar-powered lamps to 3,000 women entrepreneurs in Oyo State, Nigeria, advancing UN SDG goals on gender equality and financial inclusion.",
      images: ["/design/images/light-up-classroom.jpeg", "/design/images/light-up-group.jpeg", "/design/images/light-up-schneider-1.jpg", "/design/images/light-up-schneider-2.jpg"],
      tags: ["Program Lead", "2022 to 2025"],
    },
    {
      title: "Financial Inclusion Partnership",
      where: "Program Lead · Alerzo × Mastercard / e-Trade Alliance · 2023–2025",
      description:
        "Extended financial-inclusion tools to 10,000 MSMEs across Nigeria in partnership with Mastercard and the e-Trade Alliance.",
      images: ["/design/images/financial-inclusion-mastercard.png"],
      imageFit: "contain",
      link: "https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2024/december/mastercard-alerzo-and-e-trade-alliance-collaborate-to-drive-financial-inclusion-for-10-000-nigerian-msmes/",
      tags: ["Program Lead", "2023 to 2025"],
    },
  ],
};

export type CaseStudyMetric = { value: string; label: string };
export type ClientLogo = { name: string; src: string };
export type ExternalCaseStudy = { title: string; company: string; location?: string; href: string; image?: string };
export type LandmarkExperience = {
  slug: string;
  name: string;
  tag: string;
  image: string;
  href: string;
  // DRAFT — placeholder summary, confirm/edit before this ever ships publicly.
  summary: string;
};

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
  experiences?: LandmarkExperience[];
  tactics: string[];
  closingLine?: { pre: string; emphasis: string };
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  laserglow: {
    brand: "laserglow",
    name: "Laserglow Technologies",
    role: "Performance Marketing Manager, Toronto, ON",
    dates: "January 2026 – Present",
    intro:
      "Laserglow Technologies is a Toronto-based industrial safety company that develops LED-based visual hazard management systems for warehouses and manufacturing facilities, helping industrial teams replace static safety controls like paint and tape with dynamic, projected solutions.",
    metrics: [
      { value: "20%", label: "Qualified pipeline growth" },
      { value: "1,000+", label: "Leads generated across trade shows and conferences" },
      { value: "$73", label: "Cost per conversion across Google Ads and print, down from ~$143" },
      { value: "391", label: "Google Ads conversions, +67% QoQ" },
      { value: "100%", label: "QoQ LinkedIn lead-volume growth (76 leads)" },
      { value: "$200K+", label: "Quotes raised from LinkedIn-sourced leads" },
    ],
    callout:
      "Laserglow's strategy names the pillar plainly: proof points, not promises — earned through deployment scale and solutions tailored by facility, not off-the-shelf SKUs. I ran every channel on that same standard, rebuilding attribution so results are demonstrable and turning a trade-show diagnostic into structured first-party data.",
    clientLogos: [
      { name: "UPS", src: "/logos/clients/ups.svg" },
      { name: "GXO", src: "/logos/clients/gxo.svg" },
      { name: "Amgen", src: "/logos/clients/amgen.svg" },
      { name: "GSK", src: "/logos/clients/gsk.png" },
      { name: "Corning", src: "/logos/clients/corning.jpg" },
      { name: "Amazon", src: "/logos/clients/amazon.jpg" },
      { name: "Grainger", src: "/logos/clients/grainger.png" },
      { name: "Walmart", src: "/logos/clients/walmart.jpg" },
      { name: "Hyundai", src: "/logos/clients/hyundai.jpg" },
      { name: "Toyota", src: "/logos/clients/toyota.svg" },
    ],
    tactics: [
      "Audited GA4 conversion tracking and Google Tag Manager implementation to close attribution gaps between ad platforms and site data.",
      "Structured search, Performance Max, and lead-generation campaigns mapped to ICP personas across industrial verticals, driving 391 Google Ads conversions (+67% QoQ) and cutting cost per conversion from $143 to $73.",
      "Built LinkedIn Ads strategy for industrial B2B audiences, including retargeting setup, attribution modeling, and budget splits across cold and retargeting tiers, driving 100% QoQ lead growth and $200K+ in quotes raised.",
      "Managed keyword optimization, bid adjustments, and budget allocation across Google Ads campaigns targeting safety managers and operations directors at warehouses and manufacturing facilities, contributing to 20% qualified pipeline growth.",
      "Built demand generation infrastructure across HubSpot lead scoring, lifecycle workflows, webinars, podcasts, and email nurture sequences to move leads from MQL to opportunity faster.",
      "Built reusable AI-assisted creative workflows, including prompt systems and content variants, to speed up campaign asset production across search, social, and tradeshow materials without losing message consistency.",
      "Sharpened category positioning around Smart Hazard Awareness, replacing generic industrial-safety messaging with a narrative built on direct buyer research.",
      "Led tradeshow marketing strategy across North America in material handling and logistics, anchored by an interactive Hazard Awareness diagnostic at the MODEX 2026 booth that turned booth visits into first-party data, generating 1,000+ leads across trade shows and conferences.",
    ],
    next: { href: "/work/alerzo", label: "Alerzo" },
  },
  alerzo: {
    brand: "alerzo",
    name: "Alerzo",
    role: "Commercial Lead – Growth and Campaign Strategy",
    dates: "March 2021 – December 2025",
    intro:
      "Alerzo is a B2B e-commerce and distribution company that connects informal retailers directly to manufacturers, cutting out layers of traditional wholesalers and simplifying inventory access for small businesses.",
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
    clientLogos: [
      { name: "Golden Penny (Flour Mills of Nigeria)", src: "/logos/clients/golden-penny-fmn.jpg" },
      { name: "Indomie (Multipro)", src: "/logos/clients/indomie-multipro.png" },
      { name: "Nigerian Breweries", src: "/logos/clients/nigerian-breweries.png" },
      { name: "PZ Cussons", src: "/logos/clients/pz-cussons.png" },
      { name: "Seven-Up Bottling Company", src: "/logos/clients/seven-up-bottling.png" },
      { name: "FrieslandCampina", src: "/logos/clients/friesland-campina.png" },
      { name: "Guinness", src: "/logos/clients/guinness.svg" },
      { name: "Nestlé", src: "/logos/clients/nestle.jpeg" },
      { name: "PepsiCo", src: "/logos/clients/pepsico.png" },
      { name: "Unilever", src: "/logos/clients/unilever.svg" },
      { name: "Coca-Cola", src: "/logos/clients/coca-cola.png" },
      { name: "Diageo", src: "/logos/clients/diageo.png" },
      { name: "Reckitt", src: "/logos/clients/reckitt.jpg" },
    ],
    tactics: [
      "Co-authored the Seven Up and Alerzo Growth Strategy and designed a three-month campaign calendar with bulk-order incentives, in-app advertising, tiered loyalty, a top-200 retailer leaderboard, and SMS/social pushes, turning a 200,000+ retailer network into a growth channel for a major beverage manufacturer.",
      "Applied RFM segmentation and cohort analysis, built around the 'Heroes' active-retailer rewards tier, to optimize assortment and basket composition, lifting repeat-purchase rate by 24% and basket volumes by 30%, while retailer retention rose from 66% to 68% and churn fell from 33% to 32% in a single quarter.",
      "Built a monthly fast-mover/slow-mover product classification model to guide pricing, delisting, and promotional decisions, still in use today behind programs like the Back-to-School cereal-carton incentive and the Self-Pickup Center rollout.",
      "Secured commercial partnerships with leading CPG manufacturers, including Flour Mills and UAC Foods through a Zeebly ERP integration, and delivered sell-through analytics that shaped partner procurement, pricing, and rebate decisions.",
      "Designed a data-monetization model combining a 1% rebate on manufacturer sell-in, sell-out, and inventory dashboards with paid API access for real-time data sync.",
      "Ran a full-funnel regional activation campaign, generating $1.3M+ in sales within 12 days, 7% above forecast, and 5,000+ incremental orders.",
      "Drove 18% YoY category growth across pasta, flour, noodles, and agro-allied SKUs through data-informed category planning.",
      "Led AlerzoShop go-to-market and customer-journey mapping, using workflow automation and digital campaigns to expand personalized retailer outreach and onboarding.",
      "Built a revenue-optimized inventory mix model that cut stockouts by 15% and reduced excess inventory by more than 15% on key lines.",
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
      "Landmark Africa Group is a real estate and hospitality company that develops mixed-use properties combining commercial real estate, leisure, retail, and tourism destinations across multiple markets.",
    metrics: [
      { value: "$2M+", label: "Annual revenue generated" },
      { value: "50,000+", label: "Weekly visitors, full ecosystem" },
      { value: "30+", label: "Events and activations hosted monthly, ecosystem-wide" },
      { value: "86%", label: "Average occupancy across the retail boulevard" },
      { value: "50+", label: "Retail tenants across a diversified category mix" },
      { value: "30", label: "Off-plan apartments sold (1-bed to 3-bed units)" },
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
      { name: "KFC", src: "/logos/clients/kfc.png" },
    ],
    // DRAFT — contributions below are plausible placeholders grounded in the real tactics/metrics
    // above, NOT verified per-experience facts. Confirm/edit before this ever ships publicly.
    experiences: [
      {
        slug: "kids-club",
        name: "Landmark Kids' Club",
        tag: "Family & Leisure",
        image: "/design/images/landmark-experiences/kids-club.jpg",
        href: "http://kids.landmarkafrica.com",
        summary: "Positioned Kids' Club as a standalone membership product for the family/leisure audience segment.",
      },
      {
        slug: "hotels",
        name: "Landmark Hotels",
        tag: "Hospitality",
        image: "/design/images/landmark-experiences/hotels.jpeg",
        href: "https://landmarkhotel.ng/",
        summary: "Sold advertising and sponsorship partnerships with hospitality tie-ins across the hotel, apartments, and beach resort.",
      },
      {
        slug: "waterview",
        name: "Landmark Waterview",
        tag: "Residential",
        image: "/design/images/landmark-experiences/waterview.png",
        href: "https://landmarkwaterview.com/",
        summary: "Led sales for the off-plan apartment development, closing 30 units across 1-bed to 3-bed layouts.",
      },
      {
        slug: "upside-down-house",
        name: "Landmark Upside Down House",
        tag: "Attraction",
        image: "/design/images/landmark-experiences/upside-down-house.jpg",
        href: "https://upsidedownhouse.ng/",
        summary: "Positioned the attraction as a flagship differentiator in ecosystem marketing and press.",
      },
      {
        slug: "events",
        name: "Landmark Events",
        tag: "Events",
        image: "/design/images/landmark-experiences/events.jpg",
        href: "https://event.landmarkafrica.com/",
        summary: "Sold event and activation partnerships to brand and sponsor partners across Landmark locations.",
      },
    ],
    tactics: [
      "Led business development across Landmark's full ecosystem, spanning residential, retail, F&B, and hospitality, prospecting and qualifying tenants, partners, and buyers for each vertical",
      "Closed anchor tenant deals across professional services, F&B, and lifestyle retail, aligning each brand to the concept and audience it served best",
      "Built the footfall and traffic data behind every pitch, giving prospects verified numbers rather than sales projections",
      "Sold advertising and sponsorship partnerships to banking and financial services partners, closing deals on the strength of that data",
      "Led sales for an off-plan apartment development, closing 30 units across 1-bed to 3-bed layouts through a qualified, high-net-worth pipeline",
      "Led sales for a multi-story high-rise development, managing the deal from first contact through signed contract",
      "Qualified leads using MEDDPICC ahead of negotiation, focusing effort on deals ready to close",
      "Negotiated sales-based lease agreements that tied tenant success to property performance, strengthening retention and renewal",
    ],
    prev: { href: "/work/alerzo", label: "Alerzo" },
  },
};
