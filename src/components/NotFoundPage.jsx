import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-[65vh] items-center bg-paper px-5 py-14 sm:py-20 lg:px-8">
      <section className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-line bg-white px-6 py-12 text-center shadow-sm shadow-navy-900/5 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -end-16 -top-20 h-52 w-52 rounded-full bg-sky-soft/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -start-10 h-52 w-52 rounded-full bg-mist-200/70 blur-3xl"
        />

        <div className="relative">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-forest-700/20 bg-mist-50 text-forest-800">
            <Icon icon="ph:leaf-duotone" width={28} height={28} />
          </span>
          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-forest-800">
            {t.errorPage.eyebrow}
          </p>
          <p
            aria-hidden="true"
            className="mt-2 font-display text-7xl font-semibold leading-none text-navy-900 sm:text-8xl"
          >
            404
          </p>
          <h1 className="mt-5 font-display text-2xl text-navy-900 sm:text-3xl">
            {t.errorPage.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
            {t.errorPage.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
            >
              <Icon icon="ph:house-line-duotone" width={18} height={18} />
              {t.errorPage.backHome}
            </Link>
            <Link
              to="/#publications"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-mist-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
            >
              {t.errorPage.viewResearch}
              <Icon icon="ph:arrow-down-bold" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
