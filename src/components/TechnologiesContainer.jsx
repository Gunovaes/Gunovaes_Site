import {DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMongodb, DiReact, DiSass, DiAngularSimple} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mongo", name: "Mongodb", icon: <DiMongodb /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple/> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
