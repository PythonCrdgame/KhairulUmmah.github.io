
import React, { useState } from 'react';

const categories = ['all', 'academic', 'sports', 'religious', 'events'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { 
      id: 1, 
      title: 'Annual Sports Day', 
      category: 'sports', 
      img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 2, 
      title: 'Chemistry Lab Work', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 3, 
      title: 'Ramadan Charity Drive', 
      category: 'religious', 
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 4, 
      title: 'Robotics Workshop', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 5, 
      title: 'Inter-School Soccer', 
      category: 'sports', 
      img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 6, 
      title: 'Graduation Ceremony', 
      category: 'events', 
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 7, 
      title: 'Quran Hifz Program', 
      category: 'religious', 
      img: 'https://images.unsplash.com/photo-1584281723501-1634b7f0e755?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 8, 
      title: 'Summer Creative Arts', 
      category: 'events', 
      img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 9, 
      title: 'National Math Olympiad', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-emerald-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Capturing Excellence</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto px-4 text-lg font-light">
            A visual journey through our academic year at Khairul Ummah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-xl text-sm font-bold capitalize transition-all duration-300 ${
                filter === cat 
                  ? 'bg-emerald-600 text-white shadow-xl -translate-y-1' 
                  : 'bg-gray-100 text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500">
              <img 
                src={photo.img} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-3 inline-block">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-bold text-2xl drop-shadow-md">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-gray-400 text-xl font-light">No memories found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
