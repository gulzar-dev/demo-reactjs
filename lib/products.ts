export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Ergonomic Chair",
    slug: "ergonomic-chair",
    description: "A comfortable chair designed for long hours of sitting.",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Standing Desk",
    slug: "standing-desk",
    description: "An adjustable desk that allows you to work while standing or sitting.",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  // Add more products as needed
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getAllProducts(): Product[] {
  return products
}

