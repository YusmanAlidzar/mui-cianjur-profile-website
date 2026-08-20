import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Fatwa } from "@/components/site/Fatwa";
import { Berita } from "@/components/site/Berita";
import { Tentang } from "@/components/site/Tentang";
import { Kontak } from "@/components/site/Kontak";
import { Footer } from "@/components/site/Footer";

const title = "MUI Kabupaten Cianjur — Majelis Ulama Indonesia";
const description =
  "Situs resmi MUI Kabupaten Cianjur: layanan fatwa, sertifikasi halal, dakwah dan pembinaan umat, serta pengaduan masyarakat.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Fatwa />
        <Berita />
        <Tentang />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}
