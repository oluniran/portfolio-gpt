import Image from "next/image";
import Link from "next/link";
import { achievements, caseStudyPreviews, competencies, contact } from "@/content/site-content";

const services = [
  ["01", "Demand generation", "Create the audience, message, and nurture programs that turn unfamiliar buyers into qualified pipeline."],
  ["02", "Demand capture", "Build intent-led paid media that finds buyers at the moment they are ready to act."],
  ["03", "Revenue operations", "Connect analytics, attribution, CRM, and automation so marketing outcomes are visible and repeatable."],
];
const timeline = [
  ["2018–2021", "Landmark Realty", "Business Development Lead — generated $2M+ in annual revenue with multi-channel partner and lead-generation programs."],
  ["2021–2025", "Alerzo", "Commercial Lead, Growth & Campaign Strategy — grew monthly GMV 10× while serving 40,000+ retailers."],
  ["2025", "Ivey Business School", "MBA — sharpened strategic leadership and analytical decision-making."],
  ["2026–Present", "Laserglow Technologies", "Performance Marketing Manager — building full-funnel systems that grew qualified pipeline by 20%."],
];
const icons: Record<string, string> = { "GA4": "/icons/ga4.svg", "Google Ads": "/icons/google-ads.svg", "LinkedIn Ads": "/icons/linkedin-ads.svg", "Meta Ads": "/icons/meta-ads.svg", "GTM": "/icons/gtm.svg", "HubSpot": "/icons/hubspot.svg", "Tableau": "/icons/tableau.svg" };

export default function HomePage() { return <>
  <section className="site-section scheme-2"><div className="container hero-grid">
    <div><p className="eyebrow">Performance marketing manager</p><h1 className="display">I build demand systems that make growth measurable.</h1><p className="lede">From first touch to qualified pipeline, I connect media, analytics, and automation to move the numbers that matter.</p><div className="actions"><Link className="button button--solid focus-ring" href="#work">Explore my work</Link><a className="button button--ghost focus-ring" href={`mailto:${contact.email}`}>Start a conversation</a></div></div>
    <Image className="hero-media" src="/design/images/home-hero-header-section.png" alt="Niran Olutimayin" width={1400} height={1400} priority />
  </div></section>
  <section id="services" className="site-section scheme-1"><div className="container"><p className="eyebrow">What I build</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Three connected growth disciplines.</h2><div className="service-grid">{services.map(([number,title,copy]) => <article className="service-card" key={number}><p className="service-number">{number}</p><h3 className="subheading">{title}</h3><p className="body-copy">{copy}</p></article>)}</div></div></section>
  <section className="site-section scheme-2"><div className="container"><p className="eyebrow">Career impact</p><h2 className="heading" style={{ marginBottom: "3rem" }}>The work shows up in the numbers.</h2><div className="stats-grid">{achievements.slice(0,4).map((item) => <article className="stat-card" key={item.label}><p className="stat-value">{item.stat}</p><h3 className="subheading">{item.label}</h3><p>{item.company}</p></article>)}</div></div></section>
  <section id="work" className="site-section scheme-2"><div className="container"><p className="eyebrow">Selected work</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Growth stories across distinct markets.</h2><div className="work-grid">{caseStudyPreviews.map((item, i) => <article className="work-card" key={item.slug}><Image src={`/design/images/home-portfolio-list-section-${i}.${i === 2 ? "jpg" : "png"}`} alt="" width={1000} height={750}/><p className="eyebrow">{item.name}</p><h3 className="subheading">{item.teaser}</h3><Link className="work-link focus-ring" href={item.href}>Read case study →</Link></article>)}</div></div></section>
  <section className="site-section scheme-7"><div className="container"><p className="eyebrow">Core competencies</p><h2 className="heading" style={{ marginBottom: "3rem" }}>A modern marketing operating system.</h2><div className="skills-grid">{competencies.platforms.map((skill) => <div className="skill-card" key={skill}>{icons[skill] ? <Image src={icons[skill]} alt="" width={96} height={96} /> : <span className="eyebrow">Tool</span>}<span className="subheading">{skill}</span></div>)}</div></div></section>
  <section id="timeline" className="site-section scheme-2"><div className="container" style={{ maxWidth: "64rem" }}><p className="eyebrow">Career timeline</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Building towards a full-funnel perspective.</h2><div className="timeline">{timeline.map(([date, title, copy]) => <article className="timeline-item" key={date}><p className="timeline-date">{date}</p><h3 className="subheading">{title}</h3><p className="body-copy">{copy}</p></article>)}</div></div></section>
  <section className="site-section scheme-3"><div className="container" style={{ textAlign: "center", maxWidth: "64rem" }}><p className="eyebrow">Let’s work together</p><h2 className="heading">Looking for a marketer who can connect strategy to revenue?</h2><div className="actions" style={{ justifyContent: "center" }}><a className="button button--solid focus-ring" href={`mailto:${contact.email}`}>Email Niran</a><a className="button button--ghost focus-ring" href={contact.phoneHref}>{contact.phone}</a></div></div></section>
</> }
