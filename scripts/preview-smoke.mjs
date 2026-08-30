import { spawn } from "node:child_process";

const host = process.env.PREVIEW_HOST || "127.0.0.1";
const port = Number(process.env.PREVIEW_PORT || "3100");
const origin = `http://${host}:${port}`;
const routes = [
  "/zh-Hant",
  "/en",
  "/zh-Hant/platform",
  "/en/trust",
  "/zh-Hant/solutions/managed-security",
];

const preview = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "start", "--", "--hostname", host, "--port", String(port)],
  { env: process.env, stdio: ["ignore", "pipe", "pipe"] },
);

let logs = "";
preview.stdout.on("data", (chunk) => {
  logs += chunk.toString();
  process.stdout.write(chunk);
});
preview.stderr.on("data", (chunk) => {
  logs += chunk.toString();
  process.stderr.write(chunk);
});

async function stop() {
  if (!preview.killed) preview.kill("SIGTERM");
  await new Promise((resolve) => setTimeout(resolve, 250));
  if (!preview.killed) preview.kill("SIGKILL");
}

async function waitForPreview() {
  const deadline = Date.now() + 45_000;
  let lastError;

  while (Date.now() < deadline) {
    if (preview.exitCode !== null) {
      throw new Error(`Preview exited before becoming ready (code ${preview.exitCode}).\n${logs}`);
    }

    try {
      const response = await fetch(`${origin}/zh-Hant`, { redirect: "follow" });
      if (response.ok) return;
      lastError = new Error(`Readiness request returned HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 750));
  }

  throw new Error(`Preview did not become ready at ${origin}: ${lastError?.message || "timeout"}`);
}

try {
  await waitForPreview();

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`, { redirect: "follow" });
    const html = await response.text();

    if (!response.ok) {
      throw new Error(`${route} returned HTTP ${response.status}`);
    }
    if (!html.includes("Avocado.ai")) {
      throw new Error(`${route} did not render the Avocado.ai shell`);
    }

    console.log(`Preview smoke passed: ${route}`);
  }
} finally {
  await stop();
}
