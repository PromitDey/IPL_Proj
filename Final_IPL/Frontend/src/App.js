import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Predict from "./components/Predict";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";

const AppLayout = () => {
  return (
    <div className="body-custom p-2 bg-cover">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

//React Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/predict",
        element: <Predict />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
