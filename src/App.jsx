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
import UsersPage from "./admin/users/users";
import OrdersPage from "./admin/orders/orders";
import DashboardLayout from "./admin/dashboard-layout";
import Dashboard from "./admin/dashboard-content";
import CategoriesPage from "./admin/categories/categories";
import ProductsPage from "./admin/products/products";
import ProfilePage from "./admin/profile/admin-profile";
import BlogAdmin from "./admin/blog/blogAdmin";

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
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Dashboard/>} />
        <Route path="users" element={<UsersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="blog" element={<BlogAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
