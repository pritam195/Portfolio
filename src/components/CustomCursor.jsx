import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    const canUseCursor = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUseCursor);
    if (!canUseCursor) return undefined;

    const move = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const over = (event) => {
      setHovering(Boolean(event.target.closest("a, button, input, textarea, select, [role='button']")));
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
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-teal-200 shadow-[0_0_22px_rgba(94,234,212,0.95)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ scale: pressed ? 0.7 : hovering ? 1.25 : 1 }}
        transition={{ duration: 0.16 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-10 w-10 rounded-full border border-teal-200/60 bg-teal-300/10 backdrop-invert"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{ scale: pressed ? 0.82 : hovering ? 1.7 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
