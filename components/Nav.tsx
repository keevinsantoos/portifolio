const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  return (
    <nav aria-label="Navegação principal">
      <div className="wrap">
        <a className="logo" href="#home" aria-label="Kevin, início">
          kevin<span>.prog</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contato">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
