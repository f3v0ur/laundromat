import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
import  Account from "./pages/Account";
import { Footer, Header } from "./components";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 500,
    })
  }, [])

  function PageOutlet() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <PageOutlet />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
      errorElement: (
        <>
          <Header />
          <Error />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}
