"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    addToCart(product)
    setIsLoading(false)
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button className="mt-6" onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adding to Cart
        </>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}

