import { Routes, Route } from "react-router";
import MainLayout from "./components/MainLayout/MainLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Carousel from "./components/Carousel/Carousel";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductList/ProductDetail/ProductDetail";
import BlogList from "./components/BlogList/BlogList";
import BlogDetail from "./components/BlogList/BlogDetail/BlogDetail";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
