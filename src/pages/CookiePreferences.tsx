import React, { useState } from 'react';
import { Cookie } from 'lucide-react';

const domain = import.meta.env.VITE_COMPANY_DOMAIN;

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: true,
    functional: true,
    marketing: false,
  });

  const handleToggle = (category: keyof typeof preferences) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    // Here you would implement the actual cookie preference saving logic
    alert('Cookie preferences saved!');
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Cookie className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Cookie Preferences</h1>
      </div>

      <div className="space-y-8 text-gray-300">
        <div>
          <p className="text-lg">We use cookies and similar technologies to provide, protect, and improve our services. This section explains how and why we use these technologies and the choices you have.</p>
        </div>

        <div className="space-y-6">
          {[
            {
              id: 'essential',
              title: 'Essential Cookies',
              description: 'Required for the website to function. These cannot be disabled.',
            },
            {
              id: 'performance',
              title: 'Performance Cookies',
              description: 'Help us understand how visitors interact with our website.',
            },
            {
              id: 'functional',
              title: 'Functionality Cookies',
              description: 'Enable enhanced functionality and personalization.',
            },
            {
              id: 'marketing',
              title: 'Marketing Cookies',
              description: 'Used to deliver relevant advertisements and track their effectiveness.',
            },
          ].map(category => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-gray-800/30 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences[category.id as keyof typeof preferences]}
                    onChange={() => handleToggle(category.id as keyof typeof preferences)}
                    disabled={category.id === 'essential'}
                  />
                  <div className={`w-11 h-6 peer-focus:outline-none rounded-full peer 
                    ${preferences[category.id as keyof typeof preferences] ? 'bg-blue-500/50' : 'bg-gray-600/20'}
                    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                    after:h-5 after:w-5 after:transition-all border-2 ${preferences[category.id as keyof typeof preferences] ? 'border-blue-400' : 'border-gray-500/30'}`}
                  ></div>
                </label>
              </div>
              <p className="text-gray-400">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Save Preferences
          </button>
        </div>

        <div className="mt-12 p-6 bg-gray-800/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <p className="mb-4">For more information about how we use cookies and your privacy rights, please review our Privacy Policy or contact us at:</p>
          <a href={`mailto:privacy@${domain}`} className="text-blue-400 hover:text-blue-300">privacy@{domain}</a>
        </div>
      </div>
    </div>
  );
}