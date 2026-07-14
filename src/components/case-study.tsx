import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/site-content";

const visual: Record<CaseStudy["brand"], { main: string; gallery: string[]; heroScheme: string; detailScheme: string; galleryScheme: string }> = {
  laserglow: { main: "/design/images/laserglow-technologies-project-item-body-section.jpg", gallery: ["/design/images/laserglow-technologies-gallery-section-0.png", "/design/images/laserglow-technologies-gallery-section-1.jpg", "/design/images/laserglow-technologies-gallery-section-2.jpg"], heroScheme: "scheme-5", detailScheme: "scheme-2", galleryScheme: "scheme-1" },
  alerzo: { main: "/design/images/alerzo-project-item-body-section-0.png", gallery: ["/design/images/alerzo-gallery-section-0.jpg", "/design/images/alerzo-gallery-section-1.jpg", "/design/images/alerzo-gallery-section-2.jpg"], heroScheme: "scheme-2", detailScheme: "scheme-3", galleryScheme: "scheme-2" },
  landmark: { main: "/design/images/landmark-realty-portfolio-item-body-section-0.jpg", gallery: ["/design/images/landmark-realty-portfolio-item-body-section-1.png", "/design/images/landmark-realty-portfolio-item-body-section-2.png", "/design/images/landmark-realty-portfolio-item-body-section-3.jpg"], heroScheme: "scheme-3", detailScheme: "scheme-6", galleryScheme: "scheme-3" },
};

export function CaseStudyPage({ data }: { data: CaseStudy }) {
  const media = visual[data.brand];
  return <article>
    <section className={`site-section ${media.heroScheme}`}><div className="container case-hero"><div><p className="eyebrow">Selected work · {data.dates}</p><h1 className="display">{data.name}</h1><p className="subheading">{data.role}</p><p className="lede">{data.intro}</p></div><Image src={media.main} alt="" width={1400} height={1000} priority /></div></section>
    <section className={`site-section ${media.detailScheme}`}><div className="container"><p className="eyebrow">Measurable outcomes</p><div className="case-metrics">{data.metrics.map((metric) => <div className="case-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></section>
    <section className="site-section scheme-2"><div className="container case-content"><div><p className="eyebrow">Approach</p><h2 className="heading">Turning activity into a system.</h2>{data.callout ? <p className="body-copy">{data.callout}</p> : null}</div><ul className="tactics">{data.tactics.map((tactic) => <li key={tactic}>{tactic}</li>)}</ul></div></section>
    <section className={`site-section ${media.galleryScheme}`}><div className="container"><p className="eyebrow">Work in context</p><h2 className="heading" style={{ marginBottom: "3rem" }}>The systems behind the story.</h2><div className="gallery-grid">{media.gallery.map((source) => <Image src={source} alt="" width={1200} height={900} key={source} />)}</div><nav className="case-nav"><Link className="focus-ring" href={data.prev.href}>← {data.prev.label}</Link><Link className="focus-ring" href={data.next.href}>{data.next.label} →</Link></nav></div></section>
  </article>;
}
