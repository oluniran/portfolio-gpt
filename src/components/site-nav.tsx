import Link from "next/link";
import { contact } from "@/content/site-content";

export function SiteNav() {
  return <header className="site-nav scheme-1"><div className="container nav-inner" style={{ paddingInline: "5%" }}>
    <Link className="wordmark focus-ring" href="/">Niran Olutimayin</Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/">Home</Link>
      <div className="nav-item-dropdown">
        <Link href="/work">Work</Link>
        <div className="nav-dropdown-panel">
          <Link href="/work/laserglow">Laserglow Technologies</Link>
          <Link href="/work/alerzo">Alerzo</Link>
          <Link href="/work/landmark-africa">Landmark Africa</Link>
        </div>
      </div>
    </nav>
    <a className="button button--solid focus-ring" href={contact.emailHref}>Contact</a>
  </div></header>;
}
