/// <reference types="vite/client" />

interface CalendlyInitInlineWidgetOptions {
  url: string;
  parentElement: HTMLElement | null;
  prefill?: {
    name?: string;
    email?: string;
    [key: string]: any;
  };
  styles?: {
    height?: string;
    [key: string]: any;
  };
}

interface Calendly {
  initInlineWidget(options: CalendlyInitInlineWidgetOptions): void;
  showPopupWidget(url: string): void;
  initPopupWidget(options: { url: string }): void;
}

interface Window {
  Calendly: Calendly;
}