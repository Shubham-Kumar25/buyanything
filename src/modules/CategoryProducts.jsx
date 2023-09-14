import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-full my-24 text-center">
      <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 uppercase title-font">
        {name}
      </h2>
      <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
        ALL PRODUCTS
      </h1>
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}
    </div>
  );
};

export default CategoryProducts;
