"use client"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { useQueryProducts } from "@/lib/products"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const HomePage =  () => {
  const { data, isLoading, isError, error } =  useQueryProducts()
  // console.log(data)
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

  // const products = 
  // console.log(products)
  return (
    <div className="space-y-8">
      <section className="text-center p-8 rounded-xl glassmorphic">
        <h1 className="text-4xl font-bold mb-4 text-darkBlue">Welcome to TechGear</h1>
        <p className="text-xl text-purple mb-6">
          Discover the latest in tech innovation and elevate your digital lifestyle.
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-yellow text-darkBlue rounded-lg shadow-lg hover:bg-yellow/80 transition-colors"
        >
          Shop Now
        </a>
      </section>

      <section id="products">
        <h2 className="text-2xl font-bold mb-6 text-darkBlue">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((product) => (
            <div key={product.id} className="rounded-xl neumorphic overflow-hidden">
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
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage