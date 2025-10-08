
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
          <div className="text-6xl mb-6 animate-wiggle">📧</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Зв'язатися з нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Маєте питання, пропозиції або просто хочете привітатися? 
            Лисеня та вся команда КідсТиждень будуть раді почути від вас!
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-2 text-kidsPrimary" />
                  Надішліть нам повідомлення
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Ім'я *
                    </Label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Ваше ім'я"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email *
                    </Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your@email.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Тема
                    </Label>
                    <Input 
                      id="subject"
                      type="text" 
                      placeholder="Про що хочете написати?"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Повідомлення *
                    </Label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Напишіть ваше повідомлення тут..."
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kidsPrimary focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-kidsPrimary text-white py-3 px-6 rounded-lg hover:bg-kidsPrimary/80 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Надіслати повідомлення</span>
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              
              {/* Contact Cards */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-kidsPrimary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Email</h4>
                      <p className="text-gray-600">hello@kidsweek.ua</p>
                      <p className="text-gray-600">editor@kidsweek.ua</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-kidsSecondary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Телефон</h4>
                      <p className="text-gray-600">+380 (44) 123-45-67</p>
                      <p className="text-gray-500 text-sm">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-kidsYellow rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Адреса</h4>
                      <p className="text-gray-600">
                        вул. Дитяча, 123<br />
                        м. Київ, 01001<br />
                        Україна
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Section */}
              <Card className="bg-gradient-to-r from-kidsPink to-kidsYellow border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🦊</div>
                  <h4 className="font-bold text-lg text-white mb-2">
                    Лисеня каже:
                  </h4>
                  <p className="text-white/90 text-sm">
                    "Не соромтеся писати! Я дуже люблю отримувати листи від друзів!"
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Часті питання
          </h3>
          
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Як швидко ви відповідаєте на повідомлення?
                </h4>
                <p className="text-gray-600">
                  Ми намагаємося відповісти протягом 24 годин у робочі дні. 
                  У вихідні відповідь може зайняти трохи більше часу.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Чи можу я запропонувати тему для статті?
                </h4>
                <p className="text-gray-600">
                  Звичайно! Ми дуже цінуємо ідеї від наших читачів. 
                  Напишіть нам про те, що цікавить вас чи вашу дитину.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Чи можна надіслати фотографії або малюнки?
                </h4>
                <p className="text-gray-600">
                  Так! Ми будемо раді побачити творчість наших маленьких читачів. 
                  Надсилайте на email разом з дозволом батьків на публікацію.
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
        </div>
      </footer>
    </div>
  );
};

export default Contact;
