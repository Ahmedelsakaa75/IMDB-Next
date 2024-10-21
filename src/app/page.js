'use client'
import Results from '@/components/Results';
import React, { Suspense } from 'react'
const api_key = process.env.API_KEY;

export default  function Home({searchParams}) {
const genre = searchParams.genre || 'fetchTrending'
  
    async function handleGettingMovies (){

      const res = await fetch(`https://api.themoviedb.org/3${
      genre === 'fetchTopRated'? '/movie/top_rated' : '/trending/all/week'  
      }?api_key=${api_key}&language=en-US&page=1`, {next:{ revalidate: 0 }} );
      const data = await res.json()
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return movies = data.results
    }
    handleGettingMovies()
  return (
     <Suspense fallback={<div>Loading...</div>}>
    <div className="flex">
      <Results movies={movies} />
    </div>
    </Suspense>  
  )
}