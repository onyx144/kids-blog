
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, BookOpen, Heart, Dumbbell, Palette, Cat, Wrench, Smile, GraduationCap } from 'lucide-react';

const categories = [
  { name: 'Дозвілля', slug: 'дозвілля', icon: Heart, color: 'bg-kidsPink' },
  { name: 'Все для батьків', slug: 'батьки', icon: User, color: 'bg-kidsAccent' },
  { name: 'Здоров\'я', slug: 'здоровя', icon: Heart, color: 'bg-kidsGreen' },
  { name: 'Навчання', slug: 'навчання', icon: BookOpen, color: 'bg-kidsPrimary' },
  { name: 'Спорт', slug: 'спорт', icon: Dumbbell, color: 'bg-kidsSecondary' },
  { name: 'Творчість', slug: 'творчість', icon: Palette, color: 'bg-kidsYellow' },
  { name: 'Тварини', slug: 'тварини', icon: Cat, color: 'bg-kidsPurple' },
  { name: 'Зроби сам', slug: 'зроби-сам', icon: Wrench, color: 'bg-kidsOrange' },
  { name: 'Жарти', slug: 'жарти', icon: Smile, color: 'bg-kidsPink' },
  { name: 'Дитячий тиждень у класі', slug: 'клас', icon: GraduationCap, color: 'bg-kidsAccent' },
];

const foxActivities = [
  {
    title: 'Лисеня займається спортом',
    category: 'спорт',
    image: '🏃‍♂️',
    description: 'Дізнайся, як Лисеня стало чемпіоном!',
    color: 'bg-kidsSecondary'
  },
  {
    title: 'Лисеня вчиться',
    category: 'навчання', 
    image: '📚',
    description: 'Шкільні пригоди нашого героя',
    color: 'bg-kidsPrimary'
  },
  {
    title: 'Лисеня жартує',
    category: 'жарти',
    image: '😄',
    description: 'Найсмішніші історії та загадки',
    color: 'bg-kidsPink'
  },
  {
    title: 'Лисеня творить',
    category: 'творчість',
    image: '🎨',
    description: 'Творчі майстер-класи та ідеї',
    color: 'bg-kidsYellow'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('fox-activities');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl animate-bounce-gentle">🦊</div>
              <div>
                <h1 className="text-4xl font-bold text-kidsPrimary">КідсТиждень</h1>
                <p className="text-lg text-gray-600">Дитячі новини та пригоди</p>
              </div>
            </div>
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 animate-float">
            Ласкаво просимо до світу пригод! 
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Цікаві історії, корисні поради та веселі пригоди разом з Лисеням
          </p>
          <div className="animate-wiggle inline-block text-8xl">🌟</div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Обери свою категорію
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-kidsPrimary">
                    <CardContent className="p-6 text-center">
                      <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm leading-tight">
                        {category.name}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fox Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Безпосередньо в...
            </h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-full px-8 py-2 shadow-lg border-2 border-kidsPrimary">
                <span className="text-kidsPrimary font-bold">Пригоди Лисеня</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foxActivities.map((activity, index) => (
              <Link 
                key={index}
                to={`/category/${activity.category}`}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden border-2 hover:border-kidsPrimary">
                  <CardContent className="p-0">
                    <div className={`${activity.color} h-32 flex items-center justify-center text-6xl group-hover:animate-wiggle`}>
                      {activity.image}
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gradient-to-r from-kidsPrimary/10 to-kidsSecondary/10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Останні новини
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample news cards */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsSecondary text-white">
                    Спорт
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    24 червня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Лисеня на велосипеді
                </h4>
                <p className="text-gray-600 text-sm">
                  Дізнайся, як Лисеня навчилося кататися на велосипеді та які пригоди його чекали!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsPrimary text-white">
                    Навчання
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    20 червня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Перший день у школі
                </h4>
                <p className="text-gray-600 text-sm">
                  Хвилююча історія про те, як Лисеня готувалося до школи та що сталося в його перший навчальний день.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsYellow text-gray-800">
                    Творчість
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    22 червня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Малюємо веселку
                </h4>
                <p className="text-gray-600 text-sm">
                  Майстер-клас від Лисеня: як намалювати красиву веселку та створити сонячний настрій!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦊</div>
          <h4 className="text-2xl font-bold mb-2">КідсТиждень</h4>
          <p className="text-gray-400 mb-4">
            Дитячі новини, які роблять світ яскравішим!
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="hover:text-kidsPrimary transition-colors">
              Про нас
            </Link>
            <Link to="/contact" className="hover:text-kidsPrimary transition-colors">
              Контакти
            </Link>
            <Link to="/privacy" className="hover:text-kidsPrimary transition-colors">
              Конфіденційність
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
