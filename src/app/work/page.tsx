import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudyPreviews } from "@/content/site-content";

export const metadata: Metadata = { title: "Work — Niran Olutimayin" };

export default function WorkPage() { return <>
  <section className="site-section scheme-2"><div className="container"><p className="eyebrow">Work experience</p><h1 className="display" style={{ marginBottom: "3rem" }}>Growth stories across distinct verticals.</h1><div className="work-stack">{caseStudyPreviews.map((item) => <article className="work-feature" key={item.slug}><Image src={item.image} alt="" width={1400} height={1050} style={item.slug === "landmark-africa" ? { filter: "brightness(1.15) contrast(0.95)" } : undefined} /><div className="work-feature-body"><p className="eyebrow">{item.name}</p><h3 className="subheading">{item.teaser}</h3><Link className="work-link focus-ring" href={item.href}>Read case study →</Link></div></article>)}</div></div></section>
</> }
