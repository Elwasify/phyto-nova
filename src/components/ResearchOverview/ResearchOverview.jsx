import heroImage from "../../assets/tissue-culture-editorial.jpg";
import { useLanguage } from "../../context/useLanguage";

export default function ResearchOverview() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="surface surface-intro py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        className="surface-content mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-5 lg:grid-cols-2 lg:gap-16 lg:px-8"
        data-reveal
      >
        <div className="lg:col-start-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
            {t.overview.label}
          </p>

          <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {t.overview.title}
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />

          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.overview.paragraphOne}
          </p>

          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.overview.paragraphTwo}
          </p>

          <p className="mt-8 rounded-e-xl border-s-4 border-navy-800 bg-mist-100 py-4 ps-5 pe-4 font-display text-sm italic leading-relaxed text-navy-900 sm:text-base">
            {t.overview.quote}
          </p>
        </div>

        <figure className="min-w-0 lg:col-start-2">
          <div className="group overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15 ring-1 ring-line">
            <img
              src={heroImage}
              alt={t.overview.imageAlt}
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-2 text-[11px] leading-relaxed text-ink-soft sm:text-xs">
            <span className="font-semibold uppercase tracking-[0.15em] text-forest-700">
              {t.overview.figureLabel}
            </span>
            <span className="italic">{t.overview.figureNote}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
