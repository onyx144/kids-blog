import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface HeaderProps {
  home?: boolean
  backLink?: 'home' | 'category'
  category?: string
}

export default function Header({
  home = false,
  backLink = 'home',
  category
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-kidsPrimary/20 shadow-lg">
      <div className="mx-auto px-4 flex justify-between items-center h-24">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/logo.png"
            alt="Дитячий Тиждень"
            className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
          />
          <span className="hidden sm:block text-xl font-extrabold bg-gradient-to-r from-kidsPrimary to-kidsSecondary bg-clip-text text-transparent">
            Дитячий Тиждень
          </span>
        </Link>

        {home ? (
          <>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                ['/', 'Головна'],
                ['/categories', 'Категорії'],
                ['/concurs', 'Конкурс'],
                ['/about', 'Про нас'],
                ['/contact', 'Контакти']
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="relative font-semibold text-gray-700 hover:text-kidsPrimary transition-colors
                             after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-0
                             after:bg-kidsPrimary after:rounded-full
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-2 z-50"
            >
              <span className={`h-1 bg-kidsPrimary rounded transition-all ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-10'}`} />
              <span className={`h-1 bg-kidsPrimary rounded transition-all ${isMenuOpen ? 'opacity-0' : 'w-10'}`} />
              <span className={`h-1 bg-kidsPrimary rounded transition-all ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-10'}`} />
            </button>

            {/* Mobile menu */}
            <nav
              className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-lg shadow-2xl
              transform transition-transform duration-300
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
              <div className="pt-32 px-6 flex flex-col gap-6">
                {[
                  ['/', 'Головна'],
                  ['/categories', 'Категорії'],
                  ['/concurs', 'Конкурс'],
                  ['/about', 'Про нас'],
                  ['/contact', 'Контакти']
                ].map(([to, label]) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-semibold text-gray-700 hover:text-kidsPrimary transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </>
        ) : (
          <Link
            to={backLink === 'category' && category ? `/category/${category}` : '/'}
            className="flex items-center gap-2 text-gray-600 hover:text-kidsPrimary transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="capitalize">
              {backLink === 'category' && category ? category : 'На головну'}
            </span>
          </Link>
        )}
      </div>
    </header>
  )
}
