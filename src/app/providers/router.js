import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/main";
import ErrorPage from "../../pages/Error";
import CityDetail from "../../pages/cityDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `city/:cityId`,
    element: <CityDetail />,
  },
]);
export const CustomRouter = () => {
  return <RouterProvider router={router} />;
};
