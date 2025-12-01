export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface User {
  email: string;
  name: string;
}

export type PageType = 'HOME' | 'SHOP' | 'PRODUCT' | 'CART' | 'LOGIN' | 'SIGNUP' | 'LEGAL';
