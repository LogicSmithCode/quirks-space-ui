import React from 'react';
import { Brain, Workflow, Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;
const companyNameLong = import.meta.env.VITE_COMPANY_NAME_LONG;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {companyName}
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              The Ultimate AI Ecosystem
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              A revolutionary platform integrating AI-powered applications, autonomous workforce, and intelligent infrastructure into a unified digital economy.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/pricing"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
              >
                Get Started
              </Link>
              <Link 
                to="/features"
                className="px-8 py-3 border border-blue-600 rounded-full font-semibold hover:bg-blue-600/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center p-6">
              <prop.icon className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the AI revolution with {companyNameLong} and experience the future of autonomous business operations.
          </p>
          <Link 
            to="/pricing"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
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