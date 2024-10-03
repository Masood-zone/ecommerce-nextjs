"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import notfoundImg from "@/assets/images/not-found.avif";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="py-6 sm:py-28 lg:py-28 md:py-28">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-[#f00] md:text-base">
              Error #Code: {error.digest}
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              {error.name}
            </h1>

            <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
              It seems you encountered an error here. Please try again.
            </p>
            <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
              <span className="font-semibold pr-4">Message:</span>
              {error.message}
            </p>
            <div className="flex items-center gap-5">
              <Button variant="ghost" asChild>
                <Link href="/">Go home</Link>
              </Button>
              <Button variant="destructive" onClick={() => reset()}>
                Try again
              </Button>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto -z-10">
            <Image
              src={notfoundImg}
              loading="lazy"
              width={1000}
              height={1000}
              alt="Photo by @heydevn"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
