import Product from "@/components/Product";
import { PrismaClient } from "@prisma/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

async function getData() {
  const prisma = new PrismaClient();
  let products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return products;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Blog */}
      <Product data={data} />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
