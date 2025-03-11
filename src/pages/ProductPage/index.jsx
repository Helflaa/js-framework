import React, {useEffect} from "react";
import {useProductStore} from "../../store/productsStore";
import {Link, useParams} from "react-router-dom";
import {buttonStyles} from "../../components/ButtonStyle";
import {AddToCart} from "../../components/AddToCart";



export default function productPage() {
    const {productId} =useParams();
    const {
        product,
        loading,
        error,
        fetchSingleProduct,

    } = useProductStore();

    useEffect(() => {
        if (productId){
            fetchSingleProduct(productId);
        }
    }, [productId, fetchSingleProduct]);

    if (loading) return <div>loading...</div>;
    if (error) return <div>Error:{error}</div>;
    if (!product) return <div>No product found</div>;

    const {
        image,
        description,
        title,
        discountedPrice,
        price,
        reviews = []
    }=product;

    return(
        <>
           <div>
               <h1>{title}</h1>
               <img src={image.url} alt={title}/>
               <p>{description}</p>
               <p>Price: {price} kr</p>
               {discountedPrice !== price && (
                   <p>Discounted price {discountedPrice} kr</p>
               )}
           </div>

            <AddToCart product={product}/>



           <div>
               <h2>Reviews</h2>
               {reviews.length > 0 ? (
                   <ul>
                       {reviews.map(({
                               description,
                               rating,
                               username
                           }, index ) =>(
                               <li key={index} className="border p-2 my-2">
                                   <p><strong>{username}</strong>:</p>
                                   <p>{}</p>
                                   <p>Rating: {rating} /5</p>
                               </li>
                           )
                       )}
                   </ul>

               ) : (
                   <p>No reviews yet</p>
               )}
           </div>

            <div>
                <Link className={buttonStyles.primary} to="/">
                    Back to browse
                </Link>
            </div>

        </>
    );
}