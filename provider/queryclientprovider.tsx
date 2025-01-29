"use client"
import React from 'react'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
    QueryClientProvider ,
} from '@tanstack/react-query'

type Props = {
  children: React.ReactNode
}

export default function QueryClientprovider( { children }: Props) {
    const query = new QueryClient()
  return (
    <QueryClientProvider client={query} >
    {/* <HydrationBoundary state={dehydrate(query)}> */}
        {children}
    {/* </HydrationBoundary> */}
    </QueryClientProvider>
  )
}
