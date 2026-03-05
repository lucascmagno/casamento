// Confete ao carregar o site
window.addEventListener("load", () => {
  const duration = 4 * 1000; // duração total (4 segundos)
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#d4af37", "#f4e1e6", "#ffffff"]
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#d4af37", "#f4e1e6", "#ffffff"]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});