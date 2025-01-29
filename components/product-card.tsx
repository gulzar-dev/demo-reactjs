"use client"

import Image from "next/image"
import Link from "next/link"
import { useQueryProducts } from "@/lib/products"
import type { Product } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Loader2 } from "lucide-react"

interface ProductCardProps {
  product: Product
}

// export function ProductCard({ product }: ProductCardProps){
//   return(
//     <Card>
//         <Image
//           src={product.image || "/placeholder.svg"}
//           alt={product.name}
//           fill
//           className="object-cover rounded-t-lg"
//         />
//       <CardSkeletonContainer>
//       <Sparkles />
//       </CardSkeletonContainer>
//       <CardTitle>
//           <Link href={`/products/${product.slug}`} className="hover:underline">
//             {product.name}
//           </Link>
//       </CardTitle>
//       <p className="text-sm text-gray-500 mb-2">${product.price.toFixed(2)}</p>
//       <CardDescription className="text-sm line-clamp-3">
//       {product.description}
//       </CardDescription>
//       <AddToCartButton product={product} />
//     </Card>
//   )
// }

export function ProductCard({ product }: any) {
  const { data, isLoading, isError, error } =  useQueryProducts()
  
  if (isLoading){
    return (
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    )
  }

  if (isError){
    console.log(error)
    return (
      <p>Something went wrong: {error.message}</p>
    )
  }

  return (
    <div className="rounded-xl neumorphic overflow-hidden">
      <div className="aspect-square relative">
        <Image src={product.ProductImage || "/placeholder.svg"} alt={product.ProductName} fill className="object-cover" />
      </div>
      <div className="p-6 bg-offWhite/80 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 text-darkBlue">
          <Link href={`/products/${product.ProductSlug}`} className="hover:text-purple transition-colors">
            {product.ProductName}
          </Link>
        </h3>
        <p className="text-lg font-bold text-purple mb-2">₹{product.ProductPrice}</p>
        <p className="text-darkBlue/80 text-sm line-clamp-3 mb-4">{product.ProductDescription}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

// export function ProductCard({ product }: ProductCardProps) {
//   return (
//     <Card className=" rounded-xl neumorphic overflow-hidden bg-offWhite/80 backdrop-blur-sm">
//       <CardHeader className="p-2 neumorphic bg-offWhite/80 backdrop-blur-sm">
//         <div className="aspect-square relative">
//           <Image
//             src={product.image || "/placeholder.svg"}
//             alt={product.name}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>
//       </CardHeader>
//       <CardContent className="p-6 bg-offWhite/80 backdrop-blur-sm neumorphic h-48">
//         <CardTitle className="text-xl font-semibold mb-2 text-darkBlue">
//           <Link href={`/products/${product.slug}`} className="hover:underline">
//             {product.name}
//           </Link>
//         </CardTitle>
//         <p className="text-lg font-bold text-purple mb-2">${product.price.toFixed(2)}</p>
//         <p className="text-darkBlue/80 text-sm line-clamp-3 mb-4">{product.description}</p>
//       </CardContent>
//       <CardFooter className="p-6 bg-offWhite/80 backdrop-blur-sm neumorphic">
//         <AddToCartButton product={product} />
//       </CardFooter>
//     </Card>
//   )
// }

