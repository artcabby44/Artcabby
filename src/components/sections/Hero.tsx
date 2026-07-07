import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import heroVisual from "../../assets/IMG_5131.jpg";

const techHighlights = ["I also enjoy hiking."];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <main id="top" className="min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_28%,rgba(110,231,183,0.14),transparent_30%),radial-gradient(circle_at_82%_62%,rgba(139,92,246,0.12),transparent_28%)]" />

        <motion.div className="max-w-3xl" {...motionProps}>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="mb-5 inline-flex max-w-fit items-center rounded-2xl rounded-bl-md border border-accent/30 bg-gradient-to-r from-accent/20 via-accent/10 to-surface px-4 py-3 text-sm font-medium text-primary shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <span className="mr-2 text-accent">💬</span>
            <span>Hi, I'am Art.</span>
          </motion.p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
            I help organizations strengthen their information security posture.
          </h1>


          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-secondary">
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
              <MapPin aria-hidden="true" size={16} />
              Sta. Mesa, Manila
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
              <ShieldCheck aria-hidden="true" size={16} />
              IT Security and Compliance Specialist
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background outline-none transition hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Experience
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-primary outline-none transition hover:border-accent/50 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3" aria-label="Social links">
            <a
              href="mailto:artcabiao44@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-secondary outline-none transition hover:border-accent/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Send email"
            >
              <Mail aria-hidden="true" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajcabby"
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-secondary outline-none transition hover:border-accent/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin aria-hidden="true" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajcabby"
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-secondary outline-none transition hover:border-accent/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open LinkedIn profile"
            >
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[360px] overflow-hidden rounded-md border border-border bg-surface shadow-nav sm:min-h-[460px] lg:min-h-[560px]"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          <img
            src={heroVisual}
            alt="Dark technical workspace with layered security dashboard panels"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 p-4 sm:p-6">
            {techHighlights.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border/80 bg-background/72 px-3 py-2 text-xs font-medium text-primary backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
