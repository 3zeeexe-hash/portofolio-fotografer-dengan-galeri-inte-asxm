import { Camera, Instagram, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Col 1 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-amber-500 text-black">
                <Camera className="size-4" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                ARGA DANISWARA
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Menangkap narasi visual melalui lensa berpresisi tinggi. Berbasis di Jakarta & Bandung, tersedia untuk penugasan komersial, editorial fesyen, dan proyek independen di seluruh dunia.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-amber-500" /> Studio: Senopati, Jakarta Selatan
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#galeri" className="hover:text-amber-400 transition-colors">
                  Portofolio Galeri
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-amber-400 transition-colors">
                  Filosofi & Kamera
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">
                  Paket & Layanan
                </a>
              </li>
              <li>
                <a href="#klien" className="hover:text-amber-400 transition-colors">
                  Daftar Klien & Publikasi
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-amber-400 transition-colors">
                  Reservasi Sesi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Terhubung
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="size-4 text-amber-500" /> @argadaniswara.raw
              </a>
              <a
                href="mailto:contact@argadaniswara.photo"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="size-4 text-amber-500" /> contact@argadaniswara.photo
              </a>
            </div>
            <div className="mt-6 rounded-lg border border-white/5 bg-zinc-900/60 p-3.5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-medium text-emerald-400">Available for Q2/Q3 2025</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-400">Terbuka untuk kolaborasi visual komersial & event berskala regional.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Arga Daniswara Studio. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors"
          >
            Kembali ke atas <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
