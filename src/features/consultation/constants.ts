import { Users, Clock, MessageSquare } from 'lucide-react';
import { ConsultationBenefit, CategoryMap } from './types';

export const CATEGORY_MAP: CategoryMap = {
  '/pricing/individual': 'Individual Users',
  '/pricing/partner': 'Developer & Partner',
  '/pricing/business': 'AI-Driven Business',
  '/pricing/enterprise': 'Enterprise Solutions',
  '/pricing/government': 'Government & Innovation',
  '/pricing/strategic': 'Strategic Investment',
  '/pricing/transformation': 'Enterprise Transformation',
  '/pricing/security': 'Quantum-Safe Security',
  '/pricing/ethics': 'Ethical AI Audits',
  '/pricing/compliance': 'Global Compliance Orchestrator',
};

export const CONSULTATION_BENEFITS: ConsultationBenefit[] = [
  {
    icon: Users,
    title: 'Personalized Strategy',
    description: 'Get a tailored plan that aligns with your business goals and objectives.',
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Learn how to integrate our AI solutions seamlessly into your workflow.',
  },
  {
    icon: MessageSquare,
    title: 'Expert Guidance',
    description: 'Connect with our specialists to address your specific needs and concerns.',
  },
];