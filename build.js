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
const css = '<link rel="stylesheet" href="styles.css">';
if (!html.includes(css)) throw new Error("Not found in index.html: " + css);
html = html.replace(css, () => "<style>\n" + read("styles.css") + "\n</style>");

// Inline every local <script src="..."> (data.js, lang/*.js, app.js), keeping their order
let count = 0;
html = html.replace(/<script src="([^":]+)"><\/script>/g, (_, src) => {
  count++;
  return "<script>\n" + read(src).replace(/<\/script/gi, "<\\/script") + "\n</script>";
});
if (count < 3) throw new Error("Expected data.js, lang files and app.js, found " + count + " scripts");
if (/<script src="[^":]+">/.test(html)) throw new Error("A local script was not inlined");

fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
const out = path.join(dir, "dist", `FormosaRenewTour-v${version}.html`);
fs.writeFileSync(out, html);
console.log(`Built ${out} (${(html.length / 1024).toFixed(1)} KB)`);
