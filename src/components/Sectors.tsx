import { motion } from "framer-motion";

const sectors = [
  "Public Sector", "Education", "Smart Cities", "Tourism",
  "Gaming & Loyalty", "Financial Services", "Real Estate", "Healthcare",
];

const Sectors = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Shaping <span className="text-gradient">Sectors</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our work spans disciplines, challenges and industries, shaped by the belief that
            great technology adapts to any context.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {sectors.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-border px-6 py-3 font-display text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
