"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TabsItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`dark:hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 dark:decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
