const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- Language ----------
const LANG_KEY = "frt-lang";
let lang = DEFAULT_LANG;
let L = LANGS[DEFAULT_LANG];

// UI text with fallback to English, then to the key itself
const t = (key) => (L.ui[key] ?? LANGS[DEFAULT_LANG].ui[key] ?? key);
// Content list with fallback to English
const content = (name) => L[name] || LANGS[DEFAULT_LANG][name];

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (LANGS[saved]) return saved;
  } catch (e) { /* storage blocked — ignore */ }
  for (const nav of navigator.languages || [navigator.language || ""]) {
    const n = nav.toLowerCase();
    if (/^zh-(tw|hk|mo|hant)/.test(n)) return "zh-Hant";
    if (n.startsWith("zh")) return "zh-Hans";
    if (n.startsWith("en")) return "en";
  }
  return DEFAULT_LANG;
}

function setLang(code, save) {
  lang = LANGS[code] ? code : DEFAULT_LANG;
  L = LANGS[lang];
  document.documentElement.lang = L.htmlLang;
  document.title = t("meta.title");
  $('meta[name="description"]').setAttribute("content", t("meta.desc"));
  $("#lang-select").value = lang;
  if (save) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    try {
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (e) { /* file:// in some browsers — ignore */ }
  }
  renderAll();
}

$("#lang-select").innerHTML = LANG_ORDER.filter((c) => LANGS[c])
  .map((c) => `<option value="${c}">${esc(LANGS[c].name)}</option>`).join("");
$("#lang-select").addEventListener("change", (e) => setLang(e.target.value, true));

// ---------- Static text ----------
function renderStatic() {
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); }); // trusted, from our own lang files
}

// ---------- Packages ----------
const state = { pkgTag: "All", pace: "All" };

function renderPackages() {
  const list = content("packages").filter((p) => state.pkgTag === "All" || p.tag === state.pkgTag);
  $("#pkg-grid").innerHTML = list.map((p) => `
    <article class="card">
      <div class="card-top">
        <span class="tag">${esc(t("tag." + p.tag))}</span>
        <div class="icon">${p.icon}</div>
        <h3>${esc(p.title)}</h3>
        <div class="card-meta">${esc(p.days ? t("card.days").replace("{n}", p.days) : t("card.custom"))}</div>
      </div>
      <div class="card-body">
        <p>${esc(p.summary)}</p>
        <p class="med ${p.tag === "Travel" ? "addon" : ""}"><strong>${esc(t(p.tag === "Travel" ? "card.addon" : "card.treatment"))}</strong> ${esc(p.medical)}</p>
        <details class="itin">
          <summary>${esc(t("card.itinerary"))}</summary>
          <ul>${p.itinerary.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        </details>
        <a href="#contact" class="btn" data-pkg="${esc(p.id)}">${esc(t("card.enquire"))}</a>
      </div>
    </article>`).join("");
}

$("#pkg-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  $$("#pkg-filters .chip").forEach((c) => c.classList.toggle("active", c === btn));
  state.pkgTag = btn.dataset.tag;
  renderPackages();
});

// Clicking "Enquire" pre-selects the package in the contact form
$("#pkg-grid").addEventListener("click", (e) => {
  const a = e.target.closest("[data-pkg]");
  if (a) $("#interest").value = a.dataset.pkg;
});

// ---------- Destinations ----------
const PACE_DOT = { Easy: "🟢", Moderate: "🟡", Active: "🔴" };
function renderDestinations() {
  $("#dest-grid").innerHTML = content("destinations")
    .filter((d) => state.pace === "All" || d.pace === state.pace).map((d) => `
    <div class="d-card">
      <div class="d-head"><span class="icon">${d.icon}</span><div><h4>${esc(d.name)}</h4><div class="city">${esc(t("region." + d.region))}</div></div></div>
      <p>${esc(d.desc)}</p>
      <span class="pace pace-${d.pace.toLowerCase()}">${PACE_DOT[d.pace]} ${esc(t("pace." + d.pace))}</span>
    </div>`).join("");
}
$("#dest-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  $$("#dest-filters .chip").forEach((c) => c.classList.toggle("active", c === btn));
  state.pace = btn.dataset.pace;
  renderDestinations();
});

