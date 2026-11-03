/**
 * Signal & Scale - Google Analytics 4 (GA4) Telemetry Module
 *
 * Implements Google tag (gtag.js) with client-side SPA route awareness,
 * strict privacy controls (zero PII recording), and in-memory audit log
 * for local validation and Realtime DebugView inspection.
 */

import {GA4EventLog} from '../types';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// In-memory event log for live UI inspection in development/evaluation
const eventSubscribers: ((events: GA4EventLog[]) => void)[] = [];
let internalEventHistory: GA4EventLog[] = [];

// Configurable GA4 Measurement ID
export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || 'G-DEMO2026SS';

let isGtagInitialized = false;

/**
 * Initializes the official Google Analytics gtag.js script safely.
 */
export function initGA4(measurementId: string = GA_MEASUREMENT_ID): void {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  if (isGtagInitialized) return;

  // Set default config
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // Managed manually on client-side route changes
    debug_mode: true, // Enables GA4 DebugView in Google Analytics
    cookie_flags: 'SameSite=None;Secure',
  });

  // Inject official Google Tag script if not already on the page
  const existingScript = document.getElementById('ga-gtag-script');
  if (!existingScript && measurementId && !measurementId.includes('DEMO')) {
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  isGtagInitialized = true;
}

/**
 * Internal dispatch to both gtag and in-memory inspect log.
 * Enforces zero-PII recording.
 */
function recordEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  const timestamp = new Date().toLocaleTimeString('en-AU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Sanitize: ensure no personal information accidentally leaked
  const sanitizedParams: Record<string, string | number | boolean> = {};
  const prohibitedKeys = ['name', 'email', 'phone', 'message', 'company', 'address'];

  for (const [key, value] of Object.entries(params)) {
    if (!prohibitedKeys.some((p) => key.toLowerCase().includes(p))) {
      sanitizedParams[key] = value;
    }
  }

  // Forward to gtag if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, sanitizedParams);
  }

  // Push to local inspector
  const logItem: GA4EventLog = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp,
    eventName,
    parameters: sanitizedParams,
  };

  internalEventHistory = [logItem, ...internalEventHistory].slice(0, 50);
  eventSubscribers.forEach((callback) => callback([...internalEventHistory]));
}

/**
 * Tracks client-side page views without double counting.
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
  recordEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : pagePath,
  });
}

/**
 * Tracks engagement with a specific core service.
 */
export function trackServiceView(serviceId: string, serviceTitle: string): void {
  recordEvent('service_view', {
    service_id: serviceId,
    service_title: serviceTitle,
    service_category: 'B2B Digital Marketing',
  });
}

/**
 * Tracks clicks on the primary "Request an SEO Audit" CTA.
 */
export function trackAuditRequestClick(location: string, source: string): void {
  recordEvent('audit_request_click', {
    cta_location: location,
    traffic_source: source,
  });
}

/**
 * Tracks clicks on the secondary 20-minute consultation scheduling button.
 */
export function trackDiscoveryBookingClick(source: string): void {
  recordEvent('discovery_booking_click', {
    trigger_source: source,
    consultation_type: '20_min_discovery',
  });
}

/**
 * Tracks when a user starts filling out the contact enquiry form.
 */
export function trackContactFormStart(serviceInterest: string): void {
  recordEvent('contact_form_start', {
    selected_service: serviceInterest || 'unselected',
  });
}

/**
 * Tracks successfully completed contact enquiry submissions (no PII recorded).
 */
export function trackContactFormSubmit(
  serviceInterest: string,
  teamSize: string,
  challengeCategory: string
): void {
  recordEvent('contact_form_submit', {
    service_interest: serviceInterest,
    team_size_bracket: teamSize,
    challenge_category: challengeCategory,
    conversion_type: 'qualified_enquiry',
  });
}

/**
 * Tracks industry solution tab selections.
 */
export function trackIndustryView(industryKey: string): void {
  recordEvent('industry_view', {
    industry_sector: industryKey,
  });
}

/**
 * Subscribes to the real-time event log for UI inspection.
 */
export function subscribeToEvents(
  callback: (events: GA4EventLog[]) => void
): () => void {
  eventSubscribers.push(callback);
  callback([...internalEventHistory]);
  return () => {
    const idx = eventSubscribers.indexOf(callback);
    if (idx > -1) eventSubscribers.splice(idx, 1);
  };
}

/**
 * Clears the in-memory telemetry log.
 */
export function clearEventHistory(): void {
  internalEventHistory = [];
  eventSubscribers.forEach((callback) => callback([]));
}
