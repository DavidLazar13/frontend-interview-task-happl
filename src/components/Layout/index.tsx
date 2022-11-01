import React from 'react'
import Link from 'next/link'
import { INDEX } from '@/constants/routes'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'

type Props = {
  children: React.ReactElement
}

const Layout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <>
      <div className="bg-green-400 flex fixed items-center md:items-stretch md:flex-col md:w-72 h-16 md:h-screen md:inset-y-0 inset-x-0 md:space-y-4 space-x-3 md:space-x-0 px-3 py-3 md:py-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-md overflow-hidden">
            <Icon icon="logo" width={33} height={33} />
          </div>
          <p className="hidden md:flex text-sm text-white">Happl</p>
        </div>
        <nav>
          <Link
            href={INDEX}
            className={`flex items-center h-9 px-2 rounded-md text-sm text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 ${
              router.pathname === INDEX ? 'bg-green-500' : ''
            }`}
          >
            <span className="mr-2">
              <Icon icon="home" />
            </span>
            Home
          </Link>
        </nav>
      </div>
      <div className="md:pl-72 pt-16 md:pt-0 flex flex-col flex-1">
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}

export default Layout
