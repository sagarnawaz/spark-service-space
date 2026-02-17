import { motion } from "framer-motion";
import { Lightbulb, Clock, Zap, Boxes } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovative", desc: "We break ground with ideas that move industries forward." },
  { icon: Clock, title: "Meticulous", desc: "We stay from start to finish, making systems thrive." },
  { icon: Zap, title: "Dynamic", desc: "We deliver complex systems faster, adapting to every challenge." },
  { icon: Boxes, title: "Versatile", desc: "From payments to borders, our solutions span every sector." },
];

const Values = () => {
  return (
    <section className="section-padding bg-card/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-border/40 bg-background/50 p-8 text-center transition-all hover:border-primary/30"
            >
              <div className="mb-5 rounded-xl bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary/20">
                <v.icon size={28} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
