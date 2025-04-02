import React, { useEffect } from 'react';
import { usePageVisibility } from '../hooks/usePageVisibility';
import { useRandomMessage } from '../hooks/useRandomMessage';

export default function DynamicTitle() {
  const isVisible = usePageVisibility();
  const randomMessage = useRandomMessage(5000);
  
  useEffect(() => {
    document.title = isVisible ? `Quirks | ${randomMessage}` : '👋 Come back to Quirks!';
  }, [isVisible, randomMessage]);

  return null;
}