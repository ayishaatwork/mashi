"use client";

import { useEffect, useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  async function startPayment() {
    setLoading(true);

    // 1️⃣ Create order
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2400 }), // INR
    });

    const order = await res.json();

    if (!order.id) {
      alert("Failed to create order");
      setLoading(false);
      return;
    }

    // 2️⃣ Open Razorpay Checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // PUBLIC KEY ONLY
      amount: order.amount,
      currency: "INR",
      name: "Mashistore",
      description: "Order Payment",
      order_id: order.id,

      handler: function (response: any) {
        // ⚠️ This does NOT mean payment is verified yet
        console.log("Payment success:", response);

        // Next step: send this to backend for verification
        fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed");
            }
          });
      },

      prefill: {
        name: "",
        email: "",
        contact: "",
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();

    setLoading(false);
  }

  return (
    <main className="payment-page">
      <h1>Payment</h1>

      <button
        className="checkout-btn"
        disabled={loading}
        onClick={startPayment}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </main>
  );
}
