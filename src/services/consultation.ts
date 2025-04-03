import api from './api';

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
  calendlyLink?: string;
}

const STORAGE_KEY = `consultation_data_${domain}`;

export const consultationService = {
  storeFormData(data: ConsultationRequest) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  getStoredFormData(): ConsultationRequest | null {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  clearStoredFormData() {
    localStorage.removeItem(STORAGE_KEY);
  },

  getCalendlyUrl(name: string, email: string) {
    const params = new URLSearchParams({
      name,
      email,
    });
    return `https://calendly.com/${calendlyUsername}/${calendlyEvent}?${params.toString()}`;
  },

  async scheduleConsultation(data: ConsultationRequest) {
    try {
      // Format data for Zoho Flow webhook
      const webhookData = {
        data: {
          consultation: {
            name: data.name,
            email: data.email,
            company: data.company,
            message: data.message || '',
            source: domain,
            category: data.category || 'general',
            calendly_link: data.calendlyLink,
            submitted_at: new Date().toISOString(),
          }
        }
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors', // Allow cross-origin requests without CORS headers
        body: JSON.stringify(webhookData),
      });
      
      // With mode: 'no-cors', we can't read the response
      // Instead, we'll assume success if we get here without an error
      return { success: true };
    } catch (error) {
      console.error('Consultation request error:', error);
      throw new Error('Failed to submit consultation request. Please try again later.');
    }
  },
};