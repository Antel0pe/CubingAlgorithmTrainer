'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className=" px-4  lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                SpeedCube
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/oll" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                OLL
              </Link>
              <Link href="/pll" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                PLL
              </Link>
              {/* <Link href="/stats" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Stats
              </Link> */}
            </div>
          </div>
          {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost">Sign In</Button>
            <Button className="ml-3">Sign Up</Button>
          </div> */}
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {/* You can add an icon here for the mobile menu button */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}