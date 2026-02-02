import BlogCard from '@/components/BlogCard/BlogCard'
import React from 'react'

const BlogsPage = async () => {
  const res = await fetch("https://dev.to/api/articles", {
  cache: "force-cache",
});
  const posts = await res.json();


  return (
    <div className='container mx-auto py-10'>
      <h1 className='mb-10 text-4xl text-center'> All Bolog data </h1>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          posts.map(post => (
            <BlogCard key={post.id} post={post}></BlogCard>
          ))
        }
      </div>
    </div>
  )
}

export default BlogsPage