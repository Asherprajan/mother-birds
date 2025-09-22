import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 animate-fade-in">
          {/* 404 Number */}
          <div className="mb-8 animate-bounce-in">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-red-500 via-amber-500 to-orange-500 bg-clip-text text-transparent font-serif">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delayed">
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Home size={20} />
                Go Home
              </Link>
            </div>

            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Search size={20} />
                Browse Products
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4 animate-fade-in-delayed">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-red-400 to-amber-400 rounded-full animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-8 text-sm text-gray-500 animate-fade-in-delayed">
            <p>
              If you believe this is an error, please{' '}
              <Link href="/contact" className="text-red-500 hover:text-red-600 font-semibold underline">
                contact us
              </Link>
              {' '}and let us know what happened.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
