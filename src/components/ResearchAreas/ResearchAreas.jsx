import { Icon } from "@iconify/react";
import { areas } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

const icons = {
  Atom: "ph:atom-duotone",
  Dna: "ph:dna-duotone",
  FlaskConical: "ph:flask-duotone",
  Sprout: "ph:plant-duotone",
};

const tone =
  "bg-navy-700/10 text-navy-700 group-hover:bg-navy-800 group-hover:text-white";

export default function ResearchAreas() {
  const { t } = useLanguage();

  return (
    <section id="research-areas" className="bg-stone-soft py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
              {t.areasSection.label}
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.areasSection.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.areasSection.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {areas.map((area, index) => (
            <article
              key={area.icon}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy-700/40 hover:shadow-xl hover:shadow-navy-900/10 sm:p-7"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors ${tone}`}
              >
                <Icon
                  icon={icons[area.icon] || "ph:plant-duotone"}
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="mt-6 font-display text-xl font-medium text-navy-900">
                {t.areas[index].title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {t.areas[index].description}
              </p>

              <p className="mt-8 border-t border-line pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-700">
                {String(index + 1).padStart(2, "0")} / {t.areasSection.focusLabel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
