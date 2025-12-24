"use client";

import { getCart, saveCart } from "@/lib/cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/lib/cart";


export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("mashi_cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="cart-empty">Your shopping bag is empty.</p>;
  }

  const removeItem = (
    id: number,
    gsm: string,
    color: string,
    size: string
  ) => {
    const updatedCart = cart.filter(
      (item) =>
        !(
          item.id === id &&
          item.gsm === gsm &&
          item.color === color &&
          item.size === size
        )
    );

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const updateQuantity = (
    id: number,
    gsm: string,
    color: string,
    size: string,
    delta: number
  ) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === id &&
        item.gsm === gsm &&
        item.color === color &&
        item.size === size
      ) {
        const newQty = item.quantity + delta;
        return {
          ...item,
          quantity: newQty < 1 ? 1 : newQty,
        };
      }
      return item;
    });

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  return (
    <main className="cart-page">
      <div className="cart-layout">
        {/* LEFT — Shopping Bag */}
        <section className="cart-left">
          <h1 className="cart-title">Shopping Bag</h1>

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.gsm}-${item.color}-${item.size}`}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>

                <p className="cart-item-meta">
                  {item.gsm} · {item.color}
                </p>

                <p className="cart-item-price">Rs.{item.price}</p>

                <div className="cart-qty-controls">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.gsm,
                        item.color,
                        item.size,
                        -1
                      )
                    }
                  >
                    –
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.gsm,
                        item.color,
                        item.size,
                        1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() =>
                    removeItem(
                      item.id,
                      item.gsm,
                      item.color,
                      item.size
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT — Order Summary */}
        <aside className="cart-right">
          <h2 className="order-title">Order Summary</h2>

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.gsm}-summary`}
              className="order-row"
            >
              <span>
                {item.name} ({item.gsm})
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="order-divider" />

          <div className="order-subtotal">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => router.push("/payment")}
          >
            Checkout
          </button>

          <p className="checkout-note">
            Note: Orders are usually dispatched within 2 to 5 working days
            from our studio, unless stated otherwise in the product
            description.If you have any queries, please feel free to reach out to 
            us. we are always happy to help
          </p>
        </aside>
      </div>
    </main>
  );
}
