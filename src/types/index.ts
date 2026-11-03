/**
 * Signal & Scale - Core TypeScript Definitions
 */

export type PageRoute =
  | 'home'
  | 'services'
  | 'industries'
  | 'evidence'
  | 'about'
  | 'insights'
  | 'contact';

export interface NavItem {
  id: PageRoute;
  label: string;
  href: string;
}

export type IndustryKey = 'it-support' | 'bookkeeping' | 'professional-advisers';

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  purpose: string;
  deliverables: string[];
  benefits: string[];
  methodology: {
    step: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  targetAudience: string;
  timeline: string;
}

export interface IndustryProfile {
  id: IndustryKey;
  name: string;
  shortTitle: string;
  subtitle: string;
  overview: string;
  coreChallenges: string[];
  searchBehaviours: {
    intent: string;
    sampleQueries: string[];
  }[];
  conversionOpportunities: string[];
  recommendedServices: string[];
  quoteInsight: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  category: string;
  targetKeyword: string;
  metaDescription: string;
  lastUpdated: string;
  summary: string;
  sections: {
    id: string;
    heading: string;
    content: string[];
    actionTakeaway?: string;
    internalLink?: {
      text: string;
      targetPage: PageRoute;
      sectionId?: string;
    };
  }[];
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  teamSize: string;
  serviceInterest: string;
  businessChallenge: string;
  websiteUrl?: string;
  honeypot?: string;
}

export interface FormSubmissionRecord extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'received' | 'in-review' | 'processed';
}

export interface AuditRequestPayload {
  websiteUrl: string;
  industry: string;
  keyChallenge: string;
  contactName: string;
  email: string;
  currentTrafficEstimate?: string;
}

export interface GA4EventLog {
  id: string;
  timestamp: string;
  eventName: string;
  parameters: Record<string, string | number | boolean>;
}

export interface PerformanceMetric {
  metric: string;
  currentValue: string;
  previousValue: string;
  percentageChange: string;
  trend: 'up' | 'down' | 'neutral';
  benchmark: string;
  notes: string;
}
