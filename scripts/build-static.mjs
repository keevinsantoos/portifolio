import { access, cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "src");
const output = join(root, "dist");
const pages = [
  "index.html",
  "404.html",
  "contact.html",
  "services.html",
  "script.js",
  "styles.css",
];

for (const page of pages) {
  await access(join(source, page));
}
await access(join(source, "public"));

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of pages) {
  await cp(join(source, page), join(output, page));
}
await cp(join(source, "public"), join(output, "public"), { recursive: true });

console.log(`Static portfolio built in ${output}`);
