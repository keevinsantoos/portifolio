import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-tag">{"// Experiência"}</span>
            <h2 className="section-title">Onde já atuei</h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.role}>
              <div className="timeline-date">{item.date}</div>
              <h3>{item.role}</h3>
              <div className="timeline-org">{item.org}</div>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
