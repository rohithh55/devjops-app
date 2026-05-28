import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-black border-t-thick border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-black text-black uppercase">DevOps Job Portal</span>
            <p className="mt-4 text-sm text-black/80 font-bold max-w-md">
              Connecting DevOps professionals with opportunities in cloud infrastructure, automation, and continuous delivery.
            </p>
          </div>
          
          <div>
            <span className="font-black text-sm uppercase text-black">Quick Links</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs" className="text-sm font-bold text-black/80 hover:text-black transition-colors duration-200">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm font-bold text-black/80 hover:text-black transition-colors duration-200">
                  GitHub Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <span className="font-black text-sm uppercase text-black">Legal</span>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm font-bold text-black/80 hover:text-black transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-bold text-black/80 hover:text-black transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-medium border-primary flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-black/80">
            © 2026 DevOps Job Portal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-black/80 hover:text-black transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-black/80 hover:text-black transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-black/80 hover:text-black transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
