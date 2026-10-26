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
  "head-audience": "",
};

Object.entries(IMAGE_PLACEHOLDERS).forEach(([key, url]) => {
  if (!url) return;
  document.querySelectorAll(`img[data-image="${key}"]`).forEach((img) => {
    img.src = url;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Gentle, one-time section reveals. The page remains fully visible when
// JavaScript is unavailable or when a visitor prefers reduced motion.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const revealTargets = document.querySelectorAll('main > section, .site-footer');

  revealTargets.forEach((target) => {
    target.dataset.reveal = '';
  });

  const showTarget = (target) => {
    target.classList.add('is-revealed');
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showTarget(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach(showTarget);
  }
}
//（注：内容由AI生成）
