import { motion } from "framer-motion";

const pains = [
  "Low website conversions",
  "Slow app performance",
  "Manual repetitive workflows",
  "Poor SEO visibility",
  "Unreliable development partners",
];

const stack = [
  "Custom Web Development",
  "Mobile App Engineering",
  "AI Automation Systems",
  "Technical SEO Optimization",
  "Quality Assurance and Testing",
  "Creative Video Marketing",
];

const ConversionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="card-glass p-8 md:p-12">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Conversion Focused Landing</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">We Build High-Converting Digital Products</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Web. Mobile. AI. Growth. Everything your business needs to scale - in one engineering partner.
          </p>
          <a href="#contact" className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">
            Get Free Strategy Call
          </a>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-xl font-semibold">Is Your Business Facing These Challenges?</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pains.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-foreground">We solve all of it.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-xl font-semibold">Our Integrated Growth Stack</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {stack.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-10 rounded-2xl border border-primary/25 bg-primary/5 p-6">
            <h3 className="font-display text-xl font-semibold">Free Digital Growth Audit</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We analyze your website performance, conversion funnel, technical SEO, and system scalability.
            </p>
            <a href="#contact" className="mt-5 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">
              Claim Free Audit
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Spots for strategy calls are limited each month to ensure quality delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
