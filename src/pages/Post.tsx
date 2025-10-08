
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Heart, Share2, MessageCircle } from 'lucide-react';

// Mock data для примера
const mockPost = {
  title: 'Лисеня на велосипеді: Весела прогулянка по парку',
  category: 'спорт',
  date: '2024-06-24',
  author: 'Редакція КідсТиждень',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
  content: `
Привіт, діти! Сьогодні я хочу розповісти вам дивовижну історію про те, як наше улюблене Лисеня вирішило навчитися кататися на велосипеді.

## Початок пригоди

Одного сонячного ранку Лисеня прокинулося і подумало: "А що як мені спробувати щось нове?" Воно визирнуло у вікно і побачило, як діти весело катаються на велосипедах у парку.

> "Я теж хочу так кататися!" - вигукнуло Лисеня.

## Перші кроки

Лисеня попросило маму купити йому велосипед. Мама погодилася, але сказала: 

- Потрібно обов'язково одягати шолом
- Бути обережним на дорозі  
- Спочатку потренуватися в безпечному місці

## Веселі уроки

Тато-лис став вчити Лисеня:

1. **Тримати рівновагу** - найважливіше!
2. **Крутити педалі** плавно і ритмічно
3. **Кермувати** акуратно, не роблячи різких поворотів
4. **Гальмувати** вчасно

Спочатку було важко, і Лисеня кілька разів упало. Але воно не здавалося!

## Успіх!

Через тиждень тренувань Лисеня вже впевнено каталося по парку. Воно було таким щасливим! Інші звірята приєдналися до нього, і тепер кожні вихідні вони влаштовують веселі велопрогулянки.

**Мораль історії:** Ніколи не бійтеся пробувати щось нове. Головне - бути наполегливим і не здаватися при перших невдачах!

А ви вмієте кататися на велосипеді? Розкажіть у коментарях про свої велосипедні пригоди!
  `
};

const categoryColors = {
  'спорт': 'bg-kidsSecondary',
  'навчання': 'bg-kidsPrimary', 
  'творчість': 'bg-kidsYellow',
  'жарти': 'bg-kidsPink',
};

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockPost; // В реальності завантажується по slug з Contentlayer
  const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || 'bg-kidsPrimary';

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
            <div className="flex items-center space-x-4">
              <Link 
                to={`/category/${post.category}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-kidsPrimary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="capitalize">{post.category}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <Link to={`/category/${post.category}`}>
              <Badge className={`${categoryColor} text-white border-0 text-lg px-4 py-2 hover:opacity-80 transition-opacity capitalize`}>
                {post.category}
              </Badge>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('uk-UA', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Подобається</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Поділитися</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Коментарі</span>
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <Card className="mb-12 border-2 border-gray-100">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <div key={index} className="mb-8">
                        <div className="flex items-center justify-center mb-4">
                          <div className="text-3xl animate-wiggle">🌟</div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-kidsPrimary mb-4 text-center">
                          {paragraph.replace('## ', '')}
                        </h2>
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-1 bg-gradient-to-r from-kidsPrimary to-kidsSecondary rounded-full"></div>
                        </div>
                      </div>
                    );
                  } else if (paragraph.startsWith('> ')) {
                    return (
                      <div key={index} className="bg-gradient-to-r from-kidsYellow/20 to-kidsPink/20 border-l-4 border-kidsPrimary p-6 rounded-r-lg mb-6">
                        <p className="text-lg italic text-gray-700 mb-0">
                          {paragraph.replace('> ', '')}
                        </p>
                      </div>
                    );
                  } else if (paragraph.startsWith('- ') || paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <div key={index} className="mb-6">
                        <ul className="space-y-3">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="text-kidsPrimary mt-1">🦊</div>
                              <span className="text-gray-700 text-lg">
                                {item.replace(/^[-\d\.]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <div key={index} className="bg-gradient-to-r from-kidsGreen/20 to-kidsSecondary/20 p-6 rounded-lg mb-6 border-2 border-kidsGreen/30">
                        <p className="text-lg font-bold text-gray-800 text-center mb-0">
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      </div>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <div key={index} className="mb-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                        {/* Декоративний розділювач */}
                        {index < post.content.split('\n\n').length - 1 && (
                          <div className="flex justify-center my-8">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-kidsPrimary rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-kidsSecondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-2 h-2 bg-kidsPink rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-8 border-2 border-gray-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-kidsPrimary" />
                Коментарі
              </h3>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-600">
                  Будьте першим, хто залишить коментар до цієї історії!
                </p>
                <button className="mt-4 bg-kidsPrimary text-white px-6 py-3 rounded-lg hover:bg-kidsPrimary/80 transition-colors">
                  Написати коментар
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Інші історії про Лисеня
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/posts/study-fox-school" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-kidsPrimary text-white">навчання</Badge>
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-kidsPrimary transition-colors">
                      Лисеня йде до школи
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Хвилююча історія про перший день у школі
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/posts/creative-fox-art" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-kidsYellow text-gray-800">творчість</Badge>
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-kidsPrimary transition-colors">
                      Лисеня малює веселку
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Майстер-клас з малювання від нашого героя
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
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

export default Post;
