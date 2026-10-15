import logo from "../../assets/phyto-nova-logo.png";

export default function Brand({ light = false }) {
  return (
    <a href="/#home" className="flex shrink-0 items-center gap-2 sm:gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11 ${
          light ? "bg-white p-1.5" : ""
        }`}
      >
        <img
          src={logo}
          alt="Phyto Nova"
          className="h-full w-full object-contain"
        />
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        Phyto Nova
      </span>
    </a>
  );
}
