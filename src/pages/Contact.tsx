import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/siteConfig';
import { SectionFade } from '../components/SectionFade';

const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-desert-tan">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
            Fill out the form below or contact us directly.
          </p>
        </div>
      </section>

      <SectionFade />

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="font-playfair text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-desert-tan rounded-2xl p-8 mb-8">
                <div className="flex items-start mb-6">
                  <Phone className="text-desert-orange mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p className="mb-1">
                      <a 
                        href={`tel:${siteConfig.contact.phone}`} 
                        className="hover:text-desert-orange transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a 
                        href={`sms:${siteConfig.contact.sms}`}
                        className="hover:text-desert-orange transition-colors"
                      >
                        Send us a text message
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <MapPin className="text-desert-orange mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <p>{siteConfig.location.address}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                    {siteConfig.schedule.map((item) => (
                      <div key={item.day}>
                        <span className="font-medium mr-2">{item.day}:</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Follow Us */}
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-desert-orange hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-desert-orange hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-desert-orange hover:text-white p-3 rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
