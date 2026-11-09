import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-muted-foreground">Halaman tidak ditemukan.</p>
      <Link to="/" className="mt-6 inline-block text-sm font-medium underline underline-offset-4">
        Kembali ke beranda
      </Link>
    </section>
  );
}
