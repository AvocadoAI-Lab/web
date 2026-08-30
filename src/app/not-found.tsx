import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The requested Avocado.ai page is unavailable.</p>
      <Link className="button primary" href="/zh-Hant">Return home</Link>
    </main>
  );
}
