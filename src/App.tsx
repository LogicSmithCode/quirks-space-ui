import React from 'react';
import { Brain, Cpu, Globe2, Layout, Network, Rocket, Shield, Zap, Code, Bot, Workflow, Blocks } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Quirks
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              The Ultimate AI Ecosystem
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              A revolutionary platform integrating AI-powered applications, autonomous workforce, and intelligent infrastructure into a unified digital economy.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                Get Started
              </button>
              <button className="px-8 py-3 border border-blue-600 rounded-full font-semibold hover:bg-blue-600/10 transition">
                Learn More
              </button>
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

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Core Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition group">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Transform Your Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <ul className="space-y-3">
                {useCase.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the AI revolution with Quirks and experience the future of autonomous business operations.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Quirks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const valueProps = [
  {
    icon: Bot,
    title: 'Build Faster',
    description: 'Create and deploy AI agents in minutes with our intuitive platform.',
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

const features = [
  {
    icon: Layout,
    title: 'App Layer',
    description: 'Seamless interface for AI-powered applications and services across devices.',
  },
  {
    icon: Cpu,
    title: 'OS Layer',
    description: 'Advanced AI-driven operating system optimizing resource management.',
  },
  {
    icon: Brain,
    title: 'AI Workforce',
    description: 'Autonomous agents handling complex tasks across industries.',
  },
  {
    icon: Globe2,
    title: 'AI-Driven Business',
    description: 'Self-managing enterprises that operate and scale independently.',
  },
  {
    icon: Network,
    title: 'AI Infrastructure',
    description: 'Scalable computing resources for optimal performance.',
  },
  {
    icon: Rocket,
    title: 'Innovation Hub',
    description: 'Centralized marketplace for discovering and deploying AI solutions.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Advanced protection with AI-enhanced security protocols.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast operations with quantum-edge hybrid infrastructure.',
  },
];

const stats = [
  {
    value: '10x',
    label: 'Increase in Productivity',
  },
  {
    value: '24/7',
    label: 'Autonomous Operations',
  },
  {
    value: '99.9%',
    label: 'System Reliability',
  },
];

const useCases = [
  {
    title: 'Enterprise Solutions',
    points: [
      'Automate complex business processes',
      'Enhance decision-making with AI insights',
      'Reduce operational costs',
      'Scale operations efficiently',
    ],
  },
  {
    title: 'Developer Platform',
    points: [
      'Build custom AI agents',
      'Access powerful APIs',
      'Deploy in minutes',
      'Comprehensive documentation',
    ],
  },
  {
    title: 'Industry Integration',
    points: [
      'Healthcare diagnostics',
      'Financial analysis',
      'Supply chain optimization',
      'Customer service automation',
    ],
  },
];

export default App;