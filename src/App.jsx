import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ProductsPage,
  ProductDetailPage,
  BlogPage,
  BlogDetailPage,
  CartPage,
  CheckoutPage,
  CheckoutSuccessPage,
} from "./pages";
import { CartDrawer } from "./components/Cart";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
        </Route>
      </Routes>
      <CartDrawer />
    </>
  );
}

export default App;
