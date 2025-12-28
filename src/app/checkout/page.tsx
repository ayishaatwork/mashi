"use client";

import "./checkout.css";
import { getCart, clearCart } from "@/lib/cart";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      address: {
        line1: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        pincode: formData.get("pincode"),
      },
      saveInfo: formData.get("saveInfo") === "on",
      cart: getCart(),
    };

    try {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create order");
      }

      const data = await res.json();
      console.log("Order created:", data.orderId);

      clearCart();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="checkout-page">
      <div className="checkout-layout">
        {/* LEFT */}
        <div className="checkout-left">
          <h1 className="checkout-title">Checkout</h1>
        </div>

        {/* RIGHT */}
        <div className="checkout-right">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <section className="checkout-section">
              <h2>Contact</h2>
              <input name="email" type="email" placeholder="EMAIL" required />
            </section>

            <section className="checkout-section">
              <h2>Delivery</h2>

              <div className="row two">
                <input
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="LAST NAME"
                  required
                />
              </div>

              <input
                name="address"
                type="text"
                placeholder="ADDRESS"
                required
              />

              <div className="row three">
                <input name="city" type="text" placeholder="CITY" required />
                <input name="state" type="text" placeholder="STATE" required />
                <input
                  name="pincode"
                  type="text"
                  placeholder="PINCODE"
                  required
                />
              </div>

              <input
                name="phone"
                type="number"
                placeholder="PHONE NUMBER"
                required
              />
            </section>

            <label className="save-info">
              <input type="checkbox" name="saveInfo" />
              Save this information for next order
            </label>

            {error && <p className="error">{error}</p>}

            <button className="pay-button" disabled={loading}>
              {loading ? "Processing…" : "Proceed to pay"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
