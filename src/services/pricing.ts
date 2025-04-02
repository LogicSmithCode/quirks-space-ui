import api from './api';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  billingCycle: 'monthly' | 'yearly';
}

export const pricingService = {
  async getPlans() {
    const response = await api.get('/pricing/plans');
    return response.data;
  },

  async getPlanDetails(planId: string) {
    const response = await api.get(`/pricing/plans/${planId}`);
    return response.data;
  },

  async subscribeToPlan(planId: string, billingCycle: 'monthly' | 'yearly') {
    const response = await api.post('/pricing/subscribe', { planId, billingCycle });
    return response.data;
  },
};