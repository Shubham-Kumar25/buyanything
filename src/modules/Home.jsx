import { useState, useEffect } from "react";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import Products from "../components/Products";
import StatCard from "../components/StatCard";
import Loading from "../components/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col w-full text-center">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 title-font">
          PRODUCTS
        </h2>
        <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? <Products products={products} /> : <Loading />}
      <FeatureCard />
      <StatCard />
    </div>
  );
};

export default Home;
