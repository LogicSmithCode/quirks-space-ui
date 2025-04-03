import axios from 'axios';
import { CalendlyEventData } from '../features/consultation/types';

const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
const domain = import.meta.env.VITE_COMPANY_DOMAIN;
const calendlyUsername = import.meta.env.VITE_CALENDLY_USERNAME;
const calendlyEvent = import.meta.env.VITE_CALENDLY_EVENT;

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  message: string;
  category?: string;
  calendlyEvent?: {
    eventType: string;
    startTime: string;
    endTime: string;
    schedulingUrl: string;
    cancelUrl: string;
    rescheduleUrl: string;
  };
}

const STORAGE_KEY = `consultation_data_${domain}`;

export const consultationService = {
  storeFormData(data: ConsultationRequest) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to store consultation data:', error);
    }
  },

  getStoredFormData(): ConsultationRequest | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to retrieve consultation data:', error);
      return null;
    }
  },

  clearStoredFormData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear consultation data:', error);
    }
  },

  getCalendlyUrl(name: string, email: string): string {
    const params = new URLSearchParams({
      name,
      email,
      hide_gdpr: 'true',
      hide_event_type_details: 'true',
      background_color: '1a1a1a',
      text_color: 'ffffff',
      primary_color: '3b82f6'
    });
    return `https://calendly.com/${calendlyUsername}/${calendlyEvent}?${params.toString()}`;
  },

  async updateConsultationWithCalendlyEvent(eventData: CalendlyEventData) {
    const storedData = this.getStoredFormData();
    if (!storedData) return;

    const consultationData: ConsultationRequest = {
      ...storedData,
      calendlyEvent: {
        eventType: eventData.event_type.name,
        startTime: eventData.event.start_time,
        endTime: eventData.event.end_time,
        schedulingUrl: eventData.scheduling_url,
        cancelUrl: eventData.cancel_url,
        rescheduleUrl: eventData.reschedule_url
      }
    };

    try {
      await this.scheduleConsultation(consultationData);
    } catch (error) {
      console.error('Failed to update consultation with Calendly event:', error);
      throw error;
    }
  },

  async scheduleConsultation(data: ConsultationRequest) {
    try {
      const response = await axios.post(webhookUrl, {
        webhookTrigger: {
          payload: {
            name: data.name,
            email: data.email,
            message: data.message || '',
            company: data.company,
            source: domain,
            category: data.category || 'general',
            submitted_at: new Date().toISOString(),
            calendly_event: data.calendlyEvent ? {
              event_type: data.calendlyEvent.eventType,
              start_time: data.calendlyEvent.startTime,
              end_time: data.calendlyEvent.endTime,
              scheduling_url: data.calendlyEvent.schedulingUrl,
              cancel_url: data.calendlyEvent.cancelUrl,
              reschedule_url: data.calendlyEvent.rescheduleUrl
            } : undefined
          }
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.data?.success) {
        throw new Error(response.data?.error || 'Failed to submit consultation request');
      }

      return { success: true };
    } catch (error: any) {
      console.error('Consultation request error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Failed to submit consultation request';
      throw new Error(`${errorMessage}. Please try again later.`);
    }
  }
};