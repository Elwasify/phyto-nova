import AcademicProfileCard from "./AcademicProfileCard";

export default function AcademicProfile({
  id,
  photo,
  photoAlt,
  label,
  title,
  name,
  role,
  distinction,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="surface surface-team py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="surface-content mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-800">
            {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
        </div>

        <div data-reveal>
          <AcademicProfileCard
            photo={photo}
            photoAlt={photoAlt}
            name={name}
            role={role}
            distinction={distinction}
          />
        </div>
      </div>
    </section>
  );
}
