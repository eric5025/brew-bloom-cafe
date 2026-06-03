/**
 * Brew & Bloom TypeScript Types
 * 
 * TypeScript 적용 이유:
 * - 타입 안전성 보장으로 런타임 에러 감소
 * - IDE 자동완성 및 개발 생산성 향상
 * - 대규모 프로젝트 유지보수성 개선
 */

export interface Size {
  id: string;
  label: string;
  priceAdd?: number;
}

export interface Temperature {
  id: string;
  label: string;
}

export interface MenuOptions {
  size: Size[];
  temperature?: Temperature[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  badge?: string;
  options: MenuOptions;
}

export interface CartEntry {
  cartKey: string;
  itemId: string;
  name: string;
  image: string;
  size: Size;
  temperature: Temperature | null;
  unitPrice: number;
  quantity: number;
}

export interface CartContextType {
  items: CartEntry[];
  cartOpen: boolean;
  checkoutOpen: boolean;
  totalCount: number;
  subtotal: number;
  addItem: (itemId: string, options: Partial<MenuOptions>) => void;
  updateQuantity: (cartKey: string, delta: number) => void;
  removeItem: (cartKey: string) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  openCheckout: () => void;
  closeCheckout: () => void;
}

export interface PaymentMethod {
  id: string;
  name: string;
  color: string;
  textColor: string;
  icon: string;
}
