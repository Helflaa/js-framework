import {Link} from "react-router-dom";
import React from "react";
import {useCartStore} from "../store/cartStore";

export default function Header() {
    const cart=useCartStore()
    console.log ("header:",cart.cart.length);
    const cartItems=cart.cart.length
    return (
        <>
            <header className="bg-blue-400">
                <nav className= "w-full">
                    <ul className="flex justify-center gap-20 p-4">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="checkout">
                                Cart
                                <p>({cartItems})</p>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}