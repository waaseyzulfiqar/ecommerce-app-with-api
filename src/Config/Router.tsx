import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import Detail from "../views/Detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);


export const Route = () => {
    return <RouterProvider router={router} />
}