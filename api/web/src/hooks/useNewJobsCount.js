import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useNewJobsCount() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const dateStr = sevenDaysAgo.toISOString().replace('T', ' ');

        const result = await pb.collection('jobs').getList(1, 1, {
          filter: `created >= "${dateStr}"`,
          $autoCancel: false
        });
        
        setCount(result.totalItems);
        setError(null);
      } catch (err) {
        console.error('Error fetching new jobs count:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { count, loading, error };
}
