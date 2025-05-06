import {
  Inter,
  Libre_Baskerville,
  Roboto_Mono,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libre.variable} ${mono.variable} ${poppins.variable}`}
    >
      <link rel="icon" href="/images/logo.svg" />
      <body className="font-poppins">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
