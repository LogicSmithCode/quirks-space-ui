import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ConsultationFormData } from '../types';
import { CATEGORY_MAP } from '../constants';
import { consultationService } from '../../../services/consultation';

const INITIAL_FORM_STATE: ConsultationFormData = {
  name: '',
  email: '',
  company: '',
  message: ''
};

export function useConsultationForm() {
  const location = useLocation();
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>(INITIAL_FORM_STATE);

  const getCategory = () => {
    const referrer = document.referrer;
    const path = new URL(referrer).pathname;
    return CATEGORY_MAP[path] || 'General Inquiry';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const category = getCategory();
      const consultationData = { ...formData, category };
      
      await consultationService.scheduleConsultation(consultationData);
      setShowCalendly(true);
      consultationService.storeFormData(consultationData);
    } catch (error) {
      console.error('Consultation submission error:', error);
      alert('There was a problem submitting your request. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const storedData = consultationService.getStoredFormData();
    if (storedData) {
      setFormData({
        name: storedData.name || '',
        email: storedData.email || '',
        company: storedData.company || '',
        message: storedData.message || ''
      });
    }
  }, []);

  return {
    formData,
    showCalendly,
    handleSubmit,
    handleInputChange
  };
}