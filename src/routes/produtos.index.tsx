import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard, ProductCardSkeleton } from "@/components/site/ProductCard";
import { categories, products, type CategoryId } from "@/data/products";

type SearchParams = {
  cat?: CategoryId;
  gender?: "masculino" | "feminino";
  maxPrice?: number;
};

type PriceRangeKey = "all" | "under300" | "300to500" | "500to1000" | "above1000" | "custom";

type SortOption = "default" | "price-asc" | "price-desc" | "name";

export const Route = createFileRoute("/produtos/")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    const cat = search.cat as CategoryId | undefined;
    const gender = search.gender as "masculino" | "feminino" | undefined;
    const validCat = categories.some((c) => c.id === cat) ? cat : undefined;
    const validGender = gender === "masculino" || gender === "feminino" ? gender : undefined;
    return { cat: validCat, gender: validGender };
  },
  head: () => ({
    meta: [
      { title: "Produtos — Perfumes, Drones e Periféricos | NEXUS Imports" },
      {
        name: "description",
        content:
          "Catálogo completo NEXUS Imports: perfumes masculinos e femininos de alta fixação, drones profissionais e periféricos gamer com filtro por preço.",
      },
      {
        property: "og:title",
        content: "Produtos — Perfumes, Drones e Periféricos | NEXUS Imports",
      },
      {
        property: "og:description",
        content: "Catálogo completo NEXUS Imports com filtro por categoria, gênero e preço.",
      },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const { cat, gender } = Route.useSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<PriceRangeKey>("all");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Trigger loading state briefly when category or gender filter changes to prevent layout shifts
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [cat, gender]);

  const filtered = products.filter((p) => {
    if (cat && p.category !== cat) return false;
    if (gender && p.gender !== gender) return false;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(term);
      const matchTagline = p.tagline.toLowerCase().includes(term);
      const matchCategory = p.category.toLowerCase().includes(term);
      const matchDescription = p.description?.toLowerCase().includes(term);
      const matchSpecs = p.specs?.some(
        (s) => s.label.toLowerCase().includes(term) || s.value.toLowerCase().includes(term),
      );
      if (!matchName && !matchTagline && !matchCategory && !matchDescription && !matchSpecs) {
        return false;
      }
    }

    // Price filtering
    if (priceRange === "under300" && p.price > 300) return false;
    if (priceRange === "300to500" && (p.price < 300 || p.price > 500)) return false;
    if (priceRange === "500to1000" && (p.price < 500 || p.price > 1000)) return false;
    if (priceRange === "above1000" && p.price < 1000) return false;
    if (priceRange === "custom") {
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      if (p.price < min || p.price > max) return false;
    }

    return true;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange("all");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("default");
  };

  const isPriceFiltered = priceRange !== "all" || minPrice !== "" || maxPrice !== "";

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label-xs text-primary">Catálogo</p>
            <h1 className="mt-2 text-3xl uppercase tracking-[0.18em] text-foreground sm:text-5xl">
              Produtos
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Prominent Search bar */}
            <div className="relative w-full sm:w-72 lg:w-96">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Buscar perfume, marca ou produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-border/60 bg-stage py-2.5 pl-10 pr-9 text-xs tracking-wider text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:shadow-glow focus:outline-none"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Limpar busca"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Price Filter dropdown button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPriceMenu(!showPriceMenu)}
                className={`inline-flex items-center gap-2 border px-4 py-2.5 label-xs transition-all ${
                  isPriceFiltered
                    ? "border-primary bg-primary/10 text-primary shadow-glow"
                    : "border-border/60 bg-stage text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <SlidersHorizontal className="size-3.5" />
                <span>Preço</span>
                {isPriceFiltered && (
                  <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                )}
              </button>

              {/* Price filter popup card */}
              {showPriceMenu && (
                <div className="absolute right-0 top-full z-20 mt-2 w-72 border border-border/80 bg-background/95 p-4 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <span className="label-xs text-foreground font-semibold">
                      Filtrar por valor
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPriceMenu(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5">
                    {[
                      { key: "all", label: "Todos os preços" },
                      { key: "under300", label: "Até R$ 300" },
                      { key: "300to500", label: "R$ 300 - R$ 500" },
                      { key: "500to1000", label: "R$ 500 - R$ 1.000" },
                      { key: "above1000", label: "Acima de R$ 1.000" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => {
                          setPriceRange(opt.key as PriceRangeKey);
                          if (opt.key !== "custom") {
                            setMinPrice("");
                            setMaxPrice("");
                          }
                        }}
                        className={`text-left px-3 py-1.5 label-xs transition-colors ${
                          priceRange === opt.key
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-stage hover:text-foreground"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Custom Price Range inputs */}
                  <div className="mt-4 border-t border-border/60 pt-3">
                    <p className="label-xs text-muted-foreground mb-2">Faixa personalizada (R$)</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Mín"
                        value={minPrice}
                        onChange={(e) => {
                          setMinPrice(e.target.value);
                          setPriceRange("custom");
                        }}
                        className="w-full border border-border/60 bg-stage px-2.5 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                      <span className="text-muted-foreground text-xs">—</span>
                      <input
                        type="number"
                        placeholder="Máx"
                        value={maxPrice}
                        onChange={(e) => {
                          setMaxPrice(e.target.value);
                          setPriceRange("custom");
                        }}
                        className="w-full border border-border/60 bg-stage px-2.5 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {isPriceFiltered && (
                    <button
                      type="button"
                      onClick={() => {
                        setPriceRange("all");
                        setMinPrice("");
                        setMaxPrice("");
                      }}
                      className="mt-3 w-full text-center label-xs text-primary hover:underline"
                    >
                      Limpar filtro de preço
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Sorting Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none border border-border/60 bg-stage py-2.5 pl-3 pr-8 label-xs text-muted-foreground focus:border-primary focus:text-foreground focus:outline-none cursor-pointer"
              >
                <option value="default">Ordenar: Padrão</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome (A-Z)</option>
              </select>
              <ArrowUpDown className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Category Filters and Active Filters indicator */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              to="/produtos"
              search={{ gender }}
              className={`border px-5 py-2 label-xs transition-all ${
                !cat
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border/60 bg-stage text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              Todos
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/produtos"
                search={{ cat: c.id, gender }}
                className={`border px-5 py-2 label-xs transition-all ${
                  cat === c.id
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/60 bg-stage text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* Sub-filters for Perfumes (Masculino / Feminino) */}
          {(!cat || cat === "perfumes") && (
            <div className="flex items-center gap-2">
              <span className="label-xs text-muted-foreground mr-1">Linha:</span>
              <Link
                to="/produtos"
                search={{ cat, gender: undefined }}
                className={`border px-4 py-1.5 label-xs transition-all ${
                  !gender
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                Todas
              </Link>
              <Link
                to="/produtos"
                search={{ cat: "perfumes", gender: "masculino" }}
                className={`border px-4 py-1.5 label-xs transition-all ${
                  gender === "masculino"
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                Masculino
              </Link>
              <Link
                to="/produtos"
                search={{ cat: "perfumes", gender: "feminino" }}
                className={`border px-4 py-1.5 label-xs transition-all ${
                  gender === "feminino"
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                Feminino
              </Link>
            </div>
          )}
        </div>

        {/* Active Filters bar */}
        {(isPriceFiltered || searchTerm || sortBy !== "default") && (
          <div className="mt-4 flex flex-wrap items-center gap-2 label-xs text-muted-foreground">
            <span>Filtros ativos:</span>
            {searchTerm && (
              <span className="inline-flex items-center gap-1.5 border border-primary/50 bg-primary/10 px-2.5 py-1 text-primary">
                Busca: "{searchTerm}"
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="hover:text-foreground"
                >
                  <X className="size-3" />
                </button>
              </span>
            )}
            {isPriceFiltered && (
              <span className="inline-flex items-center gap-1.5 border border-primary/50 bg-primary/10 px-2.5 py-1 text-primary">
                {priceRange === "under300" && "Até R$ 300"}
                {priceRange === "300to500" && "R$ 300 - R$ 500"}
                {priceRange === "500to1000" && "R$ 500 - R$ 1.000"}
                {priceRange === "above1000" && "Acima de R$ 1.000"}
                {priceRange === "custom" && `R$ ${minPrice || 0} a R$ ${maxPrice || "∞"}`}
                <button
                  type="button"
                  onClick={() => {
                    setPriceRange("all");
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="hover:text-foreground"
                >
                  <X className="size-3" />
                </button>
              </span>
            )}
            {sortBy !== "default" && (
              <span className="inline-flex items-center gap-1.5 border border-border/60 bg-stage px-2.5 py-1 text-foreground">
                {sortBy === "price-asc" && "Menor Preço"}
                {sortBy === "price-desc" && "Maior Preço"}
                {sortBy === "name" && "A-Z"}
                <button
                  type="button"
                  onClick={() => setSortBy("default")}
                  className="hover:text-primary"
                >
                  <X className="size-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto text-xs text-primary hover:underline"
            >
              Limpar todos
            </button>
          </div>
        )}

        {/* Product Grid */}
        {isLoading ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : sorted.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sorted.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-12 border border-dashed border-border/60 bg-stage">
            <p className="font-display text-base uppercase tracking-widest text-muted-foreground">
              Nenhum produto encontrado nessa faixa de valor
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-2 label-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Redefinir Filtros
            </button>
          </div>
        )}
      </div>
    </PageShell>
  );
}
