import Image from "next/image";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Image
        src="/loading.png"
        alt="Carregando..."
        width={100}
        height={100}
        className="animate-pulse"
        priority
      />
    </div>
  );
}
