/* ═══════════════════════════════════════════════════════════════════════
   🖼  IMAGE PLACEHOLDERS — paste your image links here
   -----------------------------------------------------------------------
   Each key below maps to an <img data-image="..."> in the HTML.
   Paste a link between the quotation marks, e.g. "https://example.com/hero.png".
   Leave unused slots as "" — the frame simply stays white/empty.
   You may also paste a link straight into the img src="" in the HTML;
   this config is just a single, easy-to-find place for all of them.
   ═══════════════════════════════════════════════════════════════════════ */
const IMAGE_PLACEHOLDERS = {
  // mycheckout.html — case-study hero (the white frame at the top)
  hero: "",
  // mycheckout.html — brief section
  "brand-wide": "",
  brand: "",
  solution: "",
  // mycheckout.html — touchpoints section
  "loyalty-app": "",
  "activation-1": "",
  "activation-2": "",
  "selfcheckout-1": "",
  "selfcheckout-2": "",
  // mycheckout.html — retailer specialist feedback section
  "feedback-1": "",
  "feedback-2": "",
  "feedback-3": "",
  // mycheckout.html — process section
  "research-1": "",
  "research-2": "",
  ideation: "",
  "testing-1": "",
  "testing-2": "",
};

Object.entries(IMAGE_PLACEHOLDERS).forEach(([key, url]) => {
  if (!url) return;
  document.querySelectorAll(`img[data-image="${key}"]`).forEach((img) => {
    img.src = url;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
//（注：内容由AI生成）
