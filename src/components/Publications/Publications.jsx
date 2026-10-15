import { Icon } from "@iconify/react";
import { publications } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section id="publications" className="bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
              {t.publicationsSection.label}
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {t.publicationsSection.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg lg:ms-auto lg:max-w-md">
            {t.publicationsSection.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          {publications.map((publication, index) => (
            <article
              key={publication.slug}
              className="flex flex-col rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-navy-700/40 hover:shadow-xl hover:shadow-navy-900/10 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-700">
                  {t.publicationsSection.reference}{" "}
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <Icon
                    icon="ph:book-open-text-duotone"
                    width={18}
                    height={18}
                    className="text-navy-700"
                  />
                  <span>
                    {publication.platform} · {publication.year}
                  </span>
                </div>
              </div>

              <h3
                dir="ltr"
                className="mt-5 text-start font-display text-xl font-medium leading-snug text-navy-900 sm:text-2xl"
              >
                {publication.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                {t.publicationSummaries[publication.slug]}
              </p>

              <p dir="ltr" className="mt-6 text-start text-xs font-medium italic text-ink-soft">
                {publication.journal}
              </p>

              <div className="mt-6 border-t border-line pt-6">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
                >
                  {t.publicationsSection.readPublication}
                  <Icon icon="ph:arrow-up-right-bold" width={16} height={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
