export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="wrap contact-inner">
        <span className="section-tag">{"// Contato"}</span>
        <h2>Tem um processo manual que devia ser automático? Vamos conversar.</h2>
        <p className="contact-sub">
          Histórico profissional completo, projetos e habilidades em um
          único documento.
        </p>
        <div className="contact-links">
          <a href="/cv.pdf" className="btn btn-primary">
            Baixar CV
          </a>
          <a href="mailto:kevinhenriqueng@gmail.com" className="btn btn-ghost">
            E-mail
          </a>
          <a
            href="https://github.com/keevinsantoos"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-santos-9b450a326"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <footer>
          <span>© 2026 Kevin.prog — Belém, PA</span>
          <span>Construído com Next.js, TypeScript</span>
        </footer>
      </div>
    </section>
  );
}
