import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlogPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    cache: "no-store",
  });

  const post = await res.json();
  return (
    <div className="mb-10 max-w-3xl mx-auto">
      <h1 className="text-4xl text-center py-10">Single page</h1>
      <div className="shadow-md rounded-xl border">
        <div>
          {post.cover_image && (
            <Image
              src={post.cover_image}
              alt={post.title}
              width={500}
              height={500}
              className="rounded-t-xl w-full"
            />
          )}
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold py-3">{post.title}</h1>
          <p>{post.description}</p>
          <p>{post.readable_publish_date}</p>

          <Link href={"/blogs"}>
            <button className="bg-orange-500 text-white hover:bg-sky-500 py-2 px-4 mt-2 cursor-pointer">
              All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
