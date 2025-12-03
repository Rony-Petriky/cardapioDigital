"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Eye, MousePointerClick, Package, Users, Calendar } from "lucide-react";
import { DashboardStats } from "@/types/Dashboard";

export default function AnalyticsPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d">("30d");

  useEffect(() => {
    // Simular carregamento de dados
    // Em produção, isso viria de uma API
    const mockStats: DashboardStats = {
      totalProducts: 24,
      activeProducts: 18,
      totalViews: 1247,
      totalClicks: 342,
      conversionRate: 27.4,
      topProducts: [
        { id: 1, name: "Produto A", views: 156, clicks: 45 },
        { id: 2, name: "Produto B", views: 134, clicks: 38 },
        { id: 3, name: "Produto C", views: 98, clicks: 22 },
        { id: 4, name: "Produto D", views: 87, clicks: 19 },
        { id: 5, name: "Produto E", views: 76, clicks: 15 },
      ],
      viewsByDay: [
        { date: "2024-01-01", views: 45 },
        { date: "2024-01-02", views: 52 },
        { date: "2024-01-03", views: 48 },
        { date: "2024-01-04", views: 61 },
        { date: "2024-01-05", views: 55 },
        { date: "2024-01-06", views: 67 },
        { date: "2024-01-07", views: 73 },
      ],
    };
    setStats(mockStats);
  }, [timeRange]);

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Carregando estatísticas...</p>
        </div>
      </div>
    );
  }

  const maxViews = Math.max(...stats.viewsByDay.map((d) => d.views));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Estatísticas</h1>
          <p className="text-gray-600 mt-1">
            Análise detalhada do desempenho do seu catálogo
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-gray-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as "7d" | "30d" | "90d")}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Visualizações</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.totalViews.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 mt-2">+12% vs período anterior</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Eye className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Cliques</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.totalClicks.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 mt-2">+8% vs período anterior</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <MousePointerClick className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Taxa de Conversão</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.conversionRate}%
              </p>
              <p className="text-sm text-green-600 mt-2">+3.2% vs período anterior</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Produtos Ativos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.activeProducts}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                de {stats.totalProducts} total
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Package className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Visualizações por Dia
          </h2>
          <div className="space-y-3">
            {stats.viewsByDay.map((day, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 text-sm text-gray-600">
                  {new Date(day.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <div
                        className="bg-green-500 h-full rounded-full transition-all"
                        style={{
                          width: `${(day.views / maxViews) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {day.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Top 5 Produtos
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
      </div>
    </div>
  );
}

