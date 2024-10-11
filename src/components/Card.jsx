import React from 'react'

export default function Card({movie}) {
  return (
    <div className='text-center border border-amber-500 rounded-md hover:cursor-pointer'>
        {movie.title}
    </div>
  )
}
