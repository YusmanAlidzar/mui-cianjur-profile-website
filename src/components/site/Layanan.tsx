import { ArrowRight, BookOpen, ShieldCheck, Users, MessageSquareWarning } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const layanan = [
  {
    icon: BookOpen,
    title: "Fatwa & Konsultasi Syariah",
    desc: "Layanan permohonan fatwa dan konsultasi keagamaan bagi masyarakat, lembaga, maupun instansi pemerintah daerah.",
  },
  {
    icon: ShieldCheck,
    title: "Sertifikasi Halal",
    desc: "Pendampingan pelaku UMKM Cianjur dalam proses sertifikasi halal, mulai dari pendataan hingga pemeriksaan produk.",
  },
  {
    icon: Users,
    title: "Dakwah & Pembinaan Umat",
    desc: "Pembinaan dai, kaderisasi mubaligh, serta program dakwah wasathiyah di masjid dan majelis taklim se-Kabupaten Cianjur.",
  },
  {
    icon: MessageSquareWarning,
    title: "Pengaduan Masyarakat",
    desc: "Kanal aduan terkait keresahan keagamaan, produk tidak berlabel halal, hingga penyimpangan ajaran di lingkungan warga.",
  },
];

export function Layanan() {
  return (
    <Section id="layanan" tone="soft">
      <SectionHeading
        eyebrow="Layanan"
        title="Layanan Utama MUI Kabupaten Cianjur"
        description="Empat bidang layanan yang dapat diakses masyarakat, pelaku usaha, dan lembaga di wilayah Kabupaten Cianjur."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {layanan.map((l, i) => (
          <Reveal key={l.title} delay={i * 80} className="h-full">
            <article className="card-lift flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <l.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg">{l.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{l.desc}</p>
              <a
                href="#kontak"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 hover:underline"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
