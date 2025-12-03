export interface CatalogSettings {
  id: string;
  storeName: string;
  storeDescription?: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  publicUrl: string;
  customDomain?: string;
  isActive: boolean;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

