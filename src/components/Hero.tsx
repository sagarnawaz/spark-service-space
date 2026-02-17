import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, LayoutDashboard } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
          Building Digital Experiences
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Build{" "}
          <span className="text-gradient">Web & Mobile</span>
          <br />
          Apps That Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          From concept to deployment — we craft modern, high-performance applications
          with cutting-edge technology and pixel-perfect design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            View Our Work <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 font-display text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
          >
            Our Services
          </a>
        </motion.div>

        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex gap-12 text-muted-foreground"
        >
          {[
            { icon: Code2, label: "Web Development" },
            { icon: Smartphone, label: "Mobile Apps" },
            { icon: LayoutDashboard, label: "Dashboards" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="rounded-xl border border-border bg-card p-3">
                <Icon size={24} className="text-primary" />
              </div>
              <span className="text-xs">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
