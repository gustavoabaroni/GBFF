import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gbffagencia.vercel.app"),
  title: "GBFF — Estratégia, design e conteúdo",
  description: "Agência criativa com mais de 10 anos de experiência nos mercados digital e tradicional.",
  icons: { icon: "/assets/page-1-image-1.png" },
  openGraph: {
    title: "GBFF — Estratégia, design e conteúdo",
    description: "Ideias inconformadas para marcas impossíveis de ignorar.",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "GBFF — Ideias inconformadas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBFF — Estratégia, design e conteúdo",
    description: "Ideias inconformadas para marcas impossíveis de ignorar.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
