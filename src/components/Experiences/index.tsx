import { useState } from "react";
import { experiencesContent } from "./content";
import './style.css';

type experienceContentType = {
  buttonTitle: string;
  title: string;
  content: string;
}

function ExperiencesSection() {
  const [contentShow, setContentShow] = useState<experienceContentType | null>(null);

  return (
    <section className="experiences-section">
      <div className="experiences-section-container">
        <div className="experiences-container-left">
          <div className="experiences-buttons">
            {
              experiencesContent.map((experience, index) => (
                <button
                  onClick={() => setContentShow(experience)}
                  key={index}
                  className="experience-button">
                  {experience.buttonTitle}
                </button>
              ))
            }
          </div>

        </div>
        <div className="experiences-container-right">
            <h2>{contentShow?.title}</h2>
            <p>{contentShow?.content}</p>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection;
// This component serves as a placeholder for the experiences section of the application, which can be expanded