import { useState } from "react";
import { iconsContent } from "./content";
import './style.css'

type IconContentType = {
  icon: string;
  title: string;
  description: string;
}



function HabilitiesSection() {
  const initialContent: IconContentType = {
    icon: '',
    title: '',
    description: 'Passe o cursosr do mouse no card para ler*'
  }
  const [habiliesContent, setHabilitiesContent] = useState<IconContentType>(initialContent);

  return (
    <section className="habilities-section">
      <div className="container-habilities">
        <div className="container-section-left">
          <div className="habilities-section-content">
            <h2>Conhecimentos</h2>
            <p>{habiliesContent.description}</p>
          </div>
        </div>
        <div className="container-section-right">
          <div className="habilities-section-icons">
            {iconsContent.map((icon) => (
              <i
                onMouseOver={() => setHabilitiesContent(icon)}
                onMouseLeave={() => setHabilitiesContent(initialContent)}
                className={`${icon.icon} habilities-section-icon`}></i>
            ))}
          </div>  
        </div>
      </div>
    </section>
  )
}

export default HabilitiesSection;
// This component serves as a placeholder for the habilities section of the application, which can be