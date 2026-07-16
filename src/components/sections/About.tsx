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

const metrics = [
  { value: "3+", label: "Years in security" },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const inView = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      };

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
    <section id="about" className="relative overflow-hidden py-28 sm:py-36 bg-background">
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
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          viewport={{ once: true, amount: 0.3 }}
          {...inView}
        >
          <p className="mb-4 text-sm font-semibold label-accent tracking-widest uppercase">
            About
          </p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Connecting security, compliance, and process improvement.
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-secondary"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Information security professional with hands-on experience in threat
            detection, incident response, and risk assessment.
            I build the systems around the work — clear procedures, playbooks,
            and automation.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="mt-16 flex justify-center"
          viewport={{ once: true, amount: 0.3 }}
          {...(shouldReduceMotion
            ? { initial: false, whileInView: { opacity: 1 } }
            : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } })}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass-card rounded-2xl p-5 text-center w-full max-w-[320px]"
            >
              <p
                className="font-bold label-accent"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
              >
                {m.value}
              </p>
              <p className="mt-2 text-xs font-medium text-secondary leading-5">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Strength cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card rounded-2xl p-6"
                viewport={{ once: true, amount: 0.2 }}
                {...cardInView(i)}
              >
                <div
                  className="mb-5 grid h-11 w-11 place-items-center rounded-xl"
                  style={{
                    background: "var(--glow-color)",
                    border: "0.5px solid var(--border)",
                  }}
                >
                  <Icon aria-hidden="true" size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-primary" style={{ letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-secondary" style={{ lineHeight: 1.7 }}>
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
