
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4 italic">Khairul Ummah School</h3>
          <p className="text-sm leading-relaxed">
            Nurturing leaders through faith and excellence since 2005. A vibrant learning community dedicated to academic rigor and moral integrity.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Admission Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">School Calendar</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Career Opportunities</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Student Handbook</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123 Wisdom Avenue, Green Valley</p>
          <p className="text-sm">Phone: +1 (555) 987-6543</p>
          <p className="text-sm">Email: info@khairulummah.edu</p>
          <div className="mt-4 flex space-x-4">
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">FB</span>
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">TW</span>
            <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">IG</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Khairul Ummah School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
