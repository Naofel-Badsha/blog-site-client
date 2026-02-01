import { Product } from "@/app/types/products";
import Image from "next/image";

interface ProductsProps {
  params: Promise<{
    id: string;
  }>;
}

const SingleProductPage = async ({ params }: ProductsProps) => {
   const { id } = await params;
  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Single Product Page</h1>

      <h2 className="text-xl">{product.title}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      {/* <Image src={product. images} alt="product images" width={500} height={500}></Image> */}
      <p>{product.dimensions.width}</p>
      <p>{product.tags[0]}</p>
    </div>
  );
};

export default SingleProductPage;

