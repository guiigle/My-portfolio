import AboutMeSection from "../../components/AboutMe";
import ExperiencesSection from "../../components/Experiences";
import HabilitiesSection from "../../components/Habilities";
import HeroSection from "../../components/Hero";
import ProjectsSection from "../../components/Projects";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ExperiencesSection />
      <HabilitiesSection />
    </div>
  )
}

export default Home;
// This component serves as the home page of the application.