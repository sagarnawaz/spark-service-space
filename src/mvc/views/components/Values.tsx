import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Clock, Zap, Boxes } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovative",
    desc: "We break ground with ideas that move industries forward.",
    detail: "Rapid discovery sprints keep teams experimenting while staying focused on real outcomes.",
  },
  {
    icon: Clock,
    title: "Meticulous",
    desc: "We stay from start to finish, making systems thrive.",
    detail: "Delivery discipline, QA depth and performance audits are built into every release cycle.",
  },
  {
    icon: Zap,
    title: "Dynamic",
    desc: "We deliver complex systems faster, adapting to every challenge.",
    detail: "Cross-functional squads let product, design and engineering respond in one motion.",
  },
  {
    icon: Boxes,
    title: "Versatile",
    desc: "From payments to borders, our solutions span every sector.",
    detail: "Platform architecture is reusable, composable, and tuned to each industry's constraints.",
  },
];

const Values = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="about" className="section-particles section-padding bg-card/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(active === v.title ? null : v.title)}
              className="group cursor-pointer rounded-2xl border border-border/40 bg-background/50 p-8 text-left transition-all hover:border-primary/30"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-4 text-primary transition-all group-hover:scale-105 group-hover:bg-primary/20">
                <v.icon size={28} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
              <motion.div
                initial={false}
                animate={{ height: active === v.title ? "auto" : 0, opacity: active === v.title ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="mt-4 border-t border-border/50 pt-4 text-sm text-foreground/85">{v.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
