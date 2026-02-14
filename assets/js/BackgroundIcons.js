document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('background-wallpaper');
  if (!container) return;

  // const iconPaths = [
  //   'assets/img/skills/lidar.png',
  //   'assets/img/skills/d435.png',
  //   'assets/img/skills/jetson.png',
  //   'assets/img/skills/arduino.png',
  //   'assets/img/skills/rpi.png',
  //   'assets/img/skills/esp32.png',
  //   'assets/img/skills/hoverboard.png',
  //   'assets/img/backgroundIcons/1.jpeg',
  //   'assets/img/backgroundIcons/2.jpeg',
  //   // 'assets/img/backgroundIcons/3.jpeg',
  //   'assets/img/backgroundIcons/4.jpeg',
  //   // 'assets/img/backgroundIcons/6.jpeg',
  //   'assets/img/backgroundIcons/7.jpeg',
  //   'assets/img/backgroundIcons/8.jpeg',
  //   'assets/img/backgroundIcons/9.jpeg',
  //   'assets/img/backgroundIcons/10.jpeg',


  //   // 'assets/img/backgroundIcons/aerial.svg',
  //   // 'assets/img/backgroundIcons/hand1.svg',
  //   // 'assets/img/backgroundIcons/hand2.svg',
  //   // 'assets/img/backgroundIcons/hand3.svg',
  //   // 'assets/img/backgroundIcons/pet.svg',
  //   // 'assets/img/backgroundIcons/computer.svg',
  //   'assets/img/backgroundIcons/rover1.svg',
  //   'assets/img/backgroundIcons/rover2.svg',
  //   // 'assets/img/backgroundIcons/arms.svg',
  //   'assets/img/backgroundIcons/robot2.svg',
  //   'assets/img/backgroundIcons/arm.svg',
  //   // 'assets/img/backgroundIcons/industry.svg',
  //   // 'assets/img/backgroundIcons/ai-research.svg',
  //   // 'assets/img/backgroundIcons/ai-sophia.svg',
  //   'assets/img/backgroundIcons/ai.svg',
  //   'assets/img/backgroundIcons/robot-alien.svg',
  //   // 'assets/img/backgroundIcons/aerial-imaging.svg',
  //   // 'assets/img/backgroundIcons/artificial-intelligence.svg',
  //   'assets/img/backgroundIcons/robot3.svg',
  //   // 'assets/img/backgroundIcons/pet-robot.svg'
  // ];

  // ────────────────────────────────────────────────
  // Styles
  const style = document.createElement('style');
  style.textContent = `
    .bg-icon {
      position: absolute;
      width:  80px;
      height: 80px;
      opacity: 0.18;
      pointer-events: none;
      will-change: transform;
      filter: drop-shadow(0 4px 12px rgba(0,0,0,0.12));
      transform-origin: center center;
    }

    @keyframes horizontalDrift {
      0%, 100% {
        transform: translateX(0) rotate(var(--rot));
      }
      50% {
        transform: translateX(var(--drift)) rotate(calc(var(--rot) + 4deg));
      }
    }
  `;
  document.head.appendChild(style);

  function createIcons() {
    container.innerHTML = '';

    const isMobile = window.innerWidth < 768;

    const cols = isMobile ? 4 : 6;
    const rows = isMobile ? 6 : 9;

    const cellW = 100 / cols;
    const cellH = 100 / rows;

    let iconIndex = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const src = iconPaths[iconIndex % iconPaths.length];

        const img = document.createElement('img');
        img.src = src;
        img.className = 'bg-icon';
        img.alt = '';

        // Exact grid center
        const centerX = (c + 0.5) * cellW;
        const centerY = (r + 0.5) * cellH;

        img.style.left = `${centerX.toFixed(2)}%`;
        img.style.top  = `${centerY.toFixed(2)}%`;

        // Small random static tilt
        const rot = (Math.random() * 24 - 12).toFixed(1);
        img.style.setProperty('--rot', `${rot}deg`);

        // ── Opposite direction based on checkerboard pattern ──
        // (r + c) even → positive drift (right), odd → negative (left)
        const direction = ((r + c) % 2 === 0) ? 1 : -1;
        const driftPx = direction * 28;           //  ±28px is gentle
        img.style.setProperty('--drift', `${driftPx}px`);

        // Staggered timing — looks more natural
        const duration = 12 + (r * 0.6 + c * 1.1);   // 12–20s range
        const delay    = ((r * 1.4 + c * 0.9) % 11).toFixed(1);

        img.style.animation = `horizontalDrift ${duration.toFixed(1)}s ease-in-out infinite`;
        img.style.animationDelay = `${delay}s`;

        img.onerror = () => console.warn(`Missing: ${src}`);
        img.onload  = () => container.appendChild(img);

        iconIndex++;
      }
    }
  }

  // ─── Init + resize ───────────────────────────────────────
  let resizeTimer;
  function debouncedRefresh() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createIcons, 160);
  }

  createIcons();
  window.addEventListener('resize', debouncedRefresh);
});