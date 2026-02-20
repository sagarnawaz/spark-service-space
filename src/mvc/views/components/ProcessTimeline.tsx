import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy",
    desc: "Technical discovery, architecture planning, growth roadmap.",
  },
  {
    number: "02",
    title: "Engineering",
    desc: "Agile development, modular implementation, QA validation.",
  },
  {
    number: "03",
    title: "Optimization",
    desc: "Performance monitoring, analytics integration, scaling strategy.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 font-display text-3xl font-bold md:text-4xl"
        >
          Process
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glass p-6"
            >
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary">{step.number}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
