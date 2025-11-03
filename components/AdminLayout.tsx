"use client"

import { useRequireAuth } from '@/components/AuthProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  FolderOpen, 
  LogOut, 
  User,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useRequireAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Categories', href: '/admin/categories', icon: FolderOpen },
  ]

  // Check if current route is active (exact match or starts with the href for sub-routes)
  const isRouteActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-amber-500 rounded-lg flex items-center justify-center">
            <Package className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-bold text-gray-800">Mother Birds</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:shadow-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="hidden lg:flex items-center gap-4 p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <Package className="text-white" size={28} />
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-xl" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Mother Birds</h1>
              <p className="text-sm text-gray-600">Admin Panel</p>
            </div>
          </div>

          {/* User Info */}
          <div className="p-5 bg-gradient-to-br from-red-50 to-amber-50 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-red-200">
                <User className="text-red-600" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">{user.email}</p>
                <p className="text-xs text-gray-600 font-medium capitalize bg-white px-2 py-0.5 rounded-full inline-block mt-1">{user.role || 'Admin'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = isRouteActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-4 px-5 py-3.5 rounded-xl font-semibold transition-all text-base
                    ${isActive 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200' 
                      : 'text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                    }
                  `}
                >
                  <item.icon size={22} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <Link
              href="/admin/login"
              className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 transition-all w-full border-2 border-red-200 hover:border-red-300 bg-white"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-gray-50 lg:ml-0">
        <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto mt-16 lg:mt-0">
          {children}
        </div>
      </main>
    </div>
  )
}
