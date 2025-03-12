import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false); // ✅ State to control modal visibility

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset();
        setIsModalOpen(true); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-full px-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">📩 Get in Touch</h2>

                <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-semibold">Full Name</label>
                        <input
                            className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            id="name"
                            type="text"
                            {...register("name", {
                                required: "Required",
                                minLength: { value: 3, message: "At least 3 characters" },
                            })}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-semibold">Email Address</label>
                        <input
                            className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-gray-700 font-semibold">Subject</label>
                        <input
                            className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            id="subject"
                            type="text"
                            {...register("subject", {
                                required: "Required",
                                minLength: { value: 3, message: "At least 3 characters" },
                            })}
                        />
                        {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="body" className="text-gray-700 font-semibold">Your Message</label>
                        <textarea
                            className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition h-28 resize-none"
                            id="body"
                            {...register("body", {
                                required: "Required",
                                minLength: { value: 3, message: "At least 3 characters" },
                            })}
                        />
                        {errors.body && <span className="text-red-500 text-sm">{errors.body.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-green-600">🎉 Message Sent!</h2>
                        <p className="text-gray-600 mt-2">We will get back to you soon.</p>

                        <Link
                            to="/"
                            className="mt-4 inline-block px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
