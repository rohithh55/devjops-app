import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, DollarSign, Briefcase } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('jobs').getList(1, 50, {
          sort: '-created',
          $autoCancel: false,
        });
        setJobs(records.items);
        setError(null);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Helmet>
        <title>All Jobs - DevOps Portal</title>
        <meta name="description" content="Browse all available DevOps and cloud infrastructure job opportunities." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 border-b-thick border-black pb-6">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-4">Job Board</h1>
              <p className="text-2xl font-bold text-black/80">Public directory of cloud infrastructure roles.</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-64 bg-muted border-thick border-black animate-pulse"></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-24 border-thick border-black bg-destructive/10">
                <p className="text-2xl font-black text-black uppercase">{error}</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-24 border-thick border-black bg-card">
                <Briefcase className="w-20 h-20 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-black uppercase text-black mb-4">No jobs found</h3>
                <p className="text-xl font-bold text-black/80">Check back later for new opportunities.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                  <Link key={job.id} to={`/jobs/${job.id}`} className="block group">
                    <Card className="h-full bg-card text-black border-thick border-black group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 rounded-none">
                      <CardHeader className="border-b-medium border-black pb-4 mb-4">
                        <CardTitle className="text-2xl font-black uppercase leading-tight text-black">{job.title}</CardTitle>
                        <p className="text-xl font-bold text-black/80">{job.company}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3 text-lg font-bold text-black">
                          <MapPin className="w-6 h-6 text-black" />
                          {job.location}
                        </div>
                        {job.salary_min && job.salary_max && (
                          <div className="flex items-center gap-3 text-lg font-bold text-black">
                            <DollarSign className="w-6 h-6 text-black" />
                            ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
                          </div>
                        )}
                        {job.experience_level && (
                          <div className="flex items-center gap-3 text-lg font-bold text-black">
                            <Briefcase className="w-6 h-6 text-black" />
                            {job.experience_level}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JobsPage;
