import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { usePageTracking } from '../services/analytics';

export default function Layout() {
  // Track page views
  usePageTracking();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}