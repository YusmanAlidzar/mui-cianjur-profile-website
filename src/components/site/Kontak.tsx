import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const info = [
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: "Jl. Siti Jenab No. 25, Pamoyanan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43211",
  },
  { icon: Phone, label: "Telepon", value: "(0263) 123 4567 / 0812-3456-7890" },
  { icon: Mail, label: "Email", value: "sekretariat@muicianjur.or.id" },
  { icon: Clock, label: "Jam Layanan", value: "Senin – Jumat, 08.00 – 15.30 WIB" },
];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-brand-600 focus:ring-4 focus:ring-brand-100 focus:outline-none";

export function Kontak() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Pesan terkirim", {
        description: "Terima kasih. Sekretariat MUI Cianjur akan menghubungi Anda.",
      });
      e.currentTarget?.reset?.();
    }, 600);
  };

  return (
    <Section id="kontak" tone="soft">
      <SectionHeading
        eyebrow="Kontak & Lokasi"
        title="Hubungi Sekretariat MUI Cianjur"
        description="Sampaikan pertanyaan, permohonan layanan, atau pengaduan Anda melalui formulir berikut."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="nama" className="text-sm font-medium text-foreground">
                  Nama Lengkap
                </label>
                <input id="nama" name="nama" required placeholder="Nama Anda" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="pesan" className="text-sm font-medium text-foreground">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  required
                  rows={5}
                  placeholder="Tuliskan pertanyaan atau keperluan Anda"
                  className={fieldClass}
                />
              </div>
              <Button type="submit" variant="brand" size="xl" className="w-full" disabled={sending}>
                <Send className="h-4 w-4" aria-hidden />
                {sending ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-full flex-col gap-6">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {info.map((i) => (
                <li
                  key={i.label}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <i.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-brand-900">{i.label}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{i.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex-1 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Peta lokasi kantor MUI Kabupaten Cianjur"
                src="https://www.google.com/maps?q=-6.819914553189537,107.13972119238103&z=18&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full lg:h-full"
              />
              <div className="border-t border-border bg-card/80 p-3">
                <a
                  href="https://maps.app.goo.gl/xEiPUxrP1VFJ5dnT6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
