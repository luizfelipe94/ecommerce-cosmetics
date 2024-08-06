import { calculatePrice } from "@/service/products-service";
import { ReadProductDTO } from "@/service/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: ReadProductDTO;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeItemFromCart: (productId: string) => void;
  getTotal: () => number;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create(
  persist<CartState>((set, get) => ({
    items: [],
    addItem(item: CartItem) {
      const itemExists = get().items.find((cartItem) => cartItem.product.id === item.product.id);
      if (itemExists) {
        itemExists.quantity++;
        set({ items: [...get().items] });
      } else {
        set({ items: [...get().items, { ...item, quantity: 1 }] });
      }
    },
    increaseQuantity(productId: string) {
      const itemExists = get().items.find((cartItem) => cartItem.product.id === productId);
      if (itemExists) {
        itemExists.quantity++;
        set({ items: [...get().items] });
      }
    },
    decreaseQuantity(productId: string) {
      const itemExists = get().items.find((cartItem) => cartItem.product.id === productId);
      if (itemExists) {
        if (itemExists.quantity === 1) {
          const updatedCartItems = get().items.filter(
            (item) => item.product.id !== productId
          );
          set({ items: updatedCartItems });
        } else {
          itemExists.quantity--;
          set({ items: [...get().items] });
        }
      }
    },
    removeItemFromCart(productId: string) {
      const itemExists = get().items.find((cartItem) => cartItem.product.id === productId);
      if (itemExists) {
        const updatedCartItems = get().items.filter(
          (item) => item.product.id !== productId
        );
        set({ items: updatedCartItems });
      }
    },
    getTotal: () => get().items.reduce((total, item) => total + calculatePrice(item.product.price, item.product.discountPercentege) * item.quantity, 0),
    clearCart: () => set({ items: [] }),
    getTotalItems: () => get().items.reduce((qnty, items) => qnty + items.quantity, 0),
  }),
  { name: "cart-items" }),
);
