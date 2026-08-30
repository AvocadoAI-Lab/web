import Link from "next/link";
import { Button, Cta, Eyebrow, HeroVisual, SectionHead } from "@/components/portal-ui";
import type { Founder, Locale, Pair, Proof, Site, Solution, Triple } from "@/lib/content";

export function Home({ locale, site }: { locale: Locale; site: Site }) {
  const problems = site.problems.items as readonly Pair[];
  const steps = site.loop.steps as readonly Triple[];
  const solutions = site.solutions as readonly Solution[];
  const proof = site.fieldProof.items as readonly Proof[];
  const people = site.founders.people as readonly Founder[];
  const trust = site.trust.items as readonly Pair[];
  const resources = site.resources.items as readonly Triple[];
  return (
    <>
      <section className="hero dark-grid"><div className="container hero-grid"><div className="hero-copy"><Eyebrow>{site.hero.eyebrow}</Eyebrow><h1>{site.hero.title}</h1><p>{site.hero.description}</p><div className="button-row"><Button locale={locale} href="/platform">{site.hero.primary}</Button><Button locale={locale} href="#solutions" secondary>{site.hero.secondary}</Button></div></div><HeroVisual locale={locale} /></div></section>
      <section className="proof-strip"><div className="container"><span>{site.hero.proofLabel}</span><div>{site.hero.proof.map((item) => <b key={item}>{item}</b>)}</div></div></section>

      <section className="section soft-grid"><div className="container"><SectionHead eyebrow={site.problems.eyebrow} title={site.problems.title} description={site.problems.description} /><div className="card-grid four">{problems.map(([title, text], index) => <article className="feature-card" key={title}><span className="number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section dark dark-grid"><div className="container"><SectionHead inverse eyebrow={site.loop.eyebrow} title={site.loop.title} description={site.loop.description} /><div className="loop-grid">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="highlight"><p>{site.loop.highlight}</p><Button locale={locale} href="/platform">{site.hero.primary}</Button></div></div></section>

      <section className="section" id="solutions"><div className="container"><SectionHead eyebrow="SOLUTIONS" title={site.solutionsTitle} description={site.solutionsDescription} /><div className="card-grid three">{solutions.map((solution, index) => <article className="solution-card" key={solution.slug}><div className="card-top"><span>{solution.kicker}</span><b>0{index + 1}</b></div><h3>{solution.title}</h3><p>{solution.summary}</p><div className="tags">{solution.capabilities.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div><Link href={`/${locale}/solutions/${solution.slug}`}>{locale === "zh-Hant" ? "查看方案" : "Explore solution"}<span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section className="section muted" id="field-proof"><div className="container"><SectionHead eyebrow={site.fieldProof.eyebrow} title={site.fieldProof.title} description={site.fieldProof.description} /><div className="card-grid three">{proof.map(([sector, status, title, text]) => <article className="proof-card" key={title}><span className="sector">{sector}</span><b>{status}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section soft-grid"><div className="container founder-layout"><div><SectionHead eyebrow={site.founders.eyebrow} title={site.founders.title} description={site.founders.description} /><Button locale={locale} href="/company/founders" secondary>{locale === "zh-Hant" ? "認識創辦團隊" : "Meet the founders"}</Button></div><div className="founder-grid">{people.map(([name, localName, role, bio], index) => <article className="founder-card" key={name}><div className="portrait" aria-hidden="true"><span>{name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span><i className={index ? "right" : "left"} /></div><span className="approval">PROFILE PENDING APPROVAL</span><h3>{name}</h3><b>{localName}</b><strong>{role}</strong><p>{bio}</p></article>)}</div></div></section>

      <section className="section forest"><div className="container integration-grid"><SectionHead inverse eyebrow="OPEN INTEGRATION" title={locale === "zh-Hant" ? "整合既有投資，而不是要求客戶重新開始。" : "Integrate existing investments instead of forcing a reset."} description={locale === "zh-Hant" ? "SenseL 以標準介面與受治理的 Adapter 接入資料來源，讓場域逐步建立共同脈絡與驗證能力。" : "SenseL uses standard interfaces and governed adapters to build shared context and validation progressively."} /><div><div className="tags inverse">{site.integrations.map((item) => <span key={item}>{item}</span>)}</div><blockquote>{site.loop.highlight}</blockquote></div></div></section>

      <section className="section"><div className="container split"><div><SectionHead eyebrow={site.trust.eyebrow} title={site.trust.title} description={site.trust.description} /><Button locale={locale} href="/trust" secondary>Trust Center</Button></div><div className="card-grid two">{trust.map(([title, text]) => <article className="trust-card" key={title}><span aria-hidden="true">✓</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section muted"><div className="container"><div className="head-row"><SectionHead eyebrow={site.resources.eyebrow} title={site.resources.title} /><Button locale={locale} href="/resources" secondary>{locale === "zh-Hant" ? "查看資源" : "View resources"}</Button></div><div className="card-grid three">{resources.map(([type, title, text]) => <article className="resource-card" key={title}><span>{type}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <Cta locale={locale} site={site} />
    </>
  );
}
