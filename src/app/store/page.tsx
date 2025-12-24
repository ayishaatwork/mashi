import Link from "next/link";

type Product = {
  id: number;
  name: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      cache: "no-store", // we’ll improve this next
    }
  );

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

