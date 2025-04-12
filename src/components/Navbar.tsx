'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathname = usePathname()

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/products',
      label: 'Products',
      active: pathname === '/products',
    },
    {
      href: '/playlists',
      label: 'Playlists',
      active: pathname === '/playlists',
    },
    {
      href: '/about',
      label: 'About',
      active: pathname === '/about',
    },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              JunkBoxx
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    route.active ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 