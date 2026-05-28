import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GitHubProjectsSection from '@/components/GitHubProjectsSection.jsx';
import NewJobsSection from '@/components/NewJobsSection.jsx';
import JobNotificationSection from '@/components/JobNotificationSection.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Portal - Jobs & Projects</title>
        <meta name="description" content="Discover top DevOps jobs and open-source Kubernetes projects." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="py-24 bg-background text-black border-b-thick border-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black leading-none">
                  Build The <span className="text-primary">Future</span> Of Cloud
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-black/80 mb-10 leading-snug">
                  The premier destination for DevOps engineers, SREs, and cloud architects to find their next big opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/jobs" className="inline-flex justify-center items-center text-xl font-black uppercase tracking-wide border-thick border-black bg-black text-white px-8 py-5 hover:bg-black/80 transition-colors shadow-[8px_8px_0px_0px_hsl(var(--primary))]">
                    Browse All Jobs
                  </Link>
                  <a href="#new-jobs-section" className="inline-flex justify-center items-center text-xl font-black uppercase tracking-wide border-thick border-black bg-card text-black px-8 py-5 hover:bg-primary transition-colors shadow-[8px_8px_0px_0px_#000000]">
                    View Latest
                  </a>
                </div>
              </div>
            </div>
          </section>

          <GitHubProjectsSection />
          <NewJobsSection />
          <JobNotificationSection />
          
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
