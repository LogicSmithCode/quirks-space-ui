import React from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

export default function Consultation() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://calendly.com/quirks-ai/consultation';
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-gray-400">Let's discuss how Quirks can transform your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Why Schedule a Consultation?</h2>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <benefit.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: Users,
    title: 'Personalized Strategy',
    description: 'Get a tailored plan that aligns with your business goals and objectives.',
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Learn how to integrate our AI solutions seamlessly into your workflow.',
  },
  {
    icon: MessageSquare,
    title: 'Expert Guidance',
    description: 'Connect with our specialists to address your specific needs and concerns.',
  },
];