import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            const { id, title, price, category, image } = product;
            return (
              <Link
                to={`/products/${id}`}
                className="p-4 border border-opacity-50 rounded-lg shadow-lg cursor-pointer"
                key={id}
              >
                <a className="block overflow-hidden rounded">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-48"
                    src={image}
                  />
                </a>

                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                  <p className="mt-1 text-xs font-semibold">₹{price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
