import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
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
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}