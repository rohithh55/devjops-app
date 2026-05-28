import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '@/pages/HomePage.jsx';
import JobsPage from '@/pages/JobsPage.jsx';
import JobDetailPage from '@/pages/JobDetailPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center border-thick border-primary p-12 max-w-2xl w-full mx-4 bg-card shadow-[8px_8px_0px_0px_#000000]">
              <h1 className="text-5xl font-black uppercase text-black mb-6">404 - Not Found</h1>
              <p className="text-2xl font-bold text-black/80 mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="inline-block text-xl font-black uppercase tracking-wide border-thick border-black text-black px-8 py-4 hover:bg-primary transition-colors">
                Back to Home
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
