import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  if (carts.length === 0) {
    return <div>Cart is Empty</div>;
  }

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = carts
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex my-10 shadow-md">
        <div className="w-3/4 px-10 py-10 bg-white">
          <div className="flex justify-between pb-8 border-b">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold">{carts.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">
              Product Details
            </h3>
            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
              Quantity
            </h3>
            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
              Price
            </h3>
            <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">
              Total
            </h3>
          </div>
          {carts.map((cart) => {
            return (
              <div
                className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100"
                key={cart.id}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cart.image} alt={cart.title} />
                  </div>
                  <div className="flex flex-col justify-between flex-grow ml-4">
                    <span className="text-sm font-bold">{cart.title}</span>
                    <span className="text-xs text-red-500 capitalize">
                      {cart.category}
                    </span>
                    <div
                      onClick={() => removeProduct(cart.id)}
                      className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-red-500"
                    >
                      Remove
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    onClick={() => handleDec(cart.id)}
                    className="w-3 text-gray-600 cursor-pointer fill-current"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0-32-14.33-32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="w-8 mx-2 text-center border"
                    type="text"
                    value={cart.quantity}
                  />

                  <svg
                    onClick={() => handleInc(cart.id)}
                    className="w-3 text-gray-600 cursor-pointer fill-current"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-sm font-semibold text-center">
                  ${cart.price}
                </span>
                <span className="w-1/5 text-sm font-semibold text-center">
                  ${(cart.price * cart.quantity).toFixed(2)}
                </span>
              </div>
            );
          })}

          <Link
            to="/products"
            className="flex mt-10 text-sm font-semibold text-indigo-600"
          >
            <svg
              className="w-4 mr-2 text-indigo-600 fill-current"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="pb-8 text-2xl font-semibold border-b">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="text-sm font-semibold uppercase">
              Items {carts.length}
            </span>
            <span className="text-sm font-semibold">${total.toFixed(2)}</span>
          </div>
          <div>
            <label className="inline-block mb-3 text-sm font-medium uppercase">
              Shipping
            </label>
            <select className="block w-full p-2 text-sm text-gray-600">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="inline-block mb-3 text-sm font-semibold uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="w-full p-2 text-sm"
            />
          </div>
          <button className="px-5 py-2 text-sm text-white uppercase bg-purple-500 hover:bg-purple-800">
            Apply
          </button>
          <div className="mt-8 border-t">
            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-purple-500 hover:bg-purple-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
