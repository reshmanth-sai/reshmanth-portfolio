// Downloads Clash Display and Satoshi from Fontshare into public/fonts so they
// can be self-hosted with next/font/local. Run: node scripts/fetch-fonts.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const FAMILIES = ["clash-display@500,600,700", "satoshi@400,500,700"]; // the API also returns Cabinet Grotesk with Clash; it is skipped below
const OUT = path.resolve("public/fonts");

// One request per family: the API returns the wrong family when several are combined.
let css = "";
for (const f of FAMILIES) {
  css += await fetch(`https://api.fontshare.com/v2/css?f[]=${f}&display=swap`).then((r) => r.text());
}

const faces = [...css.matchAll(/@font-face\s*{([^}]+)}/g)].map((m) => {
  const block = m[1];
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
  const woff2 = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  const ttf = /url\('([^']+\.ttf)'\)/.exec(block)?.[1];
  const abs = (u) => (u?.startsWith("//") ? `https:${u}` : u);
  return { family, weight, url: abs(woff2), ttf: abs(ttf) };
});

await mkdir(OUT, { recursive: true });
// TTF copies of two faces are kept for the OpenGraph image (satori cannot read woff2).
const TTF_KEEP = new Set(["clash-display-600", "satoshi-400"]);
for (const { family, weight, url, ttf } of faces) {
  if (!family || !weight || !url || family === "Cabinet Grotesk") continue;
  const slug = family.toLowerCase().replace(/\s+/g, "-");
  const targets = [[url, "woff2"]];
  if (ttf && TTF_KEEP.has(`${slug}-${weight}`)) targets.push([ttf, "ttf"]);
  for (const [src, ext] of targets) {
    const file = path.join(OUT, `${slug}-${weight}.${ext}`);
    const buf = Buffer.from(await fetch(src).then((r) => r.arrayBuffer()));
    await writeFile(file, buf);
    console.log(`${slug}-${weight}.${ext}  ${(buf.length / 1024).toFixed(0)} KB`);
  }
}
