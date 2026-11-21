// Site version — single source of truth. Bump this (and CHANGELOG.md) for each release.
const SITE_VERSION = "1.2.0";

// Language registry. Each file in lang/ adds itself: LANGS.en = {...}, LANGS["zh-Hant"] = {...}
// To add a language: create lang/<code>.js (copy en.js), add a <script> tag in index.html,
// and add the code to LANG_ORDER.
const LANGS = {};
const LANG_ORDER = ["en", "zh-Hant", "zh-Hans"];
const DEFAULT_LANG = "en";

// IMPORTANT: Verify every hospital's services, accreditation and prices with its
// International Medical Center before going live. Prices are reference figures only.
