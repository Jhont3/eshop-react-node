import { ProductCard } from "../components";
import { products } from "../data/products";

export const Shopping = () => {
  return (
    
    <div className="grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard img={product.img} title={product.title} key={product.id} />
      ))}
    </div>
  );
};

export default Shopping;
