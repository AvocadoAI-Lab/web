import { notFound } from "next/navigation";
import { Cta, Eyebrow, ListCard, PageHero, SectionHead } from "@/components/portal-ui";
import type { Locale, Site, Solution } from "@/lib/content";

export function PlatformPage({ locale, site }: { locale: Locale; site: Site }) {
  const page = site.pages.platform;
  const principles = locale === "zh-Hant"
    ? [["Evidence before automation", "先保存來源、脈絡與核准軌跡，再擴大自動化。"], ["Human accountability", "高影響決策由明確角色核准，不把責任交給模型。"], ["Validation as operations", "演練、重測與回歸不是一次性專案，而是持續營運。"], ["Open integration", "以標準介面接入既有工具，避免平台綁定。"]]
    : [["Evidence before automation", "Preserve sources, context, and approvals before expanding automation."], ["Human accountability", "Named roles approve high-impact decisions instead of assigning responsibility to a model."], ["Validation as operations", "Exercises, re-test, and regression become continuous operations rather than one-off projects."], ["Open integration", "Use standard interfaces to integrate current tools and avoid platform lock-in."]];
  const layers = locale === "zh-Hant"
    ? [["Data Plane", "EDR、NDR、WAF、OT、CTI 與營運資料"], ["Context Plane", "資產、身分、網路、漏洞與場域脈絡"], ["AI Reasoning", "Episode、攻擊故事、風險排序與調查建議"], ["Validation Plane", "情境、BAS、Purple Team、控制驗證與回歸"], ["Trust & Governance", "Evidence、人工核准、Audit 與改善追蹤"]]
    : [["Data Plane", "EDR, NDR, WAF, OT, CTI, and operational data"], ["Context Plane", "Assets, identities, networks, vulnerabilities, and field context"], ["AI Reasoning", "Episodes, attack narratives, risk priority, and investigation guidance"], ["Validation Plane", "Scenarios, BAS, purple team, control validation, and regression"], ["Trust & Governance", "Evidence, human approval, audit, and improvement tracking"]];
  return <><PageHero page={page} /><section className="section soft-grid"><div className="container"><SectionHead eyebrow="DESIGN PRINCIPLES" title={locale === "zh-Hant" ? "以責任、證據與驗證約束 AI。" : "Constrain AI with accountability, evidence, and validation."} /><div className="card-grid two">{principles.map(([title, text], index) => <article className="feature-card" key={title}><span className="number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="section dark dark-grid"><div className="container"><SectionHead inverse eyebrow="CONTROL & VALIDATION PLANES" title={locale === "zh-Hant" ? "SenseL 五層架構" : "Five layers of SenseL"} /><div className="architecture">{layers.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><Cta locale={locale} site={site} /></>;
}

export function SolutionPage({ locale, site, slug }: { locale: Locale; site: Site; slug: string }) {
  const solution = (site.solutions as readonly Solution[]).find((item) => item.slug === slug);
  if (!solution) notFound();
  const labels = locale === "zh-Hant" ? ["適用對象", "需要解決的問題", "方案能力", "預期成果"] : ["Who it is for", "Operating challenges", "Capabilities", "Expected outcomes"];
  return <><section className="page-hero dark-grid"><div className="container"><Eyebrow>{solution.kicker}</Eyebrow><h1>{solution.title}</h1><p>{solution.summary}</p></div></section><section className="section soft-grid"><div className="container card-grid two"><ListCard title={labels[0]} items={solution.audience} /><ListCard title={labels[1]} items={solution.challenges} /></div></section><section className="section dark dark-grid"><div className="container"><SectionHead inverse eyebrow={solution.kicker} title={labels[2]} description={solution.summary} /><div className="capability-grid">{solution.capabilities.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></div></section><section className="section"><div className="container"><ListCard title={labels[3]} items={solution.outcomes} /></div></section><Cta locale={locale} site={site} /></>;
}
