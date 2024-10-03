import Image from "next/image";
import React from "react";
import notfoundImg from "@/assets/images/not-found.avif";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-6 sm:py-28 lg:py-28 md:py-28">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              Error 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              Page not found
            </h1>

            <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Button asChild>
              <Link href="/">Go home</Link>
            </Button>
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
