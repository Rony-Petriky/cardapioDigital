"use client";

import { useState } from "react";
import { Link2, Copy, ExternalLink, QrCode, Share2, Eye } from "lucide-react";

export default function PublicLinkPage() {
  const [publicUrl] = useState("https://catalogo.exemplo.com/loja123");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Meu Catálogo Digital",
          text: "Confira meu catálogo de produtos!",
          url: publicUrl,
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Link Público</h1>
        <p className="text-gray-600 mt-1">
          Gerencie e compartilhe o link do seu catálogo público
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* URL Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              URL do Catálogo
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Link2 className="text-gray-400" size={20} />
                <input
                  type="text"
                  value={publicUrl}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-mono text-sm"
                />
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                    copied
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Copy size={20} />
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Abrir Catálogo
                </a>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Share2 size={20} />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Código QR
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <QrCode size={128} className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Escaneie este código QR para acessar seu catálogo diretamente
              </p>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Baixar QR Code
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Estatísticas do Link
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total de Acessos</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">1,247</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Acessos Únicos</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">892</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Taxa de Rejeição</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Tempo Médio</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">2:34</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Ações Rápidas
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Eye size={20} className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Visualizar Catálogo</p>
                  <p className="text-sm text-gray-500">Veja como está o catálogo público</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Link2 size={20} className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Personalizar URL</p>
                  <p className="text-sm text-gray-500">Crie uma URL personalizada</p>
                </div>
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-green-50 rounded-lg border border-green-200 p-6">
            <h3 className="font-bold text-green-900 mb-2">💡 Dica</h3>
            <p className="text-sm text-green-800">
              Compartilhe seu link nas redes sociais e aumente o alcance do seu
              catálogo. Use o código QR em materiais impressos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

