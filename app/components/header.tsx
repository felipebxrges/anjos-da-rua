import Link from "next/link";

export function Header({ activePage = "home" }: { activePage?: string }) {
  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/quem-somos", label: "Quem Somos", id: "quem-somos" },
    { href: "/voluntariado", label: "Voluntariado", id: "voluntariado" },
    { href: "/doacao", label: "Doação", id: "doacao" },
    { href: "/#contato", label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gold"
            aria-label="Anjos da Rua - Página inicial"
          >
            Anjos da Rua
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  activePage === link.id
                    ? "text-gold font-semibold"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/doacao"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
            >
              Doe Agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
