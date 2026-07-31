import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
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
  const next = featured[(active + 1) % featured.length];

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
      <section className="relative grain min-h-[calc(100vh-4rem)] overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 stage-light" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-2/3 w-24 -translate-x-1/2 bg-primary/25 blur-3xl animate-pulse" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col px-5 pb-10 pt-10 sm:px-8">
          <div className="text-center">
            <span className="inline-block border border-primary/60 px-4 py-2 font-display text-sm uppercase tracking-[0.45em] text-foreground">
              NEXUS Imports
            </span>
            <p className="mt-4 label-xs text-muted-foreground">
              Conectando você aos melhores produtos do Paraguai.
            </p>
          </div>

          <div
            className="mt-8 grid flex-1 grid-cols-3 items-end gap-2 sm:gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {featured.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative block h-full w-full text-left"
                  aria-label={p.name}
                >
                  <motion.div
                    layout
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.96,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className={`relative h-full overflow-hidden border transition-all duration-500 ${
                      isActive
                        ? "border-primary/80 shadow-glow"
                        : "border-border/40 opacity-55 hover:border-primary/50 hover:opacity-90"
                    }`}
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <motion.img
                        key={p.image}
                        src={p.image}
                        alt={p.name}
                        width={912}
                        height={1200}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full w-full object-cover"
                      />
                      {/* Animated red laser beam beam overlay on active card */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.4, 0.9, 0.4] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                          className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_25px_#ef4444]"
                        />
                      )}
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 stage-floor" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                      <p className="label-xs text-primary">{p.tagline}</p>
                      <p className="mt-2 font-display text-sm uppercase tracking-[0.2em] text-foreground sm:text-lg">
                        {p.name}
                      </p>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-5 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="label-xs text-muted-foreground">Em destaque</p>
                <h1 className="mt-2 text-2xl uppercase tracking-[0.18em] text-foreground sm:text-4xl">
                  {current.name}
                </h1>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{current.description}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  {current.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="border border-primary bg-primary/20 px-1.5 py-0.5 label-xs text-primary font-semibold text-[10px]">
                        PROMOÇÃO
                      </span>
                      <span className="font-display text-sm line-through text-muted-foreground/70 tracking-widest">
                        {formatPrice(current.originalPrice)}
                      </span>
                    </div>
                  )}
                  <span className="font-display text-xl tracking-widest text-primary font-bold">
                    {formatPrice(current.price)}
                  </span>
                </div>
                <Link
                  to="/produtos/$id"
                  params={{ id: current.id }}
                  className="inline-flex items-center gap-3 bg-primary px-6 py-3 font-display text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-primary/85 hover:shadow-glow hover:translate-x-1"
                >
                  Ver produto <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setActive((active + 1) % featured.length)}
            className="mt-4 self-start label-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Navegar para {next.name} →
          </button>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/60 px-0 sm:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/produtos"
              search={{ cat: c.id }}
              className="group bg-background p-8 transition-all duration-300 hover:bg-stage sm:p-12"
            >
              <p className="label-xs text-primary">{c.id}</p>
              <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                {c.label}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-2 label-xs text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
                Explorar <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
