import React from 'react';
import { CONSULTATION_BENEFITS } from '../constants';

export function ConsultationBenefits() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Why Schedule a Consultation?</h2>
      
      <div className="space-y-6">
        {CONSULTATION_BENEFITS.map((benefit) => (
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
  );
}