import { motion } from "framer-motion";

const PremiumSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-bold tracking-tight md:text-6xl"
        >
          Build the Future.
        </motion.h2>
        <p className="mt-6 text-lg text-muted-foreground">Silence. Precision. Performance.</p>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          We design digital systems that do not just work - they redefine how businesses operate.
        </p>
        <a href="#contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground">
          Begin
        </a>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Scalability", "Security", "Speed", "Simplicity"].map((item) => (
            <div key={item} className="rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
