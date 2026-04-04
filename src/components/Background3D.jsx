import { useRef, useEffect, useState } from "react";

// ASCII characters ordered by visual density
const CHARS = " .:-=+*#%@";

// Simple hash for pseudo-random noise
function hash(x, y) {
  let h = x * 374761393 + y * 668265263;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967296;
}

// Smooth noise with interpolation
function smoothNoise(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;

  // Smooth interpolation curve
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);

  const n00 = hash(ix, iy);
  const n10 = hash(ix + 1, iy);
  const n01 = hash(ix, iy + 1);
  const n11 = hash(ix + 1, iy + 1);

  const nx0 = n00 + (n10 - n00) * sx;
  const nx1 = n01 + (n11 - n01) * sx;

  return nx0 + (nx1 - nx0) * sy;
}

// Fractal noise — layers of smooth noise at different scales
function fractalNoise(x, y, octaves) {
  let value = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    value += smoothNoise(x * frequency, y * frequency) * amplitude;
    maxValue += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }

  return value / maxValue;
}

const canvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 0,
  pointerEvents: "none",
};

export default function Background3D() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallScreen = window.innerWidth < 768;
    if (prefersReducedMotion || isSmallScreen) {
      setEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const fontSize = 20;
    const lineHeight = fontSize + 3;
    const charWidth = fontSize * 0.6;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();

    let cols = Math.ceil(window.innerWidth / charWidth);
    let rows = Math.ceil(window.innerHeight / lineHeight);

    let animationId;
    let time = 0;

    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.003;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "Space Mono", monospace`;
      ctx.textBaseline = "top";

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * charWidth;
          const y = row * lineHeight;

          // Scale for noise sampling — lower = bigger clusters
          const nx = col * 0.035;
          const ny = row * 0.035;

          // Fractal noise with time offset for animation
          const n1 = fractalNoise(nx + time, ny + time * 0.7, 4);
          const n2 = fractalNoise(nx * 0.6 - time * 0.5, ny * 0.6 + time * 0.3, 3);
          const n3 = fractalNoise(nx * 1.2 + time * 0.2, ny * 1.2 - time * 0.4, 2);

          // Combine noise layers for main blobs
          let value = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

          // Stronger contrast — creates dense clusters with empty gaps
          value = Math.pow(value, 1.8);

          // Base layer — smaller-scale noise that always provides some texture
          const base = fractalNoise(col * 0.15 + time * 0.4, row * 0.15 - time * 0.2, 2);
          const baseValue = Math.pow(base, 2.5) * 0.35;

          // Combine: main blobs dominate, base fills the gaps
          value = Math.max(value, baseValue);
          value = Math.max(0, Math.min(1, value));

          // Map to ASCII character
          const charIndex = Math.floor(value * (CHARS.length - 1));
          const char = CHARS[charIndex];

          if (char === " ") continue;

          // Twinkle: random bright white flashes
          const twinkle = Math.sin(col * 127.1 + row * 311.7 + time * 45) *
            Math.sin(col * 269.5 + row * 183.3 + time * 35);
          if (twinkle > 0.92) {
            ctx.fillStyle = "#ffffff";
            ctx.fillText("*", x, y);
            continue;
          }

          // Bright peaks (near white) vs darker troughs (visible grey)
          const brightness = Math.floor(180 + value * 75);
          const alpha = 0.4 + value * 0.6;
          ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${alpha})`;
          ctx.fillText(char, x, y);
        }
      }
    }
    animate();

    function onResize() {
      resize();
      cols = Math.ceil(window.innerWidth / charWidth);
      rows = Math.ceil(window.innerHeight / lineHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} style={canvasStyle} />;
}
