import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Type definitions for GA4
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize GA4
export const initializeGA = (measurementId: string) => {
  // Remove any existing GA scripts to prevent duplicates
  const existingScripts = document.querySelectorAll('script[src*="googletagmanager"]');
  existingScripts.forEach(script => script.remove());

  // Create and append the new script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(arguments);
  };

  // Basic GA4 setup
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // Disable automatic page views
    cookie_domain: 'auto', // Automatic cookie domain detection
    cookie_flags: 'SameSite=None;Secure', // Secure cookies
  });
};

// Hook for page view tracking with enhanced measurement
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (window.gtag && measurementId) {
      // Enhanced page view tracking
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
        send_to: measurementId
      });
    }
  }, [location]);
};

// Enhanced event tracking utility with validation
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (window.gtag && measurementId) {
    const enhancedParams = {
      ...eventParams,
      send_to: measurementId,
      timestamp: new Date().toISOString(),
      location: window.location.href,
    };

    window.gtag('event', eventName, enhancedParams);
  } else {
    console.warn('Google Analytics not initialized or measurement ID missing');
  }
};

// Utility for user properties
export const setUserProperties = (properties: Record<string, any>) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (window.gtag && measurementId) {
    window.gtag('set', 'user_properties', properties);
  }
};

// Consent mode configuration
export const updateConsent = (
  analytics: boolean = false,
  advertising: boolean = false
) => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: advertising ? 'granted' : 'denied',
    });
  }
};