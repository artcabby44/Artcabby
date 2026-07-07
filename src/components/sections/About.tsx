import { motion, useReducedMotion } from "framer-motion";
import { ChartNoAxesCombined, ClipboardCheck, ShieldAlert } from "lucide-react";

const strengths = [
  {
    icon: ShieldAlert,
    title: "Threat detection and response",
    description:
      "I monitor security alerts, investigate risky sign-ins, analyze threat intelligence, and support incident response.",
  },
  {
    icon: ClipboardCheck,
    title: "Security governance",
    description:
      "I help business units align with Information Security Policy, ISO 27001 ISMS practices, and PCI DSS controls.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Automation and reporting",
    description:
      "I turn security data into dashboards, documentation, and automated workflows using AppScript and Power Automate.",
  },
];

const metrics = [
  { value: "3+", label: "Years in security and compliance roles" },
  { value: "ISO", label: "27001 ISMS and associate certification" },
  { value: "XDR", label: "Alert monitoring and incident response" },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotion = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="about" className="border-t border-border bg-surface/40 py-20 sm:py-24">
      <motion.div
        className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1fr] lg:px-8"
        viewport={{ once: true, amount: 0.25 }}
        {...sectionMotion}
      >
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
            About
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl">
            I connect security operations, compliance controls, and practical process improvement.
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-base leading-8 text-secondary sm:text-lg">
            <p>
              I am an information security professional with hands-on experience in
              threat detection, incident response, risk assessment, and security
              awareness. My work spans DLP and XDR alert investigation, URL analysis,
              threat intelligence feeds, and internal risk assessments.
            </p>
            <p>
              I also enjoy building the systems around the work: clear procedures,
              IR playbooks, onboarding security training, dashboard reporting, and
              automation that removes repetitive effort from security workflows.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-border bg-background/70 p-4"
              >
                <p className="text-2xl font-semibold text-primary">{metric.value}</p>
                <p className="mt-1 text-sm leading-6 text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-md border border-border bg-background/80 p-5 transition hover:border-accent/50 hover:bg-elevated"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