// ---------- Simple lists ----------
function renderLists() {
  $("#ess-grid").innerHTML = content("essentials").map((x) => `
    <div class="ess-item"><div class="icon">${x.icon}</div><h4>${esc(x.title)}</h4><p>${esc(x.text)}</p></div>`).join("");

  $("#stats-grid").innerHTML = content("strengths").map((s) => `
    <div class="stat"><div class="num">${esc(s.stat)}</div><h4>${esc(s.title)}</h4><p>${esc(s.label)}</p></div>`).join("");

  $("#price-body").innerHTML = content("prices").map((p) => `
    <tr><td>${esc(p.item)}</td><td>${esc(p.taiwan)}</td><td>${esc(p.usd)}</td><td>${esc(p.note)}</td></tr>`).join("");

  $("#aes-grid").innerHTML = content("aesthetics").map((a) => `
    <div class="aes-item">
      <div class="icon">${a.icon}</div>
      <h4>${esc(a.name)}</h4>
      <dl><dt>${esc(t("aes.downtime"))}</dt><dd>${esc(a.downtime)}</dd><dt>${esc(t("aes.fly"))}</dt><dd>${esc(a.fly)}</dd></dl>
    </div>`).join("");

  $("#faq-list").innerHTML = content("faqs").map((f) => `
    <details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
}

// ---------- Hospitals ----------
function renderHospitalFilters() {
  const region = $("#h-region").value || "All";
  const tag = $("#h-tag").value || "All";
  const hospitals = content("hospitals");
  const regions = [...new Set(hospitals.map((h) => h.region))];
  const tags = [...new Set(hospitals.flatMap((h) => h.tags))].sort();
  $("#h-region").innerHTML = `<option value="All">${esc(t("hosp.allRegions"))}</option>` +
    regions.map((r) => `<option value="${esc(r)}">${esc(t("region." + r))}</option>`).join("");
  $("#h-tag").innerHTML = `<option value="All">${esc(t("hosp.allTags"))}</option>` +
    tags.map((x) => `<option value="${esc(x)}">${esc(t("htag." + x))}</option>`).join("");
  $("#h-region").value = region;
  $("#h-tag").value = tag;
}

function renderHospitals() {
  const region = $("#h-region").value;
  const tag = $("#h-tag").value;
  const list = content("hospitals").filter((h) => (region === "All" || h.region === region) && (tag === "All" || h.tags.includes(tag)));
  $("#hosp-grid").innerHTML = list.length
    ? list.map((h) => `
      <div class="h-card">
        <h4>${esc(h.name)}</h4>
        <div class="city">📍 ${esc(h.city)} · ${esc(t("region." + h.region))}</div>
        <div class="h-tags">${h.tags.map((x) => `<span class="${x === "JCI" ? "jci" : ""}">${esc(t("htag." + x))}</span>`).join("")}</div>
      </div>`).join("")
    : `<p class="empty">${esc(t("hosp.empty"))}</p>`;
}
$("#h-region").addEventListener("change", renderHospitals);
$("#h-tag").addEventListener("change", renderHospitals);

// ---------- Contact form ----------
// No backend yet: opens the visitor's email app with the enquiry filled in.
const CONTACT_EMAIL = "hello@formosarenewtour.com"; // TODO: replace with your real email

function renderInterestOptions() {
  const current = $("#interest").value;
  $("#interest").innerHTML = content("packages").map((p) => `<option value="${esc(p.id)}">${esc(p.title)}</option>`).join("") +
    `<option value="other">${esc(t("form.other"))}</option>`;
  if (current) $("#interest").value = current;
}

$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const pkg = $("#interest").selectedOptions[0].text;
  const body = [
    `${t("form.name")}: ${d.name}`, `${t("form.email")}: ${d.email}`, `${t("form.country")}: ${d.country}`,
    `${t("form.interest")}: ${pkg}`, `${t("form.month")}: ${d.month}`, `${t("form.travelers")}: ${d.travelers}`,
    `Language: ${L.name}`, "", d.message
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t("form.subject") + ": " + pkg)}&body=${encodeURIComponent(body)}`;
  $("#form-note").textContent = t("form.thanks");
});

// ---------- Render everything ----------
function renderAll() {
  renderStatic();
  renderPackages();
  renderDestinations();
  renderLists();
  renderHospitalFilters();
  renderHospitals();
  renderInterestOptions();
  $("#form-note").textContent = "";
}

// ---------- Mobile menu & misc ----------
const menuBtn = $(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = $(".nav-links").classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
$$(".nav-links a").forEach((a) => a.addEventListener("click", () => $(".nav-links").classList.remove("open")));
$("#year").textContent = new Date().getFullYear();
$("#version").textContent = "v" + SITE_VERSION;

setLang(detectLang(), false);
