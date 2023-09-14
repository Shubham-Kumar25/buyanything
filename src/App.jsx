import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
