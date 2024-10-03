import { Suspense } from "react";
import Hero from "./ui/hero";
import NewArrivals from "./ui/newArrivals";
import ShopCollections from "./ui/shopCollections";
import {
  ArrivalSkeletonCard,
  BestSellerSkeleton,
  ShopCollectionsSkeleton,
} from "@/components/skeletons";
import BestSeller from "./ui/bestSeller";
import Promotion from "./ui/promotion";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <article className="w-full md:container mx-auto md:px-0 px-5">
        {/* New Arrivals */}
        <Suspense fallback={<ArrivalSkeletonCard />}>
          <NewArrivals />
        </Suspense>
        {/* Shop Collection */}
        <Suspense fallback={<ShopCollectionsSkeleton />}>
          <ShopCollections />
        </Suspense>
        {/* Best Seller */}
        <Suspense fallback={<BestSellerSkeleton />}>
          <BestSeller />
        </Suspense>
      </article>
      {/* Promotion */}
      <Promotion />
    </main>
  );
}
