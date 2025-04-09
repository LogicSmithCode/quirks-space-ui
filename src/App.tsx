import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Ecosystem from './pages/Ecosystem';
import Pricing from './pages/Pricing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import CookiePreferences from './pages/CookiePreferences';
import Consultation from './pages/Consultation';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import DynamicTitle from './components/DynamicTitle';
import { initializeGA, updateConsent } from './services/analytics';
import { AuthProvider } from './contexts/AuthContext';
import AuthGuard from './components/AuthGuard';

function App() {
  React.useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      initializeGA(measurementId);
      updateConsent(false, false);
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="ecosystem" element={<Ecosystem />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="cookie-preferences" element={<CookiePreferences />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="auth" element={<Auth />} />
            <Route
              path="dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
            <Route
              path="admin"
              element={
                <AuthGuard requireAdmin>
                  <Admin />
                </AuthGuard>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;