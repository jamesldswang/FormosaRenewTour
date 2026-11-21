// Site content data. Edit here to update packages, hospitals and prices.
// IMPORTANT: Verify every hospital's services, accreditation and prices with its
// International Medical Center before going live. Prices are reference figures only.

const PACKAGES = [
  {
    id: "health-check",
    title: "Executive Health Check & Taipei Highlights",
    days: 4,
    tag: "Medical",
    icon: "🩺",
    summary: "A full-day executive health screening at a medical-center hospital, then three relaxed days of Taipei 101, night markets, Beitou hot springs and Jiufen.",
    medical: "Comprehensive check-up (blood, imaging, endoscopy options) with an English-speaking doctor review before you fly home.",
    itinerary: [
      "Day 1 — Airport pickup, hotel check-in, welcome dinner (fasting starts at night)",
      "Day 2 — Health check at partner hospital, afternoon rest, Raohe Night Market",
      "Day 3 — Jiufen old street & Shifen sky lanterns",
      "Day 4 — Doctor's results consultation, Beitou hot spring, departure"
    ]
  },
  {
    id: "glow",
    title: "Glow Retreat — Skin & Sun Moon Lake",
    days: 6,
    tag: "Aesthetic",
    icon: "✨",
    summary: "Non-invasive aesthetic treatments with little or no downtime, paired with tea country, lake cruises and slow travel in central Taiwan.",
    medical: "Laser skin rejuvenation, skin tightening, injectables — plan agreed with the doctor after an online pre-consultation.",
    itinerary: [
      "Day 1 — Arrive Taipei, rest",
      "Day 2 — Clinic consultation & treatment, gentle afternoon at Huashan 1914",
      "Day 3 — High-speed rail to Taichung, Rainbow Village & Fengjia",
      "Day 4 — Sun Moon Lake boat cruise & Ita Thao (hat & sunscreen provided)",
      "Day 5 — Alishan or Nantou tea farm experience",
      "Day 6 — Follow-up check (in person or video), departure"
    ]
  },
  {
    id: "fresh-look",
    title: "Fresh Look — Surgery & Gentle Recovery",
    days: 10,
    tag: "Aesthetic",
    icon: "🌸",
    summary: "Cosmetic procedures such as double-eyelid or rhinoplasty with a recovery-first itinerary: private car, quiet hotel, low-intensity outings only after the doctor says yes.",
    medical: "Surgeon consultation, procedure, post-op checks and stitch removal before you fly. Nurse hotline during your stay.",
    itinerary: [
      "Day 1 — Arrive, private transfer, recovery-friendly hotel",
      "Day 2 — Surgeon consultation & pre-op tests",
      "Day 3 — Procedure day",
      "Days 4–6 — Rest at hotel, meal delivery, day-5 follow-up",
      "Days 7–8 — Light outings: museums, tea houses, Dadaocheng (doctor-approved)",
      "Day 9 — Stitch removal / final check",
      "Day 10 — Departure"
    ]
  },
  {
    id: "smile",
    title: "Smile Makeover & Taiwan Food Tour",
    days: 7,
    tag: "Dental",
    icon: "😁",
    summary: "Veneers, whitening or implant first-stage treatment, scheduled around a guided food tour of Taipei and Tainan.",
    medical: "Digital smile design, treatment over 2–3 visits. Implants may need a second trip after healing.",
    itinerary: [
      "Day 1 — Arrive Taipei",
      "Day 2 — Dental exam, scan & smile design",
      "Day 3 — Taipei food walk (soft-food friendly options)",
      "Day 4 — Treatment visit",
      "Day 5 — High-speed rail to Tainan: temples & snacks",
      "Day 6 — Return to Taipei, final fitting",
      "Day 7 — Departure"
    ]
  },
  {
    id: "fertility",
    title: "Fertility Journey (IVF)",
    days: 21,
    tag: "Medical",
    icon: "🤍",
    summary: "A long-stay plan built around an IVF cycle at a hospital fertility center — serviced apartment, private driver, and calm day trips for couples.",
    medical: "Cycle planning with the hospital, monitoring visits, egg retrieval and transfer. Reference cost ≈ NT$230,000–250,000 per uncomplicated cycle (NTUH reference).",
    itinerary: [
      "Week 1 — Arrival, consultation, start stimulation, light city outings",
      "Week 2 — Monitoring visits, Yangmingshan & Tamsui sunset",
      "Week 3 — Retrieval & transfer, rest-focused days, departure when cleared"
    ]
  },
  {
    id: "specialist",
    title: "Specialist Care & Family Companion Tour",
    days: 0,
    tag: "Medical",
    icon: "🏥",
    summary: "Cardiology, orthopaedic & joint replacement, cancer care, proton therapy or liver transplant — we coordinate travel and accommodation; the hospital leads all medical care.",
    medical: "The hospital's International Medical Center reviews your records, quotes the cost and issues the invitation letter for a medical visa.",
    itinerary: [
      "Before travel — Send records to hospital, receive quote & invitation letter",
      "Arrival — Airport pickup, hotel or serviced apartment near the hospital",
      "During treatment — Interpreter support, separate sightseeing for family members",
      "After — Recovery stay, follow-up plan with your home doctor"
    ]
  }
];

