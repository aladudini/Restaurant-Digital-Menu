import { useState, useEffect } from 'react';
import { Pizza, Salad, Sandwich, UtensilsCrossed, Cake, Coffee, ChevronDown, MessageCircle, Flame, ArrowUp, EggFried, Soup, Popcorn, ChefHat, Drumstick, Beef, } from 'lucide-react';
import Logo from './img/images-removebg-preview.png';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  secondaryPrice?: string;
  isSpecial?: boolean;
}

interface MenuSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const RestaurantLogo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <svg
      viewBox="0 0 120 120"
      className={`${sizes[size]} animate-fade-in`}
      xmlns="http://www.w3.org/2000/svg"
    >
     <image
    href={Logo}
    x="0"
    y="0"
    width="120"
    height="120"
  />
    </svg>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('ushqime-kryesore');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const restaurantName = "Elan Restaurant";
  const tagline = "Shije që nuk harrohet";
  const whatsappNumber = "+355123456789";

  const menuSections: MenuSection[] = [
    {
      id: 'mengjesi',
      title: 'Mëngjesi',
      icon: <EggFried className="w-5 h-5" />,
      items: [
        { name: 'Omlet Natyral', description: 'Domate, tranguj, long', price: '2.50' },
        { name: 'Omlet Proshutë', description: 'Proshutë, domate, tranguj, long', price: '2.70' },
        { name: 'Omlet Vegjetarian', description: 'Perime të freskëta, domate, tranguj, long', price: '2.70' },
        { name: 'Omlet MIX', description: 'Proshutë, suxhuk, këpurdha, domate, tranguj, long', price: '3.20' },
        { name: 'Mëngjes Anlgez', description: 'Bukë tost, vezë, virshlle, proshtuë, suxhuk, fasule, domatina', price: '3.70' },
        { name: 'Mëngjes ELAN', description: 'Pogaqe, vezë, ajvar, long, suxhuk, proshutë, djath, kaçkavall, xhem', price: '3.90' },
        { name: 'Llokuma', description: 'ajvar, xhem, long', price: '2.50' },
        { name: 'Pogaqe dhe long të shtëpisë', description: '', price: '2.50' },
        { name: 'Specë në mazë', description: '', price: '2.70' },
      ]
    },
    {
      id: 'supa',
      title: 'Supë Ditore',
      icon: <Soup className="w-5 h-5" />,
      items: [
        { name: 'Supë Pule', description: '', price: '1.90' },
        { name: 'Supë me perime', description: '', price: '1.90' },
        { name: 'Supë me domate', description: '', price: '2.10' },
        { name: 'Supë Viçi', description: '', price: '2.10' },
      ]
    },
    {
      id: 'snacks',
      title: 'Snacks',
      icon: <Popcorn className="w-5 h-5" />,
      items: [
        { name: 'Chicken Finger', description: 'Mish pule në brezëll, pomfrit, sweet chilly sos, sos mix', price: '4.70'},
        { name: 'Krahë pule', description: 'Krahë pule, pomfrit, sos mix, barbeque sos', price: '4.20' },
        { name: 'Chicken nuggets', description: 'Copa pule, pomfrit, sos mix, barbeque sos', price: '4.50' },
        { name: 'Këpurdha me djath në furrë', description: 'Këpurdha të freskëta, djath dhe pesto', price: '3.50' },
        { name: 'Antipastë e ngrohtë', description: 'Mish viçi, nugeta pule, këpurdha, domatina, proshutë, suxhuk, sos barbeque, sweet chilly sos', price: '8.90' },
        { name: 'Antiapstë e ftohtë', description: 'Sos domatesh, mish viçi, spec, qepë, këpurdha, kaçkavall, këpurdha, pomfrit', price: '4.90' },
        { name: 'BRUSKETA', description: 'Domate, hudhër, origano, ullinjë dhe pesto', price: '2.90' },
      ]
    },
    {
      id: 'sallata-fresketa',
      title: 'Sallata të Freskëta',
      icon: <Salad className="w-5 h-5" />,
      items: [
        { name: 'Sallatë Shope', description: 'Tranguj, domate, qepë, djathë', price: '2.50' },
        { name: 'Sallatë Greke', description: 'Tranguj, domate, specë, uulinjë, djath', price: '2.50' },
        { name: 'Sallatë MIX', description: 'Sallatë e gjelbër, lakër e kuqe/bardhë, domate, tranguj, specë, ullinjë ', price: '2.90' },
        { name: 'Sallatë Tuna', description: 'Sallatë e gjelbër, tranguj, domate, specë, qepë, misër, vezë, tuna', price: '3.50' },
        { name: 'Sallatë Pule', description: 'Sallatë e gjelbër, tranguj, domate, specë, qepë, djath, mish pule', price: '4.00' },
        { name: 'Sallatë ELAN', description: 'Sallatë e gjelbër, tranguj, domate, specë, proshutë, kaçkavall, djath, sos permezan', price: '4.00' },
      ]
    },
    {
      id: 'samun',
      title: 'Samun',
      icon: <Sandwich className="w-5 h-5" />,
      items: [
        { name: 'Samun proshutë', description: 'Proshutë, kaçkavall, long shtëpie', price: '2.90' },
        { name: 'Samun suxhuk', description: 'Suxhuk, kaçkavall, long shtëpie', price: '2.90' },
        { name: 'Samun MIX', description: 'Proshutë, suxhuk, këpurdha, kaçkavall dhe long shtëpie', price: '3.20' },
        ]
    },
    {
      id: 'pasta',
      title: 'Pasta',
      icon: <ChefHat className="w-5 h-5" />,
      items: [
        { name: 'Bolonez', description: 'Mish viçi, sos domatesh', price: '4.00' },
        { name: 'Karbonara', description: 'Proshutë, krem sos, vezë, parmezan', price: '4.00' },
        { name: 'Napoli', description: 'Sos domatesh, spec, qepë, hudhër, dhe magdanoz', price: '4.00' },
        { name: 'Vegjetariane', description: 'Prime të freskëta dhe sos domatesh', price: '3.80' },
        { name: 'Frutti di mare', description: 'Fruta deti, hudhër, qepë dhe spec', price: '4.70' },
        { name: 'Makarona pule pesto', description: 'Mish pule, këpurdha të freskëta, sos pesto', price: '4.70' },
        { name: 'Makaronë ELAN', description: 'Mish viçi, spec, qepë, këpurdha, sos alfredo, sos, kaçkavall', price: '4.50' },
        { name: 'Llazanje', description: 'Mish viçi, beshamell, kaçkavall dhe sos domatesh', price: '4.50' },
      ]
    },
    {
      id: 'rizoto',
      title: 'Rizoto',
      icon: <Soup className="w-5 h-5" />,
      items: [
        { name: 'Rizoto pule', description: 'oriz, mish pule, sos curry ose këpurdhave', price: '3.90' },
        { name: 'Rizoto pule me perime', description: 'mish pule, perime, oriz', price: '4.20' },
        { name: 'Rizoto vegjetariane', description: 'oriz dhe perime', price: '3.90' },
        { name: 'Burrito pule', description: 'tortilla, mish pule, spec i kuq, qepë, spec i gjelbër, sos mix, oriz, sallat', price: '3.50' },
        { name: 'Burrito Viçi', description: 'tortilla, mish viçi, spec i kuq, qepë, spec i gjelbër, sos mix, oriz, sallat', price: '5.50' },
      ]
    },
    {
      id: 'pizza',
      title: 'Pizza',
      icon: <Pizza className="w-5 h-5" />,
      items: [
        { name: 'Pizza margarita', description: 'sos domatesh, kaçkavall', price: '3.00 ', secondaryPrice: '4.00' },
        { name: 'Pizza proshutë', description: 'sos domatesh, kaçkavall, proshutë', price: '4.00 ', secondaryPrice: '5.00' },
        { name: 'Pizza suxhuk', description: 'sos domatesh, kaçkavall, këpurdha të freskëta', price: '4.00 ', secondaryPrice: '5.00' },
        { name: 'Pizza fungi', description: 'sos domatesh, kaçkavall, këpurdha të freskëta', price: '4.00 ', secondaryPrice: '5.00' },
        { name: 'Pizza tuna', description: 'sos domatesh, kaçkavall, tuna', price: '4.00 ', secondaryPrice: '5.00' },
        { name: 'Pizza vegjetariane', description: 'sos domatesh, kaçkavall, perime të freskëta', price: '3.50 ', secondaryPrice: '4.80' },
        { name: 'Pizza frutti di mare', description: 'sos domatesh, kaçkavall, fruta deti', price: '4.50 ', secondaryPrice: '5.50' },
        { name: 'Pizza ELAN', description: 'sos domatesh, kaçkavall, proshutë e terur, suxhuk, kërpudha, vezë dhe spec', price: '4.00 ', secondaryPrice: '5.00' },
        { name: 'Pizza Familjare', description: '60cm', price: '13.90 '},
        
      ]
    },
    {
      id: 'hamburger',
      title: 'Hamburger',
      icon: <Sandwich className="w-5 h-5" />,
      items: [
        { name: 'Hamburger classic', description: 'Pleskavic, sallat e gjelbër, tranguj, domate, sos, pomfrit', price: '3.00' },
        { name: 'Hamburger ELAN', description: 'Pleskavic, vezë, proshutë, cheese, sallat e gjelbër, tranguj, domate, sos, pomfrit', price: '3.50' },
        { name: 'Double burger', description: '2x pleskavic, vezë, proshutë, cheese, sallat e gjelbër, tranguj, domate, sos, pomfrit', price: '5.00' },
        { name: 'Cheese burger', description: 'pleskavic, cheese, pomfrit, sos', price: '3.00' },
        { name: 'Crispy chicken burger', description: 'Crispy chicken, domate, tranguj, sos, pomfrit', price: '3.00' },
        { name: 'Crispy fish burger', description: 'Crispy fish, domate, tranguj, sallatë e gjelbër, sos, pomfrit', price: '4.00' },
      ]
    },
    {
      id: 'mish-pule',
      title: 'Mish Pule',
      icon: <Drumstick className="w-5 h-5" />,
      items: [
        { name: 'Fileto pule', description: 'Perime të freskëta, oriz, sos dhe pomfrit', price: '4.50' },
        { name: 'Pulë indiane', description: 'Perime të freskëta, oriz, sos curry dhe pomfrit', price: '4.80' },
        { name: 'Pulë meksikane', description: 'Perime të freskëta, oriz, sos meksikan dhe pomfrit', price: '4.80' },
        { name: 'Gorden blue', description: 'Msih pule në prezëll, perime të freskëta, proshutë, oriz, sos', price: '5.50' },
        { name: 'Schnitzel pule', description: 'Mish pule në prezëll, pomfrit, oriz, sos dhe lemon', price: '5  .00' },
      ]
    },
    {
      id: 'mishrat',
      title: 'Mishrat',
      icon: <Beef className="w-5 h-5" />,
      items: [
        { name: 'Ramstek viçi', description: 'Pyre patate, perime, sos shtëpie', price: '7.70' },
        { name: 'Biftek viçi', description: 'Pyre patate, perime, sos shtëpie', price: '12.50' },
        { name: 'Biftek në tavë', description: 'Biftek, këprudha, spec, sos shtëpie', price: '12.50' },
        { name: 'Muskuj viçi', description: 'Pyre patate, perime, sos shtëpie', price: '7.90' },
        { name: 'Kombinim mishi', description: 'Pyre patate, perime, sos shtëpie', price: '9.00' },
        { name: 'Pleskavicë ELAN', description: 'Pleskavicë 200gr, domate, tranguj, sos këpurdhash', price: '4.50' },
        { name: 'Pleskavicë e mbushur', description: 'Pleskavicë, proshutë, kaçkavall, domate, tranguj, sos këpurdhash', price: '4.90' },
        { name: 'Qofte me sos dhe hudhër', description: '6 qofte, sos djegës dhe hudhër', price: '4.50' },
        { name: 'Qofte në kajmak', description: '6 qofte në mazë', price: '4.50' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const sections = menuSections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: Math.abs(rect.top)
          };
        }
        return { id: section.id, top: Infinity };
      });

      const closest = sections.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );

      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsNavVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        .menu-item {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#D23C37] via-red-600 to-orange-600 text-white py-10 px-4 text-center shadow-2xl">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 inline-block transform hover:scale-110 transition-transform duration-300">
            <RestaurantLogo size="md" />
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-wider">{restaurantName}</h1>
          <p className="text-orange-100 text-lg font-light italic">{tagline}</p>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white shadow-lg z-40 border-b-4 border-red-500">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setIsNavVisible(!isNavVisible)}
            className="w-full px-4 py-4 flex items-center justify-between text-gray-800 hover:bg-red-50 transition-colors font-semibold"
          >
            <span className="flex items-center gap-2 text-red-600">
              {menuSections.find(s => s.id === activeSection)?.icon}
              {menuSections.find(s => s.id === activeSection)?.title}
            </span>
            <ChevronDown className={`w-5 h-5 text-red-600 transition-transform ${isNavVisible ? 'rotate-180' : ''}`} />
          </button>

          {isNavVisible && (
            <div className="border-t-2 border-red-200 bg-red-50">
              {menuSections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-all border-b border-red-100 ${
                    activeSection === section.id
                      ? 'bg-red-100 text-red-700 font-bold'
                      : 'text-gray-700 hover:bg-red-50'
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span className={activeSection === section.id ? 'text-red-600' : 'text-red-500'}>
                    {section.icon}
                  </span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Menu Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 pb-28">
        {menuSections.map((section, sectionIdx) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-40">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-3 border-red-500">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
            </div>

            <div className="space-y-5">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className={`menu-item bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border-l-4 ${
                    item.isSpecial ? 'border-l-red-600 bg-red-50' : 'border-l-orange-300'
                  } hover:scale-102 cursor-pointer transform hover:translate-y-[-2px]`}
                  style={{ animationDelay: `${sectionIdx * 0.1 + index * 0.05}s` }}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                        {item.isSpecial && (
                          <span className="inline-flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                            <Flame className="w-3 h-3" /> Specialitet
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-red-600">€{item.price}</span>
                      <span className="text-2xl font-black text-red-600">€{item.secondaryPrice}</span>

                    </div>
                  </div>
                </div>  
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-50 animate-fade-in"
          aria-label="Kthehu në krye"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-12 px-4 text-center border-t-4 border-red-600">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 inline-block">
            <RestaurantLogo size="md" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{restaurantName}</h3>
          <p className="text-orange-100 mb-6 text-lg font-light">{tagline}</p>
          <p className="text-gray-300 mb-4 text-base">Ju faleminderit për vizitën</p>
          <p className="text-gray-400 text-sm">Skanoni sërish kodin QR për menunë</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
