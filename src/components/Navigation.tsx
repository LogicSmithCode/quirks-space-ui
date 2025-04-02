import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Scroll to top when navigating to main pages
    const mainPages = ['/', '/features', '/ecosystem', '/pricing'];
    if (mainPages.includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const getNavItemClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition ${isActive ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`;
  };

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">{companyName}</span>
          </Link>
          <div className="flex gap-6">
            {!isHomePage && (
              <Link to="/" className={getNavItemClass('/')}>Home</Link>
            )}
            <Link to="/features" className={getNavItemClass('/features')}>Features</Link>
            <Link to="/ecosystem" className={getNavItemClass('/ecosystem')}>Ecosystem</Link>
            <Link to="/pricing" className={getNavItemClass('/pricing')}>Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}