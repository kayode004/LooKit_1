import Link from 'next/link'
import { Search, ShoppingBag, TrendingUp, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-responsive flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-bold text-black">LooKit</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-gray-600 hover:text-black">Browse</Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-black">Log In</Link>
            <Link href="/auth/signup" className="btn-primary">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
        <div className="container-responsive">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Rent Fashion, Express Yourself
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover thousands of fashion items for rent. Look good, save money, join Nigeria's fashion revolution.
            </p>
            <div className="flex gap-4">
              <Link href="/explore" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
                Browse Items
              </Link>
              <Link href="/auth/signup" className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-20 transition">
                List Your Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl font-bold text-center mb-12">How LooKit Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <ShoppingBag className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-3">For Renters</h3>
              <ol className="space-y-2 text-gray-700">
                <li>✓ Browse thousands of items</li>
                <li>✓ Select rental dates</li>
                <li>✓ Pay securely via Paystack</li>
                <li>✓ Receive items</li>
                <li>✓ Return and get refund</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <TrendingUp className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-3">For Owners</h3>
              <ol className="space-y-2 text-gray-700">
                <li>✓ Create listings in minutes</li>
                <li>✓ Upload photos</li>
                <li>✓ Set rental prices</li>
                <li>✓ Earn money from your closet</li>
                <li>✓ Withdraw to bank account</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container-responsive text-center text-gray-400">
          <p>© 2024 LooKit. Made in Nigeria.</p>
        </div>
      </footer>
    </div>
  )
}
