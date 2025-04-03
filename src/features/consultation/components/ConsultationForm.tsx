import React from 'react';
import { Calendar, Loader2, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationFormProps {
  formData: ConsultationFormData;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting?: boolean;
  error?: string | null;
  isSuccess?: boolean;
  isScheduled?: boolean;
  onReset?: () => void;
}

export function ConsultationForm({ 
  formData, 
  onSubmit, 
  onChange, 
  isSubmitting = false,
  error = null,
  isSuccess = false,
  isScheduled = false,
  onReset
}: ConsultationFormProps) {
  if (isSuccess && isScheduled) {
    return (
      <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consultation Scheduled!</h3>
          <p className="text-gray-400 mb-6">
            Your consultation has been scheduled successfully. Check your email for the calendar invite.
          </p>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Schedule Another Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Calendar className="w-4 h-4" />
              Continue to Scheduling
            </>
          )}
        </button>
      </form>
    </div>
  );
}