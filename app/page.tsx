import type { Metadata } from "next"
import { ProductCard } from "@/components/product-card"
import { getAllProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Home | My Store",
  description: "Welcome to My Store - Find great products at amazing prices!",
}

export default function HomePage() {
  const products = getAllProducts()

  return (
    <div className="container p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Store</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

