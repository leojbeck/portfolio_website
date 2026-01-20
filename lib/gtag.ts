/**
 * Google Analytics utility functions
 * 
 * This file handles Google Analytics 4 (GA4) pageview tracking.
 * It's designed to work with static Next.js exports.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if GA is enabled
export const isGAEnabled = GA_MEASUREMENT_ID !== '';

// Log pageview
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && isGAEnabled) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Log events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && isGAEnabled) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
