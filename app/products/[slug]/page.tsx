import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProductBySlug } from "@/lib/products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} | My Store`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container p-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: product.name, href: `/products/${params.slug}` },
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

