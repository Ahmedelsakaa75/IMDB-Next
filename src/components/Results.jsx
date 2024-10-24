import Image from 'next/image';
import React from 'react';
import Card from './Card';

export default function Results({ movies, results }) {
  
  const data = movies || results;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {data?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
