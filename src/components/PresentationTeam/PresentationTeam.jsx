import { presenters } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function PresentationTeam() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800">
          {t.presentation.label}
        </p>
        <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
          {t.presentation.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {presenters.map((presenter) => (
            <article
              key={presenter.name}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 text-start shadow-sm shadow-navy-900/5 sm:gap-5 sm:p-6"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line bg-stone-soft ring-2 ring-white sm:h-24 sm:w-24">
                <img
                  src={presenter.photo}
                  alt={presenter.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800">
                  {t.presentation.presentedBy}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-navy-900 sm:text-xl">
                  {presenter.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
