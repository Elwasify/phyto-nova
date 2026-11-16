import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResearchOverview from "./components/ResearchOverview";
import ResearchAreas from "./components/ResearchAreas";
import Publications from "./components/Publications";
import ProjectRepository from "./components/ProjectRepository";
import ConferenceRecognition from "./components/ConferenceRecognition";
import Supervisor from "./components/Supervisor";
import PresentationTeam from "./components/PresentationTeam";
import TechnicalSupport from "./components/TechnicalSupport";
import ProjectTeam from "./components/ProjectTeam";
import Rating from "./components/Rating";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import NotFoundPage from "./components/NotFoundPage";

function HomePage() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.documentElement.classList.add("has-scroll-reveal");
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchOverview />
        <ResearchAreas />
        <Publications />
        <ProjectRepository />
        <ConferenceRecognition />
        <Supervisor />
        <PresentationTeam />
        <TechnicalSupport />
        <ProjectTeam />
        <Rating />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFoundPage />
              <Footer />
            </>
          }
        />
      </Routes>
      <BackToTop />
    </>
  );
}
