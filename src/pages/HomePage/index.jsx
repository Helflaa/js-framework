import React, { useEffect } from "react";
import { useProductStore } from "../../store/productsStore";
import { Link } from "react-router-dom";
import {ProductCard} from "../../components/ProductCard";

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
                   <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
