import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router.config";

export const Router = () => {
  return <RouterProvider router={router} />;
};
