import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResearchOverview from "./components/ResearchOverview";
import ResearchAreas from "./components/ResearchAreas";
import Publications from "./components/Publications";
import ProjectRepository from "./components/ProjectRepository";
import Supervisor from "./components/Supervisor";
import PresentationTeam from "./components/PresentationTeam";
import ProjectTeam from "./components/ProjectTeam";
import ResearchOutlook from "./components/ResearchOutlook";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import NotFoundPage from "./components/NotFoundPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchOverview />
        <ResearchAreas />
        <Publications />
        <ProjectRepository />
        <Supervisor />
        <PresentationTeam />
        <ProjectTeam />
        <ResearchOutlook />
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
