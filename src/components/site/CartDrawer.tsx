import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

const WHATSAPP_NUMBER = "5511999999999"; // Can be configured or updated

export function CartDrawer() {
  const { cart, isOpen, closeCart, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  // Prevent background scroll when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Olá, NEXUS Imports! Gostaria de finalizar o seguinte pedido:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Qtd: ${item.quantity}x | Valor un.: ${formatPrice(item.product.price)}\n`;
      message += `   Subtotal: ${formatPrice(item.product.price * item.quantity)}\n\n`;
    });

    message += `*Total do Pedido:* ${formatPrice(totalPrice)}\n\n`;
    message += "Por favor, confirmem a disponibilidade dos itens e formas de pagamento.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-border/80 bg-background shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center rounded-sm bg-primary/10 p-2 text-primary border border-primary/30">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <h2 className="font-display text-base uppercase tracking-widest text-foreground font-semibold">
                Meu Carrinho
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                {totalItems} {totalItems === 1 ? "item selecionado" : "itens selecionados"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-border/30 hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full border border-border/60 bg-stage text-muted-foreground">
                <ShoppingBag className="size-8 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-lg uppercase tracking-wider text-foreground font-medium">
                Seu carrinho está vazio
              </h3>
              <p className="mt-2 max-w-xs text-xs text-muted-foreground">
                Explore a nossa vitrine de produtos e adicione os melhores itens importados ao seu
                pedido.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-2.5 font-display text-xs uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-glow"
              >
                Explorar Produtos
                <ArrowRight className="size-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-4 divide-y divide-border/40">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 pt-4 first:pt-0">
                  {/* Image */}
                  <Link
                    to="/produtos/$id"
                    params={{ id: product.id }}
                    onClick={closeCart}
                    className="relative aspect-square size-20 shrink-0 overflow-hidden border border-border/60 bg-stage"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to="/produtos/$id"
                          params={{ id: product.id }}
                          onClick={closeCart}
                          className="font-display text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          aria-label={`Remover ${product.name}`}
                          className="text-muted-foreground/60 transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                        {product.tagline}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border/60 bg-stage">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center font-mono text-xs font-semibold text-foreground">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <span className="font-display text-sm font-bold tracking-wider text-primary">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && (
          <div className="border-t border-border/80 bg-stage/50 p-6 space-y-4">
            <div className="space-y-1.5 font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} itens)</span>
                <span className="text-foreground">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Atendimento & Envio</span>
                <span className="text-primary uppercase tracking-wider">A consultar</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-3">
              <span className="font-display text-sm uppercase tracking-widest text-foreground font-semibold">
                Total
              </span>
              <span className="font-display text-xl font-bold tracking-widest text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="flex w-full items-center justify-center gap-2 border border-primary bg-primary px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
              >
                <MessageCircle className="size-4" />
                Finalizar Pedido via WhatsApp
              </button>

              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="font-mono text-[11px] text-muted-foreground hover:text-destructive transition-colors py-1"
                >
                  Esvaziar carrinho
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
