import axios from 'axios';

const STORAGE_KEY = 'consultationFormData';
const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  message: string;
  category?: string;
}

export const consultationService = {
  async sendWebhookData(data: ConsultationRequest, eventData: any) {
    try {
      if (!webhookUrl) {
        throw new Error('Webhook URL is not configured');
      }

      const payload = {
        data: {
          ...data,
          event: {
            start_time: eventData.event.start_time,
            end_time: eventData.event.end_time,
            location: eventData.event.location,
          },
          submitted_at: new Date().toISOString()
        }
      };

      const response = await axios.post(webhookUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 10000
      });

      return response.data;
    } catch (error) {
      console.error('Failed to send webhook data:', error);
      throw error;
    }
  },

  storeFormData(data: ConsultationRequest): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to store form data:', error);
    }
  },

  getStoredFormData(): ConsultationRequest | null {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error('Failed to retrieve stored form data:', error);
      return null;
    }
  },

  clearStoredFormData(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear stored form data:', error);
    }
  }
};