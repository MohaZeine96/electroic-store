import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Product" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
