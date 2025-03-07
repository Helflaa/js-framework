import {StrictMode} from "react";
import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:  [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "product/:productId" ,
                element: <ProductPage/>
            },
            {
                path: "checkout",
                element: <CheckoutPage/>
            },
            {
                path: "checkout/success",
                element: <CheckoutSuccessPage/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            }
        ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
