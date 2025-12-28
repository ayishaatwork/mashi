"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartIcon() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("mashi_cart");
      if (!stored) {
        setCount(0);
        return;
      }

      const cart = JSON.parse(stored);
      const total = cart.reduce(
        (sum: number, item: any) => sum + item.quantity,
        0
      );

      setCount(total);
    };

    updateCount();

    window.addEventListener("storage", updateCount);
    window.addEventListener("cartUpdated", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
    };
  }, []);

  return (
    <Link className="icon-button cart-icon" href="/cart">
      <img src="/icons/cart.svg" alt="Cart" className="nav-icon" />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </Link>
  );
}

