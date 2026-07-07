import { Linkedin, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "artcabiao44@gmail.com",
    href: "mailto:artcabiao44@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ajcabby",
    href: "https://www.linkedin.com/in/ajcabby",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-accent">
            Contact
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-primary sm:text-4xl">
            Let us talk about security operations, compliance, or automation work.
          </h2>
          <p className="mt-5 flex items-center gap-2 text-sm text-secondary">
            <MapPin aria-hidden="true" size={16} />
            Sta. Mesa, Manila
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-md border border-border bg-surface p-4 outline-none transition hover:border-accent/50 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="grid h-10 w-10 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={19} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-secondary">
                  {contact.label}
                </p>
                <p className="mt-2 break-words text-sm font-semibold text-primary">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
