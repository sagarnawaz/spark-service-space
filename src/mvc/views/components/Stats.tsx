import { motion } from "framer-motion";
import { Server, Gauge, Blocks, LockKeyhole } from "lucide-react";

const metrics = [
  { icon: Server, title: "99.9% Uptime Architecture" },
  { icon: Gauge, title: "High-Performance Infrastructure" },
  { icon: Blocks, title: "Scalable Modular Systems" },
  { icon: LockKeyhole, title: "Security-First Engineering" },
];

const Stats = () => {
  return (
    <section className="section-particles section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Technical Excellence</span>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Performance is a core engineering requirement.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We architect systems that grow with your business - not against it.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-glass flex min-h-[170px] flex-col justify-between p-6"
            >
              <div className="inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                <metric.icon size={20} />
              </div>
              <p className="mt-6 font-display text-lg font-semibold">{metric.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
