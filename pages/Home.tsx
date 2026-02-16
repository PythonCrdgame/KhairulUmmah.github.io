
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000" 
          alt="Khairul Ummah Campus Life" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-sm font-bold mb-6 tracking-widest uppercase">
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

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-12 border border-emerald-50 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-6 group-hover:scale-110 transition-transform">18+</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Years of Legacy</h3>
            <p className="text-gray-600">Established in 2005 to serve the Scarborough community.</p>
          </div>
          <div className="p-12 border border-emerald-50 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-6 group-hover:scale-110 transition-transform">100%</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">University Bound</h3>
            <p className="text-gray-600">Our graduates excel in top-tier Canadian institutions.</p>
          </div>
          <div className="p-12 border border-emerald-50 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/20 group">
            <div className="text-emerald-700 font-bold text-6xl mb-6 group-hover:scale-110 transition-transform">12:1</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Student Teacher Ratio</h3>
            <p className="text-gray-600">Focusing on individual growth and personalized mentoring.</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Campus Life Highlights</h2>
              <p className="text-emerald-700 font-medium text-lg italic">"And say: My Lord, increase me in knowledge."</p>
            </div>
            <Link to="/gallery" className="mt-8 md:mt-0 bg-white border border-emerald-100 px-8 py-3 rounded-full text-emerald-900 font-bold shadow-sm hover:shadow-md transition-all">
              View Photo Gallery
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "STEM Excellence", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800", date: "Oct 2023", desc: "Our students exploring advanced robotics and environmental science." },
              { title: "Quran Memorization", img: "https://images.unsplash.com/photo-1584281723501-1634b7f0e755?auto=format&fit=crop&q=80&w=800", date: "Nov 2023", desc: "Celebrating the journey of faith with our dedicated Hifz program students." },
              { title: "KUS Sports Meet", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800", date: "Jan 2024", desc: "Building teamwork and sportsmanship on the field of play." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">{item.date}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 leading-tight text-gray-900 font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <Link to="/gallery" className="inline-flex items-center text-emerald-700 font-bold hover:translate-x-1 transition-transform">
                    Read Story <span className="ml-2 text-lg">→</span>
                  </Link>
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
