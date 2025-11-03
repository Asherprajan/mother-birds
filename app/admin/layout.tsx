"use client"

import { AuthProvider } from '@/components/AuthProvider'
import { usePathname } from 'next/navigation'
import AdminLayout from '@/components/AdminLayout'

export default function RootAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </AuthProvider>
  )
}

function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }
  
  // Show sidebar on all other admin pages
  return <AdminLayout>{children}</AdminLayout>
}
