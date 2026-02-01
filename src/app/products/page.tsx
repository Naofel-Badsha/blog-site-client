
import { Product } from "../types/products";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div>
      <h1>All Products ={data.products.length}</h1>
      <div>
        {data.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
