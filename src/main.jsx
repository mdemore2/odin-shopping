import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/home'
import Cart from './components/cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />
  }
]);

//    <RouterProvider router={router} />


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
