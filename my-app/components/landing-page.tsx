'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingPageComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center">
      <main className="max-w-4xl">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Track Your Alg Times Like a Pro
        </h1>
        <p className="mb-10 text-xl text-gray-600 sm:text-2xl">
          Get accurate breakdowns of your averages for each algorithm
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center w-fit mx-auto">
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/oll">OLL</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/pll">PLL</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
