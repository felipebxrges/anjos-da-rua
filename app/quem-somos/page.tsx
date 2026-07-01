import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-gold mb-4 tracking-wide uppercase">
              Nossa História
            </p>
            <h1
              id="historia-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
            >
              Como tudo{" "}
              <span className="text-gold italic">começou</span>
            </h1>
            <p className="mt-6 text-text-muted leading-relaxed">
              A Associação Anjos da Rua nasceu há mais de onze anos a partir da iniciativa e da solidariedade de pessoas voluntárias comprometidas em fazer a diferença na vida de quem mais precisa. Movidos pelo desejo de promover dignidade, acolhimento e esperança, esses voluntários passaram a dedicar seu tempo e esforço ao atendimento de pessoas em situação de rua.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Desde então, a associação desenvolve um trabalho contínuo de assistência social, levando alimentos, água potável, roupas, produtos de higiene e outros itens essenciais para aqueles que enfrentam condições de extrema vulnerabilidade. Mais do que suprir necessidades básicas, a Anjos da Rua oferece cuidado, atenção, escuta e respeito, fortalecendo vínculos humanos e contribuindo para a reconstrução da autoestima e da cidadania dessas pessoas.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Ao longo de sua trajetória, a associação tem sido um importante instrumento de transformação social, mobilizando voluntários, parceiros e doadores em torno de uma causa comum: levar amor, solidariedade e oportunidades para quem vive à margem da sociedade, promovendo inclusão e esperança para um futuro melhor.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.instagram.com/reel/DKX5H6pxn_n/embed"
                title="Vídeo institucional - Anjos da Rua"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0 h-full w-full"
              />
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
      name: "Lúcia Moreira",
      role: "Coordenadora",
      photo: "/fotosQuemSomos/luciamoreira.jpg",
    },
    {
      name: "Iure Lopes",
      role: "Voluntário",
      photo: "/fotosQuemSomos/iurelopes.jpg",
    },
    {
      name: "Cláudia Guzzo",
      role: "Voluntária",
      photo: "/fotosQuemSomos/claudiaguzzo.jpg",
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

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-surface-light rounded-2xl p-6 border border-border"
            >
              <div className="relative h-14 w-14 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-bold">{member.name}</h3>
              <p className="mt-1 text-xs text-gold font-medium">
                {member.role}
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