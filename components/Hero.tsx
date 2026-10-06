import Image from "next/image";
import { heroStats } from "@/data/portfolio";
import styles from "./Hero.module.css";

const processSteps = [
  {
    number: "01",
    title: "Entender",
    description: "Mapeio o processo e identifico onde o trabalho pode melhorar.",
  },
  {
    number: "02",
    title: "Construir",
    description: "Desenvolvo sistemas, automações e dashboards para cada contexto.",
  },
  {
    number: "03",
    title: "Evoluir",
    description: "Valido, documento e aprimoro a solução com quem vai usá-la.",
  },
];

export default function Hero() {
  return (
    <header className={styles.hero} id="home">
      <div className={styles.frame}>
        <div className={styles.intro}>
          <figure className={styles.portrait}>
            <Image
              src="/images/foto.jpg"
              alt="Retrato de Kevin"
              fill
              preload
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 40vw, 38vw"
            />
            <figcaption className={styles.portraitCaption}>
              <span>KEVIN SANTOS</span>
              <span>BELÉM · PARÁ</span>
            </figcaption>
          </figure>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.status} aria-hidden="true" />
              DESENVOLVIMENTO · AUTOMAÇÃO · DADOS
            </p>
            <h1>
              Transformo processos em{" "}
              <span className={styles.titleAccent}>soluções digitais.</span>
            </h1>
            <p className={styles.description}>
              Desenvolvo sistemas, automações e dashboards para simplificar o
              trabalho e ajudar equipes a tomar decisões melhores.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#projetos">
                Conheça meus projetos <span aria-hidden="true">↘</span>
              </a>
              <a className={styles.secondaryAction} href="#contato">
                Vamos conversar <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className={styles.stats}>
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>MEU PROCESSO</p>
            <h2 id="process-title">Da ideia à melhoria contínua</h2>
          </div>
          <ol className={styles.steps}>
            {processSteps.map((step) => (
              <li className={styles.step} key={step.number}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className={styles.stepArrow} aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </header>
  );
}
