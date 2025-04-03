import React from 'react';
import { ConsultationFormData } from '../types';
import { consultationService } from '../../../services/consultation';

interface CalendlyEmbedProps {
  formData: ConsultationFormData;
}

export function CalendlyEmbed({ formData }: CalendlyEmbedProps) {
  const calendlyUrl = consultationService.getCalendlyUrl(formData.name, formData.email);
  
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Schedule Your Meeting</h1>
          <p className="text-xl text-gray-400">Choose a time that works best for you</p>
        </div>
        <div className="rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="700"
            frameBorder="0"
            title="Select a time for your consultation"
            className="calendly-inline-widget"
          />
        </div>
      </div>
    </div>
  );
}