import AboutMeSection from "../../components/AboutMe";
import ExperiencesSection from "../../components/Experiences";
import HabilitiesSection from "../../components/Habilities";
import HeroSection from "../../components/Hero";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ExperiencesSection />
      <HabilitiesSection />
    </div>
  )
}

export default Home;
// This component serves as the home page of the application.