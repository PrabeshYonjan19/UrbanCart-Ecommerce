import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductList from "./components/ProductList";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import QuickView from "./components/QuickView";
import Toast from "./components/Toast";

import { products, categories } from "./data/products";

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notice, setNotice] = useState("");

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  // Cart count
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  // Cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Add to cart
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, qty: 1 }];
    });

    setNotice(`${product.name} added to cart`);

    setTimeout(() => {
      setNotice("");
    }, 1800);
  }

  // Change quantity
  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + amount }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Hero />

      <Features />

      <ProductList
        products={filteredProducts}
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        onAdd={addToCart}
        onQuickView={setSelectedProduct}
      />

      <Deals />

      <Footer />

      <Cart
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        changeQuantity={changeQuantity}
      />

      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAdd={addToCart}
      />

      <Toast message={notice} />
    </>
  );
}