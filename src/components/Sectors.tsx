import { motion } from "framer-motion";
import { Building2, GraduationCap, Building, Palmtree, Gamepad2, Landmark, House, HeartPulse } from "lucide-react";

const sectors = [
  { label: "Public Sector", icon: Building2 },
  { label: "Education", icon: GraduationCap },
  { label: "Smart Cities", icon: Building },
  { label: "Tourism", icon: Palmtree },
  { label: "Gaming & Loyalty", icon: Gamepad2 },
  { label: "Financial Services", icon: Landmark },
  { label: "Real Estate", icon: House },
  { label: "Healthcare", icon: HeartPulse },
];

const Sectors = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Shaping <span className="text-gradient">Sectors</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our work spans disciplines, challenges and industries, shaped by the belief that
            great technology adapts to any context.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {sectors.map((s, i) => (
            <motion.span
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-display text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:pr-7 hover:text-primary"
            >
              <s.icon size={14} className="opacity-0 transition-all group-hover:opacity-100" />
              {s.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
