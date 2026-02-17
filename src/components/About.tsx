import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Sarah Chen", role: "Lead Developer", initials: "SC" },
  { name: "James Wilson", role: "UI/UX Designer", initials: "JW" },
  { name: "Maria Lopez", role: "Project Manager", initials: "ML" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            About <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        {/* Vision & Mission */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the go-to technology partner for businesses seeking innovative digital solutions that drive growth and transform industries.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "We empower businesses with beautifully crafted, high-performance web and mobile applications built with the latest technologies and best practices.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-gradient-card p-8"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-10 font-display text-2xl font-bold">
            Meet the <span className="text-gradient">Team</span>
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-gradient-card font-display text-lg font-bold text-primary transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_20px_-5px_hsl(175_80%_50%/0.3)]">
                  {member.initials}
                </div>
                <h4 className="font-display font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
