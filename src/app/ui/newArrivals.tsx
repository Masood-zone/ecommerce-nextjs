import NewArrivalsCarousel from "@/components/carousels/arrivalCarousel";
import { getLatestProducts } from "@/lib/actions";
import React from "react";

export default async function NewArrivals() {
  const products = await getLatestProducts({ limit: "10", offset: "0" });

  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold mb-4">New Arrivals</h2>
      <NewArrivalsCarousel products={products} />
    </section>
  );
}
