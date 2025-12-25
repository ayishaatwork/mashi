import Link from "next/link";
import prisma from "@/lib/prisma";

/**
 * This page runs on the server.
 * It can safely talk directly to Supabase via Prisma.
 * No fetch, no API routes, no env URL needed.
 */

type Product = {
  id: number;
  name: string;
};

export default async function StorePage() {
  const products: Product[] = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

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
