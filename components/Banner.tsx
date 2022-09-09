import React from 'react'

export default function Banner() {
  return (
    <div className='flex items-center justify-between max-w-7xl mx-auto
                    border-y border-black bg-yellow-400 py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'> <span className='underline decoration-black decoration-4'>Medium Pakistan</span> is a place for developers in Pakistan to read write and connect</h1>
            <h2>Its easy and free to post your thinking on any 
                topic and connect with millions of readers
            </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
    </div>
  )
}
