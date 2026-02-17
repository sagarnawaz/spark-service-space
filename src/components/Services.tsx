import { motion } from "framer-motion";
import { Code2, Smartphone, LayoutDashboard, Wrench, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks. Fast, scalable, and beautifully designed.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android with native-like performance and sleek UX.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Powerful admin panels and automation tools that streamline your business operations.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support, bug fixes, performance optimization, and feature enhancements.",
  },
  {
    icon: Globe,
    title: "SEO & Optimization",
    description: "Search engine optimization, performance tuning, and accessibility improvements.",
  },
  {
    icon: Zap,
    title: "API & Integrations",
    description: "RESTful APIs, third-party integrations, and microservices architecture design.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            End-to-end development services to bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.15)]"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
