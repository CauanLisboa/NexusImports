import { useState, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div className="group relative block overflow-hidden border border-border/60 bg-stage transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/80 hover:shadow-glow z-0 hover:z-10 flex flex-col justify-between">
      <Link to="/produtos/$id" params={{ id: product.id }} className="block flex-1">
        <div className="relative aspect-4/5 overflow-hidden stage-light bg-border/10">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-border/30" />
          )}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            width={912}
            height={1200}
            className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Subtle animated red laser glow line overlay in middle on hover */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_#f87171]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 stage-floor" />
          <div className="absolute bottom-2 right-2 z-10 border border-border/50 bg-background/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
            * Imagem ilustrativa
          </div>
          {product.originalPrice && (
            <div className="absolute top-3 left-3 z-10 border border-primary bg-primary/20 px-2 py-0.5 label-xs font-semibold uppercase tracking-wider text-primary shadow-glow backdrop-blur-sm">
              PROMOÇÃO
            </div>
          )}
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-border/60 p-5">
          <div>
            <p className="label-xs text-primary">{product.tagline}</p>
            <h3 className="mt-2 text-lg uppercase tracking-widest text-foreground transition-colors group-hover:text-primary">
              {product.name}
            </h3>
          </div>
          <div className="flex flex-col items-end shrink-0">
            {product.originalPrice && (
              <span className="font-display text-xs line-through text-muted-foreground/70 tracking-widest">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="font-display text-sm tracking-widest text-primary font-bold">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </Link>

      {/* Add to Cart Footer Action */}
      <div className="px-5 pb-5 pt-0">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 border border-primary/40 bg-primary/10 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
        >
          <ShoppingBag className="size-4" />
          Adicionar ao Carrinho
        </button>
      </div>

      <span className="absolute right-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="relative overflow-hidden border border-border/60 bg-stage">
      <div className="relative aspect-4/5 overflow-hidden">
        <Skeleton className="h-full w-full rounded-none bg-border/30" />
      </div>
      <div className="flex items-end justify-between gap-4 border-t border-border/60 p-5">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-16 bg-border/40" />
          <Skeleton className="h-5 w-3/4 bg-border/40" />
        </div>
        <Skeleton className="h-4 w-14 bg-border/40" />
      </div>
    </div>
  );
}
