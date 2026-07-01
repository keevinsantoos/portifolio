const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          @kevin<span>.prog</span>
        </div>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
