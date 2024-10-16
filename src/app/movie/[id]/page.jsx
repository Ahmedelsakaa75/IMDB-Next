import Image from 'next/image';
import React from 'react';
import { LuThumbsUp } from 'react-icons/lu';
const api_key = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
  return await res.json();
}

export default async function MovieDetails({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            filter: 'brightness(0.4)', 
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            {movie.tagline && (
              <p className="text-lg italic">{movie.tagline}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
        <div className="col-span-1">
          <Image
            placeholder="blur"
            blurDataURL="/spinner.svg"
            className="rounded-lg shadow-lg"
            width={400}
            height={600}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div className="col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-gray-700 text-lg">{movie.overview}</p>
          </div>

          <div className="flex flex-wrap gap-6">
            <p className="text-lg">
              <span className="font-semibold">Date Released:</span> {movie.release_date || movie.first_air_date}
            </p>
            <div className="flex items-center text-lg">
              <span className="font-semibold">Rating:</span>
              <LuThumbsUp className="h-6 w-6 text-yellow-500 mx-2" />
              <span>{movie.vote_count}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Budget:</span> ${movie.budget.toLocaleString()}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Revenue:</span> ${movie.revenue.toLocaleString()}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Runtime:</span> {movie.runtime} minutes
            </p>

            <p className="text-lg">
              <span className="font-semibold">Production Companies:</span> {movie.production_companies.map(company => company.name).join(', ')}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Languages:</span> {movie.spoken_languages.map(lang => lang.english_name).join(', ')}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Popularity:</span> {movie.popularity}
            </p>

            <p className="text-lg">
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IMDb
              </a>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Status:</span> {movie.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
