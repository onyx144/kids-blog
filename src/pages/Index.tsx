import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
interface PostMeta {
  title: string;
  category: string;
  date: string;
  author: string;
  slug: string;
  image: string;
  excerpt?: string;
  description?: string;
}
/*Categorie:*/ 
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
/*list active*/ 
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
  const [latestNews, setLatestNews] = useState<PostMeta[]>([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch('/list/posts.json');
        const data: PostMeta[] = await res.json();

        const sorted = data
          .filter(p => p.date)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setLatestNews(sorted.slice(0, 6));
      } catch (err) {
        console.error('❌ Error fetching posts.json:', err);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <Header home />

     {/* Hero Section */}
<section className="relative w-full">
  {/* Desktop background */}
  <div
    className="hidden md:block w-full bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/back_main.png')",
      height: "400px",  
    }}
  >
    <div
      className="absolute"
      style={{
        left: "5%",
        top: "10%",
      }}
    >
      <h2
        className="font-extrabold"
        style={{
          fontSize: "64px",
          color: "#AF4C00",
          lineHeight: "1.1",
          textAlign: "left",
          alignItems: "left",
        }}
      >
        Пригоди з лисеням
      </h2>

      <p
        className="mt-4 font-normal font-cormorant-regular"
        style={{
          fontSize: "32px",
          color: "#000",
          maxWidth: "600px",
          textAlign: "left",
          alignItems: "left",
        }}
      >
        Цікаві історії, корисні поради та веселі пригоди разом з Лисеням
      </p>
    </div>
  </div>

  {/* Mobile background */}
  <div className="block md:hidden w-full relative">
    <img 
      src="/images/phone_back_main.png" 
      alt="Пригоди з лисеням"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex px-4">
      <div>
        <h2
          className="font-extrabold"
          style={{
            fontSize:  window.innerWidth < 450 ? "25px" : "32px",
            color: "#AF4C00",
            textAlign: "left",
            alignItems: "left",
          }}
        >
          Пригоди з лисеням
        </h2>

        <p
          className="font-cormorant-regular"
          style={{
            fontSize: window.innerWidth < 450 ? "13px" : "15px",
            color: "#000",
            textAlign: "left",
            alignItems: "left",
            maxWidth: "70%",
            marginTop: window.innerWidth < 450 ? "0px" : "0.75rem",
          }}
        >
          Цікаві історії, корисні поради та веселі пригоди разом з Лисеням
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Categories Grid */}
      <section className="py-12 top-mobile mobile-section-bg">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Обери свою категорію
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                      <div className="relative w-full h-48 flex items-center justify-center">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className=" cover"
                        />
                      </div>
                      <div 
                        className="w-full bg-white px-4 py-3"
                        style={{ borderRadius: '8px' }}
                      >
                        <h4 className="font-bold text-gray-800 text-center">
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
 

      {/* Latest News */}
      <section className="py-12 md:bg-gradient-to-r md:from-kidsPrimary/10 md:to-kidsSecondary/10 mobile-section-bg">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Останні новини
          </h3>

          {latestNews.length > 0 ? (
           <Swiper
           spaceBetween={20}
           slidesPerView={1}
           breakpoints={{
             640: {
               slidesPerView: 1,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 20,
             },
           }}
           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)}
         >
              {latestNews.map((post) => (
                <SwiperSlide className="p-3" key={post.slug}>
                <Link to={`/posts/${post.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden border-2 hover:border-kidsPrimary">
                    <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Badge className={`text-white ${
                          post.category === 'спорт' ? 'bg-kidsSecondary' :
                          post.category === 'навчання' ? 'bg-kidsPrimary' :
                          post.category === 'творчість' ? 'bg-kidsYellow' :
                          post.category === 'тварини' ? 'bg-kidsPurple' :
                          'bg-kidsAccent'
                        }`}>
                          {post.category}
                        </Badge>
                        <div className="ml-auto flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('uk-UA')}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm">{post.excerpt || post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">Наразі немає новин</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦊</div>
          <h4 className="text-2xl font-bold mb-2">Дитячий Тиждень</h4>
          <p className="text-gray-400 mb-4">
            Дитячі новини, які роблять світ яскравішим!
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="hover:text-kidsPrimary transition-colors">Про нас</Link>
            <Link to="/contact" className="hover:text-kidsPrimary transition-colors">Контакти</Link>
            <Link to="/privacy" className="hover:text-kidsPrimary transition-colors">Конфіденційність</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
