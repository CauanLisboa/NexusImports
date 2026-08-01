import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { categories } from "@/data/products";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a NEXUS Imports — Curadoria em preto e vermelho" },
      {
        name: "description",
        content:
          "A NEXUS Imports seleciona perfumes, drones e periféricos gamer com o mesmo critério: performance real e apresentação impecável.",
      },
      { property: "og:title", content: "Sobre a NEXUS Imports — Curadoria em preto e vermelho" },
      {
        property: "og:description",
        content:
          "Perfumes, drones e periféricos gamer selecionados com critério de performance real.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <PageShell>
      <section className="relative grain border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 stage-light" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="label-xs text-primary">Sobre</p>
          <h1 className="mt-4 text-3xl uppercase tracking-[0.16em] text-foreground sm:text-5xl">
            Três categorias, um mesmo critério
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A NEXUS Imports nasceu de uma obsessão simples: produto bom merece ser mostrado como
            merece. Trabalhamos com perfumes, drones e periféricos gamer porque são categorias onde
            a diferença entre o comum e o excepcional se sente na primeira vez que você usa.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Nada entra no catálogo sem passar pelo nosso teste. Fixação, autonomia, resposta,
            acabamento — tudo é medido antes de virar vitrine.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-border/60 sm:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="bg-background p-8 sm:p-12">
            <p className="label-xs text-primary">{c.id}</p>
            <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-foreground">{c.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 sm:px-8">
        {[
          { n: "01", t: "Curadoria", d: "Cada item é testado antes de entrar no catálogo." },
          { n: "02", t: "Entrega", d: "Envio protegido para todo o Brasil." },
        ].map((s) => (
          <div key={s.n} className="border-l border-primary/60 pl-5">
            <p className="font-display text-3xl text-primary">{s.n}</p>
            <h3 className="mt-3 text-base uppercase tracking-[0.2em] text-foreground">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
