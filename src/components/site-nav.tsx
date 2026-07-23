"use client";

import Link from "next/link";
import { contact } from "@/content/site-content";

function blurOnClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.blur();
}

export function SiteNav() {
  return <header className="site-nav scheme-1"><div className="container nav-inner" style={{ paddingInline: "5%" }}>
    <Link className="wordmark focus-ring" href="/" onClick={blurOnClick}>Niran Olutimayin</Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/" onClick={blurOnClick}>Home</Link>
      <div className="nav-item-dropdown">
        <Link href="/work" onClick={blurOnClick}>Work</Link>
        <div className="nav-dropdown-panel">
          <Link className="nav-dropdown-link--laserglow" href="/work/laserglow" onClick={blurOnClick}>Laserglow Technologies</Link>
          <Link className="nav-dropdown-link--alerzo" href="/work/alerzo" onClick={blurOnClick}>Alerzo</Link>
          <Link className="nav-dropdown-link--landmark" href="/work/landmark-africa" onClick={blurOnClick}>Landmark Africa</Link>
        </div>
      </div>
    </nav>
    <a className="button button--solid focus-ring" href={contact.emailHref}>Contact</a>
  </div></header>;
}
