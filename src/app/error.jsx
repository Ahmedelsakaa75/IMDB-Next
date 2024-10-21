'use client'
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-20 flex content-center justify-center flex-col">
      <h1 className="text-3xl m-32">Something went wrong</h1>
      <button
        className="border p-3 rounded-xl w-1/2 m-auto hover:bg-amber-500 hover:text-black transition"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
