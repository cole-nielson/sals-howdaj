import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionFade } from '../components/SectionFade';

const faqData = [
  {
    question: "Where is Sal's Howdaj food truck located?",
    answer: "Our food truck moves around Boise throughout the week. You can find our current location and schedule on our Location page or by following us on social media for daily updates.",
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes! We have several vegetarian options including our popular falafel plate, hummus plate, and vegetable samosas. We can also accommodate vegan diets upon request.",
  },
  {
    question: "Are your ingredients halal?",
    answer: "Yes, all of our meat is certified halal, prepared according to Islamic dietary guidelines.",
  },
  {
    question: "Do you cater private events?",
    answer: "Absolutely! We offer catering services for events of all sizes, from intimate gatherings to large celebrations. Visit our Catering page for more information or contact us directly to discuss your specific needs.",
  },
  {
    question: "How can I place a large order in advance?",
    answer: "For large orders, we recommend contacting us at least 48 hours in advance. You can call us directly or use our contact form to provide details about your order.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept cash, all major credit cards, and mobile payment options like Apple Pay and Google Pay.",
  },
  {
    question: "Are your dishes spicy?",
    answer: "Our menu includes both spicy and mild options. Many dishes can be adjusted to your preferred spice level - just let us know when ordering!",
  },
  {
    question: "Do you offer gluten-free options?",
    answer: "Yes, several of our menu items are naturally gluten-free, including our rice dishes, salads, and some grilled options. Please inform our staff about any dietary restrictions when ordering.",
  },
  {
    question: "How authentic is your food?",
    answer: "Our recipes are based on traditional family recipes from the Middle East, specifically from Damascus where our founder Sal grew up. We pride ourselves on authentic flavors while sometimes adapting slightly to local ingredients and preferences.",
  },
  {
    question: "Do you have a brick and mortar restaurant?",
    answer: "Currently, we operate exclusively as a food truck. However, opening a permanent restaurant location is in our future plans. Subscribe to our newsletter to stay updated on our journey!",
  },
];

const FAQ = () => {
  const [filter, setFilter] = useState('');
  
  const filteredFaqs = filter 
    ? faqData.filter(faq => 
        faq.question.toLowerCase().includes(filter.toLowerCase()) || 
        faq.answer.toLowerCase().includes(filter.toLowerCase())
      )
    : faqData;
  
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-desert-tan">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about Sal's Howdaj, our food, services, and more.
          </p>
        </div>
      </section>

      <SectionFade />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Search */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-desert-orange"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Accordions */}
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 mb-4">No matching questions found</p>
                <button
                  onClick={() => setFilter('')}
                  className="text-desert-orange hover:underline"
                >
                  Reset search
                </button>
              </div>
            )}
          </Accordion>
          
          {/* Contact CTA */}
          <div className="mt-16 bg-desert-tan rounded-2xl p-8 text-center">
            <h3 className="font-playfair text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6">
              If you couldn't find the answer you're looking for, please don't hesitate to contact us directly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-desert-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
