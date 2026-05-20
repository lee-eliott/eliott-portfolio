"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const raw = useRef({ x: -200, y: -200 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onMove = (e: MouseEvent) => {
      raw.current = { x: e.clientX, y: e.clientY };
      wrapper.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={`rounded-full bg-terracotta -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200 ease-out ${
          hovering ? "w-7 h-7 opacity-25" : "w-2 h-2 opacity-60"
        }`}
      />
    </div>
  );
}
