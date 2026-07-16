import { motion, useReducedMotion } from "framer-motion";
import { Braces, Database, FileCheck2, GitBranch, Radar, ShieldCheck } from "lucide-react";

const skillGroups = [
  {
    title: "Security Operations",
    icon: Radar,
    color: "#0a84ff", // We can keep brand colors for icons as they work on light/dark
    skills: ["XDR Monitoring", "DLP Investigation", "Threat Intel", "URL Analysis"],
  },
  {
    title: "Governance & Compliance",
    icon: ShieldCheck,
    color: "#30d158",
    skills: ["ISO 27001", "PCI DSS", "ISMS Practices", "Risk Assessment"],
  },
  {
    title: "Incident Response",
    icon: FileCheck2,
    color: "#ff9f0a",
    skills: ["IR Playbooks", "Alert Triage", "Security Procedures", "Awareness Training"],
  },
  {
    title: "Data & Reporting",
    icon: Database,
    color: "#5ac8f5",
    skills: ["Looker", "Dashboards", "Data Cleaning", "Security Metrics"],
  },
  {
    title: "Automation & Scripting",
    icon: Braces,
    color: "#bf5af2",
    skills: ["AppScript", "Power Automate", "Python", "JavaScript"],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    color: "#ff6961",
    skills: ["Git", "GitHub", "Service Desk Plus", "GWS/AWS Admin"],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const cardAnim = (i: number) =>
    shouldReduceMotion
      ? { initial: false, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24, scale: 0.97 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: {
            duration: 0.55,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.05 + (i % 3) * 0.1,
          },
        };

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-background">
      <hr className="section-divider mx-auto w-full max-w-6xl mb-0" />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-14"
          viewport={{ once: true, amount: 0.4 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-3 text-sm font-semibold label-accent tracking-widest uppercase">Skills</p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "600px",
            }}
          >
            A full spectrum of security capabilities.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="glass-card rounded-2xl p-6 cursor-default"
                viewport={{ once: true, amount: 0.15 }}
                {...cardAnim(i)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl shrink-0"
                    style={{
                      background: `${group.color}15`,
                      border: `0.5px solid ${group.color}30`,
                    }}
                  >
                    <Icon aria-hidden="true" size={19} color={group.color} />
                  </div>
                  <h3 className="text-sm font-semibold text-primary" style={{ letterSpacing: "-0.01em" }}>
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg px-3 py-1.5 text-xs font-medium text-secondary transition-colors"
                      style={{
                        background: "var(--glass-bg)",
                        border: "0.5px solid var(--border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
