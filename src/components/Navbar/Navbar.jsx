import { useState } from "react";
import { Icon } from "@iconify/react";
import Brand from "../Brand";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const navigation = [
    ...t.nav,
    { label: language === "ar" ? "المؤتمر" : "Conference", href: "#conference" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-navy-800"
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
            className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-forest-700/30 bg-white/70 px-2 text-[11px] font-semibold text-forest-950 transition-colors hover:bg-mist-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 sm:px-3 sm:text-sm xl:px-4"
          >
            <Icon icon="ph:translate-duotone" width={17} height={17} />
            {t.meta.languageButton}
          </button>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 xl:inline-flex 2xl:px-5"
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
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-mist-100 xl:hidden"
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
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper xl:hidden">
          <nav id="mobile-navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5 sm:py-4">
            {navigation.map((item) => (
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
