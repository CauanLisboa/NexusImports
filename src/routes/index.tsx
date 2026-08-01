import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageShell } from "@/components/site/PageShell";
import { featured, categories, formatPrice } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXUS Imports — Vitrine de Perfumes, Mouses High-End e Setup Gamer" },
      {
        name: "description",
        content:
          "Selecione um produto para começar: perfumes de alta fixação, mouses gamer de alta precisão e periféricos em uma vitrine cinematográfica.",
      },
      {
        property: "og:title",
        content: "NEXUS Imports — Vitrine de Perfumes, Mouses High-End e Setup Gamer",
      },
      {
        property: "og:description",
        content:
          "Perfumes, mouses high-end e periféricos gamer selecionados. Selecione um produto para começar.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const current = featured[active] || featured[0];

  // Smooth auto-cycle between featured products if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <PageShell>
      {/* Hero Showcase Section */}
      <section className="relative grain min-h-[calc(100vh-4rem)] overflow-hidden bg-background py-8">
        <div className="pointer-events-none absolute inset-0 stage-light opacity-80" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-48 -translate-x-1/2 bg-primary/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-between px-5 sm:px-8">
          {/* Header Title */}
          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-3 border border-primary/50 bg-stage/80 px-5 py-2 backdrop-blur-sm shadow-glow">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-display text-xs uppercase tracking-[0.4em] text-foreground">
                NEXUS IMPORTS
              </span>
            </div>
            <p className="mt-3 text-xs tracking-wider uppercase text-muted-foreground">
              Conectando você aos melhores produtos do Paraguai
            </p>
          </div>

          {/* Product Cards Gallery */}
          <div
            className="my-6 grid grid-cols-3 gap-3 sm:gap-6 items-stretch"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {featured.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group relative block w-full text-left outline-none"
                  aria-label={p.name}
                >
                  <motion.div
                    layout
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.97,
                      opacity: isActive ? 1 : 0.65,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className={`relative h-[300px] sm:h-[400px] w-full overflow-hidden border transition-all duration-300 ${
                      isActive
                        ? "border-primary shadow-glow bg-stage"
                        : "border-border/50 bg-background hover:border-primary/50 hover:opacity-90"
                    }`}
                  >
                    {/* Product Image */}
                    <div className="relative h-full w-full overflow-hidden">
                      <motion.img
                        key={p.image}
                        src={p.image}
                        alt={p.name}
                        width={912}
                        height={1200}
                        animate={{
                          scale: isActive ? 1.06 : 1,
                        }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full w-full object-cover"
                      />

                      {/* Laser Line Effect on Active */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.3, 0.85, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                          className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_20px_#ef4444]"
                        />
                      )}

                      {/* Dark Gradient Overlay for text readability */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                    </div>

                    {/* Card Footer Info */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                      <span className="inline-block border border-primary/40 bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-primary font-mono backdrop-blur-sm">
                        {p.tagline}
                      </span>
                      <p className="mt-2 font-display text-sm uppercase tracking-wider text-foreground sm:text-lg line-clamp-1">
                        {p.name}
                      </p>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Active Product Details & CTA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="border-t border-border/70 pt-5 pb-2 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  <p className="text-[11px] font-mono uppercase tracking-widest text-primary">
                    Destaque da Semana
                  </p>
                </div>
                <h1 className="mt-1 font-display text-xl uppercase tracking-[0.15em] text-foreground sm:text-3xl">
                  {current.name}
                </h1>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {current.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                <div className="flex flex-col sm:items-end">
                  {current.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/20 border border-primary/60 px-1.5 py-0.5 text-[9px] font-mono text-primary uppercase">
                        PROMOÇÃO
                      </span>
                      <span className="font-display text-xs line-through text-muted-foreground/70 tracking-widest">
                        {formatPrice(current.originalPrice)}
                      </span>
                    </div>
                  )}
                  <span className="font-display text-2xl tracking-widest text-primary font-bold">
                    {formatPrice(current.price)}
                  </span>
                </div>

                <Link
                  to="/produtos/$id"
                  params={{ id: current.id }}
                  className="inline-flex items-center gap-3 bg-primary px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-glow transition-all duration-300 hover:bg-primary/90 hover:translate-x-1"
                >
                  Ver produto <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector Indicators */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {featured.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ir para ${p.name}`}
                className={`h-1 transition-all rounded-full ${
                  i === active
                    ? "w-8 bg-primary shadow-glow"
                    : "w-2 bg-border/80 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip */}
      <section className="border-y border-border/60 bg-stage/50 py-5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center border border-primary/40 bg-background text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-xs uppercase tracking-widest text-foreground">
                  100% Originais
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Garantia de procedência e qualidade
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center border border-primary/40 bg-background text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-xs uppercase tracking-widest text-foreground">
                  Seleção Exclusiva
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Produtos selecionados direto do Paraguai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center border border-primary/40 bg-background text-primary">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-xs uppercase tracking-widest text-foreground">
                  Atendimento Direct
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Tire dúvidas e faça pedidos via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="bg-background py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                Navegue no Catálogo
              </span>
              <h3 className="font-display text-xl uppercase tracking-[0.2em] text-foreground">
                Categorias Principais
              </h3>
            </div>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Ver Tudo <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-px bg-border/60 sm:grid-cols-3">
            {categories.map((c) =>
              c.id === "medicamentos" ? (
                <a
                  key={c.id}
                  href={`https://wa.me/5591991909232?text=${encodeURIComponent(
                    "Olá! Gostaria de informações sobre medicamentos na NEXUS Imports.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-background p-8 transition-all duration-300 hover:bg-stage/90"
                >
                  <h2 className="text-xl font-display uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                    {c.label}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{c.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-all group-hover:translate-x-1">
                    Contato WhatsApp <ArrowRight className="size-3.5" />
                  </span>
                </a>
              ) : (
                <Link
                  key={c.id}
                  to="/produtos"
                  search={{ cat: c.id }}
                  className="group relative bg-background p-8 transition-all duration-300 hover:bg-stage/90"
                >
                  <h2 className="text-xl font-display uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                    {c.label}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{c.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
                    Explorar <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
