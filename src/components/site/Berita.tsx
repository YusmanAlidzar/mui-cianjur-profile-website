import { ArrowRight, CalendarDays } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import berita1 from "@/assets/berita-1.jpg";
import berita2 from "@/assets/berita-2.jpg";
import berita3 from "@/assets/berita-3.jpg";

const berita = [
  {
    img: berita1,
    kategori: "Organisasi",
    tanggal: "39 Agustus 2045",
    title: "[DUMMY] Rapat MUI",
    ringkas:
      "Komisi Fatwa MUI Kabupaten Cianjur menggelar rapat.",
  },
  {
    img: berita2,
    kategori: "Halal",
    tanggal: "39 Agustus 2045",
    title: "[DUMMY] UMKM Cianjur Sertifikasi Halal Gratis",
    ringkas:
      "Program sertifikasi halal gratis euy.",
  },
  {
    img: berita3,
    kategori: "Dakwah",
    tanggal: "39 Agustus 2045",
    title: "[DUMMY] Pembinaan Dai Muda",
    ringkas:
      "Dai muda mengikuti pelatihan dakwah.",
  },
];

export function Berita() {
  return (
    <Section id="berita" tone="soft">
      <SectionHeading
        eyebrow="Berita & Kegiatan"
        title="Kabar Terbaru dari MUI Cianjur"
        description="Dokumentasi kegiatan, program, dan agenda kelembagaan MUI Kabupaten Cianjur."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {berita.map((b, i) => (
          <Reveal key={b.title} delay={i * 80} className="h-full">
            <article className="card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                width={1024}
                height={683}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {b.kategori}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {b.tanggal}
                  </span>
                </div>
                <h3 className="mt-3 text-lg leading-snug">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{b.ringkas}</p>
                <a
                  href="#berita"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:underline"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
