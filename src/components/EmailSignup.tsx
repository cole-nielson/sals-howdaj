import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const EmailSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    try {
      // Placeholder for API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Subscribed phone:', phoneNumber);
      
      toast({
        title: "Success!",
        description: "You've been added to our text updates list.",
        duration: 5000,
      });
      
      setPhoneNumber('');
    } catch (error) {
      console.error('Error subscribing:', error);
      
      toast({
        title: "Subscription failed",
        description: "There was a problem adding your phone number.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-desert-tan rounded-2xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-lg mb-8">
          Text us at (208) 713-3936 for 10% off your next order and weekly deals!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your phone number"
            required
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-desert-orange"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-red hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSignup;
