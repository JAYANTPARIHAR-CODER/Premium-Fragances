import { createContext, useContext } from 'react';
import { CartContextType } from '@/types/cart';

export const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  itemCount: 0,
  isCartOpen: false,
  toggleCart: () => {},
  showNotification: false,
  notificationMessage: ''
});

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
