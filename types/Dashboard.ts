export interface DashboardStats {
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
  viewsByDay: {
    date: string;
    views: number;
  }[];
}

