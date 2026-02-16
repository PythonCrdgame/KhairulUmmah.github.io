
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-emerald-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950 opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="School Library"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Our Legacy of Learning</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Rooted in Scarborough for nearly two decades, we foster a community of scholars and believers.
          </p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Founded 2005</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">A Journey of Faith and Excellence</h2>
            </div>
            <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Khairul Ummah School began with a modest mission: to provide an educational haven where Ontario's curriculum meets the spiritual depth of Islamic values. Starting with just a handful of students in a small facility, we've grown into a beacon of knowledge for the Scarborough community.
              </p>
              <p>
                Today, KUS stands as a comprehensive K-12 institution, producing graduates who are not only academically superior but also morally conscious citizens of the world. Our journey is a testament to the power of a community united by a shared vision.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-3xl font-bold text-emerald-900">1200+</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Students Enrolled</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-900">18</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-tighter">Academic Years</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" 
              alt="KUS History and Graduation" 
              className="rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover hover:rotate-2 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-800 opacity-20 transform skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-20 relative z-10">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold font-serif leading-tight">Visionary Leadership</h2>
            <div className="h-1 w-16 bg-emerald-400"></div>
            <blockquote className="text-2xl md:text-3xl italic font-serif text-emerald-100 leading-snug">
              "We don't just teach subjects; we nurture souls. Our goal is to see every child step into the world as 'Khairul Ummah'—the best of people, benefiting society."
            </blockquote>
            <div className="space-y-6 text-emerald-50 text-lg opacity-80 font-light">
              <p>
                As Principal, it is my privilege to witness the transformation of our students. Dr. Ahmad Khairul brings decades of academic leadership and spiritual guidance to ensure every child feels seen, supported, and challenged.
              </p>
              <p>
                At KUS, we prioritize safety, intellectual curiosity, and moral rectitude. Our doors are always open to parents who wish to join us in this sacred trust.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-2xl font-bold font-serif">Dr. Ahmad Khairul</p>
              <p className="text-emerald-400 font-medium">Principal & Educational Director</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl border-4 border-emerald-800">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Ahmad Khairul - KUS Principal" 
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
