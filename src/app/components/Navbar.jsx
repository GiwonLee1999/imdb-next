import React from 'react'
import NarbarItem from './NarbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4 hover:dark:bg-amber-500 hover:bg-amber-200 transition-all duration-300'>
      <NarbarItem title="Trending" param="fetchTrending" />
      <NarbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
