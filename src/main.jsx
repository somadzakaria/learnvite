import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/product.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProduk from "./pages/detaiProduk.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavbarPage from "./components/Layouts/Navbar.jsx";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

const rouer = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="item-center">
        <h1>HELlo</h1>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProduk />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <NavbarPage /> */}

      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={rouer}></RouterProvider>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
