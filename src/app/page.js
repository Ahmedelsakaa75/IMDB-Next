import Results from '@/components/Results';
import React, { Suspense } from 'react';

const api_key = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${api_key}&language=en-US&page=1`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <Results movies={movies} />
      </Suspense>
    </div>
  );
}
