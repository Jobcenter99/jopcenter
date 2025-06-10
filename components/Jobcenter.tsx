'use client';
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, ChevronRight, Star, ArrowRight, Building, Clock, DollarSign } from 'lucide-react';

export default function JobCenterLanding() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companies = [
    { name: 'МСДИ КОНСАЛТИНГ ГРУПП', type: 'Хөгжлийн зөвлөх харилцагч компани', logo: '🏢' },
    { name: 'И ЭМ ТЕХНОЛОГИ', type: 'Хүүхэд хөгжлийн харилцагч компани', logo: '💻' },
    { name: 'Хан-Уул дүүрэг', type: 'Засгийн газар', logo: '🏛️' }
  ];

  const jobCategories = [
    { icon: '💼', title: 'Бизнес & Менежмент', count: '1,234' },
    { icon: '💻', title: 'IT & Технологи', count: '856' },
    { icon: '🏥', title: 'Эрүүл мэнд', count: '432' },
    { icon: '🎓', title: 'Боловсрол', count: '289' },
    { icon: '🏗️', title: 'Барилга', count: '567' },
    { icon: '🛍️', title: 'Борлуулалт', count: '743' }
  ];

  const featuredJobs = [
    {
      title: 'Програм хөгжүүлэгч',
      company: 'И ЭМ Технологи',
      location: 'Улаанбаатар',
      salary: '1,500,000₮ - 2,500,000₮',
      type: 'Бүтэн цаг',
      posted: '2 өдрийн өмнө'
    },
    {
      title: 'Маркетингийн менежер',
      company: 'МСДИ Консалтинг',
      location: 'Хан-Уул дүүрэг',
      salary: '1,200,000₮ - 1,800,000₮',
      type: 'Бүтэн цаг',
      posted: '1 өдрийн өмнө'
    },
    {
      title: 'Дизайнер',
      company: 'Креатив Студио',
      location: 'Улаанбаатар',
      salary: '800,000₮ - 1,200,000₮',
      type: 'Хагас цаг',
      posted: '3 өдрийн өмнө'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold text-2xl">
                  <span className="text-yellow-400">Job</span>center<span className="text-yellow-400">.mn</span>
                </span>
              </div>
              <span className="text-gray-600 font-medium border-2 border-gray-300 px-3 py-1 rounded-full">Хөдөлмөр эрхлэлтийг дэмжих</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ажлын байр</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Компаниуд</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Зөвлөгөө</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Холбоо барих</button>
            </nav>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">
                Мэдээ
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">
                Нэвтрэх
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Expanded News Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main News Banner */}
          <div className="flex items-center justify-center space-x-4 text-white mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                  J.mn
                </div>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">ШИНЭ МЭДЭЭ:</span>
            </div>
            <div className="flex-1 text-center">
              <p className="font-medium text-white">
                🎉 Jobcenter.mn албан ёсны мэдээллийн цогц веб сайт нээлтээ хийлээ
              </p>
            </div>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all text-sm font-medium">
              Дэлгэрэнгүй →
            </button>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-yellow-200">2025.06.10</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Ажлын байрны зах зээл өсөж байна</h3>
              <p className="text-sm text-gray-100 mb-4">IT салбарт 2,500 шинэ ажлын байр нэмэгдэж, цалин 15% өссөн байна.</p>
              <button className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Унших →
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-2 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-yellow-200">2025.06.08</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Шинэ хамтрагч компаниуд</h3>
              <p className="text-sm text-gray-100 mb-4">50 гаруй том компани манай платформд нэгдэж, 1000+ ажлын байр нэмэгдлээ.</p>
              <button className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Унших →
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-2 rounded-lg mr-3">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-yellow-200">2025.06.05</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Карьерийн зөвлөгөө үйлчилгээ</h3>
              <p className="text-sm text-gray-100 mb-4">Мэргэжлийн зөвлөхүүдээс үнэгүй карьерийн зөвлөгөө авах боломжтой боллоо.</p>
              <button className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                Унших →
              </button>
            </div>
          </div>

          {/* News Ticker */}
          <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center space-x-4 text-white">
              <span className="font-bold text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">МЭДЭЭЛЭЛ</span>
              <div className="flex-1 overflow-hidden">
                <div className="animate-pulse">
                  <span className="text-sm">
                    📊 Өнөөдөр 250 шинэ ажлын байр нэмэгдлээ • 
                    🎯 1,200 хүн ажилд орлоо • 
                    💼 Хамгийн их хайгдаж буй мэргэжил: Програмист, Дизайнер, Менежер
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Мөрөөдлийн ажлаа
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> олоорой</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Монгол улсын хамгийн том ажлын байрны цахим сайт. Мянга мянган ажлын байрны мэдээгэсолого, 
            мэргэжлийн зөвлөгөө болон карьерийн хөгжлийн боломжууд.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ажлын нэр, үгс..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Байршил..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg">
                Хайх
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-gray-500 text-sm">Түгээмэл хайлтууд:</span>
              {['Програмист', 'Менежер', 'Дизайнер', 'Борлуулалт', 'Нягтлан бодогч'].map((tag) => (
                <button key={tag} className="bg-gray-100 hover:bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Идэвхтэй ажлын байр</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-100">Итгэмжлэгдсэн компани</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Бүртгэлтэй хэрэглэгч</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Амжилттай тавигдсан</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ажлын чиглэлүүд</h2>
            <p className="text-xl text-gray-600">Өөрт тохирох салбарыг сонгож, мөрөөдлийн ажлаа олоорой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.count} ажлын байр</p>
                <button className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors">
                  Үзэх <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Онцлох ажлын байрууд</h2>
            <p className="text-xl text-gray-600">Шинэ болон хамгийн сайн ажлын байрнуудыг танилцуулж байна</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredJobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                    <p className="text-gray-600 flex items-center mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      {job.company}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{job.type}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-900 font-semibold flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                    {job.salary}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.posted}
                  </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors group-hover:shadow-lg">
                  Дэлгэрэнгүй үзэх
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center mx-auto">
              Бүх ажлын байр үзэх <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Хамтрагч компаниуд</h2>
            <p className="text-xl text-gray-600">Монгол улсын тэргүүлэх компаниудтай хамтран ажиллаж байна</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                <div className="text-6xl mb-6">{company.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-6">{company.type}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Компанийн хуудас үзэх →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Карьерын шинэ алхамаа эхлээрэй</h2>
          <p className="text-xl text-blue-100 mb-10">
            Өнөөдөр бүртгүүлж, мянга мянган ажлын байрны боломжийг ашиглаарай
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Ажил ологчоор бүртгүүлэх
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all">
              Ажил олгогчоор бүртгүүлэх
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-xl mb-4 inline-block">
                <span className="text-yellow-400">Job</span>center<span className="text-yellow-400">.mn</span>
              </div>
              <p className="text-gray-400 mb-4">Монгол улсын тэргүүлэх ажлын байрны цахим сайт</p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">📘</button>
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">📷</button>
                <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">🐦</button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Ажил ологчдод</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">Ажлын байр хайх</button></li>
                <li><button className="hover:text-white transition-colors text-left">Анкет үүсгэх</button></li>
                <li><button className="hover:text-white transition-colors text-left">Карьерийн зөвлөгөө</button></li>
                <li><button className="hover:text-white transition-colors text-left">Цалингийн хэмжээ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Ажил олгогчдод</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">Ажлын байр нэмэх</button></li>
                <li><button className="hover:text-white transition-colors text-left">Анкет хайх</button></li>
                <li><button className="hover:text-white transition-colors text-left">Үйлчилгээний үнэ</button></li>
                <li><button className="hover:text-white transition-colors text-left">Компанийн хуудас</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Тусламж</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">Холбоо барих</button></li>
                <li><button className="hover:text-white transition-colors text-left">Түгээмэл асуулт</button></li>
                <li><button className="hover:text-white transition-colors text-left">Нөхцөл заавар</button></li>
                <li><button className="hover:text-white transition-colors text-left">Нууцлалын бодлого</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jobcenter.mn Хөдөлмөр эрхлэлтийг дэмжих. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}