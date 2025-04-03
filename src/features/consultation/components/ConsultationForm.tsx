import React from 'react';
import { Calendar } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationFormProps {
  formData: ConsultationFormData;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ConsultationForm({ formData, onSubmit, onChange }: ConsultationFormProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            rows={4}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Continue to Scheduling
        </button>
      </form>
    </div>
  );
}