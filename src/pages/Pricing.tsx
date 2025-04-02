import React from 'react';
import { Building, Code2, User, Factory, Mail, TrendingUp, Briefcase, LineChart, Network, Users, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate('/consultation');
  };

  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Ecosystem-Driven Monetization</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          From individual innovators to enterprise solutions, join the AI revolution with a plan that grows with your needs
        </p>

        {/* Individual & Professional */}
        <h3 className="text-2xl font-bold mb-8">Start Your AI Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {individualTiers.map((tier) => (
            <div key={tier.title} className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <tier.icon className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">{tier.title}</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleConsultation}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Sales
              </button>
            </div>
          ))}
        </div>

        {/* Business & Enterprise */}
        <h3 className="text-2xl font-bold mb-8">Scale Your AI Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {businessTiers.map((tier) => (
            <div key={tier.title} className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <tier.icon className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">{tier.title}</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleConsultation}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Enterprise
              </button>
            </div>
          ))}
        </div>

        {/* Investment Partners Section */}
        <h3 className="text-2xl font-bold mb-8">Strategic Partnership Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {investmentOptions.map((option) => (
            <div key={option.title} className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <option.icon className="w-10 h-10 text-blue-400" />
                <div>
                  <h4 className="text-xl font-semibold">{option.title}</h4>
                  <p className="text-blue-300 text-sm">{option.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleConsultation}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>
          ))}
        </div>

        {/* Premium Add-ons */}
        <h3 className="text-2xl font-bold mb-8">Enhanced Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {premiumAddons.map((addon) => (
            <div key={addon.title} className="p-6 rounded-xl bg-gray-800/20 border border-gray-700">
              <h4 className="text-lg font-semibold mb-2">{addon.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
              <button 
                onClick={handleConsultation}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const individualTiers = [
  {
    icon: User,
    title: 'Individual Users',
    features: [
      'Basic AI assistants',
      'Pay-per-task options',
      'Premium subscription features',
      'Access to AI Life Coaches',
      'AR Workspaces integration'
    ]
  },
  {
    icon: Code2,
    title: 'Developer & Partner',
    features: [
      'Revenue share on marketplace apps',
      'No-Code/Low-Code tools',
      'Enterprise Development Suite',
      'API access to AI Talent Marketplace',
      'Access to Federated Learning Networks'
    ]
  }
];

const businessTiers = [
  {
    icon: Factory,
    title: 'AI-Driven Businesses',
    features: [
      'Transaction-based pricing',
      'Flexible equity options',
      'Blockchain layer integration',
      'Autonomous business licensing',
      'Seed-to-scale operations support'
    ]
  },
  {
    icon: Building,
    title: 'Enterprise Solutions',
    features: [
      'Core AI Workforce + OS Layer access',
      'Customizable autonomous agent deployment',
      'Flexible AI infrastructure usage',
      'Performance-linked pricing available',
      'Custom solutions for large-scale deployments'
    ]
  },
  {
    icon: Rocket,
    title: 'Government & Innovation',
    features: [
      'National-scale AI deployment',
      'Public sector compliance',
      'Smart city integration',
      'Research partnership programs',
      'Sovereign AI capabilities'
    ]
  }
];

const investmentOptions = [
  {
    icon: TrendingUp,
    title: 'Strategic Investment',
    subtitle: 'For venture capital and private equity firms',
    features: [
      'AI-driven portfolio company transformation',
      'Automated due diligence and market analysis',
      'AI governance and risk management frameworks',
      'Cross-portfolio AI synergy optimization',
      'Priority access to emerging AI capabilities'
    ]
  },
  {
    icon: Network,
    title: 'Enterprise Transformation',
    subtitle: 'For corporations seeking AI integration',
    features: [
      'End-to-end AI transformation roadmap',
      'Custom AI solution development',
      'Workforce upskilling and AI adoption',
      'Integration with legacy systems',
      'Dedicated AI innovation lab setup'
    ]
  }
];

const premiumAddons = [
  {
    title: 'Quantum-Safe Security',
    description: 'Post-quantum encryption and self-healing network protocols for ultimate security'
  },
  {
    title: 'Ethical AI Audits',
    description: 'Comprehensive compliance certifications including GDPR and industry-specific regulations'
  },
  {
    title: 'Global Compliance Orchestrator',
    description: 'Automated enforcement of regional regulations including tax laws and data sovereignty'
  }
];