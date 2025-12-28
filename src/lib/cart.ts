export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  gsm: string;
  color: string;
  size: string;
  quantity: number;
};

const CART_KEY = "mashi_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];

  const parsed = JSON.parse(raw);

  return parsed.map((item: any) => ({
    ...item,
    gsm: item.gsm ?? "Default GSM",
    size: item.size ?? "Default",
    quantity: item.quantity ?? 1,
  }));
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cartUpdated"));
}
