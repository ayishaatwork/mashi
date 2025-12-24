import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  /* =========================
     COPTIC BOUND
  ========================= */
  await prisma.product.create({
    data: {
      name: "Coptic Bound",
      images: [
        "/products/copticbound/main.png",
        "/products/copticbound/lemongrass.png",
        "/products/copticbound/terracotta.png",
        "/products/copticbound/gulaab.png",
      ],
      sizes: ["6 INCH X 8 INCH"],
      description:
        "Hand-stitched with the traditional Coptic binding technique, this sketchbook opens completely flat — perfect for wide spreads and seamless sketching. The exposed spine highlights its handcrafted detail, while the sturdy pages make it ideal for drawing, journaling, or mixed media work. Each book is bound with care, designed to last and to grow beautifully with your creative process.",
      variants: {
        create: [
          {
            gsm: "180 GSM",
            price: 600,
            colors: {
              create: [
                { name: "Lemongrass" },
                { name: "Terracotta" },
                { name: "Gulaab" },
              ],
            },
          },
          {
            gsm: "90 GSM",
            price: 400,
            colors: {
              create: [
                { name: "Lemongrass" },
                { name: "Terracotta", soldOut: true },
              ],
            },
          },
        ],
      },
    },
  });

  /* =========================
     CASE BOUND
  ========================= */
  await prisma.product.create({
    data: {
      name: "Case Bound",
      images: [
        "/products/casebound/main.png",
        "/products/casebound/lemongrass.png",
        "/products/casebound/terracotta.png",
        "/products/casebound/gulaab.png",
        "/products/casebound/book1.png",
        "/products/casebound/book2.png",
        "/products/casebound/book3.png",
        "/products/casebound/book4.png",
      ],
      sizes: ["6 INCH X 8 INCH"],
      description:
        "Crafted with a classic hardbound cover, this sketchbook is built to last. The case binding keeps your pages secure while giving the book a sturdy, timeless form. It opens neatly and stays flat enough for comfortable sketching and writing. Durable on the outside and smooth on the inside — it’s made to travel with you and hold your ideas for years to come.",

      variants: {
        create: [
          {
            gsm: "120 GSM",
            price: 450,
            colors: {
              create: [
                { name: "Lemongrass" },
                { name: "Terracotta" },
                { name: "Gulaab" },
              ],
            },
          },
        ],
      },
    },
  });

  /* =========================
     FIELD BOOK
  ========================= */
  await prisma.product.create({
    data: {
      name: "Field Book",
      images: ["/products/fieldbook/main.png",
               "/products/fieldbook/orange.png",
               "/products/fieldbook/black.png",                     
               "/products/fieldbook/green.png",                     
               "/products/fieldbook/yellow.png",                     
               "/products/fieldbook/bundle.png",                     
      ],
      sizes: ["4 INCH X 6 INCH"],
      description:
        "Our pocket size Field Note bundle is a set of four vibrant, everyday notebooks designed for quick ideas, sketches, and thoughts on the go. Each book comes in a bright, cheerful colour, making the set both functional and fun to carry. Compact, lightweight, and easy to slip into any pocket or bag, they are perfect for anyone who loves jotting things down wherever inspiration strikes.",
      variants: {
        create: [
          {
            gsm: "120 GSM",
            price: 400,
            colors: {
              create: [{ name: "Navy" }],
            },
          },
        ],
      },
    },
  });

  /* =========================
     ROUGH PAD
  ========================= */
  await prisma.product.create({
    data: {
      name: "Rough Pad",
      images: ["/products/roughpad/main.png",
               "/products/roughpad/book1.png",          
               "/products/roughpad/book2.png",          
               "/products/roughpad/book3.png",          
               "/products/roughpad/book4.png",          
               "/products/roughpad/book5.png",          
      ],
      sizes: ["21.5CM X 28CM", "28CM X 43CM"],
      description:
        "Crafted with a classic hardbound cover, this sketchbook is built to last. The case binding keeps your pages secure while giving the book a sturdy, timeless form. It opens neatly and stays flat enough for comfortable sketching and writing. Durable on the outside and smooth on the inside — it’s made to travel with you and hold your ideas for years to come.",

      variants: {
        create: [
          {
            gsm: "50 GSM",
            price: 200,
            colors: {
              create: [
                       { name: "COMPACT A3" },
                       { name: "COMPACT A3" },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("✅ Database seeded with variant-based products");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
