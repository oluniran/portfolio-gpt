import Image from "next/image";
import type { Metadata } from "next";
import { about } from "@/content/site-content";
export const metadata: Metadata = { title: "About — Niran Olutimayin" };

export default function AboutPage() { return <>
  <section className="site-section scheme-2"><div className="container two-col"><Image className="hero-media" src="/niran-about.jpg" alt="Niran Olutimayin, formal portrait" width={600} height={750} /><div><p className="eyebrow">About Niran</p><h1 className="display">The operator behind the growth system.</h1><p className="lede">{about.bio}</p></div></div></section>
  <section className="site-section scheme-7"><div className="container two-col"><div><p className="eyebrow">Education</p><h2 className="heading">Strategy, communication, and technology.</h2></div><div className="service-grid" style={{ gridTemplateColumns: "1fr" }}>{about.education.map((item) => <article className="service-card" key={item.school}><h3 className="subheading">{item.school}</h3><p>{item.where}</p></article>)}</div></div></section>
  <section className="site-section scheme-1"><div className="container"><p className="eyebrow">Credentials</p><h2 className="heading" style={{ marginBottom: "3rem" }}>Practitioner-certified.</h2><div className="skills-grid">{about.certifications.map((item) => <div className="skill-card" key={item}><span className="eyebrow">Certification</span><span className="subheading">{item}</span></div>)}</div></div></section>
</> }
