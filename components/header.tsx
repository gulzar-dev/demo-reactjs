"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-offWhite/80 backdrop-blur-sm border-b border-darkBlue/20 sticky top-0 z-40 glassmorphic">
      <div className="container px-10 lg:px-5 mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="text-2xl font-bold text-darkBlue">
            <span className="inline-block font-bold">TechGear</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="px-4 py-2 text-purple hover:text-darkBlue transition-colors" asChild>
              <Link href="/" className="">Home</Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative neumorphic">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 neumorphic" />
                {cartItemsCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs neumorphic">
                    {cartItemsCount}
                  </Badge>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

