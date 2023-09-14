import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="flex flex-col w-full text-center">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 title-font">
          PRODUCTS
        </h2>
        <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}
    </div>
  );
};

export default Products;
