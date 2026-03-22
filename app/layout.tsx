import type { Metadata } from "next";
import { Header } from "./header/header";
import './globals.css'
import { Footer } from "./footer/footer";

export const metadata: Metadata = {
  title: "Recanto do Bardo",
  description: "Aqui você encontra post's sobre assuntos diversos do mundo Geek, vanha fazer parte dessa enorme familia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        <Header/>
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
