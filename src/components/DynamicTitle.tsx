import React, { useEffect } from 'react';
import { usePageVisibility } from '../hooks/usePageVisibility';
import { useRandomMessage } from '../hooks/useRandomMessage';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;

export default function DynamicTitle() {
  const isVisible = usePageVisibility();
  const randomMessage = useRandomMessage(5000);
  
  useEffect(() => {
    document.title = isVisible ? `${companyName} | ${randomMessage}` : `👋 Come back to ${companyName}!`;
  }, [isVisible, randomMessage]);

  return null;
}