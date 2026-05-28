import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNewJobsCount } from '@/hooks/useNewJobsCount.js';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useNewJobsCount();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/jobs', label: 'Jobs' },
    { path: '/projects', label: 'DevOps Projects' },
  ];

  const scrollToNewJobs = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('new-jobs-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-thick border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl font-black text-black uppercase tracking-tighter">DevOps Portal</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold uppercase tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-black border-b-4 border-primary pb-1'
                      : 'text-black/70 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to={location.pathname === '/' ? '#new-jobs-section' : '/jobs'} 
              onClick={scrollToNewJobs}
              className="relative p-2 text-black hover:text-primary transition-colors"
              aria-label="New Jobs Notifications"
            >
              <Bell className="w-7 h-7" />
              {count > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-none bg-destructive text-[10px] font-black text-white border-2 border-background">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="border-thick border-primary text-black rounded-none">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-thick border-primary bg-background">
                <nav className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-black uppercase tracking-wide py-4 px-6 border-thick transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'bg-primary text-black border-primary'
                          : 'text-black border-transparent hover:border-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
