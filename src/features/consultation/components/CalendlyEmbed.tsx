import React from 'react';
import { ConsultationFormData } from '../types';
import { Calendar } from 'lucide-react';

interface CalendlyEmbedProps {
  formData: ConsultationFormData;
}

export function CalendlyEmbed({ formData }: CalendlyEmbedProps) {
  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        hide_event_type_details: '1',
        hide_gdpr: '1',
        background_color: '1a1a1a',
        text_color: 'ffffff',
        primary_color: '3b82f6'
      });

      window.Calendly.initPopupWidget({
        url: `https://calendly.com/code-surajpatro/30min?${params.toString()}`
      });
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Almost There!</h1>
        <p className="text-xl text-gray-400 mb-8">Click the button below to schedule your consultation.</p>
        <div className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700">
          <p className="text-gray-300 mb-6">
            Your information has been saved. You can now schedule your consultation time.
          </p>
          <button
            onClick={handleScheduleClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2 mx-auto"
          >
            <Calendar className="w-5 h-5" />
            Schedule time with me
          </button>
        </div>
      </div>
    </div>
  );
}