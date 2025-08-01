import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '@/components/HeroCarousel';
import EmailSignup from '@/components/EmailSignup';
import LazyImage from '@/components/LazyImage';

const Index = () => {
  // References for scrolling elements
  const refs = {
    tagline: useRef<HTMLDivElement>(null),
    feature: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

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
      <HeroCarousel />

      {/* Tagline Section */}
      <section className="py-20 px-4" ref={refs.tagline}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 reveal">
            A Taste of Home
          </h2>
          <p className="text-lg md:text-xl mb-8 reveal">
            Every dish made fresh, daily. No shortcuts. Just authentic Middle Eastern food the Howdaj way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <Link
              to="/menu"
              className="bg-desert-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/location"
              className="border-2 border-desert-orange text-desert-orange hover:bg-desert-orange hover:text-white px-6 py-3 rounded-full transition-colors"
            >
              Find Our Truck
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Dish Section */}
      <section className="py-20 px-4 bg-desert-tan" ref={refs.feature}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <LazyImage
                src="/images/pages/homepage-feature.png"
                alt="Signature Dish"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-4 reveal">Beef Shawarma Plate</h3>
              <p className="text-lg mb-6 reveal">
                Juicy, marinated beef served with hummus, rice, side salad, jajik, tartoor & sweet pomegranate sauce and warm Iraqi bread.
              </p>
              <div className="flex items-center mb-8 reveal">
                <div className="h-0.5 w-12 bg-desert-orange mr-4"></div>
                <span className="text-desert-orange font-medium">FAN FAVORITE</span>
              </div>
              <Link
                to="/menu"
                className="inline-block bg-brand-red hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors reveal"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" ref={refs.cta}>
        <div className="container mx-auto">
          <EmailSignup />
        </div>
      </section>
    </>
  );
};

export default Index;
