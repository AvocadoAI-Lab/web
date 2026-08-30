import fs from "node:fs";
const source = fs.readFileSync(new URL("../src/lib/content.ts", import.meta.url), "utf8");
const routes = ["/platform", "/solutions/managed-security", "/solutions/fab-intelligence", "/solutions/healthcare-resilience", "/company/founders", "/trust", "/resources", "/contact"];
for (const route of routes) if (!source.includes(`\"${route}\"`)) throw new Error(`Missing route declaration: ${route}`);
console.log("Route verification passed for all bilingual portal routes.");
