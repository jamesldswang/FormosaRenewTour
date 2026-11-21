const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- Packages ----------
function renderPackages(tag = "All") {
  const list = PACKAGES.filter((p) => tag === "All" || p.tag === tag);
  $("#pkg-grid").innerHTML = list.map((p) => `
    <article class="card">
      <div class="card-top">
        <span class="tag">${esc(p.tag)}</span>
        <div class="icon">${p.icon}</div>
        <h3>${esc(p.title)}</h3>
        <div class="card-meta">${p.days ? `${p.days} days · Private tour` : "Custom length · Private tour"}</div>
      </div>
      <div class="card-body">
        <p>${esc(p.summary)}</p>
        <p class="med ${p.tag === "Travel" ? "addon" : ""}"><strong>${p.tag === "Travel" ? "Optional add-on:" : "Treatment:"}</strong> ${esc(p.medical)}</p>
        <details class="itin">
          <summary>Sample itinerary</summary>
          <ul>${p.itinerary.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        </details>
        <a href="#contact" class="btn" data-pkg="${p.id}">Enquire about this journey »</a>
      </div>
    </article>`).join("");
}

$("#pkg-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll("#pkg-filters .chip").forEach((c) => c.classList.toggle("active", c === btn));
  renderPackages(btn.dataset.tag);
});

// Clicking "Enquire" pre-selects the package in the contact form
$("#pkg-grid").addEventListener("click", (e) => {
  const a = e.target.closest("[data-pkg]");
  if (a) $("#interest").value = a.dataset.pkg;
});

// ---------- Destinations ----------
const PACE_DOT = { Easy: "🟢", Moderate: "🟡", Active: "🔴" };
function renderDestinations(pace = "All") {
  $("#dest-grid").innerHTML = DESTINATIONS.filter((d) => pace === "All" || d.pace === pace).map((d) => `
    <div class="d-card">
      <div class="d-head"><span class="icon">${d.icon}</span><div><h4>${esc(d.name)}</h4><div class="city">${esc(d.region)} Taiwan</div></div></div>
      <p>${esc(d.desc)}</p>
      <span class="pace pace-${d.pace.toLowerCase()}">${PACE_DOT[d.pace]} ${esc(d.pace)}</span>
    </div>`).join("");
}
$("#dest-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll("#dest-filters .chip").forEach((c) => c.classList.toggle("active", c === btn));
  renderDestinations(btn.dataset.pace);
});

// ---------- Travel essentials ----------
$("#ess-grid").innerHTML = ESSENTIALS.map((x) => `
  <div class="ess-item"><div class="icon">${x.icon}</div><h4>${esc(x.title)}</h4><p>${esc(x.text)}</p></div>`).join("");

// ---------- Why Taiwan ----------
$("#stats-grid").innerHTML = STRENGTHS.map((s) => `
  <div class="stat"><div class="num">${esc(s.stat)}</div><h4>${esc(s.title)}</h4><p>${esc(s.label)}</p></div>`).join("");

$("#price-body").innerHTML = PRICES.map((p) => `
  <tr><td>${esc(p.item)}</td><td>${esc(p.taiwan)}</td><td>${esc(p.usd)}</td><td>${esc(p.note)}</td></tr>`).join("");

// ---------- Aesthetics ----------
$("#aes-grid").innerHTML = AESTHETICS.map((a) => `
  <div class="aes-item">
    <div class="icon">${a.icon}</div>
    <h4>${esc(a.name)}</h4>
    <dl><dt>Downtime</dt><dd>${esc(a.downtime)}</dd><dt>Fly home</dt><dd>${esc(a.fly)}</dd></dl>
  </div>`).join("");

// ---------- Hospitals ----------
const allTags = [...new Set(HOSPITALS.flatMap((h) => h.tags))].sort();
$("#h-tag").innerHTML = `<option value="All">All specialties</option>` + allTags.map((t) => `<option>${esc(t)}</option>`).join("");

function renderHospitals() {
  const region = $("#h-region").value;
  const tag = $("#h-tag").value;
  const list = HOSPITALS.filter((h) => (region === "All" || h.region === region) && (tag === "All" || h.tags.includes(tag)));
  $("#hosp-grid").innerHTML = list.length
    ? list.map((h) => `
      <div class="h-card">
        <h4>${esc(h.name)}</h4>
        <div class="city">📍 ${esc(h.city)} · ${esc(h.region)} Taiwan</div>
        <div class="h-tags">${h.tags.map((t) => `<span class="${t === "JCI" ? "jci" : ""}">${esc(t)}</span>`).join("")}</div>
      </div>`).join("")
    : `<p class="empty">No hospitals match this filter — contact us and we'll find the right specialist.</p>`;
}
$("#h-region").addEventListener("change", renderHospitals);
$("#h-tag").addEventListener("change", renderHospitals);

// ---------- FAQ ----------
$("#faq-list").innerHTML = FAQS.map((f) => `
  <details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

// ---------- Contact form ----------
// No backend yet: opens the visitor's email app with the enquiry filled in.
const CONTACT_EMAIL = "hello@formosarenew.com"; // TODO: replace with your real email
$("#interest").innerHTML = PACKAGES.map((p) => `<option value="${p.id}">${esc(p.title)}</option>`).join("") +
  `<option value="other">Something else / not sure yet</option>`;

$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const pkg = $("#interest").selectedOptions[0].text;
  const body = [
    `Name: ${d.name}`, `Email: ${d.email}`, `Country: ${d.country}`,
    `Interested in: ${pkg}`, `Travel month: ${d.month}`, `Travelers: ${d.travelers}`, "", d.message
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry: " + pkg)}&body=${encodeURIComponent(body)}`;
  $("#form-note").textContent = "Thank you! Your email app should open — just press send.";
});

// ---------- Mobile menu & misc ----------
const menuBtn = $(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = $(".nav-links").classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => $(".nav-links").classList.remove("open")));
$("#year").textContent = new Date().getFullYear();

renderPackages();
renderDestinations();
renderHospitals();
