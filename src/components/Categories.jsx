import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import Loading from "./Loading";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
      console.log("data is", data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <FeatureCard cards={categories} />
    </div>
  );
};

export default Categories;
