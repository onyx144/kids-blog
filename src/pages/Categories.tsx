import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import StarIcon from '@/svg/StarIcon';

const categories = [
  { 
    name: 'Спорт', 
    slug: 'спорт', 
    gradient: 'linear-gradient(180deg, #FF8336 0%, #FFD3B2 100%)',
    image: '/images/categories/sport.png'
  },
  { 
    name: 'Навчання', 
    slug: 'навчання', 
    gradient: 'linear-gradient(180deg, #EBC64E 0%, #FFD3B2 100%)',
    image: '/images/categories/study.png'
  },
  { 
    name: 'Творчість', 
    slug: 'творчість', 
    gradient: 'linear-gradient(180deg, #FFAF36 0%, #FFD3B2 100%)',
    image: '/images/categories/drive.png'
  },
  { 
    name: 'Жарти', 
    slug: 'жарти', 
    gradient: 'linear-gradient(180deg, #FF7C36 0%, #FFD3B2 100%)',
    image: '/images/categories/joke.png'
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <Header />
      <div style={{ fontFamily: "'CormorantGaramond', serif" }}>
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

      {/* Categories Section */}
      <section className="top-mobile sub-section-bg flex items-center">
        <StarIcon width={43} height={43} />
        <h3 className="h3-base">
          Обери свою категорію
        </h3>
        <StarIcon width={43} height={43} />
      </section>

      {/* Categories Grid */}
      <section className="py-12 mobile-section-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around gap-y-4 md:grid md:grid-cols-4 md:gap-4">
            {categories.map((category) => {
              return (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group"
                >
                  <Card 
                    className="overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer relative"
                    style={{
                      borderRadius: '18px',
                      background: category.gradient,
                    }}
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '18px',
                        zIndex: 1,
                      }}
                    />
                    <CardContent className="p-0 relative" style={{ zIndex: 0 }}>
                      <div className="relative w-full h-[74px] md:h-48 flex items-center justify-center">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="cover"
                        />
                      </div>
                      <div 
                        className="w-full bg-white px-4 "
                        style={{ borderRadius: '8px' ,
                          backgroundColor: '#FFF0D5'
                        }}
                      >
                        <h4 className="font-bold text-gray-800 text-center leading-7 font-cormorant-bold text-[20px] md:text-[26px]">
                          {category.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦊</div>
          <h4 className="text-2xl font-bold mb-2">Дитячий Тиждень</h4>
          <p className="text-gray-400 mb-4">
            Дитячі новини, які роблять світ яскравішим!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
