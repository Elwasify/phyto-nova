import { supervisor } from "../../data/researchData";
import { useLanguage } from "../../context/useLanguage";
import AcademicProfile from "../AcademicProfile";

export default function Supervisor() {
  const { t } = useLanguage();

  return (
    <AcademicProfile
      id="supervisor"
      photo={supervisor.photo}
      photoAlt={supervisor.name}
      label={t.supervisor.label}
      title={t.supervisor.title}
      name={t.supervisor.name}
      role={t.supervisor.role}
      distinction={t.supervisor.distinction}
    />
  );
}
