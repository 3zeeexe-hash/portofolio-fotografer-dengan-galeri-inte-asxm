import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera, Sliders, Maximize2, Share2, Check } from "lucide-react";
import { PhotoItem } from "@/data/portfolio";

interface GalleryLightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onNavigate: (photo: PhotoItem) => void;
}

export function GalleryLightbox({ photo, photos, onClose, onNavigate }: GalleryLightboxProps) {
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[nextIdx]);
    setZoom(false);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIdx]);
    setZoom(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all"
    >
      {/* Top action bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">
            {photo.categoryLabel}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom(!zoom)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:bg-white/10 hover:text-white"
            title="Toggle Zoom Fit/Actual"
          >
            <Maximize2 className="size-4" />
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10 hover:text-white"
            title="Bagikan Tautan"
          >
            {copied ? <Check className="size-3.5 text-emerald-400" /> : <Share2 className="size-3.5" />}
            <span className="hidden sm:inline">{copied ? "Tersalin!" : "Bagikan"}</span>
          </button>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/10 p-2 text-zinc-200 hover:bg-red-500 hover:text-white transition-colors"
            title="Tutup (Esc)"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Main container with side-by-side or stacked on mobile */}
      <div className="relative flex h-full w-full flex-col pt-16 lg:flex-row">
        {/* Navigation Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex size-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-amber-500 hover:text-black"
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft className="size-6" />
        </button>

        {/* Navigation Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-[380px] top-1/2 -translate-y-1/2 z-20 hidden md:flex size-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-amber-500 hover:text-black"
          aria-label="Foto selanjutnya"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Image viewport */}
        <div className="flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8">
          <img
            src={photo.image}
            alt={photo.title}
            onClick={() => setZoom(!zoom)}
            className={`max-h-[75vh] lg:max-h-[85vh] w-auto max-w-full rounded-md object-contain shadow-2xl transition-all duration-300 select-none cursor-pointer ${
              zoom ? "scale-110 sm:scale-125" : "hover:brightness-105"
            }`}
          />
        </div>

        {/* EXIF and Photo info Sidebar */}
        <aside className="w-full border-t border-white/10 bg-zinc-950/90 p-6 backdrop-blur-xl lg:w-[380px] lg:border-t-0 lg:border-l overflow-y-auto">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">{photo.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{photo.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 border-y border-white/10 py-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-amber-500" />
              {photo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5 text-amber-500" />
              Tahun {photo.year}
            </span>
          </div>

          {/* EXIF Data Panel */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Sliders className="size-3.5" />
              Metadata Pemotretan (EXIF)
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-zinc-900/80 p-2.5">
                <span className="text-zinc-500 block text-[10px] uppercase font-mono">Bodi Kamera</span>
                <span className="font-medium text-white flex items-center gap-1 mt-0.5">
                  <Camera className="size-3 text-zinc-400" />
                  {photo.camera}
                </span>
              </div>

              <div className="rounded-lg bg-zinc-900/80 p-2.5">
                <span className="text-zinc-500 block text-[10px] uppercase font-mono">Lensa</span>
                <span className="font-medium text-white block mt-0.5 truncate">{photo.lens}</span>
              </div>

              <div className="rounded-lg bg-zinc-900/80 p-2.5">
                <span className="text-zinc-500 block text-[10px] uppercase font-mono">Aperture</span>
                <span className="font-mono font-medium text-amber-300 block mt-0.5">{photo.aperture}</span>
              </div>

              <div className="rounded-lg bg-zinc-900/80 p-2.5">
                <span className="text-zinc-500 block text-[10px] uppercase font-mono">Shutter & ISO</span>
                <span className="font-mono font-medium text-white block mt-0.5">
                  {photo.shutter} • ISO {photo.iso}
                </span>
              </div>
            </div>
          </div>

          {/* Inquire about similar project */}
          <div className="mt-6 pt-2">
            <a
              href={`#kontak`}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:shadow-lg"
            >
              Pesan Konsep Serupa
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
