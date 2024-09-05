import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "product/:productId",
    element: <Product />,
  },
  {
    path: "Bin",
    element: <Bin />,
  },
]);
