import React from "react";
import { useCartStore } from "../../store/cartStore";
import { buttonStyles } from "../../components/ButtonStyle";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
    const {
        cart,
        itemIncrement,
        itemDecrement,
        removeFromCart,
    } = useCartStore();
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>
            {cart.length > 0 ? (
                <>
                    <div className="grid md:grid-cols-3 gap-6">
                        {cart.map((item) => {
                            const {
                                id,
                                title,
                                discountedPrice,
                                price,
                                quantity,
                                image,
                            } = item;

                            return (
                                <div key={id} className="border rounded-lg p-4 flex flex-col items-center shadow-md">
                                    <p className="font-semibold text-lg">{title}</p>
                                    <img src={image.url} alt={title} className="h-24 w-24 object-cover rounded-md my-2" />
                                    <p className="text-gray-700">{discountedPrice || price} kr x {quantity}</p>
                                    <p className="font-bold text-xl text-green-600 mt-2">
                                        Total: {(quantity * (discountedPrice || price)).toFixed(2)} kr
                                    </p>

                                    <div className="flex items-center gap-2 my-2">
                                        <button
                                            onClick={() => itemDecrement(id)}
                                            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        >
                                            -
                                        </button>

                                        <span className="text-lg font-semibold">{quantity}</span>

                                        <button
                                            onClick={() => itemIncrement(id)}
                                            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className={`${buttonStyles.danger} mt-2`}
                                        onClick={() => removeFromCart(id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <h3 className="text-xl font-bold text-right mt-6">Grand Total: {getTotalPrice().toFixed(2)} kr</h3>
                    <div className="flex justify-between mt-6">
                        <Link className={`${buttonStyles.primary} px-6 py-2`} to="/">
                            Back to Browse
                        </Link>
                        <Link className={`${buttonStyles.primary} px-6 py-2`} to="/checkout/success">
                            Go to checkout
                        </Link>
                    </div>
                </>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-600 text-lg">Your cart is empty.</p>
                    <Link className={`${buttonStyles.primary} mt-4 inline-block px-6 py-2`} to="/">
                        Back to Browse
                    </Link>
                </div>
            )}
        </div>
    );
}