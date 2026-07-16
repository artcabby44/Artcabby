import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "IT Security and Compliance Specialist",
    company: "TDCX",
    period: "January 2025 – Present",
    current: true,
    points: [
      "Investigate risky user sign-ins via console logs.",
      "Lead incident response and develop IR playbooks.",
      "Manage and respond to XDR security alerts.",
      "Conduct URL analysis and threat mitigation.",
      "Build dashboards for real-time security reporting.",
    ],
  },
  {
    title: "Information Security and Compliance Analyst",
    company: "Global Payments",
    period: "November 2022 – September 2024",
    current: false,
    points: [
      "Aligned business units with ISO 27001 and PCI DSS.",
      "Remediated DLP alerts alongside security engineering.",
      "Conducted risk assessments for system migrations.",
      "Delivered security awareness training.",
      "Automated workflows using AppScript.",
    ],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const cardAnim = (i: number) =>
    shouldReduceMotion
      ? { initial: false, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1 + i * 0.15,
          },
        };

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-background">
      {/* Subtle top glow */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          top: 0,
          right: "10%",
          background: "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      <hr className="section-divider mx-auto w-full max-w-6xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 max-w-2xl"
          viewport={{ once: true, amount: 0.3 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-3 text-sm font-semibold label-accent tracking-widest uppercase">
            Experience
          </p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Security roles focused on response and clarity.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical line: perfectly centered behind the dots */}
          <div
            className="absolute left-6 top-10 bottom-6 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
          />

          {roles.map((role, i) => (
            <div key={`${role.company}-${role.title}`} className="relative">
              {/* Dot on timeline: perfectly aligned with line (left-6 = 24px center) */}
              <div
                className="absolute left-[16px] top-10 z-10 hidden h-4 w-4 items-center justify-center rounded-full sm:flex"
                style={{
                  background: role.current ? "var(--accent)" : "var(--surface)",
                  border: `2px solid ${role.current ? "var(--accent)" : "var(--border)"}`,
                  boxShadow: role.current ? "0 0 12px var(--glow-color)" : "none",
                }}
              />

              <motion.article
                className="glass-card rounded-2xl p-6 sm:p-8 sm:ml-16"
                viewport={{ once: true, amount: 0.15 }}
                {...cardAnim(i)}
              >
                {/* Card header */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                      style={{
                        background: "var(--glow-color)",
                        border: "0.5px solid var(--border)",
                      }}
                    >
                      <BriefcaseBusiness aria-hidden="true" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-primary"
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em" }}
                      >
                        {role.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">{role.company}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 sm:mt-1">
                    {role.current && (
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                          background: "rgba(48,209,88,0.12)",
                          color: "#30d158",
                          border: "0.5px solid rgba(48,209,88,0.25)",
                        }}
                      >
                        Current
                      </span>
                    )}
                    <span className="text-xs text-secondary font-medium">{role.period}</span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="mt-6 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-secondary" style={{ lineHeight: 1.7 }}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-accent"
                        size={16}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
