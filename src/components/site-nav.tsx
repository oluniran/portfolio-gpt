import Link from "next/link";

export function SiteNav() {
  return <header className="site-nav scheme-1"><div className="container nav-inner" style={{ paddingInline: "5%" }}>
    <Link className="wordmark focus-ring" href="/">Niran Olutimayin</Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/work/laserglow">Work</Link><Link href="/#timeline">Timeline</Link>
    </nav>
    <a className="button button--solid focus-ring" href="mailto:oluniran.olutimayin@gmail.com">Contact</a>
  </div></header>;
}
