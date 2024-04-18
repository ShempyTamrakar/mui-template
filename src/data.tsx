import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LoginIcon from "@mui/icons-material/Login";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import Home from "./features/home";
import ProductsView from "./components/sections/products/view";
import BlogView from "./components/sections/blog/view";
import LoginView from "./components/sections/login";
import NotFound from "./components/shared/notFound";
import UserPage from "./features/user";
const data = [
  {
    id: 0,
    label: "Dashboard",
    icon: <DashboardCustomizeIcon />,
    component: <Home />,
    path: "/",
  },
  {
    id: 1,
    label: "User",
    icon: <PersonIcon />,
    component: <UserPage />,
    path: "/user",
  },
  {
    id: 2,
    label: "Product",
    icon: <AutoStoriesIcon />,
    component: <ProductsView />,
    path: "/product",
  },
  {
    id: 3,
    label: "Blog",
    icon: <ProductionQuantityLimitsIcon />,
    component: <BlogView />,
    path: "/blog",
  },
  {
    id: 4,
    label: "Login",
    icon: <LoginIcon />,
    component: <LoginView />,
    path: "/login",
  },
  {
    id: 5,
    label: "Not Found",
    icon: <SpeakerNotesOffIcon />,
    component: <NotFound />,
    path: "/not-found",
  },
];
export default data;
