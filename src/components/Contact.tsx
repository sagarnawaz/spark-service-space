import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
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
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready To Build <span className="text-gradient">The Future?</span>
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message <Send size={16} />
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
