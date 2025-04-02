import React from 'react';
import { Lightbulb, Users } from 'lucide-react';

export default function Ecosystem() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Advanced Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advancedFeatures.map((feature) => (
            <div key={feature.title} className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
              <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.points.map((point, index) => (
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
    </div>
  );
}

const advancedFeatures = [
  {
    icon: Lightbulb,
    title: 'AI-Driven Innovation',
    description: 'Cutting-edge capabilities that push the boundaries of what\'s possible with AI.',
    points: [
      'Quantum Computing Integration for complex problem-solving',
      'Brain-Computer Interface compatibility',
      'Neuro-adaptive systems that learn and evolve',
      'Advanced AI content creation and generation',
    ],
  },
  {
    icon: Users,
    title: 'Human-AI Collaboration',
    description: 'Seamless integration between human expertise and AI capabilities.',
    points: [
      'Emotional Intelligence (EQ) Modules for better interaction',
      'Hybrid team management and coordination',
      'Real-time skill adaptation and transfer',
      'Personalized AI avatars and interfaces',
    ],
  },
];