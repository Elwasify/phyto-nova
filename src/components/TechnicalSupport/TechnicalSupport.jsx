import { useLanguage } from "../../context/useLanguage";
import DeveloperCard from "./DeveloperCard";

export default function TechnicalSupport() {
  const { t } = useLanguage();

  return (
    <section
      id="technical-support"
      className="surface surface-team border-t-2 border-forest-700/25 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-5xl px-4 text-center sm:px-5 lg:px-8">
        <div data-reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800">
            {t.technicalSupport.label}
          </p>
          <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
            {t.technicalSupport.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
          {t.technicalSupport.description && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.technicalSupport.description}
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center sm:mt-12" data-reveal>
          <DeveloperCard />
        </div>
      </div>
    </section>
  );
}
