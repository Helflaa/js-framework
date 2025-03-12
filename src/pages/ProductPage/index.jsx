import React, { useEffect } from "react";
import { useProductStore } from "../../store/productsStore";
import { Link, useParams } from "react-router-dom";
import { buttonStyles } from "../../components/ButtonStyle";
import { AddToCart } from "../../components/AddToCart";

export default function ProductPage() {
    const { productId } = useParams();
    const {
        product,
        loading,
        error,
        fetchSingleProduct,
    } = useProductStore();

    useEffect(() => {
        if (productId) {
            fetchSingleProduct(productId);
        }
    }, [productId, fetchSingleProduct]);

    if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;
    if (!product) return <div className="text-center text-gray-500">No product found</div>;

    const {
        image,
        description,
        title,
        discountedPrice,
        price,
        reviews = []
    } = product;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
            <img className="w-full h-80 object-cover rounded-lg shadow-md" src={image.url} alt={title} />
            <p className="text-gray-700 mt-4">{description}</p>
            <p className="text-lg font-semibold mt-2">Price: <span className="text-gray-900">{price} kr</span></p>
            {discountedPrice !== price && (
                <p className="text-lg font-semibold text-red-500">Discounted price: {discountedPrice} kr</p>
            )}

            <div className="mt-4">
                <AddToCart product={product} />
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-3">Reviews</h2>
                {reviews.length > 0 ? (
                    <ul className="space-y-4">
                        {reviews.map(({ description, rating, username }, index) => (
                            <li key={index} className="border p-4 rounded-lg shadow-sm">
                                <p className="font-semibold">{username}:</p>
                                <p className="text-gray-700">{description}</p>
                                <p className="font-medium text-yellow-500">Rating: {rating} / 5</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No reviews yet</p>
                )}
            </div>

            <div className="mt-6 text-center">
                <Link className={`${buttonStyles.primary} px-6 py-2`} to="/">
                    Back to Browse
                </Link>
            </div>
        </div>
    );
}
