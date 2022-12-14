import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto '>
        <div  className='flex items-center space-x-5'>
            <Link href="/">
                <img className='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' alt='missing' />
            </Link>
            <div className='hidden md:inline-flex space-x-5 items-center'>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className='text-white bg-green-600 px-5 py-1 rounded-full cursor-pointer'>Follow</h3>
            </div>

        </div>
        <div className='flex space-x-5 items-center'>
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 border-green-600 rounded-full'>Get Started</h3>
        </div>
    </header>
  )
}
