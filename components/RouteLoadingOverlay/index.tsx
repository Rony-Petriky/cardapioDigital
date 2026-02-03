"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoadingOverlay() {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // inicia loading
    setLoading(true);
    setVisible(true);
    setProgress(0);

    // progresso fake (UX padrão)
    const interval = setInterval(() => {
      setProgress((old) => (old < 90 ? old + 10 : old));
    }, 200);

    // finaliza
    const finish = setTimeout(() => {
      setProgress(100);
      clearInterval(interval);

      setTimeout(() => setVisible(false), 200); // fade-out
      setTimeout(() => setLoading(false), 500); // remove do DOM
    }, 600);

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <>
      {/* Barra de progresso */}
      <div className="fixed left-0 top-0 z-[10000] h-1 w-full bg-transparent">
        <div
          className="h-full bg-green-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/loading.gif"
            alt="Carregando..."
            width={150}
            height={150}
            className="animate-pulse"
            priority
          />

          <span className="text-sm font-medium text-white animate-pulse">
            Carregando<span className="animate-ping">...</span>
          </span>
        </div>
      </div>
    </>
  );
}