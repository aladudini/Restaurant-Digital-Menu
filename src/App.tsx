import { useState, useEffect } from 'react';
import { Pizza, Salad, Sandwich, UtensilsCrossed, Cake, Coffee, ChevronDown, MessageCircle, Flame, ArrowUp } from 'lucide-react';
import Logo from './img/images-removebg-preview.png';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
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
      id: 'ushqime-kryesore',
      title: 'Ushqime Kryesore',
      icon: <Pizza className="w-5 h-5" />,
      items: [
        { name: 'Tavë Kosi', description: 'Mish qengji me kos dhe oriz basmati', price: '9.50', isSpecial: true },
        { name: 'Qofte të Fërguara', description: 'Qofte tradicionale me spec dhe domate', price: '7.00' },
        { name: 'Byrek me Spinaq', description: 'Byrek i freskët me spinaq dhe djathë', price: '5.50' },
        { name: 'Fergese Tirane', description: 'Mish viçi me spec dhe domate', price: '8.50' },
        { name: 'Pule me Oriz', description: 'Gjoks pule i grilluar me oriz me erëza', price: '8.00' },
      ]
    },
    {
      id: 'fastfood',
      title: 'Fast Food',
      icon: <Sandwich className="w-5 h-5" />,
      items: [
        { name: 'Hamburger Premium', description: 'Mish viçi i freskët, salce speshale', price: '6.50' },
        { name: 'Cheeseburger Deluxe', description: 'Hamburger me djathë cheddar të ngrohtë', price: '7.00' },
        { name: 'Panini Pule', description: 'Pule e grilluar me perime të freskëta', price: '6.00' },
        { name: 'Hot Dog Tradicional', description: 'Suxhuk me salce speciale dhe qepë', price: '4.50' },
        { name: 'Patate të Skuqura', description: 'Porcion i madh patate të skuqura të ngrohta', price: '3.50' },
      ]
    },
    {
      id: 'sallata-fresketa',
      title: 'Sallata të Freskëta',
      icon: <Salad className="w-5 h-5" />,
      items: [
        { name: 'Sallate Greke', description: 'Domate, kastravec, ullinj, djathë feta', price: '6.00' },
        { name: 'Sallate Jeshile', description: 'Marule, ruke, spinaq me vaj ulliri premium', price: '5.50' },
        { name: 'Sallate Caesar', description: 'Marule romaine, pule, parmesan, krutonet', price: '7.50' },
        { name: 'Sallate Stine', description: 'Domate, kastravec, qepë, spec me vaj ulliri', price: '5.00' },
      ]
    },
    {
      id: 'specialitete-shtepie',
      title: 'Specialitete të Shtëpisë',
      icon: <Flame className="w-5 h-5" />,
      items: [
        { name: 'Biftek me Spec', description: 'Biftek viçi i matur me spec të kuq dhe të gjelbër', price: '14.00', isSpecial: true },
        { name: 'Peshk i Pjekur', description: 'Koran i freskët me perime dhe limon', price: '15.50' },
        { name: 'Midhje me Erëza', description: 'Midhje të detit me salcë domate dhe hudhra', price: '12.00' },
        { name: 'Pasta Carbonara', description: 'Pasta me krem, panceta dhe parmesan të freskët', price: '9.50' },
        { name: 'Risotto me Kërpudha', description: 'Oriz arborio me kërpudha të freskëta dhe parmesan', price: '10.00' },
      ]
    },
    {
      id: 'embelsira',
      title: 'Ëmbëlsira',
      icon: <Cake className="w-5 h-5" />,
      items: [
        { name: 'Bakllava', description: 'Bakllava tradicionale me arra dhe mjaltë të rrallë', price: '4.50' },
        { name: 'Trilece', description: 'Ëmbëlsirë me tre lloje qumështi dhe mjalti', price: '5.00' },
        { name: 'Tiramisu', description: 'Ëmbëlsirë italiane me kafe dhe mascarponë', price: '5.50' },
        { name: 'Akullore', description: 'Tre topa akullore me aromë në zgjedhje', price: '4.00' },
        { name: 'Sufle me Çokollatë', description: 'Sufle i ngrohtë çokollate me akullore vanile', price: '6.00' },
      ]
    },
    {
      id: 'pije-freskuese',
      title: 'Pije & Freskuese',
      icon: <Coffee className="w-5 h-5" />,
      items: [
        { name: 'Kafe Espresso', description: 'Kafe e fortë italiane e freskët', price: '2.00' },
        { name: 'Cappuccino', description: 'Espresso me qumësht dhe shkumë të përsosur', price: '2.50' },
        { name: 'Lëng Natyral Frutash', description: 'Portokalli, mollë ose pjeshkë të freskëta', price: '3.50' },
        { name: 'Coca Cola / Fanta', description: 'Pije freskuese - 330ml', price: '2.50' },
        { name: 'Ujë Mineral', description: 'Ujë mineral të ftohtë - 500ml', price: '1.50' },
        { name: 'Verë e Kuqe / e Bardhë', description: 'Verë e zgjedhur - Gotë 150ml', price: '4.50' },
        { name: 'Birrë Vendase', description: 'Birrë shqiptare premium - 330ml', price: '3.00' },
      ]
    }
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

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Përshëndetje! Dëshiroj të porosit nga ${restaurantName}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
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
          className="fixed bottom-28 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-50 animate-fade-in"
          aria-label="Kthehu në krye"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppOrder}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all z-50 flex items-center gap-2 font-bold text-sm"
        aria-label="Porosit në WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Porosit</span>
      </button>

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
          <div className="mt-6 flex justify-center gap-4">
            <div className="text-center">
              <p className="text-orange-300 text-sm font-semibold">Nyje në Instagram</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
