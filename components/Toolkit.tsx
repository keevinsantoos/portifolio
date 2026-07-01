import { stackGroups } from "@/data/portfolio";

export default function Toolkit() {
  return (
    <section className="toolkit" id="toolkit">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-tag">{"// Toolkit"}</span>
            <h2 className="section-title">
              Ferramentas que uso no dia a dia
            </h2>
          </div>
          <p className="section-note">
            Da automação de processos internos à análise dos dados que ela
            gera.
          </p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
