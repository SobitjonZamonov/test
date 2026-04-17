import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home";
import AuthLayout from "../layout/auth-layout";
import UsersPage from "../../pages/users";
import { AppLayout } from "../layout/app-loyout";


export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/users",
                element: <UsersPage />
            }
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <div>Login page</div>,
            },
        ],
    },
]);