// Reference prices from hospital-published self-pay standards (international patient rates).
// USD at approx. NT$32 = US$1. Always get an individual quote.
const PRICES = [
  { item: "IVF — one uncomplicated cycle", taiwan: "NT$230,000–250,000", usd: "≈ US$7,200–7,800", note: "NTUH reference; excludes embryo freezing / ICSI" },
  { item: "Living-donor liver transplant", taiwan: "NT$2–3 million", usd: "≈ US$62,000–94,000", note: "Includes donor & recipient (NTUH / MacKay cases)" },
  { item: "Proton therapy (IMPT) per session", taiwan: "NT$21,700–34,500", usd: "≈ US$680–1,080", note: "NTU Cancer Center; excludes planning & simulation" },
  { item: "Brain SRS, one course (≤3 sessions)", taiwan: "≈ NT$280,000", usd: "≈ US$8,750", note: "Treatment fee only" },
  { item: "Spine surgery (example case)", taiwan: "≈ NT$150,000", usd: "≈ US$4,700", note: "vs. > NT$1 million in the US" },
  { item: "International patient registration", taiwan: "NT$2,000 / visit", usd: "≈ US$63", note: "NTU Cancer Center administrative fee" }
];

const STRENGTHS = [
  { title: "Liver Transplant", stat: "93.5%", label: "5-year survival — higher than Japan & the US" },
  { title: "Cardiology", stat: "99%", label: "Coronary stent success rate; 'Taipei approach' AF ablation" },
  { title: "Fertility (IVF)", stat: "~50%", label: "of the global average cost; ~36.7% transfer success" },
  { title: "Cancer & Proton", stat: "73%", label: "5-year cancer survival vs. 67% Western average" },
  { title: "Joint Replacement", stat: "20,000+", label: "cases a year; robotic-arm surgery widely available" }
];

const AESTHETICS = [
  { name: "Laser & pigment treatment", downtime: "0–3 days", fly: "Next day", icon: "💡" },
  { name: "Skin tightening (HIFU / RF)", downtime: "0–2 days", fly: "Next day", icon: "🌟" },
  { name: "Botox & fillers", downtime: "0–2 days", fly: "1–2 days", icon: "💉" },
  { name: "Double-eyelid surgery", downtime: "5–7 days", fly: "After stitch removal", icon: "👁️" },
  { name: "Rhinoplasty", downtime: "7–14 days", fly: "After splint removal", icon: "👃" },
  { name: "Liposuction / body contouring", downtime: "7–14 days", fly: "Doctor clearance", icon: "🩱" },
  { name: "Dental veneers & whitening", downtime: "0 days", fly: "Next day", icon: "🦷" },
  { name: "LASIK / vision correction", downtime: "1–3 days", fly: "After day-1 check", icon: "👓" }
];

// Hospitals with international patient services. Specialties are highlights, not complete lists.
const HOSPITALS = [
  { name: "National Taiwan University Hospital", city: "Taipei", region: "North", tags: ["Transplant", "Fertility", "Cancer", "Health Check"] },
  { name: "Taipei Veterans General Hospital", city: "Taipei", region: "North", tags: ["Cardiology", "Cancer", "Health Check"] },
  { name: "Taipei Medical University Hospital", city: "Taipei", region: "North", tags: ["Fertility", "Dental", "Aesthetic", "JCI"] },
  { name: "MacKay Memorial Hospital", city: "Taipei", region: "North", tags: ["Transplant", "Health Check"] },
  { name: "Cathay General Hospital", city: "Taipei", region: "North", tags: ["Health Check", "Cardiology"] },
  { name: "Taiwan Adventist Hospital", city: "Taipei", region: "North", tags: ["Health Check", "JCI"] },
  { name: "Chang Gung Memorial Hospital (Linkou)", city: "Taoyuan", region: "North", tags: ["Aesthetic", "Cancer", "Transplant", "Orthopaedics"] },
  { name: "Min-Sheng General Hospital", city: "Taoyuan", region: "North", tags: ["Health Check", "Orthopaedics"] },
  { name: "Taichung Veterans General Hospital", city: "Taichung", region: "Central", tags: ["Cardiology", "Cancer", "Health Check"] },
  { name: "China Medical University Hospital", city: "Taichung", region: "Central", tags: ["Cancer", "Chinese Medicine", "Health Check"] },
  { name: "Changhua Christian Hospital", city: "Changhua", region: "Central", tags: ["Cardiology", "Orthopaedics"] },
  { name: "Show Chwan Memorial Hospital", city: "Changhua", region: "Central", tags: ["Health Check", "Orthopaedics"] },
  { name: "National Cheng Kung University Hospital", city: "Tainan", region: "South", tags: ["Cancer", "Cardiology"] },
  { name: "Kaohsiung Chang Gung Memorial Hospital", city: "Kaohsiung", region: "South", tags: ["Transplant", "Cancer"] },
  { name: "Kaohsiung Medical University Hospital", city: "Kaohsiung", region: "South", tags: ["Health Check", "Dental"] },
  { name: "E-Da Hospital", city: "Kaohsiung", region: "South", tags: ["Health Check", "Aesthetic"] }
];

const FAQS = [
  { q: "Do you book my hospital appointment?", a: "The hospital's International Medical Center is your single point of contact for all medical matters — record review, appointments, quotes and visa letters. We refer you to the right center, align your travel dates with the treatment plan, and handle everything outside the hospital: flights, hotels, transport, interpreters and sightseeing." },
  { q: "Do I need a medical visa?", a: "Many nationalities can enter Taiwan visa-free for short stays. If you need a visa, or plan a longer treatment, the hospital can issue a diagnosis, treatment plan and invitation letter to support a Visitor Visa for Medical Treatment. Requirements: passport valid 6+ months, photos, and the hospital letter. Check with your nearest Taiwan representative office." },
  { q: "Will I pay Taiwanese prices?", a: "International patients pay self-pay rates, which are regulated: hospitals charge a multiple of the National Health Insurance or local health-bureau approved rate. Registration and exam fees are higher than local NHI prices, but overall costs are still well below the US, Europe and Japan." },
  { q: "Is it safe to sightsee after a procedure?", a: "We build itineraries around your recovery, not the other way round. Active sightseeing comes before surgery or after doctor clearance. Your surgeon always has the final say on activities and your flight date." },
  { q: "Will doctors speak English?", a: "Hospital international centers have English-speaking coordinators and many doctors trained in the US, UK or Japan. We can add a medical interpreter for Japanese, Korean, Vietnamese, Thai, Indonesian and more." },
  { q: "Can my family come along?", a: "Yes. Companions can join a separate guided tour while you are in treatment, and we arrange family rooms or serviced apartments near the hospital." }
];
