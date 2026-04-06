import { useEffect } from "react";
import DotMatrixImage from "./DotMatrixImage";

export default function ImageGallery({ images, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="gallery-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Rock climbing photo gallery"
    >
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>
          [CLOSE]
        </button>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <DotMatrixImage key={i} src={src} alt={`Climbing photo ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
