import React, {useEffect, useState} from "react";
import {useProductStore} from "../../store/productsStore";
import {Link} from "react-router-dom";
import {ProductCard} from "../../components/ProductCard";
import {Search} from "../../components/Search";

export default function HomePage() {
    const {products, loading, error, fetchProducts} = useProductStore();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        setSearchResults(products);
    }, [products]);

    if (loading) {
        return <div className="text-center text-lg font-semibold">Loading...</div>;
    }
    if (error) {
        return <div className="text-center text-red-500 font-semibold">Error: {error.message}</div>;
    }

    return (
        <>
            <div className="flex w-full justify-center m-4">
                <Search setResults={setSearchResults}/>
            </div>

            <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No results found.
                        </div>
                    )}
                </div>
            </div>
            </>
            );
            }
