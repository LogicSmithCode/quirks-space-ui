import { useState, useEffect } from 'react';

const messages = [
  "Exploring the Future of AI",
  "Building Tomorrow's Technology",
  "Transforming Ideas into Reality",
  "Powering Innovation",
  "Creating Intelligent Solutions",
  "Advancing AI Technology",
  "Shaping the Digital Future",
  "Revolutionizing AI Development",
];

export function useRandomMessage(interval: number = 5000) {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return message;
}