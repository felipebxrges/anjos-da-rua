import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Contato - Anjos da Rua",
  description:
    "Fale com o Anjos da Rua. Encontre nosso endereço, telefone, e-mail e horários de atendimento.",
};

function ContactSection() {
  const channels = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(32) 99111-1437",
      href: "tel:+5532991111437",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "R. Santa Clara, 190 - Costa Carvalho, Juiz de Fora - MG",
      href: "https://www.google.com/maps/place/R.+Santa+Clara,+190+-+Costa+Carvalho,+Juiz+de+Fora+-+MG,+36070-120",
    },
    {
      icon: Clock,
      label: "Atendimento",
      value: "Seg. a Sex. das 9h às 18h",
      href: null,
    },
  ];

  return (
    <section
      className="relative pt-16 bg-background"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gold mb-4 tracking-wide uppercase">
            Fale conosco
          </p>
          <h1
            id="contato-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Estamos por{" "}
            <span className="text-gold italic">perto</span>
          </h1>
          <p className="mt-6 text-text-muted leading-relaxed">
            Tem dúvidas, quer doar de outra forma ou conhecer nossa sede? Entre
            em contato pelos canais abaixo ou venha nos visitar.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 mb-4">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <h2 className="text-sm font-semibold text-gold">
                  {channel.label}
                </h2>
                <p className="mt-2 text-sm text-text-muted leading-relaxed break-words">
                  {channel.value}
                </p>
              </>
            );

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                className="bg-surface-light rounded-2xl p-6 border border-border hover:border-gold/40 transition-colors duration-200"
              >
                {content}
              </a>
            ) : (
              <div
                key={channel.label}
                className="bg-surface-light rounded-2xl p-6 border border-border"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="mapa-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-gold mb-3 tracking-wide uppercase">
            Onde estamos
          </p>
          <h2 id="mapa-heading" className="text-2xl sm:text-3xl font-bold">
            Visite nossa sede
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            R. Santa Clara, 190 - Costa Carvalho, Juiz de Fora - MG, 36070-120.
            Toque no mapa para abrir a rota no Google Maps.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface-light shadow-lg">
              <iframe
                title="Localização da sede do Anjos da Rua no Google Maps"
                src="https://www.google.com/maps?q=R.+Santa+Clara,+190+-+Costa+Carvalho,+Juiz+de+Fora+-+MG,+36070-120&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContatoPage() {
  return (
    <>
      <Header activePage="contato" />
      <main>
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}