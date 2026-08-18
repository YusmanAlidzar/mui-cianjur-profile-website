import { FileText, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const fatwa = [
  {
    no: "No. 04/MUI-CJR/VI/2026",
    title: "Panduan Penyembelihan Hewan Kurban di Rumah Potong Desa",
    kategori: "Ibadah",
    tanggal: "12 Juni 2026",
  },
  {
    no: "No. 03/MUI-CJR/IV/2026",
    title: "Hukum Transaksi Jual Beli Daring dengan Sistem Pembayaran Tertunda",
    kategori: "Muamalah",
    tanggal: "28 April 2026",
  },
  {
    no: "No. 02/MUI-CJR/II/2026",
    title: "Imbauan Penggunaan Bahan Tambahan Pangan pada Produk UMKM",
    kategori: "Halal",
    tanggal: "9 Februari 2026",
  },
];

export function Fatwa() {
  return (
    <Section id="fatwa">
      <SectionHeading
        eyebrow="Fatwa"
        title="Fatwa & Tausiyah Terbaru"
        description="Dokumen fatwa dan tausiyah Komisi Fatwa MUI Kabupaten Cianjur yang dapat diakses publik."
      />

      <div className="mx-auto max-w-4xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
        {fatwa.map((f, i) => (
          <Reveal key={f.no} delay={i * 70}>
            <a
              href="#kontak"
              className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 p-5 transition-colors hover:bg-brand-50 sm:p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <FileText className="h-5 w-5" strokeWidth={1.6} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {f.kategori}
                  </span>
                  <span className="text-xs text-muted-foreground">{f.tanggal}</span>
                </span>
                <span className="mt-2 block font-[family-name:var(--font-display)] font-semibold text-brand-900">
                  {f.title}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  {f.no}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
