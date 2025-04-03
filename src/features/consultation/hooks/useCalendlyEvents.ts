import { useEffect } from 'react';
import { consultationService } from '../../../services/consultation';

export function useCalendlyEvents() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        const eventData = e.data.payload;
        consultationService.updateConsultationWithCalendlyEvent(eventData);
        consultationService.clearStoredFormData();
        alert('Your consultation has been scheduled successfully! Check your email for confirmation.');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
}