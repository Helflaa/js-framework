import React, {useState} from "react";
import {useProductStore} from "../store/productsStore";

export function Search({setResults}) {
    const [input, setInput] =useState("");
    const {products}= useProductStore();

    const filterProducts = (value)=> {
        setInput(value);

        if (!value) {
            setResults(products);
            return;
        }

        const filteredResults=products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filteredResults);
    };
    return (
        <div className="relative w-full max-w-md">
            <input
                className="border rounded p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                type="text"
                placeholder="search products..."
                value= {input}
                onChange={(e)=> filterProducts(e.target.value)}
            />

        </div>
    ) ;
}



