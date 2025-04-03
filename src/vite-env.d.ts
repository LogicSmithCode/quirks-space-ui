/// <reference types="vite/client" />

interface CalendlyInitPopupWidgetOptions {
  url: string;
}

interface Calendly {
  initPopupWidget(options: CalendlyInitPopupWidgetOptions): void;
}

interface Window {
  Calendly: Calendly;
}