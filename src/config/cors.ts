// CORS configuration for different services
export const corsConfig = {
  // Webhook specific CORS headers
  webhook: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  },

  // Calendly specific CORS headers
  calendly: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
};