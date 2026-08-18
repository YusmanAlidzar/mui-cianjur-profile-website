import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoMui from "@/assets/logo-mui.webp";

const menu = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Fatwa", href: "#fatwa" },
  { label: "Berita", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background transition-all duration-200",
        scrolled && "shadow-[var(--shadow-soft)]",
      )}
    >
      <nav className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:h-20">
        <a href="#beranda" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white sm:h-11 sm:w-11">
            <img
              src={logoMui}
              alt="Logo Majelis Ulama Indonesia"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-display)] text-base leading-tight font-bold text-brand-900 sm:text-lg">
              MUI Cianjur
            </span>
            <span className="block truncate text-[11px] text-muted-foreground sm:text-xs">
              Majelis Ulama Indonesia Kabupaten Cianjur
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {menu.map((m) => (
              <li key={m.href}>
                <a
                  href={m.href}
                  className="inline-flex h-11 items-center rounded-lg px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="brand" size="lg" className="ml-2 hidden lg:inline-flex" asChild>
            <a href="#kontak">Hubungi Kami</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-lg text-brand-700 transition-colors hover:bg-brand-50 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-2">
            {menu.map((m) => (
              <li key={m.href}>
                <a
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {m.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button variant="brand" size="lg" className="w-full" asChild>
                <a href="#kontak" onClick={() => setOpen(false)}>
                  Hubungi Kami
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
