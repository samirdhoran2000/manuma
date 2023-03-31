export interface ProductInfo {
    id: string;
    name: string;
    description: string;
    detail?: string;
    category?: string;
    img: string;
    gallery?: string[];
    onSale: boolean;
    costPrice: string;
    salePrice?: string;
    inStock: boolean;
  }
  