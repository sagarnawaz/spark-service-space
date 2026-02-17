import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [botField, setBotField] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [focused, setFocused] = useState<"name" | "email" | "message" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };
    if (botField) return;
    if (Date.now() - startedAt < 1500) {
      toast({ title: "Please wait a second and try again", variant: "destructive" });
      return;
    }
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Enterprise CTA
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Let's Build Infrastructure <span className="text-gradient">That Scales With You.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            {[
              { label: "Name", type: "text", key: "name" as const, placeholder: "Your name", max: 100 },
              { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com", max: 255 },
            ].map((field) => (
              <div key={field.key}>
                <label className="mb-1.5 block font-display text-sm font-medium">{field.label}</label>
                <input
                  type={field.type}
                  maxLength={field.max}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    focused === field.key ? "shadow-[0_0_0_1px_hsl(160_100%_45%_/_0.25),0_0_24px_hsl(160_100%_45%_/_0.15)]" : ""
                  }`}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="mb-1.5 block font-display text-sm font-medium">Message</label>
              <textarea
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                  focused === "message" ? "shadow-[0_0_0_1px_hsl(160_100%_45%_/_0.25),0_0_24px_hsl(160_100%_45%_/_0.15)]" : ""
                }`}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="glow-sm inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:animate-pulse"
            >
              Schedule a Consultation <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@nexusdev.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "Dubai, UAE" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-display font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
