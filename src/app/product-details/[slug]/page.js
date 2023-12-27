import { PrismaClient } from "@prisma/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";

async function getData(id) {
  const prisma = new PrismaClient();
  let Details = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  return Details;
}

async function page({ params }) {
  let id = params.slug;
  let data = await getData(id);
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Blog Details */}
      <ProductDetails data={data} />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default page;
