import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { PageShell } from "@/components/site/PageShell";
import { Skeleton } from "@/components/ui/skeleton";
import { getProduct, products, formatPrice, categories, type ProductColor } from "@/data/products";
import { useCart } from "@/context/CartContext";

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

  const availableImages =
    product.images && product.images.length > 0
      ? product.images
      : product.colors && product.colors.length > 0
        ? product.colors.map((c) => c.image)
        : [product.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  const index = products.findIndex((p) => p.id === product.id);
  const next = products[(index + 1) % products.length];
  const category = categories.find((c) => c.id === product.category);

  const activeImage = availableImages[currentImageIndex] || product.image;
  const selectedColor =
    product.colors?.find((c) => c.image === activeImage) ||
    product.colors?.[currentImageIndex] ||
    product.colors?.[0] ||
    null;

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
            <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-border/30 z-10 pointer-events-none" />
          )}

          {/* Sliding Gallery Frame */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {availableImages.map((imgUrl, idx) => (
              <div key={idx} className="relative h-full w-full shrink-0">
                <img
                  src={imgUrl}
                  alt={`${product.name} — ${product.tagline} (${idx + 1})`}
                  onLoad={() => setImageLoaded(true)}
                  width={912}
                  height={1200}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Illustrative image badge overlay */}
          {!["iphone-13-pro-max-256gb", "iphone-14-pro-max-256gb"].includes(product.id) && (
            <div className="absolute bottom-3 right-3 z-10 border border-border/60 bg-background/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
              * Imagem meramente ilustrativa
            </div>
          )}

          {availableImages.length > 1 && (
            <>
              {/* Dots */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-md border border-border/60">
                {availableImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`size-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-primary w-4 shadow-glow"
                        : "bg-muted-foreground/40 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Prev/Next arrows */}
              <button
                type="button"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) => (prev - 1 + availableImages.length) % availableImages.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-all hover:bg-primary hover:text-primary-foreground border border-border/60 shadow-lg"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % availableImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-all hover:bg-primary hover:text-primary-foreground border border-border/60 shadow-lg"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 stage-floor z-10" />
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

          {/* Color Selector matching user reference */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6 border-t border-b border-border/60 py-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  Cor:{" "}
                  <span className="text-primary font-bold">
                    {selectedColor?.name || "Selecione"}
                  </span>
                </span>
                {selectedColor?.code && (
                  <span className="font-mono text-xs text-muted-foreground">
                    Código: {selectedColor.code}
                  </span>
                )}
              </div>

              <div className="mt-3.5 flex items-center gap-3">
                {product.colors.map((c) => {
                  const isSelected = selectedColor?.name === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => {
                        const idx = availableImages.findIndex((img) => img === c.image);
                        if (idx !== -1) {
                          setCurrentImageIndex(idx);
                        } else {
                          const colorIdx = product.colors?.findIndex((col) => col.name === c.name);
                          if (colorIdx !== undefined && colorIdx !== -1) {
                            setCurrentImageIndex(colorIdx);
                          }
                        }
                      }}
                      className={`group relative flex size-11 items-center justify-center rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                          : "border-border/80 bg-stage hover:border-foreground"
                      }`}
                      title={`Selecionar ${c.name}`}
                    >
                      <span
                        className="block size-7 rounded-full shadow-sm border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

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
            {!["iphone-13-pro-max-256gb", "iphone-14-pro-max-256gb"].includes(product.id) && (
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span>
                  <strong className="text-primary uppercase tracking-wider">Aviso:</strong> imagem
                  meramente ilustrativa
                </span>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-3 w-full">
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

            <button
              type="button"
              onClick={() => addItem(product, 1, selectedColor?.name)}
              className="inline-flex items-center justify-center gap-3 border border-primary bg-primary px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02]"
            >
              <ShoppingBag className="size-4" />
              Adicionar ao Carrinho
            </button>

            <a
              href={`https://wa.me/5591991909232?text=${encodeURIComponent(
                `Olá! Gostaria de comprar o produto: ${product.name}${
                  selectedColor ? ` (Cor: ${selectedColor.name})` : ""
                } (${formatPrice(product.price)}) na NEXUS Imports.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-border/60 bg-stage px-6 py-3.5 font-display text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-primary/80 hover:text-primary"
            >
              Comprar direto no WhatsApp <ArrowRight className="size-4" />
            </a>
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
