import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="shadow-md rounded-xl border">
      <div>
        {post.cover_image && (
          <Image
            src={post.cover_image}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-t-xl"
          />
        )}
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold py-3">{post.title}</h1>
        <p>{post.description}</p>
        <Link href={`/blogs/${post?.id}`}>
        <button className="bg-orange-500 text-white hover:bg-sky-500 py-2 px-4 mt-2 cursor-pointer">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
