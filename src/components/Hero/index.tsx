import { HeroContent } from './content';
import './style.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1>{HeroContent.title}</h1>
        <p>{HeroContent.description}</p>
      </div>
    </section>
  )
}

export default HeroSection;
// This component serves as a hero section of the application, typically used to highlight key information or