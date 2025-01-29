"use server"
import { client } from '@/lib/prisma'
import React from 'react'

export const getAllProducts = async () => {
    const products =  await client.products.findMany()
    // console.log("product",products)
    return products
}
