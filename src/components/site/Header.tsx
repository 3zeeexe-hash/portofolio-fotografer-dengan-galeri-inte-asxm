import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Galeri Karya", href: "/#galeri" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Layanan & Biaya", href: "/#layanan" },
  { label: "Kontak & Booking", href: "/#kontak" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Camera className="size-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-amber-400 animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              ARGA DANISWARA
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
              Visual Storyteller
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white hover:bg-white/5 rounded-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Arga,%20saya%20tertarik%20untuk%20konsultasi%20sesi%20fotografi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 transition-all hover:bg-amber-500 hover:text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          >
            <PhoneCall className="size-3.5" />
            Konsultasi WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:bg-white/10"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-black/95 px-6 py-6 md:hidden animate-fade-in backdrop-blur-xl">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-2.5 text-base font-medium text-zinc-200 hover:text-amber-400"
              >
                {item.label}
                <ArrowUpRight className="size-4 text-zinc-500" />
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Arga,%20saya%20tertarik%20konsultasi%20foto"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 py-3 text-center text-sm font-semibold text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Konsultasi WhatsApp Sekarang
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
