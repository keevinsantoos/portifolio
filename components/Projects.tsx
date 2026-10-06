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
            <article className="proj-item" key={project.num}>
              <span className="proj-num" aria-hidden="true">{project.num}</span>
              <div className="proj-info">
                <span className="proj-kicker">PROJETO {project.num}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-mini">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  className="proj-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir repositório de ${project.title} em uma nova aba`}
                >
                  Ver repositório <span className="proj-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
