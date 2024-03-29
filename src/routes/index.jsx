import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Error404 from "../views/Error";
import PageProductDetail from "../views/Detail";
import PageProductCategory from "../views/Category";
import LayOutPublic from "../layout/LayOutPublic";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import OrderPage from "../views/OrderPage";
import SearchPage from "../views/SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOutPublic />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:categoryId",
                element: <PageProductCategory />,
            },
            {
                path: "/product/:productId",
                element: <PageProductDetail />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/order/:orderId",
                element: <OrderPage />,
            },
            {
                path: "/search/:queryId",
                element: <SearchPage />,
            }
        ],
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes