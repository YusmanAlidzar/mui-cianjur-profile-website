import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logoMui from "@/assets/logo-mui.webp";

const kolomLayanan = [
  "Fatwa & Konsultasi Syariah",
  "Sertifikasi Halal",
  "Dakwah & Pembinaan Umat",
  "Pengaduan Masyarakat",
];

const sosial = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                <img
                  src={logoMui}
                  alt="Logo Majelis Ulama Indonesia"
                  className="h-full w-full" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                MUI Cianjur
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Majelis Ulama Indonesia Kabupaten Cianjur - wadah musyawarah ulama, zuama,
              dan cendekiawan muslim untuk membimbing dan melayani umat.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Layanan</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {kolomLayanan.map((l) => (
                <li key={l}>
                  <a href="#layanan" className="transition-colors hover:text-white hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Jl. Siti Jenab No. 25, Pamoyanan, Cianjur, Jawa Barat 43211
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                (0263) 123 4567
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                sekretariat@muicianjur.or.id
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Sosial Media</h3>
            <div className="mt-4 flex gap-3">
              {sosial.map((s) => (
                <a
                  key={s.label}
                  href="#beranda"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">Ikuti kegiatan dan informasi terbaru MUI Cianjur.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Majelis Ulama Indonesia Kabupaten Cianjur.</p>
          <p>Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
