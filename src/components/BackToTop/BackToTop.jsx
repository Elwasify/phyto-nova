import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/useLanguage";

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      className={`fixed bottom-6 end-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-sky-soft text-navy-950 shadow-lg transition-all duration-300 hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon icon="ph:arrow-up-bold" width={20} height={20} />
    </button>
  );
}