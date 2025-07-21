import { Routes, Route, Navigate, Outlet } from "react-router";
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
import ProductsPage2 from "./admin/products2/product2";
import ProfilePage from "./admin/profile/admin-profile";
import { useAuth } from "./context/app.context";
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
const AdminRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;
  return <Outlet />;
};
function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="fish" element={<ProductsPage />} />
          <Route path="products" element={<ProductsPage2 />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
