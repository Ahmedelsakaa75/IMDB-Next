import Image from 'next/image';
import React from 'react';

export default function Results({ movies }) {

  
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
      {movies?.map((result) => (
        <div className="border border-amber-500 border-spacing-5" key={result.id}>
          {/* <Image width={100} height={100} className="" src={result.poster_path} alt={result.title} /> */}
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
