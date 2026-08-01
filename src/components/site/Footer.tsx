export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="font-display text-xs text-foreground">
            © {new Date().getFullYear()} NEXUS Imports
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="mailto:nexusimportspy@gmail.com"
            className="transition-colors hover:text-primary"
          >
            nexusimportspy@gmail.com
          </a>
          <a
            href="https://wa.me/5591991909232?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20NEXUS%20Imports."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            WhatsApp: +55 (91) 99190-9232
          </a>
        </div>
      </div>
    </footer>
  );
}
