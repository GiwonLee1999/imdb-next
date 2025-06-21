'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-md'>
      <input
        type="text"
        placeholder="Search movies..."
        className='w-full h-10 rounded-l-lg p-2 outline-none bg-white dark:bg-gray-800'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
        type="submit"
        className='bg-amber-500 text-white px-4 py-2 rounded-r-lg hover:bg-amber-600 transition-colors duration-300'
      >
        Search
      </button>
    </form>
  );
}