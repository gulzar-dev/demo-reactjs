
import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "@/actions/getallproducts"

export interface Product {
  id: string
  Productid: string
  ProductName: string
  ProductSlug: string
  ProductDescription: string
  ProductPrice: string
  ProductImage: string
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Ultra HD 4K Smart TV",
//     slug: "ultra-hd-4k-smart-tv",
//     description: 'Experience stunning visuals with this 55" 4K Smart TV featuring HDR and AI-enhanced picture quality.',
//     price: 799.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 2,
//     name: "Wireless Noise-Cancelling Headphones",
//     slug: "wireless-noise-cancelling-headphones",
//     description:
//       "Immerse yourself in your music with these premium wireless headphones featuring active noise cancellation.",
//     price: 249.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 3,
//     name: "Smartphone Pro Max",
//     slug: "smartphone-pro-max",
//     description:
//       "The latest flagship smartphone with a powerful camera system, 5G capabilities, and all-day battery life.",
//     price: 999.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 4,
//     name: "Smart Home Hub",
//     slug: "smart-home-hub",
//     description: "Control your entire smart home ecosystem with this intuitive and powerful smart home hub.",
//     price: 129.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 5,
//     name: "Wireless Gaming Mouse",
//     slug: "wireless-gaming-mouse",
//     description:
//       "Achieve peak gaming performance with this ergonomic wireless gaming mouse featuring customizable RGB lighting.",
//     price: 79.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 6,
//     name: "Portable SSD 1TB",
//     slug: "portable-ssd-1tb",
//     description: "Lightning-fast portable storage solution with 1TB capacity and durable, shock-resistant design.",
//     price: 169.99,
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     id: 7,
//     name: "Ergonomic Chair",
//     slug: "ergonomic-chair",
//     description: "A comfortable chair designed for long hours of sitting.",
//     price: 199.99,
//     image: "/still-life-office-chair-indoors.jpg",
//   },
//   {
//     id: 8,
//     name: "Standing Desk",
//     slug: "standing-desk",
//     description: "An adjustable desk that allows you to work while standing or sitting.",
//     price: 299.99,
//     image: "/minimal-home-desk-design.jpg",
//   },
//   // Add more products as needed
// ]




export const useQueryProducts = () => {
  const query = useQuery({
    queryKey: ['all-products'],
    queryFn:  () => {
      const products = getAllProducts()
      // console.log("products",products)
      return products 
    },
  });
  return query
  //return products
}

