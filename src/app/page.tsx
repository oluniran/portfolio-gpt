import Image from "next/image";
import Link from "next/link";
import { about, competencies, contact, services, timeline } from "@/content/site-content";
import { ServicesScroll } from "@/components/services-scroll";
import { CareerTimeline } from "@/components/career-timeline";

const icons: Record<string, string> = { "GA4": "/icons/ga4.svg", "Google Ads": "/icons/google-ads.svg", "LinkedIn Ads": "/icons/linkedin-ads.svg", "Meta Ads": "/icons/meta-ads.svg", "GTM": "/icons/gtm.svg", "HubSpot": "/icons/hubspot.svg", "Tableau": "/icons/tableau.svg", "DV360": "/icons/dv360.png", "Clay": "/icons/clay.jpeg", "AirOps": "/icons/airops.png", "SA360": "/icons/sa360.png", "TikTok": "/icons/tiktok.svg", "AI": "/icons/ai.webp", "Claude": "/icons/claude.png" };
const certificationIcons: Record<string, string> = { "Google Analytics": "/icons/ga4-2.png", "Search Ads 360": "/icons/sa360-2.png", "Display & Video 360": "/icons/dv360.png", "Google Ads Search": "/icons/google-ads-2.avif", "Google Ads Display": "/icons/google-ads-2.avif", "Google Tag Manager": "/icons/gtm-2.png" };

export default function HomePage() { return <>
  <section className="site-section scheme-2"><div className="container hero-grid">
    <div><h1 className="display">I build demand systems that make growth measurable.</h1><p className="lede">From first touch to qualified pipeline, I connect media, analytics, and automation to move the numbers that matter.</p><div className="actions"><Link className="button button--solid focus-ring" href="/work">Explore my work</Link><a className="button button--ghost focus-ring" href={contact.emailHref}>Start a conversation</a></div></div>
    <div className="hero-image-window"><Image src="/niran-about.jpg" alt="Niran Olutimayin, formal portrait" width={500} height={500} sizes="(min-width: 768px) 35vw, 85vw" style={{ objectPosition: "center 20%" }} priority /></div>
  </div></section>
  <section id="services" className="site-section scheme-1 services-section">
    <div className="container services-static"><p className="eyebrow">What I build</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Three connected growth disciplines.</h2><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><p className="service-number">{service.number}</p><h3 className="subheading">{service.title}</h3><p className="body-copy">{service.copy}</p></article>)}</div></div>
    <div className="container services-scroll-intro"><p className="eyebrow">What I build</p><h2 className="heading" style={{ marginBottom: "1rem" }}>Three connected growth disciplines.</h2></div>
    <ServicesScroll services={services} />
  </section>
  <section className="site-section scheme-2"><div className="container" style={{ maxWidth: "64rem" }}><p className="eyebrow eyebrow--section" style={{ marginBottom: "3rem" }}>Career timeline</p><CareerTimeline items={timeline} /></div></section>
  <section className="site-section scheme-7"><div className="container"><p className="eyebrow">Core competencies</p><h2 className="heading" style={{ marginBottom: "3rem" }}>A modern marketing operating system.</h2><div className="logo-strip logo-strip--tools"><div className="logo-strip-track">{[0, 1, 2, 3].map((copy) => competencies.platforms.map((skill) => icons[skill] ? <Image src={icons[skill]} alt={copy === 0 ? skill : ""} aria-hidden={copy > 0 || undefined} width={96} height={40} key={`${skill}-${copy}`} /> : <span className="logo-strip-text" aria-hidden={copy > 0 || undefined} key={`${skill}-${copy}`}>{skill}</span>))}</div></div></div></section>
  <section className="site-section scheme-7"><div className="container"><p className="eyebrow eyebrow--section">Education</p><div className="edu-list">{about.education.map((item) => <article className="edu-row" key={item.school}><Image className="edu-logo" src={item.logo} alt={`${item.school} logo`} width={480} height={240} /><div><h3 className="subheading">{item.school}</h3><p className="edu-degree">{item.degree}</p><p className="edu-meta">{item.where}</p></div></article>)}</div></div></section>
  <section className="site-section scheme-1"><div className="container two-col"><div><p className="eyebrow eyebrow--section">Credentials</p><p className="body-copy">Certified across the tools that power modern paid media, measurement, and reporting.</p></div><div className="credential-logo-grid">{about.certifications.map((item) => <div className="credential-logo-box" key={item}><Image src={certificationIcons[item]} alt={item} width={64} height={40} /><span>{item}</span></div>)}</div></div></section>
  <section className="site-section scheme-7"><div className="container"><p className="eyebrow">Leadership &amp; Impact</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Beyond the pipeline.</h2>{about.leadership.map((item, i) => {
            const imageContent = item.images.length === 1
              ? <a href={item.link} target="_blank" rel="noopener noreferrer" className={`portfolio-image focus-ring${item.imageFit === "contain" ? " portfolio-image--contain" : ""}`}><Image src={item.images[0]} alt="" width={600} height={450} /></a>
              : <div className="portfolio-image leadership-gallery">{item.images.map((src, idx) => <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="leadership-crossfade-img" style={{ animationDuration: `${item.images.length * 5}s`, animationDelay: `${idx * 5}s` }} key={src} />)}</div>;
            return <article className={`portfolio-row${i % 2 ? " portfolio-row--reverse" : ""}`} key={item.title}>
              {imageContent}
              <div className="portfolio-content">
                <h3 className="subheading">{item.title}</h3>
                <p className="body-copy">{item.description}</p>
                <ul className="portfolio-tags">{item.tags.map((tag) => <li className="portfolio-tag" key={tag}>{tag}</li>)}</ul>
                {item.link ? <a className="work-link focus-ring" href={item.link} target="_blank" rel="noopener noreferrer">Read the announcement →</a> : null}
              </div>
            </article>;
          })}<div className="actions" style={{ justifyContent: "center", marginTop: "3rem" }}><Link className="button button--solid focus-ring" href="/work">Where have I worked? →</Link></div></div></section>
  <section className="site-section scheme-3"><div className="container" style={{ textAlign: "center", maxWidth: "64rem" }}><p className="eyebrow">Let’s work together</p><h2 className="heading">Looking for a marketer who can connect strategy to revenue?</h2><div className="actions" style={{ justifyContent: "center" }}><a className="button button--solid focus-ring" href={contact.emailHref}>Email Niran</a><a className="button button--ghost focus-ring" href={contact.phoneHref}>{contact.phone}</a></div></div></section>
</> }
