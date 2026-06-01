import type { Metadata } from "next";
import Link from "next/link";
import {
  QrCode,
  Copy,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Doação - Anjos da Rua",
  description:
    "Sua doação transforma vidas. Contribua via Pix para o Anjos da Rua.",
};

function HeroPixSection() {
  return (
    <section
      id="pix"
      className="relative pt-16 bg-background"
      aria-labelledby="doa-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-gold mb-4 tracking-wide uppercase">
              Sua contribuição importa
            </p>
            <h1
              id="doa-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Doe e transforme
              <br />
              uma vida com{" "}
              <span className="text-gold italic">dignidade</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-md leading-relaxed">
              Cada centavo é convertido em refeições, abrigo, cuidado e novas
              oportunidades. Aponte o QR Code ao lado ou copie nossa chave
              Pix.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface-light p-5 max-w-md">
              <p className="text-xs text-text-muted uppercase tracking-wide">
                Chave Pix (CNPJ)
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="text-base sm:text-lg font-mono text-foreground">
                  12.345.678/0001-90
                </p>
                <button
                  type="button"
                  className="inline-flex h-9 items-center gap-2 rounded-full bg-gold px-4 text-xs font-semibold text-background hover:bg-gold-hover transition-colors duration-200 cursor-pointer"
                  aria-label="Copiar chave Pix"
                >
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copiar
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-5 max-w-md">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <ShieldCheck
                    className="h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Doação segura</h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    Todas as transações são auditadas e publicadas no nosso
                    relatório anual de transparência.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Sparkles
                    className="h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">
                    Recibo para dedução
                  </h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    Solicite recibo no nosso e-mail para abatimento no imposto
                    de renda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative bg-surface-light rounded-2xl p-8 sm:p-10 border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[280px] rounded-xl bg-foreground p-6 flex items-center justify-center">
                  <QrCode
                    className="h-full w-full text-background"
                    aria-hidden="true"
                    strokeWidth={1}
                  />
                </div>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  QR Code Pix
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  Anjos da Rua - CNPJ 12.345.678/0001-90
                </p>
                <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-xs">
                  Aponte a câmera do seu aplicativo bancário e confirme o
                  valor que deseja doar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="doa-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="doa-cta-heading" className="text-3xl sm:text-4xl font-bold">
          Quer doar de outra forma?
        </h2>
        <p className="mt-4 text-text-muted text-lg leading-relaxed max-w-xl mx-auto">
          Aceitamos doações de alimentos, roupas, cobertores e produtos de
          higiene. Entre em contato e combinamos a melhor forma de
          recebimento.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contato"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
          >
            Falar com a equipe
          </Link>
          <Link
            href="/voluntariado"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-semibold text-foreground hover:bg-surface-light transition-colors duration-200"
          >
            Ser voluntário
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function DoacaoPage() {
  return (
    <>
      <Header activePage="doacao" />
      <main>
        <HeroPixSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
