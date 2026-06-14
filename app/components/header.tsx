"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header({ activePage = "home" }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/quem-somos", label: "Quem Somos", id: "quem-somos" },
    { href: "/voluntariado", label: "Voluntariado", id: "voluntariado" },
    { href: "/doacao", label: "Doação", id: "doacao" },
    { href: "/contato", label: "Contato", id: "contato" },
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

          <div className="flex items-center gap-3">
            <Link
              href="/doacao"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
            >
              Doe Agora
            </Link>

            <button
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-light transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activePage === link.id
                    ? "text-gold bg-gold/10"
                    : "text-text-secondary hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/doacao"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gold text-sm font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
            >
              Doe Agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
