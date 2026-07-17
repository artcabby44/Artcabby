import { motion, useReducedMotion } from "framer-motion";
import { ChartNoAxesCombined, ClipboardCheck, ShieldAlert } from "lucide-react";

const strengths = [
  {
    icon: ShieldAlert,
    title: "Threat response",
    description: "Monitor alerts, investigate sign-ins, and lead incident response.",
  },
  {
    icon: ClipboardCheck,
    title: "Security governance",
    description: "Align teams with ISO 27001 and PCI DSS controls.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Automation",
    description: "Automate workflows and build dashboards with AppScript.",
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const cardInView = (i: number) =>
    shouldReduceMotion
      ? { initial: false, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1 + i * 0.12,
          },
        };

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-background">
      {/* Subtle glow */}
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      <hr className="section-divider mx-auto w-full max-w-6xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Sleek, minimal header */}
        <motion.div
          className="mx-auto max-w-4xl text-center mb-24"
          viewport={{ once: true, amount: 0.3 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Connecting security, compliance, <br className="hidden md:block" />
            <span className="text-secondary">and process improvement.</span>
          </h2>
        </motion.div>

        {/* Strength cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card rounded-2xl p-8"
                viewport={{ once: true, amount: 0.2 }}
                {...cardInView(i)}
              >
                <div
                  className="mb-6 grid h-12 w-12 place-items-center rounded-xl"
                  style={{
                    background: "var(--glow-color)",
                    border: "0.5px solid var(--border)",
                  }}
                >
                  <Icon aria-hidden="true" size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary" style={{ letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-secondary" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
