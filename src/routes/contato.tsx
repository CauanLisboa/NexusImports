import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/site/PageShell";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com a NEXUS Imports" },
      {
        name: "description",
        content:
          "Tire dúvidas sobre perfumes, drones e periféricos gamer, peça um orçamento ou acompanhe seu pedido com a equipe NEXUS Imports.",
      },
      { property: "og:title", content: "Contato — Fale com a NEXUS Imports" },
      {
        property: "og:description",
        content: "Fale com a equipe NEXUS Imports sobre produtos, orçamentos e pedidos.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <Toaster />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="label-xs text-primary">Contato</p>
          <h1 className="mt-4 text-3xl uppercase tracking-[0.16em] text-foreground sm:text-5xl">
            Fale com a gente
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Dúvida sobre um produto, orçamento para volume ou acompanhamento de pedido — respondemos
            em até um dia útil.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Mail,
                label: "nexusimportspy@gmail.com",
                href: "mailto:nexusimportspy@gmail.com",
              },
              {
                icon: Phone,
                label: "+55 (91) 99190-9232",
                href: "https://wa.me/5591991909232?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20NEXUS%20Imports.",
              },
              {
                icon: MapPin,
                label: "Atendimento & Envio Nacional",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-10 items-center justify-center border border-primary/60 text-primary">
                  <item.icon className="size-4" />
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-display text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="font-display text-sm uppercase tracking-[0.2em] text-foreground">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Mensagem enviada. Retornamos em breve.");
          }}
          className="grain border border-border/60 bg-stage p-6 sm:p-10"
        >
          <div className="space-y-5">
            <Field label="Nome" name="nome" />
            <Field label="E-mail" name="email" type="email" />
            <Field label="Assunto" name="assunto" />
            <div>
              <label htmlFor="mensagem" className="label-xs text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-primary px-6 py-4 font-display text-xs uppercase tracking-[0.35em] text-primary-foreground transition-colors hover:bg-primary/85"
          >
            {sent ? "Enviado" : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
