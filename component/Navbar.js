import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-purple-900 h-16 px-5 flex justify-between items-center text-white p-7'>

      <div className="logo font-bold text-3xl">
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='flex justify-between gap-6'>
      <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>GitHub</button></Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar