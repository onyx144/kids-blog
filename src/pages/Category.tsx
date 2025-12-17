import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import StarIcon from '@/svg/StarIcon';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  description?: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  'спорт': 'bg-kidsSecondary',
  'навчання': 'bg-kidsPrimary', 
  'творчість': 'bg-kidsYellow',
  'жарти': 'bg-kidsPink',
  'дозвілля': 'bg-kidsPink',
  'батьки': 'bg-kidsAccent',
  'здоровя': 'bg-kidsGreen',
  'тварини': 'bg-kidsPurple',
  'зроби-сам': 'bg-kidsOrange',
  'клас': 'bg-kidsAccent'
};

const categoryEmojis: Record<string, string> = {
  'спорт': '🏃‍♂️',
  'навчання': '📚',
  'творчість': '🎨',
  'жарти': '😄',
  'дозвілля': '🎮',
  'батьки': '👨‍👩‍👧‍👦',
  'здоровя': '🏥',
  'тварини': '🐱',
  'зроби-сам': '🔧',
  'клас': '🎓'
};

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

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/list/posts.json');
        const data: Post[] = await res.json();
        const filtered = data
          .filter(post => post.category === category)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(filtered);
      } catch (err) {
        console.error('❌ Error loading posts.json:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  const categoryColor = category ? categoryColors[category] || 'bg-kidsPrimary' : 'bg-kidsPrimary';
  const categoryEmoji = category ? categoryEmojis[category] || '📰' : '📰';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <Header />
      <div style={{ fontFamily: "'CormorantGaramond', serif" }}>
      {/* Category Hero */}
      <section className={`${categoryColor} py-12`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl mb-4 animate-float">{categoryEmoji}</div>
          <h2 className="text-4xl font-bold text-white mb-4 capitalize">{category}</h2>
          <p className="text-xl text-white/90">Все найцікавіше в категорії "{category}"</p>
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
            {categories.map((cat) => {
              return (
                <Link 
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="group"
                >
                  <Card 
                    className="overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer relative"
                    style={{
                      borderRadius: '18px',
                      background: cat.gradient,
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
                          src={cat.image} 
                          alt={cat.name}
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
                          {cat.name}
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

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-16 text-gray-600">Завантаження...</div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link key={post.slug} to={`/posts/${post.slug}`} className="group">
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 hover:border-kidsPrimary">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${categoryColor} text-white border-0`}>
                          {category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' })}
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-kidsPrimary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt || post.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Незабаром тут з'являться новини!</h3>
              <p className="text-gray-500">Лисеня вже працює над цікавими матеріалами для цієї категорії</p>
              <Link to="/" className="inline-block mt-6 bg-kidsPrimary text-white px-6 py-3 rounded-lg hover:bg-kidsPrimary/80 transition-colors">
                Повернутися на головну
              </Link>
            </div>
          )}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Category;
