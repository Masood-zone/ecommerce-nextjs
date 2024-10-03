import { Skeleton } from "@/components/ui/skeleton";

export function ArrivalSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 py-16 ">
      <h2 className="text-3xl font-semibold text-left">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="w-full flex flex-col space-x-3 gap-4">
      <Skeleton className="h-[255px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function ShopCollectionsSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-3xl font-semibold text-left">Shop Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
    </div>
  );
}

export function BestSellerSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-3xl font-semibold text-left">Best Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Skeleton className="h-[255px] w-full rounded-xl" />
        <Skeleton className="h-[255px] w-full rounded-xl" />
        <Skeleton className="h-[255px] w-full rounded-xl" />
        <Skeleton className="h-[255px] w-full rounded-xl" />
      </div>
    </div>
  );
}
