import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuThumbsUp } from 'react-icons/lu';

export default function Card({ movie }) {
  return (
    <div className="group cursor-pointer p-4 hover:shadow-lg rounded-md border transition-all duration-300 transform hover:scale-105 
      dark:bg-slate-800 dark:border-slate-700 bg-white border-gray-300 max-w-xs">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative h-64 w-full mb-2 overflow-hidden rounded-md">
          <Image
            placeholder="blur"
            blurDataURL="/spinner.svg"
            className="rounded-lg group-hover:opacity-90 transition-opacity duration-200"
            width={500}
            height={750}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h2 className="text-md font-semibold mb-1 truncate 
          dark:text-white text-black">
          {movie.original_title || movie.name}
        </h2>

        <p className="line-clamp-2 text-sm mb-2 
          dark:text-gray-400 text-gray-700">
          {movie.overview}
        </p>

        <div className="flex justify-between items-center text-sm">
          <p className="text-xs flex flex-col">
            <span className="font-semibold dark:text-yellow-400 text-gray-700">Release Date:</span>
            <span className="dark:text-gray-300 text-gray-800">
              {movie.release_date || movie.first_air_date}
            </span>
          </p>

          <div className="flex items-center text-xs">
            <LuThumbsUp className="h-4 w-4 dark:text-yellow-400 text-gray-600 mr-1" />
            <span className="dark:text-gray-300 text-gray-800">{movie.vote_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
