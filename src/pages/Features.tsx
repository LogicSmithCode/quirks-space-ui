import React from 'react';
import { Layout, Cpu, Brain, Globe2, Network, Rocket, Shield, Zap } from 'lucide-react';

export default function Features() {
  return (
    <div>
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
    </div>
  );
}

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