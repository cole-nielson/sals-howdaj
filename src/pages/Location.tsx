import React from 'react';
import { siteConfig } from '@/lib/siteConfig';

const Location = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-desert-tan">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-brand-red">Find Our Food Truck</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We move around Boise to serve you the best Middle Eastern cuisine wherever you are.
            Check our current location and weekly schedule.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
              <iframe
                id="howdaj-map"
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(siteConfig.location.address)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sal's Howdaj Location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold mb-4">Current Location</h2>
              <p className="mb-4">{siteConfig.location.address}</p>
              
              <div className="my-6 border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-xl font-bold mb-4">Weekly Schedule</h3>
                <div className="space-y-3">
                  {siteConfig.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="font-medium">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-desert-orange hover:bg-opacity-90 text-white text-center px-6 py-3 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 px-4 bg-desert-tan">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-8">Upcoming Special Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-desert-orange font-bold mb-2">June 15, 2025</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Boise Farmers Market</h3>
              <p className="mb-4">10:00 AM - 2:00 PM</p>
              <p className="text-gray-600">
                Find us at the Saturday Farmers Market with special menu items featuring local produce.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-desert-orange font-bold mb-2">June 22, 2025</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Food Truck Rally</h3>
              <p className="mb-4">5:00 PM - 9:00 PM</p>
              <p className="text-gray-600">
                Join us for the monthly Food Truck Rally in downtown Boise with live music and special offers.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg mb-4">
              Want to request our food truck for your event?
            </p>
            <a
              href="/catering"
              className="inline-block bg-brand-red hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
            >
              View Catering Options
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
