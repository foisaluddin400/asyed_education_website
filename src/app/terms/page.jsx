"use client"
import React from 'react'
import { RiFileTextLine } from "react-icons/ri";
import { useGetTermsAndConditionsQuery } from '@/redux/Api/legalApi'

const TermsConditions = () => {
    const { data: termsConditionsData, isLoading } = useGetTermsAndConditionsQuery();
    console.log("termsConditionsData===>", termsConditionsData?.data?.content)
    const termsConditionsContent = termsConditionsData?.data?.content;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center pin h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }
    return (
        <div className='py-16 md:px-4 px-3 container mx-auto'>
            {!isLoading && !termsConditionsContent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="bg-gray-100 p-6 rounded-full mb-6">
                        <RiFileTextLine className="text-6xl text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms Unavailable</h2>
                    <p className="text-gray-500 max-w-md">
                        The Terms and Conditions are currently being updated. Please check back soon.
                    </p>
                </div>
            ) : (
                <article
                    className="prose prose-lg max-w-none 
            prose-headings:text-gray-900 prose-headings:font-bold 
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-strong:text-gray-900
            prose-ul:list-disc prose-ul:pl-5
            prose-ol:list-decimal prose-ol:pl-5
            "
                    dangerouslySetInnerHTML={{ __html: termsConditionsContent }}
                />
            )}
        </div>
    )
}

export default TermsConditions