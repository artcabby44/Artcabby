import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  { name: "ISC2 – Certified in Cybersecurity", org: "ISC2" },
  { name: "Fortinet NSE Level 1–3: Certified Associate", org: "Fortinet" },
  { name: "ISO/IEC 27001 Information Security Associate", org: "ISO" },
  { name: "Proofpoint Certified Insider Threat Specialist", org: "Proofpoint" },
  { name: "Proofpoint Certified Security Awareness Specialist", org: "Proofpoint" },
  { name: "EC-Council Ethical Hacking Essentials", org: "EC-Council" },
  { name: "CompTIA Pentest+ Workshop", org: "CompTIA" },
];

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  const cardAnim = (i: number) =>
    shouldReduceMotion
      ? { initial: false, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, x: -12 },
          whileInView: { opacity: 1, x: 0 },
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.06 * i,
          },
        };

  return (
    <section id="certifications" className="relative py-28 sm:py-36 bg-background">
      <hr className="section-divider mx-auto w-full max-w-6xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-14"
          viewport={{ once: true, amount: 0.3 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-3 text-sm font-semibold label-accent tracking-widest uppercase">
            Certifications
          </p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Trainings & Credentials
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          {/* Education card */}
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div
              className="glass-card h-full rounded-2xl p-6"
              style={{
                background: "var(--glass-bg)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-xl"
                style={{
                  background: "var(--glow-color)",
                  border: "0.5px solid var(--border)",
                }}
              >
                <GraduationCap aria-hidden="true" size={22} className="text-accent" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">Education</p>
              <p
                className="font-semibold text-primary"
                style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em" }}
              >
                Bachelor of Science in Computer Engineering
              </p>
              <p className="mt-2 text-sm text-accent font-medium">E.A.R.I.S.T Manila</p>
              <p className="mt-1 text-sm text-secondary">2018 – 2022</p>
            </div>
          </motion.div>

          {/* Certifications list */}
          <div className="flex flex-col gap-2.5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="glass-card flex items-center gap-4 rounded-xl px-5 py-4"
                viewport={{ once: true, amount: 0.1 }}
                {...cardAnim(i)}
              >
                <div
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                  style={{
                    background: "rgba(191,90,242,0.1)",
                    border: "0.5px solid rgba(191,90,242,0.2)",
                  }}
                >
                  <Award aria-hidden="true" size={16} color="#bf5af2" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-primary truncate">{cert.name}</p>
                  <p className="text-xs text-secondary mt-0.5">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
