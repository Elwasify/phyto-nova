import { useState } from "react";
import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.meta.languageButtonLabel}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-forest-700/30 bg-white/70 px-2.5 text-xs font-semibold text-forest-950 transition-colors hover:bg-mist-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 sm:px-3 sm:text-sm lg:px-4"
          >
            <Icon icon="ph:translate-duotone" width={17} height={17} />
            {t.meta.languageButton}
          </button>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 lg:inline-flex"
          >
            {t.navbar.repositoryButton}
            <Icon icon="ph:arrow-up-right-bold" width={16} height={16} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.meta.toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-mist-100 lg:hidden"
          >
            <Icon
              icon={open ? "ph:x-bold" : "ph:list-bold"}
              width={22}
              height={22}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav id="mobile-navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-mist-100 hover:text-navy-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              {t.navbar.repositoryButtonMobile}
              <Icon icon="ph:arrow-up-right-bold" width={16} height={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
