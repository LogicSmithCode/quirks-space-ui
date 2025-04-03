import { useEffect } from 'react';
import { CalendlyEventData } from '../types';
import { consultationService } from '../../../services/consultation';

export function useCalendlyEvents(onScheduleComplete?: () => void) {
  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        switch (e.data.event) {
          case 'calendly.event_scheduled':
            try {
              const eventData = e.data.payload as CalendlyEventData;
              const storedFormData = consultationService.getStoredFormData();
              
              if (storedFormData) {
                // Handle webhook submission and UI update in parallel
                Promise.all([
                  // Send webhook data
                  consultationService.sendWebhookData(storedFormData, eventData),
                  // Update UI immediately
                  Promise.resolve().then(() => {
                    if (onScheduleComplete) {
                      onScheduleComplete();
                    }
                  })
                ]).then(() => {
                  // Clear stored data after both operations complete
                  consultationService.clearStoredFormData();
                }).catch((error) => {
                  console.error('Error in parallel operations:', error);
                });
              }
            } catch (error) {
              console.error('Failed to process Calendly event:', error);
            }
            break;
            
          case 'calendly.popup_closed':
            // If no event was scheduled and the popup was closed, clear the form data
            const formData = consultationService.getStoredFormData();
            if (formData) {
              consultationService.clearStoredFormData();
            }
            break;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onScheduleComplete]);
}