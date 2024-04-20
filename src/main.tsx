import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";
import About from "./pages/About.tsx";
import Blogs from "./pages/Blogs.tsx";
import Contacts from "./pages/Contacts.tsx";
import Doctors from "./pages/Doctors.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Services from "./pages/Services.tsx";

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: (
      <Layout>
        <Contacts />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/doctors",
    element: (
      <Layout>
        <Doctors />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/blogs",
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);
