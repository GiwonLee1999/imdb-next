import React from 'react'
import NarbarItem from './NarbarItem'
import SearchBox from './SearchBox'

export default function Navbar() {
  return (
    <div className='flex flex-col md:flex-row dark:bg-amber-600 bg-amber-100 p-4 items-center justify-between'>
      <div className='flex justify-center gap-4 mb-2 md:mb-0'>
        <NarbarItem title="Trending" param="fetchTrending" />
        <NarbarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <SearchBox />
    </div>
  )
}
