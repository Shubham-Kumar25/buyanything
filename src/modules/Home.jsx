import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import StatCard from "../components/StatCard";
import Loading from "../components/Loading";
import Categories from "../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <Categories />
      <div className="flex flex-col w-full text-center">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 title-font">
          PRODUCTS
        </h2>
        <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}

      <StatCard />
    </div>
  );
};

export default Home;
