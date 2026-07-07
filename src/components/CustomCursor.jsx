import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 24, mass: 0.35 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 24, mass: 0.35 });

  useEffect(() => {
    const canUseCursor = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUseCursor);
    if (!canUseCursor) return undefined;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const over = (e) => {
      setHovering(Boolean(e.target.closest("a, button, input, textarea, select, [role='button']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-blue-400"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 0.6 : hovering ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-blue-400/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.85 : hovering ? 1.6 : 1,
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          borderColor: hovering ? "rgba(167,139,250,0.8)" : "rgba(167,139,250,0.4)"
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
