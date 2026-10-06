import { aboutParagraphs } from "@/data/portfolio";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-tag">{"// Sobre"}</span>
            <h2 className="section-title">Olá, seja bem-vindo</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
