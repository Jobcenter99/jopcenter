"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, ChevronRight, Star, ArrowRight, Building, Clock, DollarSign, Sparkles, Zap } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Ажил хайгчдад зориулсан шинэ зөвлөмж",
      text: "Ажилчдын сайн сайхан байдлыг нэмэгдүүлдэг ажлын байрны өдөр тутмын зан үйл",
      image: "/newsitems/10.jpg",
      category: "Зөвлөгөө"
    },
    {
      title: "Олон улсын жишигт нийцсэн Jobcenter",
      text: "2025 онд Аймаг, Нийслэлийн хэмжээнд 6 Жобцентр удахгүй нээгдэх юм.",
      image: "/newsitems/14.jpg",
      category: "Мэдээ"
    },
    {
      title: "Jobcenter төвүүд нээлтээ хийлээ",
      text: "2024 онд Монгол улсын хэмжээнд 4 ЖобЦентр нээгдсэн байна.",
      image: "/newsitems/15.jpg",
      category: "Онцлох"
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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent)] animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Шинэ мэдээлэл</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Онцлох мэдээ
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Шинэ мэдээлэл, зөвлөмжүүдийг нэг дороос</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {shuffledNews.map((news, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 shadow-lg">
                      {news.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{news.text}</p>
                  
                  <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:gap-2">
                    Дэлгэрэнгүй 
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    { name: 'ХХҮЕГазар', type: 'Агентлаг', logo: '🏢', rating: 4.8 },
    { name: 'МХБНХолбоо', type: 'Төрийн бус байгууллага', logo: '🏢', rating: 4.9 },
    { name: 'СХД ХХҮГ', type: 'Төрийн байгууллага', logo: '🏛️', rating: 4.7 }
  ];

  const jobCategories = [
    { icon: '💼', title: 'Бизнес', count: '1,234', growth: '+12%' },
    { icon: '💻', title: 'IT, инженеринг', count: '856', growth: '+28%' },
    { icon: '🏥', title: 'Эрүүл мэнд', count: '432', growth: '+15%' },
    { icon: '🎓', title: 'Боловсрол', count: '289', growth: '+8%' },
    { icon: '🏗️', title: 'Барилга', count: '567', growth: '+22%' },
    { icon: '🛍️', title: 'Борлуулалт', count: '723', growth: '+18%' }
  ];

  const featuredJobs = [
    {
      title: 'Төслийн менежер',
      company: 'Монголын Хөдөлмөрийн Биржүүдийн Нэгдсэн Холбоо',
      location: 'Улаанбаатар, Баянгол дүүрэг',
      salary: '2,500,000₮ - 3,500,000₮',
      type: 'Бүтэн цаг',
      posted: '7 өдрийн өмнө',
      featured: true,
      urgent: false
    },
    {
      title: 'Архив, бичиг хэргийн мэргэжилтэн',
      company: 'Монголын Хөдөлмөрийн Биржүүдийн Нэгдсэн Холбоо',
      location: 'Улаанбаатар, Баянгол дүүрэг',
      salary: '1,800,000₮ - 2,200,000₮',
      type: 'Бүтэн цаг',
      posted: '1 өдрийн өмнө',
      featured: false,
      urgent: true
    },
    {
      title: 'Борлуулалтын менежер',
      company: 'Борлуулалтын компани (Машинтай бол давуу талтай)',
      location: 'Улаанбаатар, 9 дүүрэг',
      salary: '1,200,000₮ эхэлнэ Борлуулалтын урамшуулалтай',
      type: 'Бүтэн цаг',
      posted: '3 өдрийн өмнө',
      featured: true,
      urgent: false
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
        {/* Top Section: Logo + Icons */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative p-2 rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl border border-white/30">
                <img src="/JBlogo.png" alt="Jobcenter Logo" className="h-16 w-auto rounded-xl" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-yellow-400 text-blue-900 shadow-lg animate-pulse">
                  v.01
                </span>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/20 backdrop-blur-sm">
                  BETA
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img src="/icons/ger.svg" alt="Монгол гэр" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/icons/mongol-horse.png" alt="Монгол морь" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/icons/nomadic-icon.png" alt="Нүүдэлчин" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/icons/logo.png" alt="байгууллага" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Animated Banner */}
        <div className="overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-pulse"></div>
          <div className="marquee font-semibold py-3 px-4 text-blue-900 relative z-10">
            <Zap className="w-4 h-4 inline mr-2" />
            Монголын Үндэсний Хөдөлмөр Хамгаалал, Эрүүл Ахуйн холбооны дэргэдэх Сурталчилгаа, Маркетинг, Олон нийттэй харилцах алба
          </div>
        </div>

        {/* Navigation */}
        <div className="backdrop-blur-xl bg-white/90">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <nav className="flex justify-center md:justify-start space-x-8 mb-2 md:mb-0">
              <button className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
                Мэдээ, мэдээлэл
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
                Байгууллагын танилцуулга
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
                Хамтын ажиллагаа
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </nav>
            <div className="flex justify-center md:justify-end space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Нэвтрэх
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className={`relative py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      } bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden`}>
        
        {/* Dynamic Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 opacity-20"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)] animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Шинэ платформ
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Хөдөлмөр Эрхлэлтийг
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Дэмжих төсөл
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Монголын Үндэсний Хөдөлмөр Хамгаалал, Эрүүл Ахуйн Холбоо
            <br />
            <span className="text-yellow-300 font-semibold">Мянга мянган боломж Нэг дороос</span>
          </p>

          {/* Enhanced Search Bar */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Хайж буй ажлын байр..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none text-gray-900 font-medium placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Байршил..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none text-gray-900 font-medium placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
              >
                Хайх
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced News Banner */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-4 shadow-lg">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl animate-bounce">🎉</span>
                <span className="text-blue-900 font-bold text-lg">Шинэ мэдээ</span>
              </div>
              <span className="text-gray-800 font-medium text-lg">
                Jobcenter.mn албан ёсны нээлт тун удахгүй
              </span>
            </div>
            <a
              href="https://www.facebook.com/people/Jobcentermn/61569309015026/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-blue-900 hover:text-blue-800 font-bold transition-all duration-300"
            >
              Дэлгэрэнгүй
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Stats */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '9,000+', label: 'Ажлын байр', icon: '💼' },
              { value: '10+', label: 'Jobcenter', icon: '🏢' },
              { value: '60+', label: 'Хөдөлмөрийн хувийн бирж', icon: '🤝' },
              { value: '95%', label: 'Амжилт', icon: '🎯' }
            ].map((stat, index) => (
              <div key={index} className="group transform hover:scale-105 transition-all duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />
  
      {/* Enhanced Job Categories */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Салбар, чиглэл
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Өөрт тохирох салбарыг сонгоорой</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <button 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-left transform hover:scale-105 hover:rotate-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">{category.count} ажлын байр</p>
                    <span className="text-green-600 font-semibold text-sm">{category.growth}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Jobs */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Онцлох ажлын байрны санал
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Шинэ болон хамгийн сайн ажлын байрууд
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredJobs.map((job, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        {job.featured && (
                          <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                            ОНЦЛОХ
                          </span>
                        )}
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold animate-pulse">
                            ЯАРАЛТАЙ
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-2 font-medium">{job.company}</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-800">
                      <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-bold">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.posted}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Дэлгэрэнгүй
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Бүх ажил үзэх
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Companies */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Хамтрагч байгууллагууд
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Монголын тэргүүлэх компаниудтай хамтран ажиллах</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{company.type}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{company.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.2),transparent)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Шинэ боломж
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Карьерын шинэ алхам
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Өнөөдөр эхлэж, мянга мянган боломжийг ашиглаарай
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Ажил горилогч
              </span>
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="flex items-center justify-center">
                <Building className="w-5 h-5 mr-2" />
                Ажил олгогч
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 border-t border-white/50 shadow-2xl py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.1),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-gray-800 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="relative inline-block">
                  <img src="/JBlogo.png" alt="Jobcenter Logo" className="h-20 w-auto mx-auto md:mx-0 rounded-2xl shadow-lg" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Монголын тэргүүлэх ажлын байрны платформ
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">F</span>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">T</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 mb-6 text-xl">Ажил горилогч</h3>
              <ul className="space-y-3">
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Ажил хайх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Анкет үүсгэх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Зөвлөгөө</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Карьерын хөгжил</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 mb-6 text-xl">Ажил олгогч</h3>
              <ul className="space-y-3">
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Ажил нэмэх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Анкет хайх</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Үнийн санал</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Компанийн профайл</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 mb-6 text-xl">Тусламж</h3>
              <ul className="space-y-3">
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Холбоо барих</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Утас 9800-9230</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Нууцлал</button></li>
                <li><button className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Үйлчилгээний нөхцөл</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 mt-16 pt-8 text-center">
            <p className="text-gray-600">
              &copy; 2025 <span className="text-blue-700 font-bold">Jobcenter.mn</span>. Бүх эрх хуулиар хамгаалагдсан.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Тусгай хөгжүүлэлт v.01 - Монголын хөдөлмөрийн зах зээлийн шинэ боломж
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}