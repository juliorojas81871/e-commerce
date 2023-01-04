import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductDetail />} path="/product-detail" />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
