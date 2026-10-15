import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/useLanguage";

export default function ResearchOutlook() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-mist-100 to-sky-soft py-16 md:py-20 lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-800 shadow-md shadow-navy-900/10">
          <Icon icon="ph:leaf-duotone" width={32} height={32} />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
          {t.outlook.label}
        </p>

        <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
          {t.outlook.title}
        </h2>

        <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
          {t.outlook.description}
        </p>

        <a
          href="#publications"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          {t.outlook.button}
          <Icon
            icon="ph:arrow-right-bold"
            width={16}
            height={16}
            className="rtl:rotate-180"
          />
        </a>
      </div>
    </section>
  );
}
