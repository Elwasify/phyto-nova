import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

const contacts = [
  {
    icon: "ph:map-pin-duotone",
    text: "Faculty of Agriculture,\nZagazig University",
    href: "https://www.google.com/maps/search/?api=1&query=Faculty+of+Agriculture+Zagazig+University",
  },
  {
    icon: "ph:phone-duotone",
    text: "+20 101 087 3384",
    href: "tel:+201010873384",
  },
  {
    icon: "ph:envelope-simple-duotone",
    text: "mohfouadmf42@gmail.com",
    href: "mailto:mohfouadmf42@gmail.com",
  },
];

const socials = [
  {
    icon: "ph:facebook-logo-bold",
    href: "https://www.facebook.com/share/1Cey6MSJtR/",
    label: "Facebook",
  },
  {
    icon: "ph:instagram-logo-bold",
    href: "https://www.instagram.com/fouad8_19",
    label: "Instagram",
  },
  {
    icon: "ph:linkedin-logo-bold",
    href: "https://www.linkedin.com/in/mohamed-fouad-55b1a0301",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const links = t.nav.filter((item) => item.href !== "#repository");

  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Brand light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium transition-colors hover:border-sky-soft hover:text-sky-soft"
            >
              <Icon icon="ph:folder-open-duotone" width={18} height={18} />
              {t.footer.repository}
              <Icon icon="ph:arrow-up-right-bold" width={14} height={14} />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t.footer.quickLinks}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="transition-colors hover:text-sky-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t.footer.contactUs}</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              {contacts.map((c) => (
                <li key={c.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-soft">
                    <Icon icon={c.icon} width={20} height={20} />
                  </span>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    dir="ltr"
                    className={`whitespace-pre-line transition-colors hover:text-sky-soft ${
                      c.href.startsWith("mailto:") ? "break-all" : "break-words"
                    }`}
                  >
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{t.footer.followUs}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-sky-soft hover:text-sky-soft"
                >
                  <Icon icon={s.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm">
          <p className="text-white/60">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
[]
