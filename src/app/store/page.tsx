import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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
