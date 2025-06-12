"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, ChevronRight, Star, ArrowRight, Building, Clock, DollarSign } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Ажил хайгчдад зориулсан шинэ зөвлөмж",
      text: "Ажилчдын сайн сайхан байдлыг нэмэгдүүлдэг ажлын байрны өдөр тутмын зан үйл",
      image: "/newsitems/10.jpg",
    },
    {
      title: "Ажил олгогчдод зориулсан сургалт",
      text: "Хүний нөөцийн шилдэг аргачлалууд.",
      image: "/newsitems/11.jpg",
    },
    {
      title: "Jobcenter.mn албан ёсоор нээгдлээ",
      text: "Манай шинэ платформ одоо бүрэн хүчин чадлаар ажиллаж байна.",
      image: "/newsitems/12.jpg",
    },
        {
      title: "Jobcenter.mn албан ёсоор нээгдлээ",
      text: "Манай шинэ платформ одоо бүрэн хүчин чадлаар ажиллаж байна.",
      image: "/newsitems/13.jpg",
    },
    {
      title: "Олон улсын жишигт нийцсэн Jobcenter",
      text: "2025 онд Аймаг, Нийслэлийн хэмжээнд 6 Жобцентр удахгүй нээгдэх юм.",
      image: "/newsitems/14.jpg",
    },
    {
      title: "Jobcenter төвүүд нээлтээ хийлээ",
      text: "2024 онд Монгол улсын хэмжээнд 4 ЖобЦентр нээгдсэн байна.",
      image: "/newsitems/15.jpg",
    },
  ];

  const [shuffledNews, setShuffledNews] = useState(newsItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledNews((prev) => [...prev].sort(() => 0.5 - Math.random()));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white/40 to-blue-100 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Онцлох мэдээ</h2>
          <p className="text-gray-600">Шинэ мэдээлэл, зөвлөмжүүдийг нэг дороос</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {shuffledNews.map((news, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white/40 overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-blue-200"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{news.text}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-all">
                  Дэлгэрэнгүй <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function JobCenterLanding() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    '/hero-backgrounds/bg1.jpg',
    '/hero-backgrounds/bg2.jpg',
    '/hero-backgrounds/bg3.jpg',
    '/hero-backgrounds/bg4.jpg',
    '/hero-backgrounds/bg5.jpg',
    '/hero-backgrounds/bg6.jpg',
    '/hero-backgrounds/bg7.jpg',
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    { name: 'ХХҮЕГазар', type: 'Агентлаг', logo: '🏢' },
    { name: 'МХБНХолбоо', type: 'Төрийн бус байгууллага', logo: '🏢' },
    { name: 'СХД ХХҮГ', type: 'Төрийн байгууллага', logo: '🏛️' }
  ];

  const jobCategories = [
    { icon: '💼', title: 'Бизнес', count: '1,234' },
    { icon: '💻', title: 'IT, инженеринг', count: '856' },
    { icon: '🏥', title: 'Эрүүл мэнд', count: '432' },
    { icon: '🎓', title: 'Боловсрол', count: '289' },
    { icon: '🏗️', title: 'Барилга', count: '567' },
    { icon: '🛍️', title: 'Борлуулалт', count: '723' }
  ];

  const featuredJobs = [
    {
      title: 'Төслийн менежер',
      company: 'Монголын Хөдөлмөрийн Биржүүдийн Нэгдсэн Холбоо',
      location: 'Улаанбаатар, Баянгол дүүрэг',
      salary: '2,500,000₮ - 3,500,000₮',
      type: 'Бүтэн цаг',
      posted: '7 өдрийн өмнө'
    },
    {
      title: 'Архив, бичиг хэргийн мэргэжилтэн',
      company: 'Монголын Хөдөлмөрийн Биржүүдийн Нэгдсэн Холбоо',
      location: 'Улаанбаатар, Баянгол дүүрэг',
      salary: '1,800,000₮ - 2,200,000₮',
      type: 'Бүтэн цаг',
      posted: '1 өдрийн өмнө'
    },
    {
      title: 'Борлуулалтын менежер',
      company: 'Борлуулалтын компани (Машинтай бол давуу талтай)',
      location: 'Улаанбаатар, 9 дүүрэг',
      salary: '1,200,000₮ эхэлнэ Борлуулалтын урамшуулалтай',
      type: 'Бүтэн цаг',
      posted: '3 өдрийн өмнө'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
  };

  const handleKeyPress = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-gradient-to-r from-blue-400/80 via-blue-400/60 to-yellow-400/60 shadow-md border-b border-blue-200/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <img src="/JBlogo.png" alt="Jobcenter Logo" className="h-auto w-80" />
              <span className="text-auto text-yellow-500 bg-blue-100 px-2 py-1 rounded-full">v.01</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Сургалт</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Байгууллага</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Зөвлөгөө</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Нэвтрэх</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* News Banner */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-4">
        <div className="max-w-6xl mx-auto px-10">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="text-blue-600 font-medium">🎉Шинэ мэдээ🎉</span>
            <span className="text-gray-700">Jobcenter.mn албан ёсны нээлт тун удахгүй</span>
            <a
              href="https://www.facebook.com/people/Jobcentermn/61569309015026/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Дэлгэрэнгүй →
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className={`relative py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        } bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden shadow-xl rounded-lg`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-800"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        />

        {/* Optional Decorative Clouds */}
        <div className="absolute inset-0 bg-[url('/clouds.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg">
            Мөрөөдлийн ажлаа
            <br />
            <span className="text-blue-700 drop-shadow-xl">олоорой</span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Монголын Үндэсний Хөдөлмөр Хамгаалал, Эрүүл Ахуйн Холбоо. 
             <br />
             <span className="text-blue-700 drop-shadow-xl">Мянга мянган боломж Нэг дороос</span>
           </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Хайж буй ажлын байр..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Байршил..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-900"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-colors"
              >
                Хайх
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">9,000+</div>
              <div className="text-2xl text-gray-600">Ажлын байр</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-2xl text-gray-600">Jobcenter</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">60+</div>
              <div className="text-2xl text-gray-600">Хөдөлмөрийн хувийн бирж</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-2xl text-gray-600">Амжилт</div>
            </div>
          </div>
        </div>
      </section>

      {/* News shuffling section*/}
      <NewsSection />
  
      {/* Job Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Салбар, чиглэл</h2>
            <p className="text-gray-600">Өөрт тохирох салбарыг сонгоорой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <button key={index} 
                  className="bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all text-left group transform hover:scale-105"
                >
                <div className="text-3xl mb-3 drop-shadow">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors drop-shadow-sm">
               {category.title}
               </h3>
               <p className="text-gray-600 text-sm">{category.count} ажлын байр</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow mb-4">
              Онцлох ажлын байрны санал
            </h2>
            <p className="text-gray-600 text-lg">
              Шинэ болон хамгийн сайн ажлын байрууд
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 drop-shadow-sm">
                      {job.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-1">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <p className="text-gray-800 font-semibold">{job.salary}</p>
                  <p className="text-gray-500">{job.posted}</p>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all shadow-md hover:shadow-lg">
                  Дэлгэрэнгүй
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition">
              Бүх ажил үзэх
            </button>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Хамтрагч байгууллагууд</h2>
            <p className="text-gray-600">Монголын тэргүүлэх компаниудтай хамтран ажиллах</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
                <div className="text-3xl mb-4">{company.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-gray-600 text-sm">{company.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Карьерын шинэ алхам</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Өнөөдөр эхлэж, мянга мянган боломжийг ашиглаарай
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors">
              Ажил горилогч
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
              Ажил олгогч
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-100/60 via-white/40 to-blue-300/50 backdrop-blur-md border-t border-white/30 shadow-inner py-16">
        <div className="max-w-6xl mx-auto px-6 text-gray-800">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center md:text-left">
              <div className="mb-4">
                <img src="/JBlogo.png" alt="Jobcenter Logo" className="h-auto w-60 mx-auto md:mx-0 drop-shadow" />
              </div>
              <p className="text-sm text-gray-700">
                Монголын тэргүүлэх ажлын байрны платформ
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-4 text-lg">Ажил горилогч</h3>
              <ul className="space-y-2 text-sm">
                <li><button className="text-gray-700 hover:text-blue-700 transition">Ажил хайх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Анкет үүсгэх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Зөвлөгөө</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-4 text-lg">Ажил олгогч</h3>
              <ul className="space-y-2 text-sm">
                <li><button className="text-gray-700 hover:text-blue-700 transition">Ажил нэмэх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Анкет хайх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Үнийн санал</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-4 text-lg">Тусламж</h3>
              <ul className="space-y-2 text-sm">
                <li><button className="text-gray-700 hover:text-blue-700 transition">Холбоо барих</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Утас 9800-9230</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition">Нууцлал</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2025 <span className="text-blue-700 font-medium">Jobcenter.mn</span>. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}