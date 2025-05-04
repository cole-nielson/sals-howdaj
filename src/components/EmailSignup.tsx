
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    try {
      // Placeholder for API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Subscribed email:', email);
      
      toast({
        title: "Success!",
        description: "You've been added to our mailing list.",
        duration: 5000,
      });
      
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      
      toast({
        title: "Subscription failed",
        description: "There was a problem adding your email.",
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
          Subscribe to our newsletter for special offers, new menu items, and food truck location updates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
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
