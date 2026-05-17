import type { Metadata } from "next";
import Link from "next/link";
import {
  UtensilsCrossed,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Clock,
  CircleDot,
} from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Voluntariado - Anjos da Rua",
  description:
    "Sua mão amiga pode mudar um destino. Junte-se à força motriz do Anjos da Rua como voluntário.",
};

function HeroSection() {
  return (
    <section
      className="relative pt-16 bg-background"
      aria-labelledby="vol-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        <p className="text-sm font-medium text-gold mb-4 tracking-wide uppercase">
          Venha fazer parte
        </p>
        <h1
          id="vol-hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl mx-auto"
        >
          Sua mão amiga pode
          <br />
          mudar um{" "}
          <span className="text-gold italic">destino</span>
        </h1>
        <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
          O voluntariado é a força motriz do Anjos da Rua. Junte-se a nós para
          fazer a diferença na vida daqueles que mais precisam.
        </p>
        <div className="mt-8">
          <Link
            href="#formulario"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground px-8 text-base font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            Quero ser voluntário
          </Link>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  const areas = [
    {
      icon: UtensilsCrossed,
      title: "Cozinha Solidária",
      description:
        "Auxilie no preparo e distribuição de refeições nutritivas, levando alimento e carinho para nossos irmãos e irmãs.",
      topics: ["Preparo de alimentos", "Logística de entrega"],
    },
    {
      icon: HeartHandshake,
      title: "Assistência Social",
      description:
        "Suporte direto às famílias, auxiliando no cadastro para programas sociais e encaminhamento de saúde.",
      topics: ["Atendimento individual", "Triagem de necessidades"],
    },
    {
      icon: GraduationCap,
      title: "Aulas & Oficinas",
      description:
        "Compartilhe conhecimento técnico ou artístico para auxiliar na reincorporação profissional e autonomia.",
      topics: ["Alfabetização", "Capacitação técnica"],
    },
  ];

  return (
    <section
      className="bg-foreground py-16 sm:py-24"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="areas-heading"
          className="text-2xl sm:text-3xl font-bold text-background"
        >
          Onde você pode atuar
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/10 mb-5">
                  <Icon
                    className="h-6 w-6 text-background"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-background">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">
                  {area.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {area.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-background/80"
                    >
                      <CircleDot
                        className="h-3 w-3 text-background/50 shrink-0"
                        aria-hidden="true"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section
      id="formulario"
      className="bg-background py-16 sm:py-24"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2
              id="form-heading"
              className="text-3xl sm:text-4xl font-bold"
            >
              Pronto para começar?
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed max-w-md">
              Preencha o formulário e nossa equipe de coordenação entrará em
              contato em até 48 horas para agendar uma conversa inicial e
              integração.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <ShieldCheck
                    className="h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Ambiente Seguro</h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    Oferecemos todo o suporte e treinamento necessário para sua
                    atuação.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Clock
                    className="h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Flexibilidade</h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    Escalas que se adaptam à sua rotina, doações de tempo
                    semanal ou quinzenal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-light rounded-2xl p-8 sm:p-10 border border-border">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Como podemos te chamar?"
                  required
                  className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium mb-2"
                >
                  Área de Interesse
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-200 appearance-none"
                >
                  <option value="" disabled selected>
                    Selecione uma área
                  </option>
                  <option value="cozinha">Cozinha Solidária</option>
                  <option value="assistencia">Assistência Social</option>
                  <option value="aulas">Aulas &amp; Oficinas</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <p className="text-xs text-text-muted pt-2">
                Ao enviar, você concorda com nossa{" "}
                <Link href="#" className="text-gold hover:text-gold-light">
                  Política de Privacidade
                </Link>
                .
              </p>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-gold text-base font-semibold text-background hover:bg-gold-hover transition-colors duration-200 cursor-pointer"
              >
                Enviar Intenção
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VoluntariadoPage() {
  return (
    <>
      <Header activePage="voluntariado" />
      <main>
        <HeroSection />
        <AreasSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}