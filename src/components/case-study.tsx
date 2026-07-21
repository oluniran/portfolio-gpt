import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/site-content";

type GalleryImage = { src: string; position?: string };
const visual: Record<CaseStudy["brand"], { main: string; gallery: GalleryImage[]; heroScheme: string; detailScheme: string; galleryScheme: string }> = {
  laserglow: { main: "/design/images/laserglow-technologies-project-item-body-section.jpg", gallery: [{ src: "/design/images/laserglow-technologies-gallery-section-0.png" }, { src: "/design/images/laserglow-technologies-gallery-section-2.jpg" }, { src: "/design/images/laserglow-modex-booth.jpeg" }], heroScheme: "scheme-5", detailScheme: "scheme-2", galleryScheme: "scheme-1" },
  alerzo: { main: "/design/images/alerzo-project-item-body-section-0.png", gallery: [{ src: "/design/images/alerzo-gallery-section-0.jpg" }, { src: "/design/images/alerzo-gallery-section-2.jpg" }, { src: "/design/images/alerzo-warehouse-delivery.jpeg" }], heroScheme: "scheme-2", detailScheme: "scheme-3", galleryScheme: "scheme-2" },
  landmark: { main: "/design/images/landmark-realty-portfolio-item-body-section-0.jpg", gallery: [{ src: "/design/images/landmark-realty-portfolio-item-body-section-1.png" }, { src: "/design/images/landmark-realty-portfolio-item-body-section-2.png" }, { src: "/design/images/landmark-realty-portfolio-item-body-section-3.jpg" }, { src: "/design/images/landmark-realty-beach-crowd.jpeg" }, { src: "/design/images/landmark-realty-beach-dusk.jpeg" }, { src: "/design/images/landmark-realty-beach-cabana-event.jpeg" }, { src: "/design/images/landmark-3.jpg" }, { src: "/design/images/landmark-5.webp" }, { src: "/design/images/landmark-6.webp" }], heroScheme: "scheme-3", detailScheme: "scheme-6", galleryScheme: "scheme-3" },
};

const brandClass: Record<CaseStudy["brand"], string | undefined> = {
  laserglow: "case-laserglow",
  landmark: "case-landmark",
  alerzo: "case-alerzo",
};

const galleryHeading: Record<CaseStudy["brand"], string> = {
  laserglow: "Mitigate risk before it becomes a near miss.",
  alerzo: "Serving last-mile retailers everywhere.",
  landmark: "A one-stop business, leisure, and lifestyle destination.",
};

export function CaseStudyPage({ data }: { data: CaseStudy }) {
  const media = visual[data.brand];
  const heroStyle = data.brand === "landmark" ? { filter: "brightness(1.15) contrast(0.95)" } : undefined;
  const heroText = <><h1 className="display">{data.name}</h1><p className="subheading">{data.role}</p><p className="eyebrow" style={{ marginTop: ".6rem" }}>{data.dates}</p><p className="lede" style={{ marginTop: "1.75rem" }}>{data.intro}</p></>;
  return <article className={brandClass[data.brand]}>
    {data.brand === "landmark"
      ? <section className="case-hero-bg scheme-1"><Image src={media.main} alt="" fill sizes="100vw" priority className="case-hero-bg-image" style={heroStyle} /><div className="case-hero-bg-overlay" /><div className="container case-hero-bg-content">{heroText}</div></section>
      : <section className={`site-section ${media.heroScheme}`}><div className="container case-hero"><div>{heroText}</div><Image src={media.main} alt="" width={1400} height={1000} priority style={heroStyle} /></div></section>}
    <section className={`site-section ${media.detailScheme}`}><div className="container"><p className="eyebrow eyebrow--section">Key Achievements</p><div className="case-metrics">{data.metrics.map((metric) => <div className="case-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></section>
    <section className="site-section scheme-2"><div className="container case-content"><div><p className="eyebrow eyebrow--section">Job Functions and Work Streams</p></div><ul className="tactics">{data.tactics.map((tactic) => <li key={tactic}>{tactic}</li>)}</ul></div></section>
    {data.externalCaseStudies ? <section className="site-section scheme-7"><div className="container"><h2 className="heading" style={{ marginBottom: "1rem" }}>Real facilities. Real reductions in risk.</h2><p className="body-copy" style={{ marginBottom: "2.5rem", maxWidth: "48rem" }}>Laserglow systems run across more than 12,000 deployments in manufacturing, logistics, food processing, and warehousing — facilities where hazard visibility can&rsquo;t depend on memory or repainting. These published case studies document what changes when the environment itself protects people.</p><div className="testimonial-grid">{data.externalCaseStudies.map((item) => item.image ? <a className="testimonial-card testimonial-card--image focus-ring" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}><Image src={item.image} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="testimonial-card-image" /><div className="testimonial-card-overlay" /><div className="testimonial-card-content"><span className="testimonial-company">{item.company}</span>{item.location ? <span className="testimonial-location">{item.location}</span> : null}<span className="testimonial-solution">{item.title}</span></div></a> : <a className="testimonial-card testimonial-card--plain focus-ring" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}><span className="testimonial-company">{item.company}</span>{item.location ? <span className="testimonial-location">{item.location}</span> : null}<span className="testimonial-solution">{item.title}</span></a>)}</div></div></section> : null}
    {data.clientLogos ? <section className="site-section scheme-2"><div className="container"><p className="eyebrow eyebrow--section">Partners</p><div className="logo-strip"><div className="logo-strip-track">{[0, 1, 2, 3].map((copy) => data.clientLogos!.map((logo) => <Image src={logo.src} alt={copy === 0 ? logo.name : ""} aria-hidden={copy > 0 || undefined} width={120} height={48} key={`${logo.name}-${copy}`} />))}</div></div></div></section> : null}
    <section className={`site-section ${media.galleryScheme}`}><div className="container"><p className="eyebrow">Work in context</p><h2 className="heading" style={{ marginBottom: "3rem" }}>{galleryHeading[data.brand]}</h2><div className="gallery-scroll"><div className="gallery-scroll-track">{media.gallery.map((image) => <Image src={image.src} alt="" width={1200} height={900} style={image.position ? { objectPosition: image.position } : undefined} key={image.src} />)}{media.gallery.map((image) => <Image src={image.src} alt="" aria-hidden width={1200} height={900} style={image.position ? { objectPosition: image.position } : undefined} key={`${image.src}-repeat`} />)}</div></div>{data.closingLine ? <p className="compound-line">{data.closingLine.pre}<strong>{data.closingLine.emphasis}</strong></p> : null}<nav className="case-nav"><Link className="focus-ring" href={data.prev.href}>← {data.prev.label}</Link><Link className="focus-ring" href={data.next.href}>{data.next.label} →</Link></nav></div></section>
  </article>;
}
