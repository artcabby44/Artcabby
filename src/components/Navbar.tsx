import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuMotion = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -6, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -6, scale: 0.98 },
        transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "0.5px solid var(--nav-border)"
          : "0.5px solid transparent",
      }}
    >
      <nav
        className="mx-auto flex h-[52px] w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 apple-focus rounded-lg"
          aria-label="Art Cabiao – go to top"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, #5ac8f5 100%)",
              boxShadow: "0 2px 12px var(--glow-color)",
            }}
          >
            AC
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-primary sm:block">
            Art Cabiao
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary apple-focus"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="btn-primary hidden text-sm md:inline-flex apple-focus"
            style={{ padding: "8px 20px", fontSize: "0.875rem" }}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="icon-btn apple-focus"
              style={{ width: 36, height: 36 }}
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            className="px-5 pb-4 md:hidden"
            style={{
              borderTop: "0.5px solid var(--nav-border)",
              background: "var(--nav-mobile-bg)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
            }}
            {...menuMotion}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-0.5 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-elevated hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary mt-3 justify-center text-sm apple-focus"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
