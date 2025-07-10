import { Link } from 'react-router-dom';
import './style.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h2>Desenvolvedor Web Full-stack</h2>
        <h1>Transformando ideias em soluções web robustas e modernas.</h1>
        <p>Minha especialidade é <span className='destak-text'>tirar suas ideias do papel</span> e transformá-las em <span className='destak-text'>algo real na internet</span>, construo sites e aplicações Web completos, do começo ao fim.</p>
        <Link className='go-projects-btn' to=''>Ver meus projetos<i className="bi bi-arrow-right-short"></i></Link>
      </div>
    </section>
  )
}

export default HeroSection;
// This component serves as a hero section of the application, typically used to highlight key information or