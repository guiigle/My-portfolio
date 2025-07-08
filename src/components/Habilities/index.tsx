import { useState } from "react";
import './style.css'
import reactIcon from './icons/react.png'
import bootstrapIcon from './icons/bootstrap.png'
import dockerIcon from './icons/docker.png'
import gitIcon from './icons/git.png'
import htmlIcon from './icons/html.png'
import jsIcon from './icons/js.png'
import nextIcon from './icons/nextjs.png'
import nodeIcon from './icons/nodejs.png'
import pythonIcon from './icons/python.png'
import reduxIcon from './icons/redux.png'
import tailwindIcon from './icons/tailwind.png'
import tsIcon from './icons/ts.png'
import { iconsContent } from "./content";

type IconContentType = {
  title: string;
  description: string;
}



function HabilitiesSection() {
  const content: IconContentType[] = iconsContent
  const initialContent: IconContentType = {
    title: '...',
    description: 'Passe o cursosr do mouse no card para ler*'
  }
  const [habiliesContent, setHabilitiesContent] = useState<IconContentType>(initialContent);

  const MouseOverAction = (index: number) => {
    setHabilitiesContent(content[index])
  }

    const MouseLeaveAction = () => {
    setHabilitiesContent(initialContent)
  }

  return (
    <section className="habilities-section">
      <div className="container-habilities">
        <div className="container-habilities-left">
          <div className="habilities-section-content">
            <h1>Conhecimentos</h1>
            <h2>{habiliesContent.title}</h2>
            <p>{habiliesContent.description}</p>
          </div>
        </div>
        <div className="container-section-right">
          <div className="habilities-section-icons">
            <img
              className="habilities-section-icon"
              src={reactIcon}
              onMouseOver={() => MouseOverAction(0)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={bootstrapIcon}
              onMouseOver={() => MouseOverAction(1)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={dockerIcon}
              onMouseOver={() => MouseOverAction(2)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={gitIcon}
              onMouseOver={() => MouseOverAction(3)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={htmlIcon}
              onMouseOver={() => MouseOverAction(4)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={jsIcon}
              onMouseOver={() => MouseOverAction(5)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={nextIcon}
              onMouseOver={() => MouseOverAction(6)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={nodeIcon}
              onMouseOver={() => MouseOverAction(7)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={pythonIcon}
              onMouseOver={() => MouseOverAction(8)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={reduxIcon}
              onMouseOver={() => MouseOverAction(9)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={tailwindIcon}
              onMouseOver={() => MouseOverAction(10)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
            <img
              className="habilities-section-icon"
              src={tsIcon}
              onMouseOver={() => MouseOverAction(11)}
              onMouseLeave={() =>MouseLeaveAction()}
            />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default HabilitiesSection;
// This component serves as a placeholder for the habilities section of the application, which can be