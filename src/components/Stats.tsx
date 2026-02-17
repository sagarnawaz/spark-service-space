import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects delivered across sectors" },
  { value: "99.2%", label: "Uptime across all deployed platforms" },
  { value: "1.2M+", label: "Transactions processed through our systems" },
  { value: "30+", label: "Enterprise clients worldwide" },
  { value: "5+", label: "Years of proven delivery" },
  { value: "40%", label: "Average efficiency gain for clients" },
];

const Stats = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Impact
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Work That Moves <span className="text-gradient">The World</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Every milestone tells a story of progress. From smarter payments to connected
            ecosystems, our work turns ideas into outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8"
            >
              <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{s.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
