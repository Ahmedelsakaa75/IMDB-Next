import Image from 'next/image';
import React from 'react';

export default function Results({ movies }) {

  console.log({ movies });
  
  return (
    <div className="flex gap-4 flex-wrap">
      {movies?.map((result) => (
        <div className="border border-amber-500 border-spacing-5" key={result.id}>
          <Image width={100} height={100} className="" src={result.poster_path} alt={result.title} />
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
