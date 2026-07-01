import { heroStats } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <svg
        className="river-lines"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50,120 C 200,180 350,60 550,140 S 850,260 1250,160"
          stroke="#7FB2FF"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M-50,220 C 250,300 400,160 620,240 S 900,360 1250,260"
          stroke="#7FB2FF"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M-50,640 C 220,560 420,720 600,600 S 950,480 1250,600"
          stroke="#7FB2FF"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M-50,740 C 260,660 460,780 680,680 S 980,560 1250,700"
          stroke="#7FB2FF"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      <div className="wrap hero-inner">
        <span className="eyebrow">Belém, Pará · Desenvolvimento & Dados</span>
        <h1>
          Desenvolvedor de <span className="accent">sistemas</span> e
          dashboards com <span className="accent">Power BI</span>.
        </h1>
        <p className="hero-sub">
          Desenvolvedor focado em automação de processos, ferramentas
          internas e análise de dados — de plataformas web completas a bots
          que economizam horas de trabalho manual.
        </p>

        <div className="hero-cta">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-ghost">
            Falar comigo
          </a>
        </div>

        <div className="hero-meta">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
