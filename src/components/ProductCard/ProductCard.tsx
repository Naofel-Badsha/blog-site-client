import Link from "next/link";

interface SingleProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

interface ProductCardProps {
  product: SingleProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border p-4">
      <h1 className="text-xl">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <Link href={`/products/${product?.id}`}>
        <button className="text-white bg-amber-500 py-2 px-5 hover:bg-sky-600 cursor-pointer">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
