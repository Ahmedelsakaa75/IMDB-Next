'use client'
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image height={100} width={100} className="h-96" src="/spinner.svg" alt="Loading..." />
    </div>
  );
}
