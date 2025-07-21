import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: JSON.parse(localStorage.getItem("carts")) || [],
  statusTab: false,

  addToCart: ({ productId, name, price, image, quantity }) => {
    const items = [...get().items];
    const index = items.findIndex((item) => item.productId === productId);

    if (index >= 0) {
      items[index].quantity += quantity;
    } else {
      items.push({ productId, name, price, image, quantity });
    }

    localStorage.setItem("carts", JSON.stringify(items));
    set({ items });
  },

  changeQuantity: ({ productId, quantity }) => {
    let items = [...get().items];

    if (quantity > 0) {
      items = items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
    } else {
      items = items.filter((item) => item.productId !== productId);
    }

    localStorage.setItem("carts", JSON.stringify(items));
    set({ items });
  },
  clearCart: () => {
    localStorage.removeItem("carts");
    set({ items: [] });
  },
  toggleStatusTab: () => {
    set((state) => ({ statusTab: !state.statusTab }));
  },
}));

export default useCartStore;
