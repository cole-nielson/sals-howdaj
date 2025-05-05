import React from 'react';
import EmailSignup from '@/components/EmailSignup';
import { siteConfig } from '@/lib/siteConfig';

const Catering = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative bg-desert-tan">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-brand-red">Catering Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bring the authentic flavors of Sal's Howdaj to your next event.
            From intimate gatherings to large celebrations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">
                Elevate Your Event with Middle Eastern Cuisine
              </h2>
              <p className="text-lg mb-6">
                Whether you're planning a corporate lunch, wedding reception, or birthday celebration, 
                our catering services will add a unique and flavorful experience to your special occasion.
              </p>
              <p className="text-lg mb-8">
                We offer customized menus, professional service, and the same quality and authenticity 
                that our food truck is known for.
              </p>
              
              <h3 className="font-playfair text-xl font-bold mb-4">Our Catering Services Include:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-desert-orange mr-2">•</span>
                  <span>Custom menu planning to fit your event's needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-orange mr-2">•</span>
                  <span>Full-service buffet setup with professional staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-orange mr-2">•</span>
                  <span>Food truck services at your venue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-orange mr-2">•</span>
                  <span>Pickup and delivery options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-orange mr-2">•</span>
                  <span>Vegetarian, vegan, and gluten-free options available</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/docs/catering-menu.pdf"
                  download
                  className="bg-desert-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors text-center"
                >
                  Download Menu PDF
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Catering%20Inquiry`}
                  className="border-2 border-desert-orange text-desert-orange hover:bg-desert-orange hover:text-white px-6 py-3 rounded-full transition-colors text-center"
                >
                  Email for Quote
                </a>
              </div>
            </div>
            
            <div>
              <img
                src="/lovable-uploads/dd692edd-2445-4490-ad54-882815cfc842.png"
                alt="Catering spread"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-desert-tan">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">
            What Our Catering Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-desert-orange text-white flex items-center justify-center font-bold">
                    JD
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Jane Doe</h3>
                  <p className="text-sm text-gray-600">Corporate Event</p>
                </div>
              </div>
              <p className="italic">
                "Sal's team catered our company retreat and the food was exceptional. 
                Everyone raved about the authentic flavors, and the presentation was beautiful. 
                Will definitely hire them again!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-desert-orange text-white flex items-center justify-center font-bold">
                    MS
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Michael Smith</h3>
                  <p className="text-sm text-gray-600">Wedding Reception</p>
                </div>
              </div>
              <p className="italic">
                "Having Sal's food truck at our wedding was a hit! Our guests loved the 
                interactive experience and the food was amazing. The staff was professional 
                and accommodating. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <EmailSignup />
        </div>
      </section>
    </>
  );
};

export default Catering;
