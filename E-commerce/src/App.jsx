import { useState } from "react";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import {Routes,Route} from "react-router-dom";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <Routes>
      <Route path="/" element={<Home setPage={setPage} />} />
      <Route path="/products" element={<Product setPage={setPage} />} />
      <Route path="/about" element={<About setPage={setPage} />} />
      <Route path="/contact" element={<Contact setPage={setPage} />} />
    </Routes>
    </>
  );
}

export default App;