import { Icon } from "@iconify/react";
import heroImage from "../../assets/tissue-culture-editorial.jpg";
import { useLanguage } from "../../context/useLanguage";

const disciplineIcons = [
  "ph:plant-duotone",
  "ph:atom-duotone",
  "ph:flask-duotone",
  "ph:dna-duotone",
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="hero-stage">
        <img
          src={heroImage}
          alt={t.hero.imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover rtl:-scale-x-100"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[580px] sm:px-5 sm:py-20 lg:min-h-[640px] lg:px-8 lg:py-24">
          <div className="max-w-3xl" data-reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-forest-300">
              {t.hero.label}
            </p>

            <h1 className="font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              {t.hero.titleStart}{" "}
              <span className="text-sky-soft">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-mist-100 sm:w-auto sm:px-7"
              >
                {t.hero.primaryButton}
                <Icon
                  icon="ph:arrow-right-bold"
                  width={16}
                  height={16}
                  className="rtl:rotate-180"
                />
              </a>
              <a
                href="#publications"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-7"
              >
                <Icon icon="ph:book-open-duotone" width={18} height={18} />
                {t.hero.secondaryButton}
              </a>
            </div>

            <p className="mt-10 text-sm text-white/70">{t.hero.byline}</p>
          </div>

          <div className="absolute bottom-6 end-5 hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 sm:flex lg:end-8">
            <Icon icon="ph:plant-duotone" width={14} height={14} />
            {t.hero.imageCaption}
          </div>
        </div>
      </div>

      <div className="discipline-strip border-b border-mist-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-5 px-4 py-6 sm:gap-x-5 sm:gap-y-6 sm:px-5 sm:py-8 lg:grid-cols-4 lg:px-8" data-reveal="stagger">
          {disciplineIcons.map((icon, index) => (
            <div
              key={icon}
              className="flex min-w-0 items-center justify-center gap-2 text-center text-navy-900 sm:gap-3"
            >
              <Icon icon={icon} width={24} height={24} className="shrink-0 text-navy-700 sm:h-7 sm:w-7" />
              <span className="text-xs font-medium leading-snug sm:text-sm">
                {t.hero.disciplines[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
