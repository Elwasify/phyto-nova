import { Icon } from "@iconify/react";
import { teamMembers } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function ProjectTeam() {
  const { t } = useLanguage();

  return (
    <section
      id="team"
      className="surface surface-team py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid min-w-0 items-end gap-6 lg:grid-cols-2 lg:gap-16" data-reveal>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
              {t.team.label}
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.team.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.team.description}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:gap-5 2xl:grid-cols-5" data-reveal="stagger">
          {teamMembers.map((member, index) => (
            <article
              key={member}
              className="group min-w-0 rounded-2xl border border-line bg-white/90 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-navy-700/40 hover:shadow-xl hover:shadow-navy-900/10 sm:p-5 lg:p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-forest-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700/10 text-navy-700 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <Icon icon="ph:user-duotone" width={20} height={20} />
                </span>
              </div>
              <h3
                dir="ltr"
                className="mt-4 text-start font-display text-lg font-medium leading-snug text-navy-900"
              >
                {member}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}