import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 Anjos da Rua. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-text-muted hover:text-foreground transition-colors duration-200"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-text-muted hover:text-foreground transition-colors duration-200"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}