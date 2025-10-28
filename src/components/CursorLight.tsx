"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorLight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforma posição do mouse em gradiente dinâmico
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(200px at ${x}px ${y}px, rgba(56, 189, 248, 0.25), transparent 80%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0" // ✅ ESSENCIAL
      style={{
        background,
        filter: "blur(80px)",
      }}
    />
  );
}
