import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, User } from 'lucide-react';
import { trackEvent } from '../services/analytics';
import { useAuth } from '../contexts/AuthContext';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { user, isAdmin } = useAuth();

  const handleNavClick = (path: string) => {
    trackEvent('navigation_click', {
      path,
      from: location.pathname,
      component: 'navigation'
    });
  };

  useEffect(() => {
    const mainPages = ['/', '/features', '/ecosystem', '/pricing', '/dashboard', '/admin'];
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
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2"
          >
            <Bot className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">{companyName}</span>
          </Link>
          <div className="flex items-center gap-6">
            {!isHomePage && (
              <Link 
                to="/" 
                onClick={() => handleNavClick('/')}
                className={getNavItemClass('/')}
              >
                Home
              </Link>
            )}
            <Link 
              to="/features" 
              onClick={() => handleNavClick('/features')}
              className={getNavItemClass('/features')}
            >
              Features
            </Link>
            <Link 
              to="/ecosystem" 
              onClick={() => handleNavClick('/ecosystem')}
              className={getNavItemClass('/ecosystem')}
            >
              Ecosystem
            </Link>
            <Link 
              to="/pricing" 
              onClick={() => handleNavClick('/pricing')}
              className={getNavItemClass('/pricing')}
            >
              Pricing
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => handleNavClick('/dashboard')}
                  className={getNavItemClass('/dashboard')}
                >
                  Dashboard
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => handleNavClick('/admin')}
                    className={getNavItemClass('/admin')}
                  >
                    Admin
                  </Link>
                )}
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}