import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { CartContents } from "@/components/cart-contents"

export const metadata: Metadata = {
  title: "Cart | My Store",
  description: "View your shopping cart",
}

export default function CartPage() {
  return (
    <div className="container p-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
        ]}
      />
      <div className="mt-8 glassmorphic p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <CartContents />
      </div>
    </div>
  )
}

