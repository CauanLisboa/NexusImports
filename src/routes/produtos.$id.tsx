import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PageShell } from "@/components/site/PageShell";
import { Skeleton } from "@/components/ui/skeleton";
import { getProduct, products, formatPrice, categories } from "@/data/products";

export const Route = createFileRoute("/produtos/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produto não encontrado | NEXUS Imports" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.tagline} | NEXUS Imports`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description.slice(0, 155) },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [imageLoaded, setImageLoaded] = useState(false);
  const index = products.findIndex((p) => p.id === product.id);
  const next = products[(index + 1) % products.length];
  const category = categories.find((c) => c.id === product.category);

  return (
    <PageShell>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative grain aspect-4/5 overflow-hidden border border-border/60 bg-stage stage-light shadow-glow"
        >
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-border/30" />
          )}
          <motion.img
            key={product.image}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={product.image}
            alt={`${product.name} — ${product.tagline}`}
            onLoad={() => setImageLoaded(true)}
            width={912}
            height={1200}
            className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Animated red laser line beam pulsing in center */}
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.3, 0.85, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_25px_#ef4444]"
          />
          {/* Illustrative image badge overlay */}
          <div className="absolute bottom-3 right-3 z-10 border border-border/60 bg-background/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
            * Imagem meramente ilustrativa
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 stage-floor" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <Link
            to="/produtos"
            search={{}}
            className="inline-flex items-center gap-2 label-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3" /> Voltar ao catálogo
          </Link>

          <p className="mt-8 label-xs text-primary">{category?.label}</p>
          <h1 className="mt-3 text-3xl uppercase tracking-[0.16em] text-foreground sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {product.tagline}
          </p>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-border/60 bg-border/60">
            {product.specs.map((s: { label: string; value: string }) => (
              <div key={s.label} className="bg-background p-4">
                <dt className="label-xs text-muted-foreground">{s.label}</dt>
                <dd className="mt-2 font-display text-sm tracking-widest text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Mandatory Consult Notice Box */}
          <div className="mt-6 border border-primary/40 bg-stage/90 p-4 space-y-2 font-mono text-xs text-foreground shadow-glow">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span>
                <strong className="text-primary uppercase tracking-wider">Disponibilidade:</strong>{" "}
                deve ser consultada por WhatsApp
              </span>
            </div>
            {product.category !== "perfumes" && (
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span>
                  <strong className="text-primary uppercase tracking-wider">Cor disponível:</strong>{" "}
                  deve ser consultada por contato
                </span>
              </div>
            )}
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span>
                <strong className="text-primary uppercase tracking-wider">Aviso:</strong> imagem
                meramente ilustrativa
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-3">
              {product.originalPrice && (
                <span className="font-display text-lg line-through text-muted-foreground/70 tracking-widest">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="font-display text-3xl tracking-widest text-primary font-bold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="border border-primary bg-primary/20 px-2.5 py-1 label-xs font-semibold text-primary shadow-glow">
                  OFERTA / PROMOÇÃO
                </span>
              )}
            </div>
            <a
              href={`https://wa.me/5591991909232?text=${encodeURIComponent(
                product.originalPrice
                  ? `Olá! Gostaria de aproveitar a promoção do produto: ${product.name} (De ${formatPrice(product.originalPrice)} por ${formatPrice(product.price)}) na NEXUS Imports.`
                  : `Olá! Gostaria de comprar o produto: ${product.name} (${formatPrice(product.price)}) na NEXUS Imports.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary px-7 py-3 font-display text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-primary/85 hover:shadow-glow hover:translate-x-1"
            >
              Comprar no WhatsApp <ArrowRight className="size-4" />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 border border-border/60 bg-stage px-5 py-3 label-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              Outros canais
            </Link>
          </div>

          <Link
            to="/produtos/$id"
            params={{ id: next.id }}
            className="mt-10 border-t border-border/60 pt-5 label-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Navegar para {next.name} →
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
