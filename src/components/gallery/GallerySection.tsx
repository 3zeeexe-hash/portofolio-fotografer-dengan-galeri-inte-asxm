import { useState, useMemo } from "react";
import { CATEGORIES, PHOTOS, PhotoItem } from "@/data/portfolio";
import { Eye, MapPin, SlidersHorizontal, Sparkles } from "lucide-react";
import { GalleryLightbox } from "./GalleryLightbox";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return PHOTOS;
    return PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="galeri" className="relative py-24 sm:py-32">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-amber-500/5 blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              <Sparkles className="size-3" /> Kurasi Visual 2022 — 2025
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl tracking-tight text-white">
              Galeri Portofolio
            </h2>
            <p className="mt-3 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed">
              Koleksi karya pilihan dari berbagai penjuru, menangkap harmoni antara manusia, ruang arsitektur, dan pencahayaan alami.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <SlidersHorizontal className="size-4 text-amber-400" />
            <span>Menampilkan {filteredPhotos.length} Karya</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === "all" ? PHOTOS.length : PHOTOS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] font-semibold"
                    : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Image with Aspect Ratio wrapper */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-300 backdrop-blur-md border border-white/10">
                    {photo.categoryLabel}
                  </span>
                  <div className="size-8 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    <Eye className="size-4 text-amber-400" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <MapPin className="size-3 text-amber-400" />
                    <span>{photo.location}</span>
                    <span className="text-zinc-600">•</span>
                    <span>{photo.year}</span>
                  </div>

                  <h3 className="mt-1 font-display text-lg font-bold text-white transition-colors group-hover:text-amber-300">
                    {photo.title}
                  </h3>

                  {/* Camera spec pill preview */}
                  <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                    <span className="rounded bg-white/10 px-2 py-0.5 text-zinc-300">{photo.camera}</span>
                    <span className="text-amber-400/90">{photo.aperture}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <GalleryLightbox
          photo={activePhoto}
          photos={filteredPhotos}
          onClose={() => setActivePhoto(null)}
          onNavigate={(photo) => setActivePhoto(photo)}
        />
      )}
    </section>
  );
}
