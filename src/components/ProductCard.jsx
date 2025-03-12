import React from "react";
import  {Link} from "react-router-dom";
import {buttonStyles} from "./ButtonStyle";

export function ProductCard({product}) {
    return (
        <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg text-center mb-2">{product.title}</h3>
            <img src={product.image.url} alt={product.title} className="w-full h-48 object-cover rounded-md mb-3" />
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            {product.discountedPrice !== product.price ? (
                <div className="text-center">
                    <p className="text-xl font-semibold text-green-600">{product.discountedPrice} kr</p>
                    <p className="text-red-500 font-bold">Save {Math.round(((product.price - product.discountedPrice) / product.price) * 100)} %</p>
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
    )
}