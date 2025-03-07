import React from "react";
import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,


    fetchProducts: async () => {
        set({
            loading: true,
            error: null,
        });
        try {
            const response = await fetch("https://v2.api.noroff.dev/online-shop");
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            set({products: data.data, loading: false});
        } catch (err) {
            set({
                loading: false,
                error: err instanceof Error ? err.message : null,
            });

        }
    },
    fetchSingleProduct: async (productId) => {
        set({
            loading: true,
            error: null
        });
        try {
            const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            set({product: data.data, loading:false});
        } catch (err) {
            set({
                loading: false,
                error: err instanceof Error ? err.message : null,
            })
        }
    }

}))