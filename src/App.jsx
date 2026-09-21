import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from "./assets/Componant/Layout/Layout";
import Home from "./assets/Componant/Home/Home";
import Blog from "./assets/Componant/Blog/Blog";
import BlogDetails from "./assets/Componant/BlogDetails/BlogDetails";
import NotFound from "./assets/Componant/NotFound/NotFound";
import About from "./assets/Componant/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:id",
          element: <BlogDetails />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
