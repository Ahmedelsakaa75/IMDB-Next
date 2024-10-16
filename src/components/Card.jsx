import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuThumbsUp } from "react-icons/lu";

export default function Card({movie}) {
  return (
    <div className='group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${movie.id}`}>
        <Image placeholder='blur' blurDataURL='/spinner.svg' className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200' width={500} height={300} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} style={{maxWidth:"100%", height:"auto"}} />
            <div className="p-2">
              <p className='line-clamp-2 text-md'>{movie.overview}</p>
            </div>
        <h2 className='truncate text-lg font-bold'>
            {movie.original_title || movie.name}
            </h2>
            <div className="flex justify-between align-middle">

            <p>
              {movie.release_date || movie.first_air_date}
            </p>
            <div className="flex align-center justify-center gap-1">
              <LuThumbsUp className='h-6' />
              <span>{movie.vote_count}</span>
            </div>
            </div>
            </Link>
    </div>
  )
}
