import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "ISC2 - Certified in Cybersecurity",
  "Fortinet Network Security Expert Level 1 - 3: Certified Associate",
  "ISO/IEC 27001 Information Security Associate",
  "Proofpoint Certified Insider Threat Specialist",
  "Proofpoint Certified Security Awareness Specialist",
  "EC-Council Ethical Hacking Essentials",
  "CompTIA Pentest+ Workshop",
];

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="certifications" className="border-t border-border bg-surface/40 py-20 sm:py-24">
      <motion.div
        className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:px-8"
        viewport={{ once: true, amount: 0.22 }}
        {...motionProps}
      >
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
            Certifications
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl">
            Trainings and Credentials.
          </h2>
          <div className="mt-8 rounded-md border border-border bg-background/80 p-5">
            <div className="grid h-11 w-11 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
              <GraduationCap aria-hidden="true" size={21} />
            </div>
            <p className="mt-5 text-lg font-semibold text-primary">
              Bachelor of Science in Computer Engineering
            </p>
            <p className="mt-2 text-sm leading-7 text-secondary">
              E.A.R.I.S.T Manila, 2018 - 2022
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="flex items-start gap-3 rounded-md border border-border bg-background/80 p-4"
            >
              <Award aria-hidden="true" className="mt-1 shrink-0 text-violet" size={18} />
              <p className="text-sm leading-7 text-secondary">{certification}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
