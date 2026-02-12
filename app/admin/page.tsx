"use client";

import { Package, Eye, MousePointerClick, TrendingUp, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DashboardStats {
  totalProducts: number;
  activeProducts: number;
  totalViews: number;
  totalClicks: number;
  conversionRate: number;
  topProducts: {
    id: number;
    name: string;
    views: number;
    clicks: number;
  }[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    activeProducts: 0,
    totalViews: 0,
    totalClicks: 0,
    conversionRate: 0,
    topProducts: [],
  });

  useEffect(() => {
    // Simular carregamento de dados
    // Em produção, isso viria de uma API
    setStats({
      totalProducts: 24,
      activeProducts: 18,
      totalViews: 1247,
      totalClicks: 342,
      conversionRate: 27.4,
      topProducts: [
        { id: 1, name: "Produto A", views: 156, clicks: 45 },
        { id: 2, name: "Produto B", views: 134, clicks: 38 },
        { id: 3, name: "Produto C", views: 98, clicks: 22 },
      ],
    });
  }, []);

  const statCards = [
    {
      title: "Total de Produtos",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Visualizações",
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      color: "bg-green-500",
      change: "+8%",
    },
    {
      title: "Cliques",
      value: stats.totalClicks.toLocaleString(),
      icon: MousePointerClick,
      color: "bg-purple-500",
      change: "+15%",
    },
    {
      title: "Taxa de Conversão",
      value: `${stats.conversionRate}%`,
      icon: TrendingUp,
      color: "bg-orange-500",
      change: "+3.2%",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral do seu catálogo digital</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus size={20} />
          Novo Produto
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Produtos Mais Visualizados
          </h2>
          <div className="space-y-4">
            {stats.topProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {product.views} visualizações
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{product.clicks}</p>
                  <p className="text-sm text-gray-500">cliques</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Ações Rápidas
          </h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="block w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <p className="font-medium text-gray-900">Adicionar Novo Produto</p>
              <p className="text-sm text-gray-500 mt-1">
                Cadastre um novo produto no catálogo
              </p>
            </Link>
            <Link
              href="/admin/catalog-settings"
              className="block w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <p className="font-medium text-gray-900">Configurar Catálogo</p>
              <p className="text-sm text-gray-500 mt-1">
                Personalize as informações do seu catálogo
              </p>
            </Link>
            <Link
              href="/admin/public-link"
              className="block w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <p className="font-medium text-gray-900">Ver Link Público</p>
              <p className="text-sm text-gray-500 mt-1">
                Acesse e compartilhe seu catálogo público
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

