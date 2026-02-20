import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-primary via-cyan-300 to-primary"
    />
  );
};

export default ScrollProgress;
