import { useState } from "react";
import { ArrowDown, Sparkles, Award, Camera, Film, Users, ShieldCheck, ChevronRight } from "lucide-react";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ContactSection } from "@/components/contact/ContactSection";
import { SERVICES } from "@/data/portfolio";

export default function Home() {
  const [activeTabService, setActiveTabService] = useState<number>(0);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background hero photo with dark vignette */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=85"
            alt="Photographer with camera in dramatic natural lighting"
            className="h-full w-full object-cover object-center filter brightness-[0.28] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/80" />
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Sparkles className="size-3.5 text-amber-400" />
            Fotografi Editorial • Komersial • Dokumenter
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Menangkap Cahaya, <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent font-serif italic font-normal">
              Mengabadikan Jiwa.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Portofolio visual karya <strong className="text-white font-medium">Arga Daniswara</strong>. Berkolaborasi dengan brand global, figur publik, dan individu untuk menyajikan cerita autentik tanpa manipulasi berlebih.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#galeri"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              Jelajahi Galeri Foto
              <ChevronRight className="size-4" />
            </a>

            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Konsultasi Proyek
            </a>
          </div>

          {/* Key Stat Badges */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4 max-w-3xl mx-auto">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">8+ Tahun</div>
              <div className="text-xs text-zinc-400 mt-1">Dedikasi Pengalaman</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">350+</div>
              <div className="text-xs text-zinc-400 mt-1">Sesi Foto Sukses</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">40+ Brand</div>
              <div className="text-xs text-zinc-400 mt-1">Komersial Nasional</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">100MP</div>
              <div className="text-xs text-zinc-400 mt-1">Medium Format Ready</div>
            </div>
          </div>
        </div>

        <a
          href="#galeri"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500 hover:text-amber-400 transition-colors"
        >
          <span>Scroll Kebawah</span>
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </section>

      {/* GALLERY COMPONENT WITH INTERACTIVE LIGHTBOX */}
      <GallerySection />

      {/* ABOUT & PHILOSOPHY SECTION */}
      <section id="tentang" className="relative py-24 sm:py-32 bg-zinc-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
                  alt="Arga Daniswara Portrait"
                  className="h-full w-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 p-3.5 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white">Arga Daniswara</span>
                  <p className="text-[11px] text-zinc-400">Principal Photographer & Creative Director</p>
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
                [ Filosofi & Pendekatan ]
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                "Bukan sekadar memotret apa yang terlihat, namun apa yang dirasakan."
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                <p>
                  Saya memulai perjalanan di lorong-lorong kota dan pegunungan nusantara dengan kamera analog tua warisan keluarga. Dari sana saya belajar menghargai momen sekali seumur hidup: cahaya golden hour yang berlangsung beberapa menit, tatapan tulus subjek, dan tekstur alam yang tak tergantikan.
                </p>
                <p>
                  Dalam setiap sesi komersial maupun personal, saya menghindari formula kaku. Saya menyusun atmosfer santai di set sehingga karakter sejati subjek terpancar bebas di depan lensa.
                </p>
              </div>

              {/* Gear / Camera Kit */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Camera className="size-4" /> Perlengkapan Standar Industri
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Sony A7R V & Canon R5:</strong> Resolusi tinggi 61MP untuk cetak billboard.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Fujifilm GFX Medium Format:</strong> Dynamic range ekstrim & tone warna organik.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Lensa Prime Master:</strong> 24mm, 35mm, 50mm f/1.2, 85mm f/1.4 GM.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Profoto Strobe Kit:</strong> Kontrol pencahayaan studio portable presisi.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING SECTION */}
      <section id="layanan" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              Paket Investasi & Penugasan
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold text-white">
              Layanan Fotografi Terarah
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Setiap paket disesuaikan dengan kebutuhan lisensi, kompleksitas pencahayaan, dan tenggat waktu rilis kampanye Anda.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-8 transition-all hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-2xl"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                    Paket 0{idx + 1}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{srv.title}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{srv.tagline}</p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500">Mulai Dari</div>
                    <div className="font-display text-2xl font-bold text-amber-400">{srv.startingPrice}</div>
                  </div>

                  <div className="mt-6 space-y-2.5 text-xs text-zinc-300">
                    <div className="font-semibold text-white">Termasuk:</div>
                    {srv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-amber-400"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg bg-black/40 p-3 text-[11px] text-zinc-400 border border-white/5">
                    <strong>Cocok untuk:</strong> {srv.idealFor}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#kontak"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 py-3 text-xs font-bold uppercase tracking-wider text-amber-300 transition-all hover:bg-amber-500 hover:text-black"
                  >
                    Pilih Layanan Ini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / PUBLICATION LOGOS */}
      <section id="klien" className="border-y border-white/10 bg-black/60 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
            Karya Ditampilkan di Berbagai Publikasi & Dipercaya Oleh:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:opacity-90 transition-opacity">
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-widest text-white">VOGUE INDONESIA</span>
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-widest text-white">HARPER'S BAZAAR</span>
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-widest text-white">NATIONAL GEOGRAPHIC ID</span>
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-widest text-white">GARUDA COLORS</span>
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-widest text-white">ROLLING STONE</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT & BOOKING FORM */}
      <ContactSection />
    </div>
  );
}
