import React, { useEffect } from 'react';

// Updated timeline data
const timeline = [
  {
    year: '1993',
    title: 'Food cart in Iraq',
    description: 'Sal\'s Howdaj began as a humble food cart in Iraq.'
  },
  {
    year: '2022',
    title: 'Opened as restaurant',
    description: 'Sal Jr. brought his father\'s vision back to life and opened as a restaurant.'
  },
  {
    year: '2023',
    title: 'Temporary Closure',
    description: 'Closed due to uncontrollable kitchen failure.'
  },
  {
    year: '2025',
    title: 'Reborn as food truck',
    description: "Reborn as a Boise food truck, continuing the family tradition."
  }
];

const About = () => {
  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-4" bg-desert-tan>
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-brand-red">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the journey behind Sal's Howdaj and our passion for authentic Middle Eastern cuisine.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="/images/pages/about-hero.jpeg"
                alt="Founder of Sal's Howdaj"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6 reveal">Our Journey</h2>
              <p className="text-lg mb-6 reveal">
                Sal's Howdaj began as a humble food cart in Iraq in 1997. After a long pause, Sal Jr. brought his father's vision back to life at 18. What started as a restaurant is now a bold food truck in Boise. Every dish is made fresh daily — no shortcuts, no freezer. Authentic, top-quality Middle Eastern food, the Howdaj way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4" bg-desert-tan>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-desert-orange reveal">
                3,000+
              </div>
              <p className="text-lg font-medium reveal">Plates Served</p>
            </div>
            <div className="p-8">
              <div className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-desert-orange reveal">
                12
              </div>
              <p className="text-lg font-medium reveal">Family Recipes</p>
            </div>
            <div className="p-8">
              <div className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-desert-orange reveal">
                5
              </div>
              <p className="text-lg font-medium reveal">Years of Passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 reveal">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-desert-orange"></div>
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex flex-col md:flex-row mb-12 last:mb-0 reveal ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <div className={`${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <div className="text-desert-orange font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-desert-orange border-4 border-white"></div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4" bg-desert-tan>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6 reveal">Our Values</h2>
          <p className="text-lg mb-12 reveal">
            At Sal's Howdaj, we're committed to these core principles that guide everything we do.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md reveal">
              <h3 className="font-playfair text-xl font-bold mb-3">Authenticity</h3>
              <p>
                We stay true to traditional recipes while adapting to local tastes, 
                creating an authentic Middle Eastern experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md reveal">
              <h3 className="font-playfair text-xl font-bold mb-3">Community</h3>
              <p>
                We believe food brings people together, and we strive to be an active, 
                positive presence in the Boise community.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md reveal">
              <h3 className="font-playfair text-xl font-bold mb-3">Quality</h3>
              <p>
                We never compromise on ingredients or preparation, ensuring every dish 
                meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
