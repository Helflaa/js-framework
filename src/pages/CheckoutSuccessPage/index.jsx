import React, {useEffect} from "react";
import {useCartStore} from "../../store/cartStore";
import {Link} from "react-router-dom";
import {buttonStyles} from "../../components/ButtonStyle";

export default function CheckoutSuccessPage() {
    const clearCart=useCartStore((state)=> state.clearCart);

    useEffect(()=>{
        clearCart();
        [clearCart];
    },)

    return(
        <>
         <div className="flex flex-col items-center justify-center h-screen">
             <h1 className="text-2xl font-bold text-green-600">Checkout Successful!</h1>
             <p className="text-lg mt-2">Thank you for your purchase.</p>
             <p className="text-gray-600">Your order has been placed successfully.</p>

             <Link to="/"
                    className={buttonStyles.primary}
             >
                 Back to browser
             </Link>
         </div>
        </>
    )
}