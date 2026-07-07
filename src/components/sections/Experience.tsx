import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "IT Security and Compliance Specialist",
    company: "TDCX",
    period: "January 2025 - Present",
    points: [
      "Monitor administrative console logs to identify and investigate risky user sign-ins.",
      "Lead incident response activities and develop comprehensive IR playbooks.",
      "Manage, detect, and respond to security alerts through XDR platforms.",
      "Conduct URL analysis, threat intelligence alert mitigation, and security assessments for whitelist decisions.",
      "Analyze security data and build interactive dashboards for real-time reporting and insights.",
    ],
  },
  {
    title: "Information Security and Compliance Analyst",
    company: "Global Payments",
    period: "November 2022 - September 2024",
    points: [
      "Helped business units follow Information Security Policy, ISO 27001 ISMS practices, and PCI DSS controls.",
      "Investigated and remediated DLP alerts with the security engineering team.",
      "Conducted internal risk assessments for new processes and system migrations.",
      "Delivered security awareness training for new employees during onboarding.",
      "Automated repetitive tasks and streamlined workflows with AppScript.",
    ],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="experience" className="border-t border-border bg-background py-20 sm:py-24">
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        viewport={{ once: true, amount: 0.18 }}
        {...motionProps}
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
            Experience
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl">
            Security and compliance roles focused on response, control alignment, and operational clarity.
          </h2>
        </div>

        <div className="mt-12 grid gap-5">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="rounded-md border border-border bg-surface p-5 sm:p-6"
            >
              <div className="grid gap-4 lg:grid-cols-[0.72fr_1fr]">
                <div>
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-violet/35 bg-violet/10 text-violet">
                    <BriefcaseBusiness aria-hidden="true" size={21} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{role.title}</h3>
                  <p className="mt-1 text-sm text-secondary">{role.period}</p>
                </div>

                <ul className="space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-secondary">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-accent"
                        size={17}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
