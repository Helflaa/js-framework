import { Link } from "react-router-dom";
import React from "react";
import { useCartStore } from "../store/cartStore";

export default function Header() {
    const cart = useCartStore();
    const cartItems = cart.cart.length;

    return (
        <header className="bg-blue-500 shadow-md">
            <nav className="w-full">
                <ul className="flex justify-center gap-12 p-4 text-white font-semibold text-lg">
                    <li className="hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="relative">
                        <Link to="/checkout" className="flex items-center gap-2  hover:underline">
                            Cart
                            <span className="bg-red-500 text-white text-xs font-light px-1 py-0 rounded-full -translate-y-2 -translate-x-2">
                                {cartItems}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
