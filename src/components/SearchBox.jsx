'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search'
          className='mr-2 p-2 flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
        />
        <button disabled={!search} type="submit" className='text-amber-600 disabled:text-gray-400'>
          Search
        </button>
      </form>
    </div>
  );
}