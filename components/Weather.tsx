"use client";
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
    { name: 'МСДИ КОНСАЛТИНГ', type: 'Зөвлөх үйлчилгээ', logo: '🏢' },
    { name: 'И ЭМ ТЕХНОЛОГИ', type: 'IT & Технологи', logo: '💻' },
    { name: 'Хан-Уул дүүрэг', type: 'Төрийн байгууллага', logo: '🏛️' }
  ];

  const jobCategories = [
    { icon: '💼', title: 'Бизнес', count: '1,234' },
    { icon: '💻', title: 'IT', count: '856' },
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
      title: 'UI/UX Дизайнер',
      company: 'Креатив Студио',
      location: 'Улаанбаатар',
      salary: '800,000₮ - 1,200,000₮',
      type: 'Хагас цаг',
      posted: '3 өдрийн өмнө'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-gray-900">
                Job<span className="text-blue-600">center</span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">BETA</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Ажил</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Компани</button>
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="text-blue-600 font-medium">🎉 Шинэ мэдээ:</span>
            <span className="text-gray-700">Jobcenter.mn албан ёсоор нээлтээ хийлээ</span>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Дэлгэрэнгүй →
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Мөрөөдлийн ажлаа
            <br />
            <span className="text-blue-600">олоорой</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Монголын хамгийн том ажлын байрны платформ. 
            Мянга мянган боломж, нэг дороос.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ажлын нэр, үгс..."
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
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <div className="text-gray-600">Ажлын байр</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Компани</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Хэрэглэгч</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Амжилт</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ажлын чиглэл</h2>
            <p className="text-gray-600">Өөрт тохирох салбарыг сонгоорой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <button key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-left group">
                <div className="text-2xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.count} ажлын байр</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Онцлох ажил</h2>
            <p className="text-gray-600">Шинэ болон хамгийн сайн ажлын байрууд</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">{job.type}</span>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <p className="text-gray-900 font-medium">{job.salary}</p>
                  <p className="text-gray-500">{job.posted}</p>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition-colors">
                  Дэлгэрэнгүй
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Бүх ажил үзэх
            </button>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Хамтрагч компани</h2>
            <p className="text-gray-600">Монголын тэргүүлэх компаниудтай хамтран</p>
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
              Ажил ологч
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
              Ажил олгогч
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-4">
                Job<span className="text-blue-600">center</span>
              </div>
              <p className="text-gray-600 text-sm">Монголын тэргүүлэх ажлын байрны платформ</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Ажил ологч</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:text-gray-900 transition-colors">Ажил хайх</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Анкет үүсгэх</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Зөвлөгөө</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Ажил олгогч</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:text-gray-900 transition-colors">Ажил нэмэх</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Анкет хайх</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Үнийн санал</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Тусламж</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:text-gray-900 transition-colors">Холбоо барих</button></li>
                <li><button className="hover:text-gray-900 transition-colors">FAQ</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Нууцлал</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 Jobcenter.mn. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </section>
    </div>
  );
}