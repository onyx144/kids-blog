
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, Star, Users, Target } from 'lucide-react';

const About = () => {
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
          <div className="text-8xl mb-6 animate-float">🦊</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Про КідсТиждень
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми створюємо яскравий та дружелюбний світ новин для дітей та їх батьків. 
            Разом з нашим улюбленим персонажем Лисеням ми досліджуємо найцікавіші теми!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-kidsPrimary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Наша місія</h3>
                <p className="text-gray-600">
                  Робити світ новин доступним та цікавим для дітей, допомагаючи їм розвиватися та пізнавати світ.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-kidsSecondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Наші цінності</h3>
                <p className="text-gray-600">
                  Доброта, творчість, безпека та радість у кожній статті. Ми створюємо контент з любов'ю.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-kidsYellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Наша команда</h3>
                <p className="text-gray-600">
                  Батьки, педагоги та творчі люди, які розуміють потреби дітей та їх сімей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fox Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-8xl animate-wiggle">🦊</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Знайомтеся - Лисеня!
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Наш головний герой Лисеня - це кмітливе, веселе та допитливе лисенятко, 
                      яке дуже любить вчитися та пізнавати світ. Воно займається спортом, 
                      творчістю, любить жартувати та завжди готове до нових пригод!
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Разом з Лисеням діти можуть дізнатися багато цікавого про різні сфери життя, 
                      розвивати свої таланти та просто весело проводити час.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gradient-to-r from-kidsPrimary/10 to-kidsSecondary/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Хочете з нами співпрацювати?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ми завжди відкриті для нових ідей та пропозицій. Зв'яжіться з нами, 
            і давайте разом зробимо світ дітей ще яскравішим!
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-kidsPrimary text-white px-8 py-3 rounded-lg hover:bg-kidsPrimary/80 transition-colors font-semibold"
          >
            Зв'язатися з нами
          </Link>
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

export default About;
