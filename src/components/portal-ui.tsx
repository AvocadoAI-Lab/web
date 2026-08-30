import Link from "next/link";
import type { ReactNode } from "react";
import { localized, otherLocale, type Locale, type Pair, type RoutePath, type Site } from "@/lib/content";

export function Button({ locale, href, children, secondary = false }: { locale: Locale; href: string; children: ReactNode; secondary?: boolean }) {
  const className = `button ${secondary ? "secondary" : "primary"}`;
  const target = localized(locale, href);
  const child = <>{children}<span aria-hidden="true">{target.startsWith("http") || target.startsWith("mailto:") ? "↗" : "→"}</span></>;
  return target.startsWith("http") || target.startsWith("mailto:")
    ? <a className={className} href={target}>{child}</a>
    : <Link className={className} href={target}>{child}</Link>;
}

export function Header({ locale, route, site }: { locale: Locale; route: RoutePath; site: Site }) {
  const nav = site.nav as readonly Pair[];
  const portal = process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_URL || `/${locale}/contact`;
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner">
        <Link aria-label="Avocado.ai home" className="brand" href={`/${locale}`}>
          <span className="brand-mark" aria-hidden="true"><i /></span><span>Avocado.ai</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link href={localized(locale, href)} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="text-link desktop-only" href={portal}>{site.login}</a>
          <Link className="locale-link" href={`/${otherLocale(locale)}${route}`}>{site.language}</Link>
          <Button locale={locale} href="/contact">{site.talk}</Button>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link href={localized(locale, href)} key={href}>{label}</Link>)}
            <a href={portal}>{site.login}</a>
            <Link href={`/${otherLocale(locale)}${route}`}>{site.language}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer({ locale, site }: { locale: Locale; site: Site }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand inverse" href={`/${locale}`}><span className="brand-mark" aria-hidden="true"><i /></span><span>Avocado.ai</span></Link>
          <p>{site.footer}</p>
        </div>
        <div className="footer-links">
          <Link href={`/${locale}/platform`}>SenseL Platform</Link>
          <Link href={`/${locale}/trust`}>Trust Center</Link>
          <Link href={`/${locale}/resources`}>Resources</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Avocado.ai</span><span>Public portal · No customer telemetry</span></div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({ eyebrow, title, description, inverse = false }: { eyebrow: string; title: string; description?: string; inverse?: boolean }) {
  return <div className={`section-head ${inverse ? "inverse" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>;
}

export function HeroVisual({ locale }: { locale: Locale }) {
  const labels = locale === "zh-Hant"
    ? ["EDR / NDR / WAF / OT", "Evidence Episode", "調查", "驗證", "改善"]
    : ["EDR / NDR / WAF / OT", "Evidence Episode", "Investigate", "Validate", "Improve"];
  return (
    <div className="hero-visual" aria-label="SenseL closed-loop visual">
      <div className="signal-chip">{labels[0]}</div>
      <div className="episode-core"><span>SenseL</span><strong>{labels[1]}</strong><small>Context · AI · Evidence</small></div>
      <div className="output-grid">{labels.slice(2).map((item, index) => <div key={item}><b>0{index + 1}</b><span>{item}</span></div>)}</div>
      <span className="orbit orbit-one" /><span className="orbit orbit-two" />
    </div>
  );
}

export function Cta({ locale, site }: { locale: Locale; site: Site }) {
  return <section className="section cta dark-grid"><div className="container cta-panel"><Eyebrow>{site.final.eyebrow}</Eyebrow><h2>{site.final.title}</h2><p>{site.final.description}</p><div className="button-row"><Button locale={locale} href="/contact">{site.final.primary}</Button><Button locale={locale} href="/contact" secondary>{site.final.secondary}</Button></div></div></section>;
}

export function PageHero({ page }: { page: readonly [string, string, string] }) {
  return <section className="page-hero dark-grid"><div className="container"><Eyebrow>AVOCADO.AI / SENSEL</Eyebrow><h1>{page[1]}</h1><p>{page[2]}</p></div></section>;
}

export function ListCard({ title, items }: { title: string; items: readonly string[] }) {
  return <article className="list-card"><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
