# MUI Kabupaten Cianjur

Landing page resmi Majelis Ulama Indonesia Kabupaten Cianjur, dibangun dengan React, TypeScript, Vite, dan TanStack.

## Deskripsi

Proyek ini merupakan website profil untuk MUI Kabupaten Cianjur yang menampilkan informasi institusi, layanan, fatwa, berita, kontak, dan peta lokasi. Desain dibuat dengan pendekatan modern, responsif, dan siap untuk kebutuhan publikasi organisasi.

## Fitur utama

- Hero section dengan branding institusi
- Navigasi responsif
- Informasi layanan MUI
- Section fatwa dan berita
- Profil lembaga dan kontak
- Peta lokasi kantor MUI Cianjur
- Form kontak dengan notifikasi toast
- Tampilan mobile-friendly dan modern

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router
- TanStack Start
- Tailwind CSS
- Lucide React
- Sonner
- shadcn/ui-inspired component system

## Persiapan lokal

Pastikan Node.js dan npm sudah terpasang.

```bash
git clone <repository-url>
cd mui-cianjur-profile-website
npm install
npm run dev
```

Setelah server berjalan, buka:

```text
http://localhost:8080/
```

## Script yang tersedia

```bash
npm run dev      # menjalankan aplikasi di mode development
npm run build    # build untuk production
npm run preview  # preview hasil build secara lokal
npm run lint     # menjalankan pengecekan lint
npm run format   # format kode dengan Prettier
```

## Struktur proyek

```text
src/
  assets/              # gambar dan aset visual
  components/
    site/              # komponen halaman utama (Hero, Navbar, Kontak, dll.)
    ui/                # komponen UI dasar
  lib/                 # helper dan utilitas
  routes/              # routing TanStack
  router.tsx           # konfigurasi router
  server.ts            # server entry
  start.ts             # bootstrap TanStack Start
  styles.css           # styling global dan tema
public/                # aset publik statis
```

## GitHub Pages

Untuk men-deploy project ini ke GitHub Pages, ikuti langkah berikut:

1. Pastikan repository sudah dipush ke GitHub.
2. Buka tab Settings > Pages di repository GitHub.
3. Pilih Source: GitHub Actions.
4. Push ke branch `main`.
5. Workflow di `.github/workflows/deploy-pages.yml` akan membangun dan deploy otomatis.

Setelah deploy, website dapat diakses di:

```text
https://<username>.github.io/mui-cianjur-profile-website/
```

## Lokasi

Alamat kantor MUI Kabupaten Cianjur:

Jl. Siti Jenab No. 25, Pamoyanan, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43211

## Lisensi

ISC

## Catatan

Proyek ini dikembangkan sebagai landing page organisasi publik dan dapat dikembangkan lebih lanjut untuk kebutuhan CMS, integrasi form, atau content management.
