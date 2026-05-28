import React, { useState } from 'react';
import apiServerClient from '@/lib/apiServerClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, BellRing } from 'lucide-react';
import { toast } from 'sonner';

const JobNotificationSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      const response = await apiServerClient.fetch('/notifications/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      toast.success(data.message || 'Thanks for subscribing to job alerts!');
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      toast.error(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary text-black border-b-thick border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-background border-thick border-black mb-8 shadow-[8px_8px_0px_0px_#000000]">
          <BellRing className="w-12 h-12 text-black" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
          Never Miss a DevOps Role
        </h2>
        <p className="text-xl md:text-2xl font-bold text-black/90 mb-12 max-w-2xl mx-auto">
          Get the latest cloud infrastructure and automation jobs delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-6 w-6 text-black/50" />
            </div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-16 pl-12 text-lg font-bold text-black bg-card border-thick border-black rounded-none placeholder:text-black/50 focus-visible:ring-0 focus-visible:border-black shadow-[4px_4px_0px_0px_#000000]"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="h-16 px-8 bg-black text-white font-black uppercase text-lg border-thick border-black rounded-none hover:bg-black/80 hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000000] disabled:opacity-70"
          >
            {loading ? 'Subscribing...' : 'Subscribe Now'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JobNotificationSection;
