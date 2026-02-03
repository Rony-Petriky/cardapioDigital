import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLoadingOverlay from "@/components/RouteLoadingOverlay";
export const metadata = {
  title: "Catálogo Digital",
  description: "Catálogo de produtos desenvolvido em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 antialiased">
        <RouteLoadingOverlay/>
        {children}
      </body>
    </html>
  );
}