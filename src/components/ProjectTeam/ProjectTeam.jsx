import { Icon } from "@iconify/react";
import { teamMembers } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function ProjectTeam() {
  const { t } = useLanguage();

  return (
    <section id="team" className="bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
              {t.team.label}
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.team.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.team.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {teamMembers.map((member, index) => (
            <article
              key={member}
              className="group rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-navy-700/40 hover:shadow-xl hover:shadow-navy-900/10 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-forest-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700/10 text-navy-700 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <Icon icon="ph:user-duotone" width={20} height={20} />
                </span>
              </div>
              <p
                dir="ltr"
                className="mt-4 text-start font-display text-lg font-medium leading-snug text-navy-900"
              >
                {member}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
