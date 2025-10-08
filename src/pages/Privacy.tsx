
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
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
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Політика конфіденційності
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми дбаємо про безпеку та приватність наших маленьких читачів та їх сімей
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Main Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-kidsPrimary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Безпека дітей</h3>
                <p className="text-gray-600">
                  Ми не збираємо особисту інформацію про дітей без згоди батьків
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-kidsSecondary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Захист даних</h3>
                <p className="text-gray-600">
                  Всі дані зберігаються безпечно та використовуються лише за призначенням
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-kidsPrimary" />
                  Яку інформацію ми збираємо
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Технічна інформація:</strong> IP-адреса, тип браузера, час відвідування для покращення роботи сайту.
                  </p>
                  <p>
                    <strong>Аналітичні дані:</strong> Інформація про те, які сторінки найбільш популярні, щоб створювати кращий контент.
                  </p>
                  <p>
                    <strong>Зворотний зв'язок:</strong> Коментарі та повідомлення, які ви надсилаєте нам добровільно.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-kidsPrimary" />
                  Як ми використовуємо інформацію
                </h3>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Покращення якості контенту та функціональності сайту</li>
                    <li>Відповіді на ваші запитання та коментарі</li>
                    <li>Аналіз відвідуваності для створення кращого досвіду</li>
                    <li>Забезпечення безпеки та захист від спаму</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Файли cookie
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ми використовуємо файли cookie для:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Запам'ятовування ваших налаштувань</li>
                    <li>Аналізу відвідуваності сайту</li>
                    <li>Покращення функціональності</li>
                  </ul>
                  <p>
                    Ви можете вимкнути файли cookie в налаштуваннях вашого браузера.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Права користувачів
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>Ви маєте право:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Дізнатися, яку інформацію про вас ми зберігаємо</li>
                    <li>Запросити видалення ваших даних</li>
                    <li>Виправити неточну інформацію</li>
                    <li>Відкликати згоду на обробку даних</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Контактна інформація
                </h3>
                <div className="text-gray-600">
                  <p className="mb-4">
                    Якщо у вас є питання щодо нашої політики конфіденційності, 
                    будь ласка, зв'яжіться з нами:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Email:</strong> privacy@kidsweek.ua</p>
                    <p><strong>Адреса:</strong> м. Київ, Україна</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12 text-gray-500">
            <p>Останнє оновлення: 26 червня 2025 року</p>
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

export default Privacy;
