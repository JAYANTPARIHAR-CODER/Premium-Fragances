export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  showNotification: boolean;
  notificationMessage: string;
};
