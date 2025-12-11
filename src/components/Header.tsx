import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface HeaderProps {
  home?: boolean
  backLink?: 'home' | 'category'
  category?: string
}

export default function Header({ home = false, backLink = 'home', category }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg border-b-4 border-kidsPrimary relative">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Дитячий Тиждень логотип"
            className="h-28 w-28 object-contain animate-bounce-gentle"
            loading="eager"
          />
        </Link>

        {home ? (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-kidsPrimary font-semibold hover:text-kidsSecondary transition-colors">
                Головна
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-kidsPrimary transition-colors">
                Категорії
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-kidsPrimary transition-colors">
                Про нас
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-kidsPrimary transition-colors">
                Контакти
              </Link>
            </nav>

            {/* Mobile Burger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-2 focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5 w-[32px]' : 'w-[43px]'
                }`}
                style={{ backgroundColor: '#4D170D' }}
              />
              <span
                className={`block h-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 w-0' : 'w-[43px] opacity-100'
                }`}
                style={{ backgroundColor: '#4D170D' }}
              />
              <span
                className={`block h-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-3.5 w-[32px]' : 'w-[43px]'
                }`}
                style={{ backgroundColor: '#4D170D' }}
              />
            </button>

            {/* Mobile Menu */}
            <nav
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } md:hidden`}
            >
              <div className="flex flex-col pt-24 px-6 space-y-6">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-kidsPrimary font-semibold text-lg hover:text-kidsSecondary transition-colors"
                >
                  Головна
                </Link>
                <Link
                  to="/categories"
                  onClick={closeMenu}
                  className="text-gray-600 text-lg hover:text-kidsPrimary transition-colors"
                >
                  Категорії
                </Link>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="text-gray-600 text-lg hover:text-kidsPrimary transition-colors"
                >
                  Про нас
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="text-gray-600 text-lg hover:text-kidsPrimary transition-colors"
                >
                  Контакти
                </Link>
              </div>
            </nav>

            {/* Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={closeMenu}
              />
            )}
          </>
        ) : (
          <Link
            to={backLink === 'category' && category ? `/category/${category}` : '/'}
            className="flex items-center space-x-2 text-gray-600 hover:text-kidsPrimary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="capitalize">{backLink === 'category' && category ? category : 'На головну'}</span>
          </Link>
        )}
      </div>
    </header>
  )
}

