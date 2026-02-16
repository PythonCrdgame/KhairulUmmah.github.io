
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white">KU</div>
            <h3 className="text-white text-xl font-bold italic tracking-tighter">Khairul Ummah</h3>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Nurturing leaders through faith and excellence since 2005. We provide a holistic environment where academic rigor meets spiritual growth in Scarborough.
          </p>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Academic Programs</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Islamic Studies</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Admissions 2024/25</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">School Calendar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-6">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Parent Portal</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Student Handbook</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Newsletters</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
          <div className="space-y-4 text-sm opacity-90">
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              235 Milner Ave, Scarborough, ON M1S 3P6
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              647 717 1615
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              admin@khairulummah.ca
            </p>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="w-10 h-10 bg-emerald-900 border border-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">FB</a>
            <a href="#" className="w-10 h-10 bg-emerald-900 border border-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">TW</a>
            <a href="#" className="w-10 h-10 bg-emerald-900 border border-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">IG</a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-emerald-900 text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} Khairul Ummah School. Licensed by Ontario Ministry of Education.
      </div>
    </footer>
  );
};

export default Footer;
