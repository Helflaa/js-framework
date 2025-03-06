import React from "react";
import {Link} from "react-router-dom";

export default function CheckoutPage() {
    return(
        <>
            <h1>This is CheckoutPage</h1>
            <Link to="/checkout/success"
                  className="rounded bg-blue-400">

                Checkout
            </Link>
        </>
    )
}