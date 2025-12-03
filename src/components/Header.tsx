import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface HeaderProps {
  home?: boolean
  backLink?: 'home' | 'category'
  category?: string
}

export default function Header({ home = false, backLink = 'home', category }: HeaderProps) {
  return (
    <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
          <img
            src="/images/logo.png"
            alt="Дитячий Тиждень логотип"
            className="h-28 w-28 object-contain animate-bounce-gentle"
            loading="eager"
          />
        </Link>

        {home ? (
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

