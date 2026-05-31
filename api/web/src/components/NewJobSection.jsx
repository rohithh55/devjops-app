import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const NewJobsSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewJobs = async () => {
      try {
        setLoading(true);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const dateStr = sevenDaysAgo.toISOString().replace('T', ' ');

        const records = await pb.collection('jobs').getList(1, 10, {
          sort: '-created',
          filter: `created >= "${dateStr}"`,
          $autoCancel: false
        });
        
        setJobs(records.items);
        setError(null);
      } catch (err) {
        console.error('Error fetching new jobs:', err);
        setError('Failed to load recent jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchNewJobs();
  }, []);

  return (
    <section id="new-jobs-section" className="py-24 bg-background text-black border-b-thick border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b-thick border-black pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black flex items-center gap-4">
              Recently Posted
              <span className="bg-primary text-black text-lg px-3 py-1 border-medium border-black">NEW</span>
            </h2>
            <p className="text-xl font-bold text-black/70 mt-2">Jobs added in the last 7 days</p>
          </div>
          <Link to="/jobs" className="hidden md:inline-block text-lg font-black uppercase tracking-wide border-thick border-black text-black px-6 py-3 hover:bg-primary transition-colors">
            View All Jobs
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-48 bg-muted border-thick border-primary animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 border-thick border-destructive bg-destructive/10">
            <p className="text-xl font-black text-destructive uppercase">{error}</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12 border-thick border-primary bg-card">
            <p className="text-xl font-black text-black uppercase">No new jobs posted in the last 7 days.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <Link key={job.id} to={`/jobs/${job.id}`} className="block group">
                <Card className="h-full bg-card text-black border-thick border-black group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] transition-all duration-200 rounded-none relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-black font-black text-xs px-2 py-1 border-medium border-black uppercase">
                    NEW
                  </div>
                  <CardHeader className="border-b-medium border-black pb-4 mb-4 pr-16">
                    <CardTitle className="text-2xl font-black uppercase leading-tight text-black">{job.title}</CardTitle>
                    <p className="text-xl font-bold text-black/80">{job.company}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-lg font-bold text-black">
                      <MapPin className="w-5 h-5 text-primary" />
                      {job.location}
                    </div>
                    {job.salary_min && job.salary_max && (
                      <div className="flex items-center gap-3 text-lg font-bold text-black">
                        <DollarSign className="w-5 h-5 text-primary" />
                        ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t-medium border-black/10">
                      {job.experience_level ? (
                        <div className="flex items-center gap-2 text-md font-black text-black">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {job.experience_level}
                        </div>
                      ) : <div />}
                      <div className="flex items-center gap-2 text-sm font-bold text-black/60">
                        <Clock className="w-4 h-4" />
                        {formatDistanceToNow(new Date(job.created), { addSuffix: true })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/jobs" className="inline-block text-lg font-black uppercase tracking-wide border-thick border-black text-black px-6 py-3 hover:bg-primary transition-colors w-full">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewJobsSection;
