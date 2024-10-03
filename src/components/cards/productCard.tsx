import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

export const ProductCard = ({ product }: { product: ProductInfo }) => {
  const parsedImage = "https://placehold.co/600x400.png";
  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square relative mb-2">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-20"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Image
            src={
              product?.images[0].match(
                // Let image match this: "["https://placehold.co/600x400.png"]"
                /\[(.*?)\]/
              )
                ? parsedImage
                : product?.images[0]
            }
            alt={product.title}
            fill
            loading="eager"
            className="object-cover rounded-md z-10"
          />
        </div>
        <h3 className="font-semibold text-lg mb-1 truncate hover:underline">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="text-sm text-gray-500 mb-2 truncate">
          {product.category.name}
        </p>
        <CardDescription className="text-sm text-gray-500 truncate">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
