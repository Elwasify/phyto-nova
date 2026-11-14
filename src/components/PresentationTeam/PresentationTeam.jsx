import { presenters } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";
import Card from "../Card";

export default function PresentationTeam() {
  const { t } = useLanguage();

  return (
    <section
      id="team"
      className="surface surface-presenters py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-5xl px-4 text-center sm:px-5 lg:px-8">
        <div data-reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-forest-800">
            {t.presentation.label}
          </p>
          <h2 className="font-display text-3xl font-medium text-navy-900 sm:text-4xl">
            {t.presentation.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
        </div>

        <div
          className="mt-8 grid grid-cols-1 justify-items-center gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8"
          data-reveal="stagger"
        >
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
