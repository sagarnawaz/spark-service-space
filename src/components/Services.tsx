import { motion } from "framer-motion";
import { Code2, Smartphone, LayoutDashboard, Wrench, Globe, Zap, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Full-stack web applications built with modern frameworks, optimized for speed and scale." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile experiences for iOS and Android with native-like performance." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Powerful dashboards and automation tools that streamline your operations." },
  { icon: Zap, title: "AI Enablement", desc: "Integrate intelligent automation and AI-driven insights into your products." },
  { icon: Globe, title: "Ecosystem Building", desc: "Connected platforms that link users, services, and data across your business." },
  { icon: Wrench, title: "Process Evolution", desc: "Modernize legacy systems and optimize workflows for maximum efficiency." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Capabilities
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
        >
          Not Your Average <br />
          <span className="text-gradient">Technology Forge.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl text-muted-foreground"
        >
          We create technology that doesn't just keep up with change but defines it.
          Every challenge is a chance to rethink, rebuild and make progress that works for everyone.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-glass p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <s.icon size={22} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
