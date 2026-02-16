
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb/Title */}
      <div className="bg-emerald-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
        <p className="text-emerald-100 max-w-2xl mx-auto px-4">Discover the history and leadership behind Khairul Ummah's pursuit of excellence.</p>
      </div>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey Started in 2005</h2>
            <div className="h-1 w-12 bg-emerald-500"></div>
            <p className="text-gray-600 leading-relaxed">
              Khairul Ummah School was founded with a clear mission: to create an educational institution that balances modern academic standards with traditional moral values. On September 15, 2005, we opened our doors to our first batch of 50 students.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since then, we have grown from a small community center to a world-class campus, serving over 1,200 students across primary and secondary levels. Our focus remains the same—to empower the 'Ummah' through knowledge and character.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
              alt="School history" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-20 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Message from the Principal</h2>
            <div className="h-1 w-12 bg-emerald-500"></div>
            <h3 className="text-xl italic font-serif text-emerald-800">"Education is the most powerful weapon which you can use to change the world, provided it is guided by character."</h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Khairul Ummah. I am Dr. Ahmad Khairul, and it is my absolute honor to lead this wonderful community of learners. My philosophy is simple: every child is a potential leader. Our job is to provide the environment, the tools, and the spiritual grounding for them to realize that potential.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over 25 years in the field of education, I've seen many systems, but none are as effective as one that integrates family, school, and community. We invite you to be a part of this transformative journey.
            </p>
            <div className="pt-4">
              <p className="font-bold text-gray-900">Dr. Ahmad Khairul</p>
              <p className="text-emerald-700">PhD in Educational Leadership, Principal</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-900 rounded-2xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Principal" 
                className="relative z-10 rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-16">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Academic Rigor', 'Islamic Character', 'Global Citizenship', 'Innovation'].map((pillar, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-emerald-500 text-center hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-gray-800">{pillar}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
