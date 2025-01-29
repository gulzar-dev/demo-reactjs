import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-gradient-to-br from-offWhite to-yellow", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryClientprovider>
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="container mx-auto px-4 py-8">{children}</div>
            </div>
            <Toaster />
          </CartProvider>
          </QueryClientprovider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import QueryClientprovider from "@/provider/queryclientprovider"
