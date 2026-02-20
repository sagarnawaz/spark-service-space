import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const rotatingPhrases = ["Digital Systems", "Scalable Platforms", "AI-Powered Products"];
  const capabilities = [
    "Web Engineering",
    "Mobile Applications",
    "AI Enablement",
    "QA and Testing",
    "SEO and Growth",
    "Digital Ecosystems",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.55]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [rotatingPhrases.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,hsl(160_100%_45%_/_0.08),transparent_30%),radial-gradient(circle_at_80%_30%,hsl(190_90%_45%_/_0.08),transparent_32%),linear-gradient(130deg,hsl(var(--background)),hsl(170_38%_9%),hsl(var(--background)))]" />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[110px]" />
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Engineering Intelligent
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingPhrases[phraseIndex]}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="inline-block text-gradient"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          We design scalable web platforms, high-performance mobile applications,
          AI-powered automation, and growth-driven digital ecosystems.
        </motion.p>
        <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.16em] text-muted-foreground">
          Built for scale. Engineered for performance. Designed for impact.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="hero-cta glow-sm relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_0_1px_hsl(160_100%_45%_/_0.3),0_0_30px_hsl(160_100%_45%_/_0.35)]"
          >
            <span className="hero-cta-ripple" />
            Start Your Project <ArrowRight size={18} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:scale-[1.02] hover:bg-secondary"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-card/45 py-4"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="mx-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
