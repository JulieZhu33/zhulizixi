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
  // headpadel.html — REPLAY case-study images
  "head-brand": "",
  "head-hero": "",
  "head-solution": "",
  "head-touchpoints": "",
  "head-touchpoint-1": "",
  "head-touchpoint-2": "",
  "head-touchpoint-3": "",
  "head-touchpoint-4": "",
};

Object.entries(IMAGE_PLACEHOLDERS).forEach(([key, url]) => {
  if (!url) return;
  document.querySelectorAll(`img[data-image="${key}"]`).forEach((img) => {
    img.src = url;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
//（注：内容由AI生成）

// ====================================================
// MyCheckout page animations
// ====================================================

// Page fade in
document.body.style.opacity = "0";

window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "1";
});

// Reveal sections when scrolling
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  }
);

document
  .querySelectorAll(".case-section:not(.case-hero)")
  .forEach((section) => revealObserver.observe(section));

// Smooth page transition when navigating
document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("mailto:") &&
    !href.startsWith("tel:") &&
    !link.hasAttribute("target")
  ) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  }
});
