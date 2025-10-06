import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from "./Components/Offers.jsx";
import SignIn from "./Components/SignIn.jsx";
import Help from "./Components/Help.jsx";
import Body from "./Components/Body.jsx";
import Error from "./Components/Error.jsx";
import RestaurantDetail from "./Components/RestaurantDetail.jsx";
import Clock from "./Components/Clock.jsx";
import Cart from "./Components/Cart.jsx";
import Login from "./Components/Login.jsx";
// create browser router
// it takes array of object
// each object takes rep -> route {} element (component) path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/offers", element: <Offers /> },
      { path: "/help", element: <Help /> },
      { path: "/signin", element: <SignIn /> },
      // dynamic routing , adding a colon make it dynamic, idd is a placeholder, it can be anything
      //while the whole thing is in quotes, the router is built to parse that string and look for special symbols like :, making parts of it dynamic.
      { path: "/restaurant/:idd", element: <RestaurantDetail /> },
      { path: "/clock", element: <Clock /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login/> },

      // { path: "/seach", element: <Search/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}> </RouterProvider> // start with routerProvider tag and set set router to appRouter
);
