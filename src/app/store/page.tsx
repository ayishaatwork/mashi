import Link from "next/link";
import { headers } from "next/headers";

type Product = {
  id: number;
  name: string;
};

async function getProducts(): Promise<Product[]> {
  const headersList = headers();
  const host = headersList.get("host");

  if (!host) {
    throw new Error("Host header not found");
  }

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/products`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function StorePage() {
  const products = await getProducts();

  return (
    <section className="store-page">
      <div className="product-row">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/store/${product.id}`}
            className="product-item"
          >
            <h2 className="product-name">{product.name}</h2>
            <img
              src={`/images/${product.name
                .toLowerCase()
                .replace(/\s+/g, "")}.png`}
              alt={product.name}
              className="product-thumb"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
