import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, Clapperboard, ShieldCheck, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Modern web applications built with scalable architecture, secure backend systems, and optimized frontend performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "High-performance iOS and Android apps engineered for reliability, seamless UX, and production stability.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Custom AI automation systems that optimize workflows, reduce operational cost, and unlock data-driven intelligence.",
  },
  {
    icon: Clapperboard,
    title: "Short Video Ads",
    desc: "Conversion-driven creative video campaigns optimized for social, paid media, and brand positioning.",
  },
  {
    icon: ShieldCheck,
    title: "QA and Testing",
    desc: "End-to-end quality assurance ensuring stability, performance, and security across platforms.",
  },
  {
    icon: Search,
    title: "SEO and Growth",
    desc: "Technical SEO, performance optimization, and digital growth strategies engineered for measurable ROI.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Build</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
        >
          Engineering Systems Across Web, Mobile, AI, and Growth.
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="card-glass group min-h-[260px] p-7"
            >
              <div className="mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                <service.icon size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
