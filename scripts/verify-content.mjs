import fs from "node:fs";

const root = new URL("../src/lib/", import.meta.url);
const content = ["content.ts", "content/zh.ts", "content/en.ts"]
  .map((file) => fs.readFileSync(new URL(file, root), "utf8"))
  .join("\n");
const required = ["zh-Hant", "en", "managed-security", "fab-intelligence", "healthcare-resilience", "Rain Chung", "Eric Mao", "Evidence Episode"];
for (const value of required) if (!content.includes(value)) throw new Error(`Missing required content: ${value}`);
const forbidden = ["童綜合", "美光", "Micron", "Tungs", "1,700+", "10,207 kWh"];
for (const value of forbidden) if (content.includes(value)) throw new Error(`Unapproved public claim found: ${value}`);
console.log("Content verification passed for both locales and governed public claims.");
