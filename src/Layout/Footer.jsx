import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-blue-500 text-white text-center p-4 mt-6 shadow-md">
                <p className="text-lg font-semibold">© 2025 MyShop. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </footer>
        </>
    );
}
