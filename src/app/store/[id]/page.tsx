"use client";

import { getCart, saveCart } from "@/lib/cart";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

/* COLOR HEX MAP */
const COLOR_MAP: Record<string, string> = {
  lemongrass: "#555B29",
  terracotta: "#603E2F",
  gulaab: "#93483A",
};

/* TYPES */
type Product = {
  id: number;
  name: string;
  images: string[];
  sizes: string[];
  description: string;
  variants: GSMVariant[];
};

type GSMVariant = {
  gsm: string;
  price: number;
  colors: ColorVariant[];
};

type ColorVariant = {
  name: string;
  soldOut?: boolean;
};

export default function ProductPage() {
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<GSMVariant | null>(
    null
  );
  const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* FETCH PRODUCT */
  useEffect(() => {
    if (!rawId) return;

    fetch(`/api/products/${rawId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data: Product) => {
        if (!data.variants?.length) {
          throw new Error("Product has no variants");
        }

        const firstVariant = data.variants[0];
        const firstAvailableColor =
          firstVariant.colors.find((c) => !c.soldOut) ?? null;

        setProduct(data);
        setSelectedVariant(firstVariant);
        setSelectedColor(firstAvailableColor);
        setImageIndex(0);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [rawId]);

  if (loading) return <p>Loading product...</p>;
  if (error || !product || !selectedVariant) {
    return <p>{error ?? "Product unavailable"}</p>;
  }

  return (
    <main className="product-page">
      <div className="product-layout">
        {/* IMAGE */}
        <div
          className="product-media"
          onWheel={(e) => {
            if (e.deltaY > 0 && imageIndex < product.images.length - 1) {
              setImageIndex((i) => i + 1);
            } else if (e.deltaY < 0 && imageIndex > 0) {
              setImageIndex((i) => i - 1);
            }
          }}
        >
          <img
            src={product.images[imageIndex]}
            alt={product.name}
            className="product-image"
          />
        </div>

        {/* DETAILS */}
        <div className="product-details">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <span className="product-price">Rs.{selectedVariant.price}</span>
          </div>

          {/* COLORS */}
          <div className="product-meta-row">
            <div className="product-badges">
              {selectedVariant.colors.map((color) => {
                const key = color.name.toLowerCase().trim();
                const colorHex = COLOR_MAP[key] ?? "#000";

                const imageIdx = product.images.findIndex((img) =>
                  img.toLowerCase().includes(key)
                );

                return (
                  <div
                    key={color.name}
                    className={`color-swatch ${
                      selectedColor?.name === color.name ? "active" : ""
                    } ${color.soldOut ? "sold-out" : ""}`}
                    style={
                      { "--swatch-color": colorHex } as React.CSSProperties
                    }
                    onClick={() => {
                      if (color.soldOut) return;
                      setSelectedColor(color);
                      if (imageIdx >= 0) setImageIndex(imageIdx);
                    }}
                  >
                    <span className="color-text">{color.name}</span>
                    <span className="color-dot" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* GSM */}
          <div className="product-meta-row">
            <div className="product-badges">
              {product.variants.map((variant) => (
                <span
                  key={variant.gsm}
                  className={`product-badge ${
                    selectedVariant.gsm === variant.gsm ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedVariant(variant);
                    const firstAvailable =
                      variant.colors.find((c) => !c.soldOut) ?? null;
                    setSelectedColor(firstAvailable);
                  }}
                >
                  {variant.gsm}
                </span>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <div className="add-to-cart-row">
            <button
              className="add-to-cart-btn"
              disabled={!selectedColor}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* INFO */}
          <div className="product-meta-row">
            <h2 className="product-section-title">Item info</h2>
            <p className="product-info">
              <strong>Size:</strong> {product.sizes.join(", ")}
            </p>
            <p className="product-description">{product.description}</p>
          </div>
          {/* MOBILE COLOR SLABS */}
          <div className="mobile-color-slabs">
            <div className="color-slab green-slab"></div>
            <div className="color-slab gulaab-slab"></div>
            <div className="color-slab brown-slab"></div>
          </div>
        </div>
      </div>
    </main>
  );

  function handleAddToCart() {
    if (!product || !selectedVariant || !selectedColor) return;

    const cart = getCart();
    const size = product.sizes[0];

    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.gsm === selectedVariant.gsm &&
        item.color === selectedColor.name &&
        item.size === size
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: selectedVariant.price,
        image: product.images[imageIndex],
        gsm: selectedVariant.gsm,
        color: selectedColor.name,
        size,
        quantity: 1,
      });
    }

    saveCart(cart);
  }
}
