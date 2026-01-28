"use client";

import Link from "next/link";
import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <div className="bg-gray-100 p-8 rounded-full mb-8 animate-pulse">
                <RiEmotionSadLine className="text-8xl text-gray-400" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Page Not Found
            </h2>
            <p className="text-gray-500 max-w-md mb-10 text-lg">
                Oops! The page you are looking for doesn't exist. It might have been
                moved or deleted.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-[#095d56] transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
            >
                Back to Home
            </Link>
        </div>
    );
}
