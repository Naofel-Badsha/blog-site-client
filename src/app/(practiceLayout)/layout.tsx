import Link from 'next/link'
import React from 'react'

const PracticeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>i
        <nav className='flex gap-10 m-8'>
          <Link href="/development" className='hover:underline'>Development</Link>
          <Link href="/marketing" className='hover:underline'>Marketing</Link>
          <Link href="/marketing/setting" className='hover:underline'>Setting</Link>
          <Link href="/marmketing/setting/salse" className='hover:underline'>Selse</Link>
        </nav>
        {children}
    </div>
  )
}

export default PracticeLayout