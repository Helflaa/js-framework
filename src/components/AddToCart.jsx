import React from "react";
import {useCartStore} from "../store/cartStore";
import {buttonStyles} from "./ButtonStyle";

export function AddToCart({product}) {
    const {
        cart,
        addToCart,
        removeFromCart,
        itemIncrement,
        itemDecrement,
    } = useCartStore();

    if (!product) {
        return <p className="text-red-500">Error: Product not found.</p>;
    }

    const cartItem = cart.find((item) => item.id === product.id);
    const isInCart = !!cartItem;

    return (
        <div>
            {isInCart ? (
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => itemDecrement(product.id)}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                    >

                        -
                    </button>

                    <span className="text-lg font-semibold">{cartItem.quantity}</span>

                    <button
                        onClick={() => itemIncrement(product.id)}
                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                    >
                        +

                    </button>

                    <button
                        className={buttonStyles.danger}
                        onClick={() => removeFromCart(product.id)}
                    >

                        remove
                    </button>
                </div>
            ) : (
                <button
                    className={buttonStyles.primary}
                    onClick={() => addToCart(product)}

                >
                    add to cart
                </button>

            )}
        </div>
    )

}