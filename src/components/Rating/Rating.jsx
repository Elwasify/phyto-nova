import { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/useLanguage";

const TYPES = ["feedback", "suggestion", "question"];

export default function Rating() {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [type, setType] = useState("feedback");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(() => {
    try {
      return window.localStorage.getItem("phytonova_feedback") ? "done" : "idle";
    } catch {
      return "idle";
    }
  });
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!rating || !message.trim()) return;
    if (honeypot) return;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
            "05e34385-9078-4a77-a24d-b64c78627f1a",
          subject: `Phyto Nova - ${t.rating.types[type]}`,
          from_name: name || "Anonymous",
          rating: `${rating} / 5`,
          type: t.rating.types[type],
          name: name || "-",
          email: email || "-",
          language: document.documentElement.lang,
          message: message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        try {
          localStorage.setItem("phytonova_feedback", "1");
        } catch {
          setStatus("done");
          return;
        }
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setRating(0);
    setHover(0);
    setMessage("");
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-mist-50 p-3 text-sm text-ink placeholder:text-ink-soft transition-colors focus:border-navy-800 focus:outline-none";

  return (
    <section
      id="rating"
      className="surface surface-publications py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div
        className="surface-content mx-auto max-w-xl px-4 sm:px-5 lg:px-8"
        data-reveal
      >
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
            {t.rating.label}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl">
            {t.rating.title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-forest-700 to-navy-800" />
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            {t.rating.description}
          </p>
        </div>

        <article className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
          {status === "done" ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-forest-700/20 bg-forest-50 text-forest-800">
                <Icon icon="ph:check-circle-duotone" width={32} height={32} />
              </div>
              <p className="text-lg text-navy-900">
                {t.rating.thanks}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 underline underline-offset-4 transition-colors hover:text-navy-900"
              >
                <Icon icon="ph:arrow-counter-clockwise-bold" width={14} height={14} />
                {t.rating.submitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="text-center">
                <p className="mb-2 text-sm font-medium text-ink">
                  {t.rating.ratingLabel}
                </p>
                <div className="flex h-11 items-center justify-center gap-1" dir="ltr">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      aria-pressed={rating === n}
                      onClick={(e) => {
                        e.preventDefault();
                        setRating(n);
                      }}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      aria-label={`${n} ${t.rating.star}`}
                      className="flex h-10 w-10 items-center justify-center p-0 focus:outline-none"
                    >
                      <Icon
                        icon={n <= (hover || rating) ? "ph:star-fill" : "ph:star-duotone"}
                        width={32}
                        height={32}
                        className={`transition-colors duration-150 ${
                          n <= (hover || rating) ? "text-amber-400" : "text-mist-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-ink">
                  {t.rating.typeLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((key) => (
                    <button
                      type="button"
                      key={key}
                      aria-pressed={type === key}
                      onClick={() => setType(key)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                        type === key
                          ? "border-navy-900 bg-navy-900 text-white"
                          : "border-line bg-mist-50 text-ink-soft hover:bg-mist-100"
                      }`}
                    >
                      {t.rating.types[key]}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder={t.rating.messagePlaceholder}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} min-h-[110px]`}
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t.rating.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={t.rating.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!rating || !message.trim() || status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-950 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <>
                      <Icon icon="ph:spinner-gap-bold" width={16} height={16} className="animate-spin" />
                      {t.rating.sending}
                    </>
                  ) : (
                    t.rating.submit
                  )}
                </button>

                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">{t.rating.error}</p>
                )}
              </div>
            </form>
          )}
        </article>
      </div>
    </section>
  );
}
