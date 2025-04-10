import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  // Get the site URL from environment variable or use the current origin
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

    // Redirect if already authenticated
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // Listen for auth state changes from Supabase Auth UI
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate(from, { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, from]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#3b82f6',
                    brandAccent: '#2563eb',
                    brandButtonText: 'white',
                    defaultButtonBackground: '#1f2937',
                    defaultButtonBackgroundHover: '#374151',
                    inputBackground: '#1f2937',
                    inputBorder: '#374151',
                    inputBorderHover: '#4b5563',
                    inputBorderFocus: '#3b82f6',
                    inputText: 'white',
                    inputPlaceholder: '#9ca3af',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
                label: 'auth-label',
              },
            }}
            view="sign_in"
            showLinks={true}
            providers={[]}
            redirectTo={`${siteUrl}/auth/callback`}
          />
        </div>
      </div>
    </div>
  );
}