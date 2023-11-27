import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Error404 from "../views/Error";
import PageProductDetail from "../views/Detail";
import PageProductCategory from "../views/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: "/category/:categoryId",
        element: <PageProductCategory />,
    },
    {
        path: "/item/:itemId",
        element: <PageProductDetail />,
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes