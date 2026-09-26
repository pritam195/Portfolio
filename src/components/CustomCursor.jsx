import { useEffect, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const rx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const ry = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const down = () => setPressed(true);
    const up   = () => setPressed(false);
    const over = (e) => setHovering(Boolean(e.target.closest("a,button,input,textarea,select,[role='button']")));
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
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%", width: 8, height: 8,
          background: hovering ? "radial-gradient(circle, #67e8f9, #06b6d4)" : "radial-gradient(circle, #22d3ee, #06b6d4)" }}
        animate={{ scale: pressed ? 0.5 : hovering ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] rounded-full border"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:  hovering ? 46 : pressed ? 22 : 30,
          height: hovering ? 46 : pressed ? 22 : 30,
          borderColor: hovering ? "rgba(34,211,238,0.7)" : "rgba(34,211,238,0.45)",
          background: hovering ? "rgba(6,182,212,0.06)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}
