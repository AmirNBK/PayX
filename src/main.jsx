import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login.jsx";

const rootElement = document.getElementById("root")

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);