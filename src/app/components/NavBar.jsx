import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className='flex justify-center'>
          <ul className='flex justify-around w-1/2'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/services"><li>Services</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/pricing"><li>Pricing</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/resources"><li>Resources</li></Link>
          </ul>
        </nav>
    </div>
  )
}
