import { useState, useId } from "react";
import { SERVICES } from "@/data/portfolio";
import { Send, CheckCircle2, Phone, Mail, Instagram, MapPin, Calculator, CalendarClock } from "lucide-react";

export function ContactSection() {
  const formId = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "commercial",
    date: "",
    location: "",
    budget: "5-10jt",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate fast client-side submission & prepare WhatsApp fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Halo Arga Daniswara,\n\nSaya ingin booking sesi fotografi:\n• Nama: ${formData.name || "-"}\n• Email: ${formData.email || "-"}\n• Tipe Proyek: ${formData.serviceType}\n• Tanggal: ${formData.date || "Fleksibel"}\n• Lokasi: ${formData.location || "-"}\n• Budget Range: ${formData.budget}\n• Detail Pesan: ${formData.message || "Tolong info ketersediaan jadwal."}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank");
  };

  return (
    <section id="kontak" className="relative py-24 sm:py-32 bg-zinc-950/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              <CalendarClock className="size-3.5" /> Reservasi & Pertanyaan
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl text-white">
              Wujudkan Visi Visual Anda
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Memiliki ide kampanye iklan, lookbook fesyen, atau butuh dokumentasi estetis untuk momen berharga? Mari diskusikan konsep dan jadwal terbaik.
            </p>

            {/* Direct contact cards */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-amber-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">WhatsApp Langsung (Fast Response)</div>
                  <div className="text-sm font-semibold text-white">+62 812-3456-7890</div>
                </div>
              </a>

              <a
                href="mailto:contact@argadaniswara.photo"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-amber-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Proposal & Kolaborasi Brand</div>
                  <div className="text-sm font-semibold text-white">contact@argadaniswara.photo</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex size-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Studio & Workshop</div>
                  <div className="text-sm font-semibold text-white">Senopati Creative Hub, Jakarta Selatan</div>
                </div>
              </div>
            </div>

            {/* Workflow guarantee note */}
            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/90 leading-relaxed">
              ✨ <strong>Garansi Profesional:</strong> Setiap sesi mencakup moodboard pra-produksi, pengarahan gaya, dan pratinjau hasil warna dalam 48 jam.
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-zinc-900/70 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    Permintaan Berhasil Terkirim!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
                    Terima kasih telah mempercayakan proyek Anda. Kami akan meninjau ketersediaan tanggal dan membalas dalam waktu maksimal 1x24 jam kerja.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400"
                    >
                      Buka Chat WhatsApp Sekarang
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-xs font-medium text-zinc-300 hover:bg-white/5"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      Formulir Konsultasi Proyek
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Silakan isi formulir singkat berikut untuk mendapatkan penawaran & jadwal.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-name`} className="block text-xs font-medium text-zinc-300">
                        Nama Lengkap / Perusahaan *
                      </label>
                      <input
                        id={`${formId}-name`}
                        type="text"
                        required
                        placeholder="Contoh: Jessica Hartanto"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-email`} className="block text-xs font-medium text-zinc-300">
                        Alamat Email *
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        required
                        placeholder="nama@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Phone & Date */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-phone`} className="block text-xs font-medium text-zinc-300">
                        Nomor WhatsApp *
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-date`} className="block text-xs font-medium text-zinc-300">
                        Estimasi Tanggal Pemotretan
                      </label>
                      <input
                        id={`${formId}-date`}
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div>
                    <label htmlFor={`${formId}-service`} className="block text-xs font-medium text-zinc-300">
                      Kategori Kebutuhan Fotografi
                    </label>
                    <select
                      id={`${formId}-service`}
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="commercial">Komersial & Brand Advertising</option>
                      <option value="portrait">Fashion Lookbook & Personal Portrait</option>
                      <option value="event">Dokumenter Acara & Intimate Wedding</option>
                      <option value="architecture">Arsitektur & Interior Properti</option>
                      <option value="custom">Kebutuhan Kustom / Editorial Lainnya</option>
                    </select>
                  </div>

                  {/* Budget & Location */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-budget`} className="block text-xs font-medium text-zinc-300">
                        Rentang Budget
                      </label>
                      <select
                        id={`${formId}-budget`}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="3-5jt">Rp 3.000.000 - Rp 5.000.000</option>
                        <option value="5-10jt">Rp 5.000.000 - Rp 10.000.000</option>
                        <option value="10-25jt">Rp 10.000.000 - Rp 25.000.000</option>
                        <option value="25jt+">&gt; Rp 25.000.000 (Full Production)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`${formId}-loc`} className="block text-xs font-medium text-zinc-300">
                        Lokasi / Kota Pemotretan
                      </label>
                      <input
                        id={`${formId}-loc`}
                        type="text"
                        placeholder="Contoh: Jakarta / Bali / Luar Kota"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={`${formId}-msg`} className="block text-xs font-medium text-zinc-300">
                      Rincian Ide, Konsep, atau Referensi Visual
                    </label>
                    <textarea
                      id={`${formId}-msg`}
                      rows={3}
                      placeholder="Jelaskan gambaran mood visual, jumlah busana/produk, atau tautan Pinterest referensi Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] disabled:opacity-50"
                    >
                      {loading ? "Memproses..." : (
                        <>
                          <Send className="size-4" />
                          Kirim Formulir Reservasi
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10"
                    >
                      Kirim via WA Saja
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
