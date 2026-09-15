// Downloads Clash Display and Satoshi from Fontshare into public/fonts so they
// can be self-hosted with next/font/local. Run: node scripts/fetch-fonts.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const FAMILIES = ["clash-display@500,600,700", "satoshi@400,500,700"];
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
  const url = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  return { family, weight, url: url?.startsWith("//") ? `https:${url}` : url };
});

await mkdir(OUT, { recursive: true });
for (const { family, weight, url } of faces) {
  if (!family || !weight || !url) continue;
  const slug = family.toLowerCase().replace(/\s+/g, "-");
  const file = path.join(OUT, `${slug}-${weight}.woff2`);
  const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
  await writeFile(file, buf);
  console.log(`${slug}-${weight}.woff2  ${(buf.length / 1024).toFixed(0)} KB`);
}
