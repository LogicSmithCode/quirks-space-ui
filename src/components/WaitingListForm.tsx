import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { trackEvent } from '../services/analytics';
import { supabase, tables } from '../services/supabase';
import Modal from './Modal';

interface WaitingListFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

export default function WaitingListForm({ isOpen, onClose }: WaitingListFormProps) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Track the submission event
      trackEvent('waiting_list_submit', {
        location: 'home_hero'
      });

      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from(tables.waitlist)
        .insert([
          {
            name: formData.name,
            email: formData.email.toLowerCase(),
            status: 'pending'
          }
        ]);

      if (supabaseError) {
        // Handle unique constraint violation
        if (supabaseError.code === '23505') {
          throw new Error('This email is already on the waiting list.');
        }
        throw new Error('Failed to join the waiting list. Please try again.');
      }

      setIsSuccess(true);
      
      // Close the modal after showing success message
      setTimeout(() => {
        onClose();
        // Reset form after modal closes
        setFormData({ name: '', email: '' });
        setIsSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isSuccess ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
          <p className="text-gray-400">We'll notify you when we launch.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Join the Waiting List</h2>
            <p className="text-gray-400 mt-2">Be the first to experience the future of AI.</p>
          </div>

          {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Waiting List'
              )}
            </button>
          </form>
        </div>
      )}
    </Modal>
  );
}