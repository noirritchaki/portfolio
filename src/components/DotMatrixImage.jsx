import { useRef, useEffect } from "react";

const DOT_SPACING = 4;
const MAX_DOT_RADIUS = 2;

export default function DotMatrixImage({ src, alt }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Set canvas to match the container size
      const size = canvas.parentElement.offsetWidth;
      canvas.width = size;
      canvas.height = size;

      // Draw image to offscreen canvas for pixel sampling
      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext("2d");

      // Cover-fit the image (like object-fit: cover)
      const imgRatio = img.width / img.height;
      let sx = 0, sy = 0, sw = img.width, sh = img.height;
      if (imgRatio > 1) {
        sw = img.height;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width;
        sy = (img.height - sh) / 2;
      }
      offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);

      const imageData = offCtx.getImageData(0, 0, size, size);
      const pixels = imageData.data;

      // Clear canvas with black background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, size, size);

      // Draw dots
      ctx.fillStyle = "#fff";

      for (let y = DOT_SPACING; y < size; y += DOT_SPACING) {
        for (let x = DOT_SPACING; x < size; x += DOT_SPACING) {
          const i = (y * size + x) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];

          // Luminance
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          // Dot radius proportional to brightness (bright = big dot)
          const radius = brightness * MAX_DOT_RADIUS;

          if (radius > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    img.src = src;
  }, [src]);

  return (
    <div className="dot-matrix-wrapper">
      <img src={src} alt={alt} className="dot-matrix-original" />
      <canvas
        ref={canvasRef}
        aria-label={alt}
        role="img"
        className="dot-matrix-canvas"
      />
    </div>
  );
}
