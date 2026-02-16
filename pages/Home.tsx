
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" 
          alt="Khairul Ummah Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-sm font-bold mb-6 tracking-widest uppercase">
            The Best of Nations
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl leading-tight">
            Excellence in <span className="text-emerald-400">Faith</span> & Knowledge
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-gray-100 opacity-95 leading-relaxed font-light max-w-3xl mx-auto">
            Providing a nurturing environment in Scarborough where academic achievement and Islamic character go hand in hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/auth" className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
              Enroll Today
            </Link>
            <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-12 py-4 rounded-xl font-bold text-lg transition-all">
              Discover KUS
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-10 border border-emerald-50 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-4 group-hover:scale-110 transition-transform">18+</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Years of Legacy</h3>
            <p className="text-gray-600">Established in 2005 to serve the Scarborough community.</p>
          </div>
          <div className="p-10 border border-emerald-50 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-4 group-hover:scale-110 transition-transform">100%</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">University Bound</h3>
            <p className="text-gray-600">Our graduates excel in top-tier Canadian institutions.</p>
          </div>
          <div className="p-10 border border-emerald-50 rounded-3xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-4 group-hover:scale-110 transition-transform">12:1</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Small Class Sizes</h3>
            <p className="text-gray-600">Focusing on individual growth and mentoring.</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Campus Highlights</h2>
              <p className="text-emerald-700 font-medium">Keep up with the latest events at Khairul Ummah</p>
            </div>
            <Link to="/gallery" className="mt-4 md:mt-0 bg-white border border-gray-200 px-6 py-3 rounded-full text-emerald-900 font-bold shadow-sm hover:shadow-md transition-all">
              Browse All Activities
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Science Olympiad 2024", img: "https://images.unsplash.com/photo-1567113463300-1025526733ec?auto=format&fit=crop&q=80&w=800", date: "Oct 12, 2024" },
              { title: "Quran Memorization Fest", img: "https://images.unsplash.com/photo-1585036156171-3839efc229b7?auto=format&fit=crop&q=80&w=800", date: "Nov 05, 2024" },
              { title: "Inter-School Sports Meet", img: "https://images.unsplash.com/photo-1541252260730-0412e3e210fa?auto=format&fit=crop&q=80&w=800", date: "Dec 01, 2024" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.date}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 leading-tight text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">Celebrating our students' hard work and achievements in this semester's primary competitive events.</p>
                  <button className="flex items-center text-emerald-700 font-bold hover:gap-2 transition-all">
                    View Details <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
