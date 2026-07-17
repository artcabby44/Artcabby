import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import suriIcon from "../../assets/suri_scan_icon_1784276356733.jpg";
import cathatiIcon from "../../assets/cathati_icon_1784276365537.jpg";
import wattwiseIcon from "../../assets/wattwiseph_icon_1784276375747.jpg";
import duckraceIcon from "../../assets/duck_race_icon_1784276384534.jpg";

const projects = [
  {
    title: "S.U.R.I.",
    description: "Suspicious URL Reputation Inspector. Enterprise-grade threat intelligence.",
    link: "https://suri-scan.vercel.app/",
    icon: suriIcon,
  },
  {
    title: "CatHati",
    description: "Split bills with friends, instantly. No sign-up, no server, just fair math.",
    link: "https://cathati.vercel.app/",
    icon: cathatiIcon,
  },
  {
    title: "WattWisePH",
    description: "Philippine Electricity & Appliance Bill Calculator based on Meralco rates.",
    link: "https://wattwiseph.vercel.app/",
    icon: wattwiseIcon,
  },
  {
    title: "Duck Race",
    description: "Animated duck racing game — fair, fun, and mathematically dramatic.",
    link: "https://duckyrace.vercel.app/",
    icon: duckraceIcon,
  },
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const cardAnim = (i: number) =>
    shouldReduceMotion
      ? { initial: false, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1 + i * 0.1,
          },
        };

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-background">
      <hr className="section-divider mx-auto w-full max-w-6xl mb-0" />
      <div className="relative mx-auto max-w-6xl px-5 pt-28 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          viewport={{ once: true, amount: 0.4 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-3 text-sm font-semibold label-accent tracking-widest uppercase">
            Projects
          </p>
          <h2
            className="font-semibold text-primary"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Built for security, utility, and fun.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex flex-col rounded-3xl p-6 apple-focus"
              viewport={{ once: true, amount: 0.2 }}
              {...cardAnim(i)}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="overflow-hidden rounded-2xl w-20 h-20 shadow-xl border border-white/10 shrink-0 bg-elevated">
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="grid h-8 w-8 place-items-center rounded-full bg-surface border border-border transition-colors group-hover:bg-elevated text-secondary group-hover:text-primary">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2" style={{ letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <p className="text-sm text-secondary" style={{ lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
