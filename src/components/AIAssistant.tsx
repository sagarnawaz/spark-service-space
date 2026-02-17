import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageCircle, X } from "lucide-react";

type ChatMessage = { role: "user" | "bot"; text: string };

const prompts = ["What services do you offer?", "Show me fintech work", "How fast can we launch?"];

const buildReply = (input: string) => {
  const text = input.toLowerCase();
  if (text.includes("service") || text.includes("offer")) {
    return "We build web platforms, mobile apps, admin dashboards, and AI-enabled workflows.";
  }
  if (text.includes("fintech") || text.includes("payment")) {
    return "Start with Border Payments System and FinTrack Analytics in the portfolio. Both focus on secure real-time finance flows.";
  }
  if (text.includes("launch") || text.includes("timeline") || text.includes("fast")) {
    return "A typical MVP takes 8-12 weeks depending on scope. We can break this into a phased launch plan during discovery.";
  }
  return "I can help with services, timelines, and relevant case studies. Ask about web, mobile, AI, or dashboards.";
};

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hi, I am your virtual project assistant. Ask me about services, timelines, or case studies." },
  ]);

  const suggestions = useMemo(() => prompts, []);

  const ask = (value: string) => {
    const question = value.trim();
    if (!question) return;
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "bot", text: buildReply(question) }]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[65] inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-display text-sm font-semibold text-primary-foreground shadow-[0_12px_35px_hsl(160_100%_45%_/_0.4)] transition-transform hover:scale-105"
      >
        {open ? <X size={16} /> : <MessageCircle size={16} />}
        Assistant
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="fixed bottom-24 right-6 z-[65] w-[min(360px,calc(100vw-2rem))] rounded-2xl border border-border bg-card/95 p-4 backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center gap-2 font-display text-sm font-semibold">
              <Bot size={16} className="text-primary" />
              Spark Assistant
            </div>
            <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    message.role === "user" ? "ml-8 bg-primary text-primary-foreground" : "mr-8 bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => ask(prompt)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                placeholder="Ask a question..."
              />
              <button type="submit" className="rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground">
                Send
              </button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
