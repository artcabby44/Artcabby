import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bot, FileText, LayoutDashboard } from "lucide-react";

const projects = [
  {
    title: "Security Reporting Dashboards",
    icon: LayoutDashboard,
    description:
      "Built interactive dashboards for real-time visibility into security-related data, reporting trends, and operational insights.",
    tags: ["Looker", "Data Analysis", "Security Metrics"],
  },
  {
    title: "Workflow Automation",
    icon: Bot,
    description:
      "Used AppScript and Power Automate to reduce repetitive tasks, improve handoffs, and streamline security process workflows.",
    tags: ["AppScript", "Power Automate", "Process Improvement"],
  },
  {
    title: "IR Playbooks and Procedures",
    icon: FileText,
    description:
      "Developed standardized procedures and incident response playbooks to guide new security processes and response activities.",
    tags: ["Incident Response", "Documentation", "XDR"],
  },
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="projects" className="border-t border-border bg-surface/40 py-20 sm:py-24">
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        viewport={{ once: true, amount: 0.22 }}
        {...motionProps}
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
              Projects
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl">
              Practical security work translated into repeatable systems.
            </h2>
          </div>
          <a
            href="https://github.com/artcabby44"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-primary outline-none transition hover:border-accent/50 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:justify-self-end"
          >
            GitHub
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="rounded-md border border-border bg-background/80 p-5 transition hover:border-accent/50 hover:bg-elevated"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-3 py-2 text-xs font-medium text-secondary"
                    >
                      {tag}
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
