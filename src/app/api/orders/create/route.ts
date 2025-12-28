import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      firstName,
      lastName,
      phone,
      address,
      cart,
    } = body;

    if (!email || !firstName || !lastName || !phone || !address || !cart?.length) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    // 1️⃣ Fetch products from DB (authoritative pricing)
    const productIds = cart.map((item: any) => item.id);

    const products = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
      include: {
        variants: {
          include: {
            colors: true,
          },
        },
      },
    });

    if (products.length !== cart.length) {
      return NextResponse.json(
        { error: "Some products no longer exist" },
        { status: 400 }
      );
    }

    // 2️⃣ Calculate totals (IN PAISE)
    let subtotal = 0;

    const orderItems = cart.map((cartItem: any) => {
      const product = products.find((p) => p.id === cartItem.id);
      if (!product) throw new Error("Product not found");

      const variant = product.variants.find(
        (v) => v.gsm === cartItem.gsm
      );
      if (!variant) throw new Error("Variant not found");

      const unitPrice = variant.price; // already in paise
      const totalPrice = unitPrice * cartItem.quantity;

      subtotal += totalPrice;

      return {
        productId: product.id,
        productName: product.name,
        image: product.images[0],
        gsm: cartItem.gsm,
        color: cartItem.color,
        size: cartItem.size,
        unitPrice,
        quantity: cartItem.quantity,
        totalPrice,
      };
    });

    const shippingFee = 0; // adjust later
    const totalAmount = subtotal + shippingFee;

    // 3️⃣ Create Order + OrderItems
    const order = await prisma.order.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        addressLine1: address.line1,
        city: address.city,
        state: address.state,
        postalCode: address.pincode,
        subtotal,
        shippingFee,
        totalAmount,
        status: "PENDING",
        items: {
          create: orderItems,
        },
      },
    });

    return NextResponse.json({
      orderId: order.id,
      totalAmount: order.totalAmount,
    });
  } catch (err: any) {
    console.error("CREATE ORDER ERROR:", err);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
