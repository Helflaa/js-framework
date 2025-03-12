import React, { useEffect } from "react";
import { useProductStore } from "../../store/productsStore";
import { Link } from "react-router-dom";

export default function HomePage() {
    const { products, loading, error, fetchProducts } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) {
        return <div className="text-center text-lg font-semibold">Loading...</div>;
    }
    if (error) {
        return <div className="text-center text-red-500 font-semibold">Error: {error.message}</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="font-semibold text-lg text-center mb-2">{product.title}</h3>
                        <img src={product.image.url} alt={product.title} className="w-full h-48 object-cover rounded-md mb-3" />
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        {product.discountedPrice !== product.price ? (
                            <div className="text-center">
                                <p className="text-xl font-semibold text-green-600">{product.discountedPrice} kr</p>
                                <p className="text-red-500 font-bold">Save {product.price - product.discountedPrice} kr</p>
                            </div>
                        ) : (
                            <p className="text-xl font-semibold text-center">Price: {product.price} kr</p>
                        )}
                        <Link
                            to={`/product/${product.id}`}
                            className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            View More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
