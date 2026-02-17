import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            We Don't Just{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Build Systems</span>
            <br />
            We Shape{" "}
            <span className="text-gradient">What's Next.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          From digital wallets to cross-border platforms, we create technology that
          doesn't just keep up with change — it defines it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            See Our Work <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 font-display text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Our Capabilities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
