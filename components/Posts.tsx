import Link from 'next/link';
import React from 'react'
import {Post} from '../typing'
import {urlFor} from '../sanity'

interface Props {
    posts: [Post];
}

export default function Posts({posts}: Props) {
    console.log(posts)
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6'>
        {posts.map((post)=>(
            <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='group border border-lg overflow-hidden cursor-pointer'>
                    <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt=""/>
                    <div className='flex justify-between p-5'>
                        <div>
                            <p className='text-lg font-bold'>{post.title}</p>
                            <p className='text-xs'>{post.description} by {post.author.name}</p>
                        </div>
                        <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt=""/>
                    </div>
                   
                </div>
            </Link>
        ))}
    </div>
  )
}


