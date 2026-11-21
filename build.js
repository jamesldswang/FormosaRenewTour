// Bundles the site into ONE standalone HTML file for sharing (LINE / email / Drive).
// Usage: node build.js   (or double-click build.bat)
// Output: dist/FormosaRenewTour-v<version>.html
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");

const data = read("data.js");
const m = data.match(/const SITE_VERSION = "([^"]+)"/);
if (!m) throw new Error("SITE_VERSION not found in data.js");
const version = m[1];

let html = read("index.html");
const swaps = [
  ['<link rel="stylesheet" href="styles.css">', "<style>\n" + read("styles.css") + "\n</style>"],
  ['<script src="data.js"></script>', "<script>\n" + data + "\n</script>"],
  ['<script src="app.js"></script>', "<script>\n" + read("app.js") + "\n</script>"]
];
for (const [from, to] of swaps) {
  if (!html.includes(from)) throw new Error("Not found in index.html: " + from);
  html = html.replace(from, () => to);
}

fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
const out = path.join(dir, "dist", `FormosaRenewTour-v${version}.html`);
fs.writeFileSync(out, html);
console.log(`Built ${out} (${(html.length / 1024).toFixed(1)} KB)`);
