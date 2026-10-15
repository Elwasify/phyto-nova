import { Icon } from "@iconify/react";
import { supervisor } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";

export default function Supervisor() {
  const { t } = useLanguage();

  return (
    <section id="supervisor" className="bg-mist-100 py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="grid items-center gap-8 p-5 sm:p-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10 lg:p-10">
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-b from-sky-soft to-mist-100 p-2 shadow-lg shadow-navy-900/10 sm:max-w-[280px] md:mx-0">
              <img
                src={supervisor.photo}
                alt={supervisor.name}
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top sm:h-[340px]"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-3 text-navy-700">
                <Icon icon="ph:graduation-cap-duotone" width={22} height={22} />
                <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                  {t.supervisor.label}
                </p>
              </div>

              <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
                {t.supervisor.title}
              </h2>

              <div className="mt-6 space-y-5">
                <p className="text-xl font-medium text-navy-900 sm:text-2xl">
                  {t.supervisor.name}
                </p>
                <p className="max-w-xl text-base leading-relaxed text-ink-soft">
                  {t.supervisor.role}
                </p>
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-stone-soft px-4 py-2 text-sm font-semibold text-ink-soft">
                  <Icon icon="ph:star-duotone" width={16} height={16} />
                  {t.supervisor.distinction}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
