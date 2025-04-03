import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ConsultationFormData } from '../types';
import { CATEGORY_MAP } from '../constants';
import { consultationService } from '../../../services/consultation';

const INITIAL_FORM_STATE: ConsultationFormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function useConsultationForm() {
  const location = useLocation();
  const [formData, setFormData] =
    useState<ConsultationFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  const getCategory = () => {
    try {
      const path = location.pathname;
      return CATEGORY_MAP[path] || 'General Inquiry';
    } catch {
      return 'General Inquiry';
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setIsSuccess(false);
    setIsScheduled(false);
    setError(null);
  };

  const handleScheduleComplete = () => {
    setIsScheduled(true);
    setIsSuccess(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const category = getCategory();
      const consultationData = { ...formData, category };

      // Store the form data
      consultationService.storeFormData(consultationData);

      // Open Calendly popup with prefilled data and improved UX parameters
      if (window.Calendly) {
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          hide_event_type_details: '1',
          hide_gdpr: '1',
          background_color: '131e34',
          text_color: '101b2e',
          primary_color: '0a0f19',
        });

        window.Calendly.initPopupWidget({
          url: `https://calendly.com/code-surajpatro/30min?${params.toString()}`,
        });
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      );
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  return {
    formData,
    isSubmitting,
    error,
    isSuccess,
    isScheduled,
    handleSubmit,
    handleInputChange,
    resetForm,
    handleScheduleComplete,
  };
}
