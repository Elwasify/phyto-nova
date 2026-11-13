import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl, socialLinks } from "../../data/researchData";
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

export default function Footer() {
  const { t } = useLanguage();
  const links = t.nav.filter((item) => item.href !== "#repository");

  return (
    <footer className="site-footer text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-14 lg:px-8">
        <div className="grid items-start gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-[1.5fr_1fr_1.3fr_1fr] xl:gap-12" data-reveal="stagger">
          <div className="sm:col-span-2 xl:col-span-1">
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
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.footer.socialAccountPrefix} ${s.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-sky-soft hover:text-sky-soft"
                >
                  <Icon icon={s.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm sm:mt-12 sm:pt-8">
          <p className="text-white/60">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
[]
