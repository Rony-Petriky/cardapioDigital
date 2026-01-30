"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

  interface navbarobj {
    dadosNav:{
    nomeLoja: string,
    logo?: string ,
}
  };

export default function Navbar({dadosNav}: navbarobj) {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/catalog" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-green-100 flex items-center justify-center">
            {!imageError && dadosNav.logo ? (
              <Image
                src={dadosNav.logo}
                alt="Logo da Loja"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )}
          </div>
          <span className="text-xl font-bold text-green-600">
            {dadosNav.nomeLoja}
          </span>
        </Link>

        <div className="flex gap-6">
          <Link href="/catalog" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/sobrenos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Sobre Nós
          </Link>
        </div>
      </nav>
    </header>
  );
}