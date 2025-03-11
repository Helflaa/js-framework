import React from "react";
import {useCartStore} from "../../store/cartStore";
import {buttonStyles} from "../../components/ButtonStyle";
import {Link} from "react-router-dom";

export default function CheckoutPage() {
    const {
        cart,
        itemIncrement,
        itemDecrement,
        removeFromCart,
    } = useCartStore(); // ✅ Fix destructuring
    const getTotalPrice = useCartStore(( state ) => state.getTotalPrice);

    return (
        <div className="p-4 border">
            <h2 className="text-lg font-bold">Shopping Cart</h2>
            {cart.length > 0 ? (
                <>
                    <div className="grid grid-cols-3 gap-4">
                        {cart.map(( item ) => {
                            // ✅ Destructure inside map()
                            const {
                                id,
                                title,
                                discountedPrice,
                                price,
                                quantity,
                                image,
                            } = item;

                            return (
                                <div key={id}
                                     className="border p-2 my-2 flex flex-col items-center justify-center w-40"
                                >
                                    <p><strong>{title}</strong></p>
                                    <img src={image.url} alt={title} className="h-20 w-20 object-cover"/>
                                    <div className="flex justify-center">
                                        <p>{discountedPrice || price} kr x</p>
                                        <p>{quantity}</p>
                                    </div>
                                    <p className="font-bold">
                                        Total: {(quantity * (discountedPrice || price)).toFixed(2)} kr
                                    </p>

                                    {/* ✅ Implement Increment & Decrement */}
                                    <div className="flex items-center gap-2 flex-col">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => itemDecrement(id)} // ✅ Fix `product.id` to `id`
                                                className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                                            >
                                                -
                                            </button>

                                            <span
                                                className="text-lg font-semibold">{quantity}
                                            </span>

                                            <button
                                                onClick={() => itemIncrement(id)} // ✅ Fix `product.id` to `id`
                                                className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className={buttonStyles.danger}
                                            onClick={() => removeFromCart(id)} // ✅ Fix `product.id` to `id`
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                    <h3 className="font-bold mt-4">
                        Grand Total: {getTotalPrice().toFixed(2)} kr
                    </h3>
                    <Link
                        className={buttonStyles.primary}
                        to="/">
                        Back to Browse
                    </Link>
                    <Link
                        className={buttonStyles.primary}
                        to="/checkout/success">
                        Go to checkout
                    </Link>
                </>
            ) : (
                <div>

                    <p>Your cart is empty.</p>
                    <Link
                        className={buttonStyles.primary}
                        to="/">
                        Back to Browse
                    </Link>
                </div>
            )}
        </div>
    );
}
