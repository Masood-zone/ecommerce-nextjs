import BestSellerPagination from "@/components/pagination/bestSellerPagination";
import { getBestSellerProducts } from "@/lib/actions";
import React from "react";

export default async function BestSeller() {
  const products = await getBestSellerProducts();
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-left mb-4">Best Seller</h2>
      <BestSellerPagination products={products} />
    </section>
  );
}
