import {
  Home,
  ArrowRight,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";


function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-16 bg-background"
      aria-labelledby="hero-heading"
    >
      <div
        className="relative min-h-[560px] sm:min-h-[680px] lg:min-h-[780px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagemhome.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60 sm:to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-lg">
            <p className="text-sm text-text-muted mb-4">
              Desde 2015 ajudando vidas
            </p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
            >
              Transformando Vidas
              <br />
              com{" "}
              <span className="text-gold">Dignidade e Esperança</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-sm leading-relaxed">
              Acreditamos que cada ser humano merece ser ouvido e assistido.
              Através do apoio integral, devolvemos a cidadania e o brilho nos
              olhos de quem mais precisa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/doacao"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
              >
                Doe Agora
              </Link>
              <Link
                href="/quem-somos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm px-8 text-base font-semibold text-foreground hover:bg-background transition-colors duration-200"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VolunteerSection() {
  return (
    <section
      id="voluntariado"
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="volunteer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/homevoluntario.jpg"
              alt="Voluntários do Anjos da Rua"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-surface-light rounded-2xl p-6 sm:p-8 border border-border">
            <h2
              id="volunteer-heading"
              className="text-2xl sm:text-3xl font-bold"
            >
              Seja Voluntário
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Precisamos de pessoas dispostas a fazer a diferença em suas
              comunidades. Temos diversas frentes de atuação.
            </p>
            <Link
              href="/voluntariado"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
            >
              Junte-se a nós
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section
      id="quem-somos"
      className="bg-background py-16 sm:py-24"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-start">
          <div>
            <h2
              id="approach-heading"
              className="text-2xl sm:text-3xl font-bold"
            >
              Nossa Abordagem Integral
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed max-w-lg">
              Não entregamos apenas alimentos, entregamos as ferramentas para a
              reconstrução de uma vida. Nosso modelo de ação atua em saúde
              mental, moradia e educação.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <Utensils
                    className="h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-semibold">Alimentação</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Refeições diárias e distribuição de cestas básicas às famílias.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <Home className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold">Moradia</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Encaminhamento para abrigos e programas habitacionais.
                </p>
              </div>
            </div>
            <Link
              href="/quem-somos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200"
            >
              Saiba mais sobre o projeto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="contato"
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold">
          Pronto para fazer a diferença hoje?
        </h2>
        <p className="mt-4 text-text-muted text-lg leading-relaxed max-w-xl mx-auto">
          Cada pequeno gesto é convertido em dignidade. Seja o motivo do sorriso
          de alguém que perdeu a esperança.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/doacao"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-background hover:bg-gold-hover transition-colors duration-200"
          >
            Doe Agora
          </Link>
          <Link
            href="/voluntariado"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-semibold text-foreground hover:bg-surface-light transition-colors duration-200"
          >
            Outras formas de ajuda
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header activePage="home" />
      <main>
        <HeroSection />
        <VolunteerSection />
        <ApproachSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
