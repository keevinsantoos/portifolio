import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-tag">{"// Projetos em destaque"}</span>
            <h2 className="section-title">Sistemas construídos do zero</h2>
          </div>
          <p className="section-note">
            Da concepção ao deploy, incluindo documentação técnica.
          </p>
        </div>

        <div className="proj-list">
          {projects.map((project) => (
            <div className="proj-item" key={project.num}>
              <span className="proj-num">{project.num}</span>
              <div className="proj-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-mini">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="proj-link">
                repositório <span className="proj-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
