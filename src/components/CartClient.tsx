"use client";

import { useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

const STORAGE_KEY = "mashi_cart_v1";

function readCartFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function writeCartToStorage(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

export default function CartClient() {
  const [items, setItems] = useState<CartItem[] | null>(null);

  // load from storage on mount
  useEffect(() => {
    setItems(readCartFromStorage());
  }, []);

  // persist on change
  useEffect(() => {
    if (items === null) return;
    writeCartToStorage(items);
  }, [items]);

  const subtotal = useMemo(() => {
    if (!items) return 0;
    return items.reduce((s, it) => s + it.price * it.quantity, 0);
  }, [items]);

  const increase = (id: number) => {
    setItems((prev) =>
      (prev ?? []).map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );
  };

  const decrease = (id: number) => {
    setItems((prev) =>
      (prev ?? [])
        .map((it) => (it.id === id ? { ...it, quantity: it.quantity - 1 } : it))
        .filter((it) => it.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => (prev ?? []).filter((it) => it.id !== id));
  };

  const clearCart = () => setItems([]);

  const addSampleItem = () => {
    // helpful for testing when cart is empty
    const sample: CartItem = {
      id: Math.floor(Math.random() * 10000),
      name: "Sample Notebook",
      price: 499,
      quantity: 1,
      image: "/products/copticbound.png",
    };
    setItems((prev) => [...(prev ?? []), sample]);
  };

  if (items === null) {
    return <div className="cart-root">Loading cart…</div>;
  }

  return (
    <div className="cart-root">
      <h1>Your cart</h1>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <div className="cart-empty-actions">
            <button className="btn ghost" onClick={() => (location.href = "/store")}>
              Browse store
            </button>
            <button className="btn" onClick={addSampleItem}>
              Add sample item
            </button>
          </div>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((it) => (
              <li key={it.id} className="cart-item">
                <div className="cart-item-media">
                  {it.image ? <img src={it.image} alt={it.name} /> : <div className="thumb-placeholder" />}
                </div>

                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <div className="cart-item-name">{it.name}</div>
                    <div className="cart-item-price">₹{it.price}</div>
                  </div>

                  <div className="cart-item-controls">
                    <div className="qty-controls">
                      <button onClick={() => decrease(it.id)} aria-label="Decrease">−</button>
                      <span className="qty">{it.quantity}</span>
                      <button onClick={() => increase(it.id)} aria-label="Increase">+</button>
                    </div>

                    <div className="cart-item-actions">
                      <button className="link" onClick={() => removeItem(it.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <div className="subtotal">
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>

            <div className="cart-buttons">
              <button className="btn ghost" onClick={clearCart}>
                Clear cart
              </button>

              <button className="btn primary" onClick={() => alert("Proceed to checkout (not implemented)")}>
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
