import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, ShieldCheck, ChevronDown } from "lucide-react";
import heroVisual from "../../assets/IMG_5131.jpg";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay },
        };

  const fadeScale = (delay: number) =>
    shouldReduceMotion
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, scale: 0.95, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
        };

  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      {/* Hero content */}
      <section className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-16 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:pt-36">
        {/* Left: Text */}
        <div className="flex flex-col">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="pill mb-6 w-fit">
              <span
                className="h-2 w-2 rounded-full animate-pulse-glow"
                style={{ background: "var(--accent)" }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-semibold tracking-tight text-primary"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
            {...fadeUp(0.2)}
          >
            Develop,
            <br />
            <span className="label-accent">Secure,</span>
            <br />
            Improve Process.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-sm text-secondary"
            style={{ fontSize: "1.125rem", lineHeight: 1.65, letterSpacing: "-0.01em" }}
            {...fadeUp(0.32)}
          >
            Security specialist focused on threat detection, response, and governance.
          </motion.p>

          {/* Meta pills */}
          <motion.div className="mt-6 flex flex-wrap gap-2" {...fadeUp(0.4)}>
            <span className="pill">
              <MapPin size={13} />
              Sta. Mesa, Manila
            </span>
            <span className="pill">
              <ShieldCheck size={13} />
              Security Specialist
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div className="mt-9 flex flex-wrap gap-3" {...fadeUp(0.48)}>
            <a href="#experience" className="btn-primary apple-focus">
              View Experience
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary apple-focus">
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div className="mt-8 flex items-center gap-2.5" aria-label="Social links" {...fadeUp(0.56)}>
            <a
              href="mailto:artcabiao44@gmail.com"
              className="icon-btn apple-focus"
              aria-label="Send email"
            >
              <Mail size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajcabby"
              className="icon-btn apple-focus"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          className="relative"
          {...fadeScale(0.15)}
        >
          {/* Decorative ring */}
          <div
            className="absolute -inset-6 rounded-3xl opacity-30"
            style={{
              background: "linear-gradient(135deg, var(--glow-color) 0%, transparent 60%)",
              border: "0.5px solid var(--border)",
            }}
          />
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              boxShadow: "var(--card-shadow-hover)",
            }}
          >
            <img
              src={heroVisual}
              alt="Art Cabiao – IT Security and Compliance Specialist"
              className="h-full w-full object-cover"
              style={{ aspectRatio: "4/5" }}
              fetchPriority="high"
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
              }}
            />
            {/* Caption chip */}
            <div
              className="absolute bottom-5 left-5 right-5 flex items-center gap-2 rounded-xl p-3"
              style={{
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-[#30d158] animate-pulse" />
              <span className="text-xs font-medium text-[#f5f5f7]">
                I also enjoy hiking.
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        {...fadeUp(0.9)}
      >
        <span className="text-xs font-medium text-secondary">Scroll</span>
        <ChevronDown size={16} className="text-secondary animate-bounce" />
      </motion.div>
    </main>
  );
}
