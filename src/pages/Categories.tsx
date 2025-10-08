
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, User, BookOpen, Dumbbell, Palette, Cat, Wrench, Smile, GraduationCap } from 'lucide-react';

const categories = [
  { name: 'Дозвілля', slug: 'дозвілля', icon: Heart, color: 'bg-kidsPink', description: 'Ігри, розваги та цікаві занятття для дітей' },
  { name: 'Все для батьків', slug: 'батьки', icon: User, color: 'bg-kidsAccent', description: 'Корисні поради та інформація для мам і тат' },
  { name: 'Здоров\'я', slug: 'здоровя', icon: Heart, color: 'bg-kidsGreen', description: 'Здоровий спосіб життя та корисні звички' },
  { name: 'Навчання', slug: 'навчання', icon: BookOpen, color: 'bg-kidsPrimary', description: 'Освітні матеріали та шкільне життя' },
  { name: 'Спорт', slug: 'спорт', icon: Dumbbell, color: 'bg-kidsSecondary', description: 'Спортивні новини та активний відпочинок' },
  { name: 'Творчість', slug: 'творчість', icon: Palette, color: 'bg-kidsYellow', description: 'Малювання, рукоділля та творчі проєкти' },
  { name: 'Тварини', slug: 'тварини', icon: Cat, color: 'bg-kidsPurple', description: 'Світ тварин та догляд за домашніми улюбленцями' },
  { name: 'Зроби сам', slug: 'зроби-сам', icon: Wrench, color: 'bg-kidsOrange', description: 'Майстер-класи та самодільні проєкти' },
  { name: 'Жарти', slug: 'жарти', icon: Smile, color: 'bg-kidsPink', description: 'Веселі жарти, загадки та смішні історії' },
  { name: 'Дитячий тиждень у класі', slug: 'клас', icon: GraduationCap, color: 'bg-kidsAccent', description: 'Шкільні події та класні заходи' },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="text-4xl animate-bounce-gentle">🦊</div>
              <div>
                <h1 className="text-2xl font-bold text-kidsPrimary">КідсТиждень</h1>
              </div>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-kidsPrimary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>На головну</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Всі категорії
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Обери цікаву тему та дізнайся щось нове разом з Лисеням!
          </p>
          <div className="animate-wiggle inline-block text-6xl">📚</div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-kidsPrimary h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className={`${category.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-800 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦊</div>
          <h4 className="text-2xl font-bold mb-2">КідсТиждень</h4>
          <p className="text-gray-400 mb-4">
            Дитячі новини, які роблять світ яскравішим!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
