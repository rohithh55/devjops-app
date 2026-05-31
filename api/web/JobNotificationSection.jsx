import React, { useState } from 'react';
import { BellRing } from 'lucide-react';
import { toast } from 'sonner';

const JobNotificationSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email');
      return;
    }
    setLoading(true);

    // TODO: Replace with PocketBase or API call
    setTimeout(() => {
      toast.success('Subscribed successfully!');
      setLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="p-8 bg-white text-black rounded shadow">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <BellRing className="w-6 h-6" /> Subscribe for Job Alerts
      </h2>
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 flex-1"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-900 text-white px-4 py-2 font-bold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  );
};

export default JobNotificationSection;
