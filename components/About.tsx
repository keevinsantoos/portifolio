import Image from "next/image";
import { aboutParagraphs } from "@/data/portfolio";

// Troque HAS_PHOTO para true depois de colocar sua foto em /public/images/foto.jpg
const HAS_PHOTO = true;

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
          <div className="photo-frame">
            {HAS_PHOTO ? (
              <Image
                src="/images/foto.jpg"
                alt="Foto de Kevin"
                width={560}
                height={560}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            ) : (
              <span className="placeholder-text">
                [ sua foto aqui ]
                <br />
                salve em /public/images/foto.jpg
                <br />
                e mude HAS_PHOTO para true
                <br />
                em components/About.tsx
              </span>
            )}
          </div>
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
