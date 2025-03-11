import React from "react";
import {useProductStore} from "../../store/productsStore";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
    const {products, loading, error, fetchProducts} = useProductStore();

    useEffect(() =>{
        fetchProducts();
    },[fetchProducts]);

    if(loading) {
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1 className="flex justify-center items-center font-bold p-2">Products</h1>
            <div className="grid gap -4 grid-cols-2">
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src= {product.image.url} alt= {product.title}/>
                        <p>{product.description}</p>
                        {product.discountedPrice !== product.price ? (
                            <div>
                                <p>Price: {product.discountedPrice} kr</p>
                                <p className="flex justify-center items-center font-bold p-2 text-red-600">
                                    {product.price - product.discountedPrice}kr discounted
                                </p>
                            </div>
                        ) : (
                            <p>Price: {product.price} kr</p>
                        )
                        }
                        <Link to={`/product/${product.id}`}
                        className="flex justify-center items-center rounded bg-blue-400 text-white"
                        >
                            view more

                        </Link>


                    </div>

                ))}
            </div>
        </>
    )

}
