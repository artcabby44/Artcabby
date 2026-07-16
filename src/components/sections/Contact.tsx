import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "artcabiao44@gmail.com",
    href: "mailto:artcabiao44@gmail.com",
    icon: Mail,
    color: "#0a84ff", // Brand color, good on light/dark
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ajcabby",
    href: "https://www.linkedin.com/in/ajcabby",
    icon: Linkedin,
    color: "#5ac8f5", // Brand color, good on light/dark
  },
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer id="contact" className="relative overflow-hidden py-28 sm:py-36 bg-background">
      {/* Glow */}
      <div
        className="glow-orb"
        style={{
          width: 800,
          height: 800,
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, var(--glow-color) 0%, transparent 60%)",
        }}
      />

      <hr className="section-divider mx-auto w-full max-w-6xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Central text */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          viewport={{ once: true, amount: 0.3 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-4 text-sm font-semibold label-accent tracking-widest uppercase">
            Contact
          </p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
          >
            Let's talk security.
          </h2>
          <p
            className="mx-auto mt-5 max-w-md text-secondary"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Available for security roles and consulting.
          </p>

          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-secondary">
            <MapPin size={14} />
            Sta. Mesa, Manila
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 mx-auto max-w-lg"
          viewport={{ once: true, amount: 0.3 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                className="glass-card group flex items-start gap-4 rounded-2xl p-5 apple-focus"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-105"
                  style={{
                    background: `${contact.color}18`,
                    border: `0.5px solid ${contact.color}30`,
                  }}
                >
                  <Icon aria-hidden="true" size={19} color={contact.color} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    {contact.label}
                  </p>
                  <p
                    className="mt-1.5 break-all text-sm font-medium text-primary transition-colors group-hover:text-accent"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {contact.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-secondary transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-20 text-center text-xs text-secondary"
          viewport={{ once: true }}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Art Cabiao · Built with care
        </motion.p>
      </div>
    </footer>
  );
}
