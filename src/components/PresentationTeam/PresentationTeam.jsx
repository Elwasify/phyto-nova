import { presenters } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";
import Card from "../Card";

export default function PresentationTeam() {
  const { t } = useLanguage();

  return (
    <section className="surface surface-presenters py-16 md:py-20 lg:py-24">
      <div className="surface-content mx-auto max-w-5xl px-5 text-center lg:px-8">
        <div data-reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800">
            {t.presentation.label}
          </p>
          <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
            {t.presentation.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:mt-12" data-reveal="stagger">
          {presenters.map((presenter) => (
            <Card
              key={presenter.name}
              name={presenter.name}
              role={t.presentation.presentedBy}
              photo={presenter.photo}
              socialLinks={presenter.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
