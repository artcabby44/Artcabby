import { motion, useReducedMotion } from "framer-motion";
import { Braces, Database, FileCheck2, GitBranch, Radar, ShieldCheck } from "lucide-react";

const skillGroups = [
  {
    title: "Security Operations",
    icon: Radar,
    skills: ["XDR Monitoring", "DLP Investigation", "Threat Intel", "URL Analysis"],
  },
  {
    title: "Governance & Compliance",
    icon: ShieldCheck,
    skills: ["ISO 27001", "PCI DSS", "ISMS Practices", "Risk Assessment"],
  },
  {
    title: "Incident Response",
    icon: FileCheck2,
    skills: ["IR Playbooks", "Alert Triage", "Security Procedures", "Awareness Training"],
  },
  {
    title: "Data & Reporting",
    icon: Database,
    skills: ["Looker", "Dashboards", "Data Cleaning", "Security Metrics"],
  },
  {
    title: "Automation & Scripting",
    icon: Braces,
    skills: ["AppScript", "Power Automate", "Python", "JavaScript"],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Service Desk Plus", "GWS/AWS Admin Consoles"],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="skills" className="border-t border-border bg-background py-20 sm:py-24">
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        viewport={{ once: true, amount: 0.22 }}
        {...motionProps}
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
              Skills
            </p>

          </div>

        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-md border border-border bg-surface p-5 transition hover:border-accent/50 hover:bg-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md border border-violet/35 bg-violet/10 text-violet">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-primary">{group.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
