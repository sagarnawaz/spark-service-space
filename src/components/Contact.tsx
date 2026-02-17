import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <input
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@nexusdev.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "San Francisco, CA" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-display font-semibold text-foreground">{value}</div>
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
