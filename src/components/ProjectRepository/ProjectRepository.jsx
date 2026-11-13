import { Icon } from "@iconify/react";
import { repositoryUrl } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function ProjectRepository() {
  const { t } = useLanguage();

  return (
    <section
      id="repository"
      className="surface surface-cta py-16 text-white md:py-20 lg:py-28"
    >
      <div className="surface-content mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-8" data-reveal>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 text-forest-300 shadow-lg shadow-navy-950/20">
          <Icon icon="ph:folder-open-duotone" width={32} height={32} />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-forest-300">
          {t.repository.label}
        </p>

        <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          {t.repository.title}
        </h2>
        <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-300 to-sky-soft" />

        <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
          {t.repository.description}
        </p>

        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-mist-100 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {t.repository.button}
          <Icon icon="ph:arrow-up-right-bold" width={16} height={16} />
        </a>
      </div>
    </section>
  );
}
