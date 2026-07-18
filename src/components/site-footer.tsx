import Link from "next/link";
import { contact } from "@/content/site-content";

export function SiteFooter() {
  return <footer className="site-footer scheme-1"><div className="container footer-inner" style={{ paddingInline: "5%" }}>
    <div><div className="wordmark">Niran Olutimayin</div><p>Building demand systems that make growth measurable.</p></div>
    <div className="footer-links"><Link href="/">Home</Link><Link href="/work">Work</Link><a href={contact.emailHref}>{contact.email}</a><a className="linkedin-link focus-ring" href={contact.linkedinHref} target="_blank" rel="noreferrer" aria-label="Niran Olutimayin on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3A2.2 2.2 0 1 0 5.2 7.4 2.2 2.2 0 0 0 5.2 3ZM3.3 8.8h3.8V21H3.3V8.8Zm6.2 0h3.6v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V21h-3.8v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.5V8.8Z" fill="currentColor" /></svg><span>LinkedIn</span></a></div>
  </div></footer>;
}
