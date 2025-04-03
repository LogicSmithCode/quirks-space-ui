import React from 'react';
import { useConsultationForm } from '../features/consultation/hooks/useConsultationForm';
import { useCalendlyEvents } from '../features/consultation/hooks/useCalendlyEvents';
import { ConsultationBenefits } from '../features/consultation/components/ConsultationBenefits';
import { ConsultationForm } from '../features/consultation/components/ConsultationForm';
import { CalendlyEmbed } from '../features/consultation/components/CalendlyEmbed';

export default function Consultation() {
  const { formData, showCalendly, handleSubmit, handleInputChange } = useConsultationForm();
  useCalendlyEvents();

  if (showCalendly) {
    return <CalendlyEmbed formData={formData} />;
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-gray-400">Let's discuss how we can transform your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ConsultationBenefits />
          <ConsultationForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}