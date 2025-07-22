import { Link } from 'react-router-dom';
import './style.css'

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>Meus Projetos</h1>
        <div className="project-card">
          <img src="https://cdn.prod.website-files.com/6399c61683700ed8ab159d36/639fb85066f416b5bf185fcf_Ciclo-de-vida-de-um-projeto.png" alt="" />
          <p>Aut repellendus impedit et officia quia et enim dolorem est fugit cumque id velit natus eos suscipit consequatur? Ut libero natus rem fuga consectetur id voluptatibus quia. Eum adipisci ratione sed fuga accusantium ut quia quia ex rerum tenetur qui unde dolores rem quidem nisi a fuga vero.</p>
          <Link to=''>Ver projeto <i className="bi bi-arrow-right-short"></i></Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
