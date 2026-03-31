import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const quickActions = ["Book Appointment", "View Services", "Find Nearest Branch"];

const faqResponses: Record<string, string> = {
  services:
    "We offer premium hair, nails, makeup, skin, body therapies, facial spa, wellness rituals, and curated luxury packages.",
  pricing:
    "Pricing depends on your selected service and personalization level. For accurate quotes, choose a service and our team can guide you in minutes.",
  locations:
    "Kalpana currently has 9 branches across Mumbai, Pune, and Bangalore.",
  booking:
    "You can book by selecting a service and branch, then confirming your preferred date/time. For instant help, use the Book Appointment action.",
  timings: "Most branches are open daily from 9:00 AM to 9:00 PM.",
};

function getAssistantReply(input: string) {
  const text = input.toLowerCase();
  if (text.includes("book")) return faqResponses.booking;
  if (text.includes("price") || text.includes("cost")) return faqResponses.pricing;
  if (text.includes("service")) return faqResponses.services;
  if (text.includes("branch") || text.includes("location") || text.includes("nearest")) return faqResponses.locations;
  if (text.includes("timing") || text.includes("open") || text.includes("hours")) return faqResponses.timings;

  return "I can help with services, booking process, branch locations, pricing guidance, and timings. Ask me anything and I will assist right away.";
}

export default function ChatbotAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome to Kalpana Concierge. How may I assist your wellness journey today?",
    },
  ]);

  const actionLinks = useMemo(
    () => ({
      "Book Appointment": "/services",
      "View Services": "/services",
      "Find Nearest Branch": "/branches",
    }),
    []
  );

  const sendMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;

    setMessages((prev) => [...prev, { role: "user", text: value }, { role: "assistant", text: getAssistantReply(value) }]);
    setInput("");
  };

  return (
    <>
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full bg-gold text-earth shadow-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold-deep hover:text-white"
      >
        {open ? <X className="mx-auto h-5 w-5" /> : <MessageCircle className="mx-auto h-5 w-5" />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-[60] w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border border-sand bg-white dark:bg-card shadow-luxury transition-all duration-300 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between rounded-t-2xl border-b border-sand bg-ivory dark:bg-background px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-soft">
              <Bot className="h-4 w-4 text-gold-deep" />
            </div>
            <div>
              <p className="text-sm font-medium text-heading">Kalpana Concierge</p>
              <p className="text-xs text-muted-foreground">Instant assistance</p>
            </div>
          </div>
          <Sparkles className="h-4 w-4 text-gold-deep" />
        </div>

        <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((message, idx) => (
            <div
              key={`${message.role}-${idx}`}
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                message.role === "assistant"
                  ? "bg-muted text-body"
                  : "ml-auto bg-gold text-earth"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="border-t border-sand px-4 pb-4 pt-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Link
                key={action}
                to={actionLinks[action as keyof typeof actionLinks]}
                className="rounded-full border border-gold px-3 py-1 text-xs text-gold-deep transition-colors hover:bg-gold hover:text-earth"
                onClick={() => setOpen(false)}
              >
                {action}
              </Link>
            ))}
          </div>
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, timings, bookings..."
              className="h-10 flex-1 rounded-full border border-sand bg-white dark:bg-card px-4 text-sm text-body placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-earth transition-all hover:-translate-y-0.5 hover:bg-gold-deep hover:text-white"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
