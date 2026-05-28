import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, DollarSign, Briefcase, Calendar, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const record = await pb.collection('jobs').getOne(id, { $autoCancel: false });
        setJob(record);
        setError(null);
      } catch (err) {
        console.error('Error fetching job:', err);
        setError('Job not found');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="h-12 w-48 bg-muted border-thick border-black animate-pulse mb-12"></div>
          <div className="h-64 bg-muted border-thick border-black animate-pulse mb-8"></div>
          <div className="h-96 bg-muted border-thick border-black animate-pulse"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="text-center border-thick border-black bg-destructive/10 p-12 max-w-2xl w-full">
            <p className="text-3xl font-black uppercase text-black mb-8">{error || 'Job not found'}</p>
            <Link to="/jobs" className="inline-block text-xl font-black uppercase tracking-wide border-medium border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors">
              Back to Jobs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${job.title} at ${job.company} - DevOps Portal`}</title>
        <meta name="description" content={job.description.substring(0, 160)} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <Link to="/jobs" className="inline-flex items-center gap-3 text-xl font-black uppercase text-black hover:text-black/70 mb-12 transition-colors">
            <ArrowLeft className="w-6 h-6 border-medium border-black rounded-full p-1" />
            Back to jobs
          </Link>

          <Card className="mb-12 border-thick border-black rounded-none shadow-[8px_8px_0px_0px_#000000]">
            <CardHeader className="border-b-thick border-black pb-8 bg-primary/5">
              <CardTitle className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4 text-black">{job.title}</CardTitle>
              <p className="text-2xl font-bold text-black/80">{job.company}</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 text-xl font-bold text-black">
                  <div className="p-3 bg-primary text-black border-medium border-black">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span>{job.location}</span>
                </div>
                {job.salary_min && job.salary_max && (
                  <div className="flex items-center gap-4 text-xl font-bold text-black">
                    <div className="p-3 bg-primary text-black border-medium border-black">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <span>${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}</span>
                  </div>
                )}
                {job.experience_level && (
                  <div className="flex items-center gap-4 text-xl font-bold text-black">
                    <div className="p-3 bg-primary text-black border-medium border-black">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span>{job.experience_level} Level</span>
                  </div>
                )}
                {job.application_deadline && (
                  <div className="flex items-center gap-4 text-xl font-bold text-black">
                    <div className="p-3 bg-primary text-black border-medium border-black">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span>Apply by {new Date(job.application_deadline).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                {job.job_type && <span className="text-lg font-black uppercase border-medium border-black px-4 py-2 text-black">{job.job_type}</span>}
                {job.experience_level && <span className="text-lg font-black uppercase border-medium border-black px-4 py-2 text-black">{job.experience_level}</span>}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-black uppercase border-b-thick border-black pb-4 mb-6 text-black">Job Description</h2>
              <div className="text-lg font-bold leading-relaxed whitespace-pre-wrap text-black/90">
                {job.description}
              </div>
            </section>

            {job.requirements && (
              <section>
                <h2 className="text-3xl font-black uppercase border-b-thick border-black pb-4 mb-6 text-black">Requirements</h2>
                <div className="text-lg font-bold leading-relaxed whitespace-pre-wrap text-black/90">
                  {job.requirements}
                </div>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JobDetailPage;
