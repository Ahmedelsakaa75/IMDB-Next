import Image from 'next/image';
import React from 'react';
import Card from './Card';

export default function Results({ movies }) {

  
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
      {movies?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
