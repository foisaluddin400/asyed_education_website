"use client";
import { useGetSingleBlogQuery } from "@/redux/Api/blogApi";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { RiArrowRightWideLine, RiCalendarLine } from "react-icons/ri";
import Link from "next/link";

const BlogDetails = () => {
    const params = useParams();
    const { id } = params;

    const { data: blog, isLoading } = useGetSingleBlogQuery(id);
    const singleBlogDetails = blog?.data;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center pin h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div>
           

            {/* Content Section */}
            <section className="py-16 md:px-4 px-3 container mx-auto">
                <div className="bg-white rounded-xl overflow-hidden">
                    {/* Blog Featured Image */}
                    {singleBlogDetails?.image && (
                        <div className="relative w-full h-[300px] md:h-[80vh] mb-8 rounded-xl overflow-hidden shadow-sm">
                            <Image
                                src={singleBlogDetails?.image.replace(/\\/g, "/")}
                                alt="Blog image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Meta Data */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-100">

                        {singleBlogDetails?.createdAt && (
                            <div className="flex items-center gap-2">
                                <RiCalendarLine className="text-primary text-xl" />
                                <span className="font-medium">
                                    {new Date(singleBlogDetails.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Blog Content */}
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
                        dangerouslySetInnerHTML={{ __html: singleBlogDetails?.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            <RiArrowRightWideLine className="rotate-180" /> Back to Blogs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;