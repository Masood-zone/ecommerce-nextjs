import { getCategories } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ShopCollections() {
  const collections = await getCategories();
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-left mb-4">
        Shop Collections
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {collections.map((collection: Category) => (
          <div key={collection.id}>
            <Link
              href={`/collections/${collection.id}`}
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <Image
                src={collection.image}
                width={1000}
                height={1000}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  {collection.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
