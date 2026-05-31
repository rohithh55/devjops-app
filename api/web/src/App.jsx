import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;
