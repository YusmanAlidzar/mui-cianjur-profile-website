import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMasjid from "@/assets/hero-masjid.webp";

const stats = [
  { value: "32", label: "Kecamatan terlayani" },
  { value: "480+", label: "Sertifikat halal difasilitasi" },
  { value: "120", label: "Fatwa & tausiyah terbit" },
];

export function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden">
      <img
        src={heroMasjid}
        alt="Masjid Agung Cianjur"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-gradient absolute inset-0 -z-10 opacity-[0.88]" />

      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Lembaga Resmi Ulama Kabupaten Cianjur
          </span>

          <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Membimbing Umat, Melayani Masyarakat Cianjur dengan Amanah
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Majelis Ulama Indonesia Kabupaten Cianjur hadir sebagai mitra umat dan
            pemerintah daerah dalam bimbingan syariah, penerbitan fatwa, pendampingan
            sertifikasi halal, serta pembinaan dakwah yang sejuk dan moderat.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="xl" className="bg-white text-brand-700 hover:bg-brand-50" asChild>
              <a href="#layanan">
                Layanan Sertifikasi Halal
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </Button>
            <Button variant="onBrand" size="xl" asChild>
              <a href="#kontak">
                <Phone className="h-4 w-4" aria-hidden />
                Hubungi Kami
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-white/75">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
