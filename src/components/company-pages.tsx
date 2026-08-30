import { Cta, Eyebrow, ListCard, PageHero, SectionHead } from "@/components/portal-ui";
import type { Founder, Locale, Site, Triple } from "@/lib/content";

export function FoundersPage({ locale, site }: { locale: Locale; site: Site }) {
  const people = site.founders.people as readonly Founder[];
  const model = locale === "zh-Hant" ? ["市場訊號進入產品優先序", "技術判斷以場域證據驗證", "客戶成功回饋產品與服務設計", "重大公開主張保留核准責任"] : ["Market signals inform product priority", "Technical judgment is validated with field evidence", "Customer success feeds product and service design", "Material public claims keep an accountable approval owner"];
  return <><PageHero page={site.pages.founders} /><section className="section soft-grid"><div className="container founder-detail-grid">{people.map(([name, localName, role, bio]) => <article className="founder-card large" key={name}><div className="portrait" aria-hidden="true"><span>{name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span></div><span className="approval">PROFILE PENDING APPROVAL</span><h2>{name}</h2><b>{localName}</b><strong>{role}</strong><p>{bio}</p></article>)}</div></section><section className="section"><div className="container split"><SectionHead eyebrow="OPERATING MODEL" title={locale === "zh-Hant" ? "以互補責任建立同一套產品判斷。" : "Use complementary accountability to make one product decision."} /><ListCard title={locale === "zh-Hant" ? "共同運作原則" : "Shared operating principles"} items={model} /></div></section><Cta locale={locale} site={site} /></>;
}

export function TrustPage({ locale, site }: { locale: Locale; site: Site }) {
  const sections = locale === "zh-Hant"
    ? [["Public Site Boundary", ["匿名瀏覽為預設", "不存放客戶 telemetry、報告或租戶資料", "Contact 僅導向核准管道", "安全標頭與最小化前端程式"]], ["Future Customer Portal", ["獨立應用與部署生命週期", "企業身分、MFA 與租戶授權", "伺服器端 BFF 與稽核事件", "限時支援權限與客戶核准"]], ["Claims Governance", ["客戶、數字、SLA 與認證需有來源", "匿名案例仍需正確標示合作狀態", "中英文主張強度保持一致", "核准、到期與撤回可追蹤"]], ["Secure Delivery", ["機密資訊不進公開表單", "依賴與憑證掃描", "Preview 與 Production 分離", "CSP 於第三方來源確定後導入"]]]
    : [["Public Site Boundary", ["Anonymous browsing by default", "No customer telemetry, reports, or tenant data", "Contact routes only to approved channels", "Security headers and minimal client JavaScript"]], ["Future Customer Portal", ["Separate application and deployment lifecycle", "Enterprise identity, MFA, and tenant authorization", "Server-side BFF and audit events", "Time-limited support access with customer approval"]], ["Claims Governance", ["Customers, metrics, SLAs, and certifications require sources", "Anonymous cases still state relationship status accurately", "Claim strength remains consistent across locales", "Approval, expiry, and withdrawal remain traceable"]], ["Secure Delivery", ["Sensitive information stays out of public forms", "Dependency and credential scanning", "Preview and production separation", "CSP after third-party origins are finalized"]]];
  return <><PageHero page={site.pages.trust} /><section className="section soft-grid"><div className="container card-grid two">{sections.map(([title, items]) => <ListCard key={title as string} title={title as string} items={items as readonly string[]} />)}</div></section><Cta locale={locale} site={site} /></>;
}

export function ResourcesPage({ locale, site }: { locale: Locale; site: Site }) {
  const resources = site.resources.items as readonly Triple[];
  const topics = ["Threat-Informed Resilience", "AI-Native Security Operations", "Healthcare Validation", "Fab EnMS & OT", "Secure AI Governance", "Founder Field Notes"];
  return <><PageHero page={site.pages.resources} /><section className="section soft-grid"><div className="container"><div className="tags topic-tags">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div><div className="card-grid three">{resources.map(([type, title, text]) => <article className="resource-card" key={title}><span>{type}</span><h2>{title}</h2><p>{text}</p><b>{locale === "zh-Hant" ? "內容審核中" : "Editorial review in progress"}</b></article>)}</div></div></section><Cta locale={locale} site={site} /></>;
}

export function ContactPage({ locale, site }: { locale: Locale; site: Site }) {
  const workshops = locale === "zh-Hant"
    ? [["SMB 資安營運健檢", "盤點既有工具、告警處理、人力、報告與代管需求。"], ["Fab Data & EnMS Readiness", "盤點 CT、閘道器、階層、資料品質、ISO 50001 與 OT 擴充目標。"], ["醫療韌性工作坊", "盤點 EDR、NDR、WAF、IoMT、威脅情境、Lab 邊界與複測目標。"], ["夥伴與投資人 Briefing", "討論通路、共同方案、產品策略、場域證據與合作模式。"]]
    : [["SMB Security Operations Readiness", "Review existing tools, alert handling, staffing, reporting, and managed-service needs."], ["Fab Data & EnMS Readiness", "Review CT, gateways, hierarchy, data quality, ISO 50001, and OT expansion goals."], ["Healthcare Resilience Workshop", "Review EDR, NDR, WAF, IoMT, threat scenarios, lab boundaries, and re-test goals."], ["Partner & Investor Briefing", "Discuss channels, joint solutions, product strategy, field evidence, and collaboration models."]];
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const booking = process.env.NEXT_PUBLIC_BOOKING_URL;
  return <><PageHero page={site.pages.contact} /><section className="section soft-grid"><div className="container contact-grid"><div className="card-grid two">{workshops.map(([title, text]) => <article className="feature-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div><aside className="contact-panel"><Eyebrow>CONTACT</Eyebrow><h2>{locale === "zh-Hant" ? "選擇核准的聯絡管道" : "Use an approved contact channel"}</h2><p>{site.pages.contact[2]}</p>{email ? <a className="button primary" href={`mailto:${email}`}>{email}<span>↗</span></a> : <span className="disabled-action">{locale === "zh-Hant" ? "公司信箱待核准" : "Corporate email pending approval"}</span>}{booking ? <a className="button secondary" href={booking}>{locale === "zh-Hant" ? "開啟預約連結" : "Open booking link"}<span>↗</span></a> : <span className="disabled-action">{locale === "zh-Hant" ? "預約連結待核准" : "Booking link pending approval"}</span>}</aside></div></section></>;
}
