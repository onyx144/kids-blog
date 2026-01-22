import { Heart, FileEdit, Trophy, BookOpen } from 'lucide-react';
import { ParticipantCard } from '../components/ParticipantCard';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

type Page = 'home' | 'rules' | 'create' | 'leaders';

const categories = [
  { id: 'art-diy', name: 'Творчість — «Зроби сам»', emoji: '🎨' },
  { id: 'art-music', name: 'Творчість — «Музикальний талант»', emoji: '🎵' },
  { id: 'cooking', name: 'Кулінарія — «Приготуй сам»', emoji: '🍪' },
  { id: 'video', name: 'Розкажи про себе', emoji: '🎥' },
  { id: 'science', name: 'Наука — «Безпечний експеримент»', emoji: '🔬' },
  { id: 'news', name: 'Новини — «Маленький журналіст»', emoji: '🗞' },
];

const mockParticipants = [
  {
    id: 1,
    name: 'Софія Коваленко',
    age: 8,
    category: 'art-diy',
    description: 'Мій паперовий замок з переробленого картону',
    image: 'https://images.unsplash.com/photo-1666710988451-ba4450498967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY2NDcwMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 234,
  },
  {
    id: 2,
    name: 'Максим Петренко',
    age: 10,
    category: 'science',
    description: 'Вулкан з соди та оцту',
    image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWQlMjBzY2llbmNlJTIwZXhwZXJpbWVudHxlbnwxfHx8fDE3NjY1MjE2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 189,
  },
  {
    id: 3,
    name: 'Аліна Сидоренко',
    age: 7,
    category: 'cooking',
    description: 'Веселі пиріжки у вигляді тваринок',
    image: 'https://images.unsplash.com/photo-1752652012719-91c73fafdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc2NjUyMTYyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 312,
  },
  {
    id: 4,
    name: 'Данило Мельник',
    age: 9,
    category: 'art-music',
    description: 'Грою на укулеле «Щедрик»',
    image: 'https://images.unsplash.com/photo-1764766959921-69848ef58b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG11c2ljJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NjY1MjE2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 267,
  },
  {
    id: 5,
    name: 'Марія Шевченко',
    age: 11,
    category: 'news',
    description: 'Інтервʼю з моєю бабусею про її дитинство',
    image: 'https://images.unsplash.com/photo-1586503452950-997923af27f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NTIxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 198,
  },
  {
    id: 6,
    name: 'Тимофій Бондаренко',
    age: 8,
    category: 'video',
    description: 'Розповідь про мого кота Барсика',
    image: 'https://images.unsplash.com/photo-1586503452950-997923af27f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NTIxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 145,
  },
];

export default function Concurs() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [likedParticipants, setLikedParticipants] = useState<Set<number>>(new Set());

  const onNavigate = (page: Page) => {
    // Handle navigation - you can add routes for these pages later
    console.log('Navigate to:', page);
    // For now, just log. You can add routes like:
    // if (page === 'create') navigate('/concurs/create');
    // if (page === 'leaders') navigate('/concurs/leaders');
    // if (page === 'rules') navigate('/concurs/rules');
  };

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const toggleLike = (participantId: number) => {
    const newLiked = new Set(likedParticipants);
    if (newLiked.has(participantId)) {
      newLiked.delete(participantId);
    } else {
      newLiked.add(participantId);
    }
    setLikedParticipants(newLiked);
  };

  const filteredParticipants = selectedCategories.length > 0
    ? mockParticipants.filter(p => selectedCategories.includes(p.category))
    : mockParticipants;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full" style={{ background: 'linear-gradient(180deg, #ffb32899, #fff9)' }}>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613206468203-fa00870edf79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZm94JTIwaWxsdXN0cmF0iW9ufGVufDF8fHx8MTc2NjQ2MjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Лисеня - маскот Кідс Тижня"
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
              />
            </div>
            <h1 className="mb-4">Конкурс від Кідс Тижня</h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
              Покажи свій талант та стань частиною великої дитячої історії
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg">
              <h2 className="mb-6 text-center">Про наш конкурс</h2>
              <p className="text-gray-800">
                Вітаємо у найцікавішому дитячому конкурсі України! «Кідс Тиждень» — це особливе місце, де діти можуть показати свої таланти, творчість та унікальні здібності. Неважливо, чи ти любиш малювати, готувати, експериментувати чи розповідати історії — тут є місце для кожного! Наш дружній лисеня завжди підтримає тебе на цьому шляху. Приєднуйся до великої родини талановитих дітей, ділись своїми роботами, голосуй за друзів та отримуй незабутні емоції. Разом ми створюємо справжню магію дитячої творчості!
              </p>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <button
              onClick={() => onNavigate('create')}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[rgb(255,107,53)] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(255,107,53)] to-[rgb(255,140,90)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileEdit className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 group-hover:text-[rgb(255,107,53)] transition-colors">Створити анкету</h3>
              <p className="text-gray-600">Заповни форму та стань учасником</p>
            </button>

            <button
              onClick={() => onNavigate('leaders')}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[rgb(255,107,53)] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(255,107,53)] to-[rgb(255,140,90)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 group-hover:text-[rgb(255,107,53)] transition-colors">Лідери голосування</h3>
              <p className="text-gray-600">Дивись топ учасників</p>
            </button>

            <button
              onClick={() => onNavigate('rules')}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[rgb(255,107,53)] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(255,107,53)] to-[rgb(255,140,90)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 group-hover:text-[rgb(255,107,53)] transition-colors">Правила конкурсу</h3>
              <p className="text-gray-600">Ознайомся з умовами участі</p>
            </button>
          </div>
        </section>

        {/* Participants Section */}
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-center mb-8">Учасники конкурсу</h2>

          {/* Category Filter */}
          <div className="max-w-5xl  mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`flex items-center gap-2 p-3 md:p-4 rounded-2xl transition-all duration-300 ${
                      selectedCategories.includes(category.id)
                        ? 'bg-gradient-to-br from-[rgb(255,107,53)] to-[rgb(255,140,90)] text-white shadow-md scale-105'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    <span className="text-2xl">{category.emoji}</span>
                    <span className="text-sm md:text-base flex-1 text-left">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Participants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredParticipants.map((participant) => (
              <ParticipantCard
                key={participant.id}
                participant={participant}
                isLiked={likedParticipants.has(participant.id)}
                onToggleLike={() => toggleLike(participant.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}









