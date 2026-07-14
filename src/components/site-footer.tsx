import Link from "next/link";
import { contact } from "@/content/site-content";

export function SiteFooter() {
  return <footer className="site-footer scheme-1"><div className="container footer-inner" style={{ paddingInline: "5%" }}>
    <div><div className="wordmark">Niran Olutimayin</div><p>Building demand systems that make growth measurable.</p></div>
    <div className="footer-links"><Link href="/about">About</Link><Link href="/work/laserglow">Work</Link><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.linkedinHref}>LinkedIn ↗</a></div>
  </div></footer>;
}
