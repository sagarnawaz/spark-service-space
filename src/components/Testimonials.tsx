import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Kim",
    company: "TechVentures Inc.",
    text: "NexusDev transformed our outdated system into a modern, scalable platform. Their attention to detail and technical expertise is outstanding.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    company: "HealthFirst",
    text: "The mobile app they built for us exceeded all expectations. Our user engagement increased by 200% within the first three months.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    company: "LogiFlow Solutions",
    text: "Professional, reliable, and incredibly skilled. They delivered our dashboard on time and under budget. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-xl border border-border bg-gradient-card p-8"
            >
              <Quote size={32} className="mb-4 text-primary/20" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <div className="font-display font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
