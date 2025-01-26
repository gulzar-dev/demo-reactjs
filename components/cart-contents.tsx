"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function CartContents() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-xl mb-4">Your cart is empty.</p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {cart.map((item) => (
        <div key={item.product.id} className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <Image
              src={item.product.image || "/placeholder.svg"}
              alt={item.product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              disabled={item.quantity === 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span>{item.quantity}</span>
            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <div className="text-right">
        <p className="text-lg font-semibold">
          Total: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

