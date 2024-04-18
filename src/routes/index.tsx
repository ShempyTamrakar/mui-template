import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogView from "../components/sections/blog/view";
import ProductsView from "../components/sections/products/view";
import LoginView from "../components/sections/login";
import Home from "../features/home";
import User from "../features/user";
import NotFound from "../components/shared/notFound";
import MiniDrawer from "../components/shared/miniDrawer";

function Routing() {
  return (
    <BrowserRouter>
      <MiniDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<ProductsView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
