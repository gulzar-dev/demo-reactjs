"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-sm text-gray-500 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  )
}

