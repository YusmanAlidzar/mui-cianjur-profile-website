import { Compass, Target, User } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const misi = [
  "Menyelenggarakan bimbingan dan pelayanan keagamaan bagi masyarakat Cianjur.",
  "Menerbitkan fatwa dan tausiyah yang menjadi rujukan umat dan pemangku kebijakan.",
  "Mendorong kemandirian ekonomi umat melalui pendampingan produk halal.",
  "Memperkuat ukhuwah islamiyah, wathaniyah, dan basyariyah di tengah masyarakat.",
];

const pengurus = [
  { nama: "KH. Ahmad Solehudin, M.Ag.", jabatan: "Ketua Umum" },
  { nama: "KH. Dadang Hidayatulloh", jabatan: "Wakil Ketua" },
  { nama: "Drs. H. Endang Suryana, M.Pd.", jabatan: "Sekretaris Umum" },
  { nama: "Hj. Nurhasanah, S.E.", jabatan: "Bendahara Umum" },
];

export function Tentang() {
  return (
    <Section id="tentang">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Majelis Ulama Indonesia Kabupaten Cianjur"
            description="MUI Kabupaten Cianjur adalah wadah musyawarah para ulama, zuama, dan cendekiawan muslim yang berkhidmat membimbing, membina, dan mengayomi umat Islam di Kabupaten Cianjur. Berdiri sebagai mitra strategis pemerintah daerah, MUI Cianjur berperan dalam bidang fatwa, dakwah, pendidikan, ekonomi syariah, dan pemberdayaan masyarakat."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-border bg-brand-50 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Compass className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg">Visi</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Terwujudnya masyarakat Cianjur yang religius, berakhlak mulia, dan
                  sejahtera dalam bimbingan ulama.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Target className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg">Misi</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {misi.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h3 className="text-xl">Struktur Kepengurusan</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Periode 2025 – 2030 (data sementara, akan diperbarui).
            </p>
            <ul className="mt-6 space-y-3">
              {pengurus.map((p) => (
                <li
                  key={p.nama}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-brand-50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <User className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-[family-name:var(--font-display)] font-semibold text-brand-900">
                      {p.nama}
                    </span>
                    <span className="block text-sm text-muted-foreground">{p.jabatan}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
