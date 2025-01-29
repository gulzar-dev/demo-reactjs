"use server"
import { client } from '@/lib/prisma'
import React from 'react'

export const getProductSlug = async (ProductSlug: string) => {
    const products =  await client.products.findUnique({
        where: { ProductSlug, },
    })
    // console.log("product",products)
    return products
}
