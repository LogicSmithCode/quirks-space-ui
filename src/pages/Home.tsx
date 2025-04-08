import React, { useState, useRef } from 'react';
import { Brain, Workflow, Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../services/analytics';
import WaitingListForm from '../components/WaitingListForm';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;
const companyNameLong = import.meta.env.VITE_COMPANY_NAME_LONG;

export default function Home() {
  const [showWaitingList, setShowWaitingList] = useState(false);
  const journeySectionRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = (action: string) => {
    trackEvent('home_cta_click', {
      action,
      section: 'hero',
      component: 'home'
    });

    if (action === 'learn_more' && journeySectionRef.current) {
      journeySectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {companyName}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              The Ultimate AI Ecosystem
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              A revolutionary platform integrating AI-powered applications, autonomous workforce, and intelligent infrastructure into a unified digital economy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button
                onClick={() => {
                  setShowWaitingList(true);
                  handleCTAClick('get_started');
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition transform hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={() => handleCTAClick('learn_more')}
                className="px-8 py-3 border border-blue-600 rounded-full font-semibold hover:bg-blue-600/10 transition transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center p-6 transform transition hover:scale-105">
              <prop.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section ref={journeySectionRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the AI revolution with {companyNameLong} and experience the future of autonomous business operations.
          </p>
          <Link 
            to="/pricing"
            onClick={() => handleCTAClick('start_journey')}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Waiting List Modal */}
      <WaitingListForm 
        isOpen={showWaitingList} 
        onClose={() => setShowWaitingList(false)} 
      />
    </>
  );
}

const valueProps = [
  {
    icon: Brain,
    title: 'Build Faster',
    description: 'Create and deploy AI workforce in minutes with our intuitive platform.',
  },
  {
    icon: Workflow,
    title: 'Scale Effortlessly',
    description: 'Automatically scale your AI workforce based on demand.',
  },
  {
    icon: Blocks,
    title: 'Full Integration',
    description: 'Seamlessly connect with your existing tools and workflows.',
  },
];