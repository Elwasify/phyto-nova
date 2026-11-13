import { Icon } from "@iconify/react";

export default function AcademicProfileCard({
  photo,
  photoAlt,
  label,
  title,
  name,
  role,
  distinction,
  compact = false,
  embedded = false,
  headingLevel = 3,
  className = "",
}) {
  const Heading = `h${headingLevel}`;
  const cardClasses = embedded
    ? "h-full"
    : "mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_55px_rgba(29,76,100,0.09)] sm:rounded-4xl";
  const contentClasses = compact
    ? "flex h-full flex-col items-center justify-center gap-5 p-2 text-center sm:p-4"
    : "grid items-center gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 lg:p-10";
  const imageClasses = compact
    ? "w-44 shrink-0 rounded-3xl border border-line bg-white p-2 shadow-md shadow-navy-900/5 sm:w-48"
    : "mx-auto w-full max-w-52 rounded-3xl border border-line bg-mist-50 p-2 shadow-md shadow-navy-900/5 md:mx-0";
  const imageShapeClasses = compact
    ? "aspect-4/5 w-full rounded-[1.25rem] object-cover object-top"
    : "aspect-4/5 w-full rounded-[1.25rem] object-cover object-top";
  const contentAlignment = compact
    ? "min-w-0 text-center"
    : "min-w-0 text-center md:text-start";
  const nameClasses = compact
    ? "text-xl sm:text-2xl"
    : "text-2xl sm:text-3xl lg:text-4xl";
  const labelAlignment = compact
    ? "justify-center"
    : "justify-center md:justify-start";

  return (
    <article className={`${cardClasses} ${className}`}>
      {!embedded && (
        <div className="h-1.5 bg-linear-to-r from-forest-900 via-forest-700 to-navy-800" />
      )}
      <div className={contentClasses}>
        <div className={`group ${imageClasses}`}>
          <img
            src={photo}
            alt={photoAlt}
            width={520}
            height={650}
            className={`${imageShapeClasses} transition-transform duration-500 group-hover:scale-[1.02]`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={contentAlignment}>
          {label && (
            <div className={`flex items-center gap-2 text-forest-800 ${labelAlignment}`}>
              <Icon
                icon="ph:graduation-cap-duotone"
                width={compact ? 18 : 20}
                height={compact ? 18 : 20}
                className="shrink-0"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                {label}
              </p>
            </div>
          )}

          {title && (
            <p className="mt-3 font-display text-lg font-medium leading-snug text-ink-soft sm:text-xl">
              {title}
            </p>
          )}

          <Heading
            className={`mt-2 break-words font-display font-semibold leading-snug text-navy-900 ${nameClasses}`}
          >
            {name}
          </Heading>

          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft sm:mt-4 sm:text-base">
            {role}
          </p>

          {distinction && (
            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-forest-700/20 bg-mist-50 px-3.5 py-2 text-xs font-semibold leading-snug text-forest-950 sm:text-sm">
              <Icon
                icon="ph:star-duotone"
                width={17}
                height={17}
                className="shrink-0"
                aria-hidden="true"
              />
              <span className="break-words">{distinction}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}