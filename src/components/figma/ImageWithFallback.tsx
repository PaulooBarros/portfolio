import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

/**
 * Componente de imagem com fallback automático.
 * - Usa o `fallback` caso a imagem principal não carregue.
 * - Mantém o estilo no mesmo arquivo (Tailwind).
 */
export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallback = "/fallback.png",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      className={`transition-opacity duration-500 ease-in-out ${className}`}
    />
  );
}
