import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Code, Github } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const GitHubProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('githubProjects').getList(1, 50, {
          sort: '-stars',
          $autoCancel: false,
        });
        setProjects(records.items);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Helmet>
        <title>DevOps Projects - DevOps Portal</title>
        <meta name="description" content="Public directory of DevOps and Kubernetes open-source projects." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 border-b-thick border-black pb-6">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-4">DevOps Projects</h1>
              <p className="text-2xl font-bold text-black/80">Public directory of infrastructure repositories.</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-48 bg-muted border-thick border-black animate-pulse"></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-24 border-thick border-black bg-destructive/10">
                <p className="text-2xl font-black text-black uppercase">{error}</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-24 border-thick border-black bg-card">
                <Github className="w-20 h-20 mx-auto mb-6 text-black" />
                <h3 className="text-3xl font-black uppercase text-black mb-4">No projects found</h3>
                <p className="text-xl font-bold text-black/80">Check back later for new repositories.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="bg-card text-black border-thick border-black rounded-none hover:shadow-[8px_8px_0px_0px_#000000] transition-shadow duration-200">
                    <CardHeader className="border-b-medium border-black pb-4 mb-4">
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-2xl font-black uppercase leading-tight text-black">{project.repo_name}</CardTitle>
                        <div className="flex items-center gap-2 text-lg font-bold bg-primary/10 text-black px-3 py-1 border-medium border-black shrink-0">
                          <Star className="w-5 h-5 fill-black text-black" />
                          {project.stars}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold mb-6 line-clamp-3 text-black/80">{project.description || 'No description provided.'}</p>
                      {project.language && (
                        <div className="flex items-center gap-2 text-lg font-black text-black">
                          <Code className="w-6 h-6 text-black" />
                          {project.language}
                        </div>
                      )}
                    </CardContent>
                  </Card>
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

export default GitHubProjectsPage;
