
import React, { useState } from 'react';

const categories = ['all', 'academic', 'sports', 'religious', 'events'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { 
      id: 1, 
      title: 'School Sports Festival', 
      category: 'sports', 
      img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 2, 
      title: 'Science Lab Session', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 3, 
      title: 'Quran Hifz Competition', 
      category: 'religious', 
      img: 'https://images.unsplash.com/photo-1584281723501-1634b7f0e755?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 4, 
      title: 'Robotics Workshop', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 5, 
      title: 'Inter-School Athletics', 
      category: 'sports', 
      img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 6, 
      title: 'Class of 2023 Graduation', 
      category: 'events', 
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 7, 
      title: 'Morning Dhikr Gathering', 
      category: 'religious', 
      img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 8, 
      title: 'Annual Arts Showcase', 
      category: 'events', 
      img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 9, 
      title: 'Advanced Mathematics', 
      category: 'academic', 
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-emerald-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/40"></div>
        <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Gallery Hero" />
        
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Capturing Excellence</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg font-light tracking-wide">
            A visual chronicle of faith, knowledge, and community at Khairul Ummah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold capitalize transition-all duration-300 shadow-sm ${
                filter === cat 
                  ? 'bg-emerald-600 text-white shadow-emerald-200/50 shadow-xl -translate-y-1' 
                  : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500">
              <img 
                src={photo.img} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-bold text-2xl font-serif leading-tight drop-shadow-md">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-32 bg-emerald-50 rounded-[3rem]">
            <div className="text-6xl mb-6">📷</div>
            <p className="text-emerald-800 text-xl font-serif">No moments captured in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
