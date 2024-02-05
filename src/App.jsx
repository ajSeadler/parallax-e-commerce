import { Routes, Route } from "react-router-dom";

import "./style.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import Home from "./components/Home";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
