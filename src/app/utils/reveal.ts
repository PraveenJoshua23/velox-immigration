/**
 * Fades page sections (and anything marked `.reveal`) up as they scroll into view.
 * Only content that starts off-screen is hidden, so nothing the visitor can already
 * see ever blinks out after hydration. New pages are picked up via MutationObserver.
 */
const TARGETS = 'main section > *, main .reveal';

export function revealOnScroll(): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tracked = new WeakSet<Element>();
  const firstReport = new WeakSet<Element>();

  const io = new IntersectionObserver(
    (entries) => {
      let stagger = 0;
      for (const { target, isIntersecting } of entries) {
        const el = target as HTMLElement;
        if (!firstReport.has(el)) {
          // Already on screen: leave it alone. Below the fold: hide until it arrives.
          firstReport.add(el);
          if (isIntersecting) io.unobserve(el);
          else el.classList.add('reveal-hidden');
          continue;
        }
        if (!isIntersecting) continue;
        // Things arriving together (a row of cards) cascade in
        el.style.setProperty('--reveal-delay', `${Math.min(stagger++, 5) * 90}ms`);
        el.classList.replace('reveal-hidden', 'reveal-in');
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  );

  // ponytail: elements removed before ever being revealed stay observed; fine for a
  // handful of pages, unobserve them in the MutationObserver if this grows
  const scan = () =>
    document.querySelectorAll(TARGETS).forEach((el) => {
      if (tracked.has(el)) return;
      tracked.add(el);
      io.observe(el);
    });

  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
}
