import Link from "next/link";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Product = {
  id: number;
  name: string;
};

function imageFromName(name: string) {
  return `/images/${name.toLowerCase().replace(/\s+/g, "")}.png`;
}

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
    <>
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
              src={imageFromName(product.name)}
              alt={product.name}
              className="product-thumb"
            />
            
          </Link>
        ))}
      </div>
    </section>
    <footer className="site-footer page-footer">
        <div className="footer-grid">
          <Link href="/">Home</Link>
          <Link href="/shipping-and-returns">Shipping and returns</Link>

          <Link href="/store">Store</Link>
          <Link href="/payment-information">Payment Information</Link>

          <Link href="/collective">Collective</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>

          <Link href="/contact">Contact us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-copyright">© 2025 Mashi, Inc.</div>
      </footer>
    </>
  );
}



