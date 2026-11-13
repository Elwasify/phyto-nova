import { Icon } from "@iconify/react";
import { useLanguage } from "../context/useLanguage";
import supervisorPortrait from "../assets/prof-mohamed-mamdouh-elashtokhy.jpg";
import departmentSeal from "../assets/genetics-biotechnology-department-seal.png";
import AcademicProfileCard from "./AcademicProfileCard";

const content = {
  en: {
    label: "Academic Conference",
    heading: "Phyto Nova at an academic conference",
    presented: "Project presentation & discussion",
    eventTitle:
      "Agricultural Biotechnology in the Age of Artificial Intelligence Conference",
    venueLabel: "Presented at",
    department: "Department of Genetics and Biotechnology",
    institution: "Faculty of Agriculture, Zagazig University",
    description:
      "Our project was presented and discussed during the conference.",
    sealAlt:
      "Department of Genetics and Biotechnology, Faculty of Agriculture, Zagazig University seal",
    supervision: "Under the supervision of",
    supervisor: "Prof. Dr. Mohamed Mamdouh Elashtokhy",
    role: "Head of the Department of Genetics and Biotechnology\nFaculty of Agriculture, Zagazig University",
    supervisorAlt: "Prof. Dr. Mohamed Mamdouh Elashtokhy",
  },
  ar: {
    label: "مشاركة في مؤتمر علمي",
    heading: "مشاركة Phyto Nova في مؤتمر علمي",
    presented: "عرض ومناقشة المشروع",
    eventTitle: "مؤتمر التكنولوجيا الحيوية الزراعية في عصر الذكاء الاصطناعي",
    venueLabel: "مكان العرض",
    department: "قسم الوراثة والتكنولوجيا الحيوية",
    institution: "كلية الزراعة، جامعة الزقازيق",
    description: "تم عرض ومناقشة مشروعنا خلال فعاليات المؤتمر.",
    sealAlt:
      "شعار قسم الوراثة والتكنولوجيا الحيوية، كلية الزراعة، جامعة الزقازيق",
    supervision: "تحت إشراف",
    supervisor: "أ.د. محمد ممدوح الأشتوخي",
    role: "رئيس قسم الوراثة والتكنولوجيا الحيوية\nكلية الزراعة، جامعة الزقازيق",
    supervisorAlt: "الأستاذ الدكتور محمد ممدوح الأشتوخي",
  },
};

export default function ConferenceRecognition() {
  const { language } = useLanguage();
  const copy = content[language] ?? content.en;
  const isArabic = language === "ar";

  const eyebrowClass = isArabic
    ? "text-sm font-semibold text-forest-800"
    : "text-xs font-semibold uppercase tracking-[0.25em] text-forest-800";

  const smallEyebrowClass = isArabic
    ? "text-sm font-semibold text-forest-800"
    : "text-xs font-semibold uppercase tracking-[0.18em] text-forest-800";

  const headingLeading = isArabic ? "leading-[1.45]" : "leading-tight";
  const subHeadingLeading = isArabic ? "leading-[1.55]" : "leading-snug";

  return (
    <section
      id="conference"
      lang={language}
      aria-labelledby="conference-heading"
      className="surface surface-conference scroll-mt-24 py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10" data-reveal>
          <p className={eyebrowClass}>{copy.label}</p>
          <h2
            id="conference-heading"
            className={`mt-3 text-balance font-display text-3xl font-medium text-navy-900 sm:text-4xl lg:text-5xl ${headingLeading}`}
          >
            {copy.heading}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
        </div>

        <article className="overflow-hidden rounded-3xl border border-line bg-white/90 shadow-[0_24px_60px_rgba(15,56,74,0.09)] backdrop-blur-sm sm:rounded-4xl" data-reveal>
          <div className="h-1.5 bg-linear-to-r from-forest-900 via-forest-700 to-navy-800" />
          <div className="grid lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-12">
              <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-forest-700/15 bg-mist-50 px-4 py-2 text-sm font-semibold text-forest-950">
                <Icon
                  icon="ph:presentation-chart-duotone"
                  width={19}
                  height={19}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="break-words">{copy.presented}</span>
              </div>

              <h3
                className={`mt-6 max-w-3xl text-balance break-words font-display text-xl font-medium text-navy-900 sm:text-2xl lg:text-3xl ${subHeadingLeading}`}
              >
                {copy.eventTitle}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:mt-5 sm:text-lg">
                {copy.description}
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-stone-soft/70 p-4 sm:gap-5 sm:p-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white p-1 shadow-sm sm:h-18 sm:w-18">
                  <img
                    src={departmentSeal}
                    alt={copy.sealAlt}
                    width={128}
                    height={128}
                    className="h-full w-full rounded-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0">
                  <p className={smallEyebrowClass}>{copy.venueLabel}</p>
                  <p className="mt-1 break-words font-semibold leading-snug text-navy-900 sm:text-lg">
                    {copy.department}
                  </p>
                  <p className="mt-1 break-words text-sm leading-relaxed text-ink-soft sm:text-base">
                    {copy.institution}
                  </p>
                </div>
              </div>
            </div>

            <aside className="flex min-w-0 items-center border-t border-line bg-linear-to-b from-mist-50 to-sky-soft/70 p-5 sm:p-8 lg:border-s lg:border-t-0 lg:p-10">
              <AcademicProfileCard
                photo={supervisorPortrait}
                photoAlt={copy.supervisorAlt}
                label={copy.supervision}
                name={copy.supervisor}
                role={copy.role}
                compact
                embedded
                className="w-full min-w-0"
              />
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}