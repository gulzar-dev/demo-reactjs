
import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProductSlug } from "@/actions/getproductslug"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductSlug(params.slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.ProductName } | TechGear`,
    description: product.ProductDescription,
  }
}



export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductSlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: product.ProductName, href: `/products/${params.slug}` },
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:justify-center mt-8">
        <div className="relative aspect-square  ">
          <Image  src={product.ProductImage || "/placeholder.svg"} alt={product.ProductName} width={500} height={500} className="object-cover mx-auto neumorphic rounded-lg  max-h-[500px]" />
        </div>
        <div className="glassmorphic p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{product.ProductName}</h1>
          <p className="text-2xl font-semibold mb-4">₹{product.ProductPrice}</p>
          <p className="mb-6">{product.ProductDescription}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

