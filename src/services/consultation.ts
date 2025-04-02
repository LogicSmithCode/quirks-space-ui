import api from './api';

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const consultationService = {
  async scheduleConsultation(data: ConsultationRequest) {
    const response = await api.post('/consultations', data);
    return response.data;
  },

  async getAvailableSlots(date: string) {
    const response = await api.get(`/consultations/slots?date=${date}`);
    return response.data;
  },
};