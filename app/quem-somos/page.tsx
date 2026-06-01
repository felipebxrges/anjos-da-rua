import type { Metadata } from "next";
import {
  PlayCircle,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Quem Somos - Anjos da Rua",
  description:
    "Conheça a história do Anjos da Rua. Desde 2015 transformando vidas com dignidade e esperança.",
};

function StorySection() {
  return (
    <section
      className="relative pt-16 bg-background"
      aria-labelledby="historia-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-gold mb-4 tracking-wide uppercase">
              Nossa História
            </p>
            <h1
              id="historia-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Como tudo{" "}
              <span className="text-gold italic">começou</span>
            </h1>
            <p className="mt-6 text-text-muted leading-relaxed">
              Em 2015, um pequeno grupo de amigos do bairro do Centro decidiu
              que não bastava sentir compaixão pelas pessoas em situação de
              rua — era preciso agir. Começamos com a entrega de cerca de 30
              marmitas todas as sextas-feiras embaixo do viaduto da Avenida
              Brasil.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              O que era um gesto de solidariedade semanal cresceu, ganhou
              voluntários, parceiros e uma sede própria em 2018. Hoje,
              atendemos famílias com programas de alimentação, capacitação,
              saúde mental e moradia.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Acreditamos que ninguém deve passar fome, frio ou esquecimento.
              Cada pessoa atendida é tratada com respeito, ouvida com atenção
              e acolhida com dignidade.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-light border border-border group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <PlayCircle
                  className="h-20 w-20 text-gold group-hover:text-gold-light transition-colors duration-200"
                  aria-hidden="true"
                />
                <p className="text-sm text-text-muted">
                  Espaço reservado para o vídeo institucional
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Em breve
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Sede - Centro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Maria Aparecida Souza",
      role: "Fundadora e Diretora Executiva",
      bio: "Assistente social com 20 anos de experiência em projetos sociais.",
    },
    {
      name: "Carlos Henrique Lima",
      role: "Coordenador de Operações",
      bio: "Responsável pela logística de distribuição e parcerias.",
    },
    {
      name: "Juliana Ferreira",
      role: "Coordenadora de Voluntariado",
      bio: "Cuida da integração e formação dos nossos voluntários.",
    },
    {
      name: "Roberto Almeida",
      role: "Psicólogo Voluntário",
      bio: "Lidera o programa de saúde mental e escuta terapêutica.",
    },
  ];

  return (
    <section
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="equipe-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">
            Nossa equipe
          </p>
          <h2 id="equipe-heading" className="text-2xl sm:text-3xl font-bold">
            Pessoas que constroem a mudança
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Uma equipe multidisciplinar comprometida com o cuidado humano e a
            transformação social.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-surface-light rounded-2xl p-6 border border-border"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 mb-4">
                <Users className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold">{member.name}</h3>
              <p className="mt-1 text-xs text-gold font-medium">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function QuemSomosPage() {
  return (
    <>
      <Header activePage="quem-somos" />
      <main>
        <StorySection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}