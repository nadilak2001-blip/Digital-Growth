/**
 * Signal & Scale - Primary Strategic Content Repository
 *
 * Aligned strictly with DMIP Part A - Digital Presence Strategy.
 * Caters specifically to Australian micro and small B2B service businesses (1-20 employees).
 */

import {
  IndustryProfile,
  InsightArticle,
  PerformanceMetric,
  ServiceOffering,
} from '../types';

export const BRAND = {
  name: 'Signal & Scale',
  tagline: 'Transforming business expertise into measurable digital growth.',
  location: 'Sydney & Remote across Australia',
  operatingModel: 'Remote-first B2B Consultancy',
  primaryEmail: 'hello@signalscale.com.au',
  contactPlaceholder: '[Configurable Contact Email: hello@signalscale.com.au]',
  discoveryDuration: '20-Minute Discovery Call',
  targetMarket:
    'Australian micro and small B2B service firms (1–20 staff), specifically IT support providers, bookkeeping firms, and professional advisers.',
};

export const CORE_SERVICES: ServiceOffering[] = [
  {
    id: 'seo-audits',
    number: '01',
    title: 'Website & SEO Audits',
    tagline: 'Pinpoint why your expertise is invisible to high-intent business buyers.',
    summary:
      'A rigorous diagnostic audit of your technical infrastructure, search visibility, on-page content relevance, and conversion pathways.',
    purpose:
      'To provide business owners and practice leaders with an objective, evidence-based diagnostic of their current digital asset health. We identify exactly where organic visibility leaks occur and where prospective clients drop off before making contact.',
    deliverables: [
      'Comprehensive Technical SEO Health Report (crawlability, indexing, Core Web Vitals, mobile UX)',
      'Search Intent & Keyword Gap Analysis for Australian B2B buyers',
      'Competitor Organic Visibility Benchmark against 3 direct local peers',
      'Conversion Architecture & UX Friction Audit with specific page wireframe recommendations',
      'Prioritised Executive Action Matrix scored by business impact vs. implementation effort',
      '45-minute debrief presentation with recorded video walkthrough and plain-English Q&A',
    ],
    benefits: [
      'Eliminate guesswork on why website visits fail to turn into enquiries',
      'Identify critical technical barriers preventing Google from properly indexing high-margin services',
      'Gain clear, developer-ready action items without confusing marketing jargon',
      'Protect existing referral business with a credible, professional digital storefront',
    ],
    methodology: [
      {
        step: 'Diagnostic Crawl & Architecture Review',
        description:
          'Deep inspection of website codebase, server response times, schema markup, and mobile responsiveness using industry diagnostic tools.',
      },
      {
        step: 'B2B Search Demand Mapping',
        description:
          'Identifying the exact commercial and problem-solving keywords Australian buyers use when seeking your specific advisory services.',
      },
      {
        step: 'Conversion Friction Mapping',
        description:
          'Evaluating page visual hierarchy, proof placement, value proposition clarity, and form accessibility across all primary user journeys.',
      },
      {
        step: 'Executive Synthesis & Debrief',
        description:
          'Translating technical findings into commercial priorities that practice owners can understand and act upon with confidence.',
      },
    ],
    inclusions: [
      'Full technical crawl review up to 500 URLs',
      'Keyword mapping across up to 5 core service offerings',
      'Mobile and desktop speed analysis',
      'On-page metadata and semantic hierarchy audit',
      'Prioritised action plan delivered in PDF and interactive format',
    ],
    exclusions: [
      'Direct software development code modification (remediation code is specified for your developers or available via custom scope)',
      'Guaranteed search rankings (which violates search engine guidelines and ethical consulting principles)',
      'Paid advertising (Google Ads/Meta) audits unless specified in an expanded engagement',
    ],
    targetAudience:
      'Service firms whose websites have remained unchanged for 18+ months or who generate traffic but receive fewer than 2 qualified inbound enquiries per month.',
    timeline: 'Delivered in 10 business days from initial onboarding.',
  },
  {
    id: 'strategy-roadmaps',
    number: '02',
    title: '90-Day Content & Conversion Roadmaps',
    tagline: 'A sequenced, 12-week blueprint to turn qualified traffic into commercial conversations.',
    summary:
      'A practical execution roadmap translating your internal professional knowledge into high-intent content assets, structured conversion funnels, and lead qualification mechanisms.',
    purpose:
      'To give smaller B2B firms a realistic, sustainable digital marketing operating plan that does not require hiring an internal marketing team or producing endless low-value social media posts.',
    deliverables: [
      '12-Week Strategic Content Calendar focused on high-intent buyer decision stages',
      'Content Briefs & Outline Templates for 6 core educational/commercial assets',
      'Service-Page Conversion Wireframes featuring social proof adjacency and clear primary CTAs',
      'Lead Qualification & Inbound Form Architecture to filter out unviable low-budget enquiries',
      'Internal Linking & Topic Cluster Architecture to establish topical search authority',
      'Bi-weekly strategic review check-ins during the 90-day execution window',
    ],
    benefits: [
      'Stop wasting billable hours brainstorming random blog topics that generate zero revenue',
      'Position your firm as the obvious subject-matter authority in your geographical or specialist niche',
      'Attract clients who already understand your methodology before the discovery call begins',
      'Create durable digital assets that continue generating inbound inquiries for years',
    ],
    methodology: [
      {
        step: 'Client Profile & Objection Extraction',
        description:
          'Structured interview with your fee-earners to identify the top 10 questions and objections qualified clients raise prior to signing.',
      },
      {
        step: 'Search Intent Alignment',
        description:
          'Matching real client questions to high-intent organic search queries in the Australian market.',
      },
      {
        step: 'Conversion Asset Structuring',
        description:
          'Designing structured guides, checklists, or diagnostic tools that provide genuine client utility while establishing credibility.',
      },
      {
        step: 'Execution Rhythm & Review',
        description:
          'Staging weekly milestones to maintain consistent progress without disrupting day-to-day client billable delivery.',
      },
    ],
    inclusions: [
      'Comprehensive 90-day roadmap document and Kanban execution board',
      '6 high-intent content briefs with target headings, search intent, and internal link directives',
      '3 service page conversion redesign specifications',
      'Up to 6 hours of scheduled strategic consultation across the 90-day duration',
    ],
    exclusions: [
      'Ghostwriting of technical advisory content without client input (we provide structured briefs; your subject matter expertise remains authentic)',
      'Unsupervised agency retainers with opaque hourly billing',
      'Vanity social media post generation (TikTok, Instagram reels, generic memes)',
    ],
    targetAudience:
      'Established service businesses with proven service-market fit looking to build a predictable, inbound enquiry pipeline beyond word-of-mouth.',
    timeline: 'Roadmap developed in 14 days, followed by 90 days of execution support.',
  },
  {
    id: 'performance-measurement',
    number: '03',
    title: 'Marketing Performance Measurement & Reporting',
    tagline: 'Transparent analytics that track qualified opportunities, not vanity pageviews.',
    summary:
      'Full-funnel Google Analytics 4 (GA4) and Looker Studio configuration designed specifically to measure B2B lead generation, channel attribution, and commercial enquiry quality.',
    purpose:
      'To provide business owners with complete clarity on which marketing channels and website pages actually generate revenue opportunities, replacing confusing 40-page agency PDF reports with a single commercial dashboard.',
    deliverables: [
      'Custom Google Analytics 4 (GA4) Configuration (conversion events, custom dimensions, zero-PII compliance)',
      'Looker Studio Executive Dashboard tailored for practice leaders and directors',
      'Lead Quality Attribution Tracking connecting organic channels to consultation requests',
      'Client-Side Event Verification with Google Tag Manager or direct gtag implementation',
      'Monthly Performance Summary Report highlighting actionable insights and next-step recommendations',
      'Quarterly Performance Review workshop examining channel efficiency and conversion trends',
    ],
    benefits: [
      'Understand the true commercial return of your website without relying on agency assertions',
      'Identify your most profitable traffic sources and eliminate spend on ineffective channels',
      'Empower your leadership team with plain-English metrics that inform strategic investment',
      'Maintain full ownership of your data and analytics accounts at all times',
    ],
    methodology: [
      {
        step: 'Measurement Framework Design',
        description:
          'Defining what constitutes a meaningful B2B conversion (e.g. consultation booking vs. general email newsletter signup).',
      },
      {
        step: 'Telemetry Implementation & Testing',
        description:
          'Deploying GA4 tags, custom event listeners, and tracking triggers with strict privacy controls.',
      },
      {
        step: 'Dashboard Synthesis',
        description:
          'Building a single-pane-of-glass executive report that answers: Where are prospects coming from? What services do they view? Do they convert?',
      },
      {
        step: 'Quarterly Strategic Calibration',
        description:
          'Reviewing seasonal trends, B2B procurement cycles, and pipeline velocity to adjust marketing focus.',
      },
    ],
    inclusions: [
      'Complete GA4 event setup for lead forms, booking links, and key service page engagement',
      '1 interactive Looker Studio dashboard with automated data refresh',
      'Standard 60-day post-setup data integrity monitoring',
      'Written plain-language monthly performance interpretation',
    ],
    exclusions: [
      'CRM integration customization requiring custom software engineering (available via partner referral)',
      'Speculative revenue forecasting or guaranteeing specific enquiry numbers',
    ],
    targetAudience:
      'Firms currently spending on marketing or redesigning their website who lack reliable data on user behaviour and commercial conversion rates.',
    timeline: 'Initial configuration and dashboard deployment in 7 business days.',
  },
];

export const METHODOLOGY_STAGES = [
  {
    step: '01',
    name: 'Diagnose',
    tagline: 'Uncover the facts before prescribing solutions',
    description:
      'We begin with a comprehensive review of your technical website infrastructure, search footprint, competitive landscape, and current conversion barriers. No assumptions, no generic templates.',
    deliverable: 'Diagnostic Health & Intent Report',
  },
  {
    step: '02',
    name: 'Explain',
    tagline: 'Demystify digital marketing in commercial terms',
    description:
      'We present our findings in clear, accessible language, explaining the commercial implications of technical issues so practice owners can make informed, confident business decisions.',
    deliverable: 'Executive Action Plan & Briefing',
  },
  {
    step: '03',
    name: 'Evaluate',
    tagline: 'Prioritise by commercial impact and effort',
    description:
      'Rather than overwhelming your team with a 100-item checklist, we evaluate each recommendation on a matrix of revenue impact versus implementation complexity to create a realistic 90-day sequence.',
    deliverable: '90-Day Prioritised Roadmap',
  },
  {
    step: '04',
    name: 'Prove',
    tagline: 'Track qualified pipeline, not vanity metrics',
    description:
      'We establish transparent measurement frameworks in GA4 that track genuine commercial enquiries, discovery calls, and pipeline quality, proving the tangible value of every marketing initiative.',
    deliverable: 'Transparent Analytics Dashboard',
  },
];

export const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    id: 'it-support',
    name: 'IT Support & Managed Service Providers (MSPs)',
    shortTitle: 'IT Support Providers',
    subtitle: 'Moving beyond local hardware fixes to high-margin recurring managed services.',
    overview:
      'Managed Service Providers and IT support firms often operate in hyper-competitive local Australian markets. Their websites frequently look identical: stock photos of servers, generic lists of services ("Cloud, Security, Support"), and no clear differentiation for SME business leaders seeking risk reduction.',
    coreChallenges: [
      'High competition from larger national IT providers with massive advertising budgets',
      'Difficulty communicating the commercial value of proactive cybersecurity and compliance to non-technical business owners',
      'Websites that read like IT service catalogs rather than business risk solutions',
      'Reliance on reactive break/fix clients rather than predictable monthly recurring revenue contracts',
    ],
    searchBehaviours: [
      {
        intent: 'Urgent Problem-Solving',
        sampleQueries: [
          'emergency business IT support Sydney',
          'ransomware recovery for accounting firm Melbourne',
          'office 365 migration specialist Brisbane',
        ],
      },
      {
        intent: 'Strategic Partner Evaluation',
        sampleQueries: [
          'outsourced IT managed services pricing Australia',
          'essential 8 compliance consultant for small business',
          'cyber security audit provider for financial services',
        ],
      },
    ],
    conversionOpportunities: [
      'Replacing generic "Contact Us" with a structured "15-Minute IT Risk & Security Diagnostic"',
      'Creating dedicated service pages addressing industry compliance (e.g. IT support for legal and accounting firms)',
      'Publishing transparent SLA benchmarks and response-time standards to build instant trust',
      'Implementing clear case studies demonstrating prevented downtime for local businesses',
    ],
    recommendedServices: [
      'Website & SEO Audits (Technical health & commercial keyword mapping)',
      '90-Day Content Roadmaps (Security & compliance authority articles)',
    ],
    quoteInsight:
      '"B2B decision-makers do not buy firewalls or patching schedules; they buy business continuity and freedom from catastrophic downtime."',
  },
  {
    id: 'bookkeeping',
    name: 'Bookkeeping & Advisory Practices',
    shortTitle: 'Bookkeeping Firms',
    subtitle: 'Transitioning from commodity data-entry to high-value strategic cash flow advisory.',
    overview:
      'Australian bookkeeping firms are navigating rapid digital automation (Xero, MYOB) and shifting client expectations. Practices that rely solely on hourly compliance work struggle with margin compression, while those positioning as advisory partners struggle to attract clients willing to pay fixed monthly retainers.',
    coreChallenges: [
      'Commoditization of basic compliance and BAS lodgement services by automated software',
      'Difficulty reaching growing businesses that have outgrown DIY bookkeeping but are not ready for a full-time CFO',
      'Local search visibility limited to low-margin searches like "cheap bookkeeper near me"',
      'Weak website messaging that lists software certifications rather than business cash flow outcomes',
    ],
    searchBehaviours: [
      {
        intent: 'Compliance & Catch-Up',
        sampleQueries: [
          'bookkeeper for small business Sydney CBD',
          'BAS agent rescue bookkeeping Melbourne',
          'payroll compliance audit small business',
        ],
      },
      {
        intent: 'Growth & Advisory Transition',
        sampleQueries: [
          'virtual CFO services for trade businesses',
          'Xero setup and workflow automation consultant',
          'cash flow forecasting specialist Adelaide',
        ],
      },
    ],
    conversionOpportunities: [
      'Offering a "Bookkeeping Health Check" or "Xero File Audit" as a low-friction entry point',
      'Creating niche landing pages targeting specific business types (trades, e-commerce, medical clinics)',
      'Clearly publishing service tier packages and advisory deliverables to eliminate price shoppers',
      'Developing client education resources around payroll compliance, Superannuation guarantee, and STP Phase 2',
    ],
    recommendedServices: [
      '90-Day Content & Conversion Roadmaps',
      'Marketing Performance Measurement & Reporting',
    ],
    quoteInsight:
      '"When your website clearly explains how you protect cash flow and eliminate tax anxiety, business owners gladly pay premium retainers."',
  },
  {
    id: 'professional-advisers',
    name: 'Professional Advisers & Management Consultants',
    shortTitle: 'Professional Advisers',
    subtitle: 'Translating deep specialist intellectual property into digital authority and inbound inquiries.',
    overview:
      'Management consultants, HR advisers, risk specialists, and corporate governance practices possess immense intellectual property. Yet their websites often consist of dense corporate jargon, abstract philosophy, and minimal proof, forcing them to remain 100% dependent on personal referral networks.',
    coreChallenges: [
      'Over-reliance on personal networks and word-of-mouth that caps business scale',
      'Websites that sound overly theoretical without demonstrating clear commercial methodology',
      'Long, complex B2B sales cycles with multiple stakeholders',
      'Inability to capture prospective corporate clients during the early research phase before tenders are issued',
    ],
    searchBehaviours: [
      {
        intent: 'Specialist Problem Research',
        sampleQueries: [
          'fair work compliance audit consultant Australia',
          'organisational restructure methodology for SME',
          'ESG reporting framework consultant NSW',
        ],
      },
      {
        intent: 'Advisory Firm Due Diligence',
        sampleQueries: [
          'independent board review consultant Sydney',
          'workplace culture review specialist Melbourne',
          'risk management framework consultant small enterprise',
        ],
      },
    ],
    conversionOpportunities: [
      'Structuring the website around tangible business methodologies (frameworks, diagnostic tools)',
      'Publishing authoritative, original guides answering specific board-level and executive concerns',
      'Offering a low-commitment 20-minute preliminary scope evaluation for prospective clients',
      'Showcasing anonymised client advisory outcomes with structured before-and-after frameworks',
    ],
    recommendedServices: [
      'Website & SEO Audits',
      '90-Day Content & Conversion Roadmaps',
      'Marketing Performance Measurement',
    ],
    quoteInsight:
      '"Corporate decision-makers do not hire advisers based on flashy promises; they choose the partner who articulates their exact problem better than they can themselves."',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'b2b-lead-generation-guide',
    slug: 'how-australian-b2b-service-businesses-generate-qualified-leads-online',
    title: 'How Australian B2B Service Businesses Can Generate More Qualified Leads Online',
    readTime: '8 min read',
    category: 'Lead Generation & SEO',
    targetKeyword: 'B2B lead generation Australia for small business',
    metaDescription:
      'A practical guide for Australian B2B service firms looking to build an evidence-based inbound marketing pipeline beyond word-of-mouth referrals.',
    lastUpdated: 'November 2026',
    summary:
      'Most small B2B service businesses reach a growth ceiling where word-of-mouth referrals can no longer sustain their capacity. This guide outlines the exact 5-step framework required to build an organic inbound pipeline of qualified, commercial leads without relying on vanity marketing.',
    sections: [
      {
        id: 'the-referral-ceiling',
        heading: '1. The Referral Ceiling and Why Most B2B Websites Fail',
        content: [
          'Word-of-mouth is the lifeblood of most Australian micro and small service businesses. Referrals come with built-in trust, high conversion rates, and minimal price friction.',
          'However, referrals have three fatal strategic flaws: they are inherently unpredictable, they cannot be scaled on demand, and they tend to replicate your existing client profile rather than attracting higher-margin, ideal work.',
          'When service firms attempt to supplement referrals by launching a website, they frequently treat the site as a passive digital business card. The site lists general capabilities, showcases generic stock photography of handshakes, and provides a generic "Contact Us" form. To a prospective corporate buyer searching for a specialist solution, the website looks interchangeable with twenty competitors.',
        ],
        actionTakeaway:
          'Audit your website through the eyes of an unfamiliar buyer: does it prove why your approach solves their specific business challenge in the first 5 seconds?',
      },
      {
        id: 'targeting-high-intent',
        heading: '2. Targeting Problem-Aware and Solution-Aware Search Intent',
        content: [
          'The biggest mistake B2B service firms make in SEO is pursuing high-volume, generic keywords like "IT services" or "business advice". These terms are dominated by multinational conglomerates, feature massive keyword difficulty, and attract students, job seekers, and price shoppers.',
          'Instead, sustainable digital growth stems from capturing high-intent, long-tail commercial queries. These are searches conducted by business owners, practice managers, or finance directors actively facing a pressing business problem.',
          'For example, an IT support firm will generate far higher value from ranking #1 for "cyber security compliance consultant for accounting firms Sydney" (40 monthly searches) than ranking on page 3 for "computer repair" (1,500 monthly searches). The former represents a five-figure managed services contract.',
        ],
        actionTakeaway:
          'Map your top 3 highest-margin services to the specific commercial risks or operational bottlenecks your clients experience right before hiring you.',
        internalLink: {
          text: 'Explore our Website & SEO Audit service to identify your commercial keyword gaps',
          targetPage: 'services',
          sectionId: 'seo-audits',
        },
      },
      {
        id: 'service-page-architecture',
        heading: '3. Designing High-Conversion Service Page Architectures',
        content: [
          'Traffic without conversion is merely a vanity expense. In B2B marketing, the service page is where commercial decisions are made.',
          'A high-converting B2B service page requires a deliberate information hierarchy that systematically addresses buyer objections:',
          '• The Commercial Hook: Clear articulation of the exact business problem solved, for whom, and the concrete outcome delivered.',
          '• Methodology & Process: How you deliver the service step-by-step. B2B buyers fear unexpected disruption; a clear 4-stage process reduces perceived risk.',
          '• Scope Transparency: Clear inclusions and exclusions. Detail what is involved so serious buyers recognize your professional rigor.',
          '• Social Proof Adjacency: Client testimonials and anonymized outcome metrics placed directly next to service claims rather than isolated on a separate testimonials page.',
        ],
        actionTakeaway:
          'Restructure your primary service page from a bulleted list of features into a structured, step-by-step engagement roadmap.',
      },
      {
        id: 'lead-qualification-mechanisms',
        heading: '4. Implementing Intelligent Lead Qualification Mechanisms',
        content: [
          'Many business owners dread online marketing because they fear their inbox will be flooded with unqualified spam, low-budget solicitations, and recruitment messages.',
          'The solution is intentional friction. By incorporating structured qualification questions into your contact flow (such as team size, service interest, and current challenge), you filter out unviable inquiries before they consume your fee-earners’ time.',
          'Furthermore, providing a structured low-commitment diagnostic—such as a 20-minute discovery consultation or a targeted preliminary audit—gives qualified buyers a safe, low-risk way to engage with your practice without committing to a full sales presentation.',
        ],
        actionTakeaway:
          'Replace generic contact forms with structured scoping fields that help you evaluate client viability prior to scheduling calls.',
        internalLink: {
          text: 'See how our 90-Day Strategy Roadmaps establish qualified inbound funnels',
          targetPage: 'services',
          sectionId: 'strategy-roadmaps',
        },
      },
      {
        id: 'measuring-what-matters',
        heading: '5. Measuring Pipeline Velocity Rather Than Pageviews',
        content: [
          'To maintain confidence in your digital marketing investment, you must measure metrics that correlate with bank deposits, not server requests.',
          'Generalist agencies often celebrate vanity metrics: impressions, total website sessions, and click-through rates. For a B2B service firm with an average client lifetime value of $15,000 to $50,000, 100 targeted visits from qualified decision-makers are infinitely more valuable than 10,000 random clicks.',
          'Implement Google Analytics 4 tracking configured to monitor: service page scroll engagement, discovery booking clicks, qualified form completions, and lead source attribution.',
        ],
        actionTakeaway:
          'Establish a single monthly reporting dashboard tracking Qualified Inbound Leads and Cost Per Acquisition.',
        internalLink: {
          text: 'Review our Performance Measurement & Reporting framework',
          targetPage: 'services',
          sectionId: 'performance-measurement',
        },
      },
    ],
  },
  {
    id: 'cro-small-service-businesses',
    slug: 'how-to-improve-website-conversions-for-small-service-businesses',
    title: 'How to Improve Website Conversions for Small Service Businesses',
    readTime: '7 min read',
    category: 'Conversion Rate Optimisation',
    targetKeyword: 'improve service website conversions B2B',
    metaDescription:
      'Discover practical, evidence-based methods to increase enquiry rates on your Australian B2B service website without paying for more advertising.',
    lastUpdated: 'November 2026',
    summary:
      'Doubling your website conversion rate has the exact same business impact as doubling your website traffic, but at a fraction of the cost. Learn how to systematically diagnose friction, build credibility, and guide visitors toward booking discovery conversations.',
    sections: [
      {
        id: 'the-conversion-math',
        heading: '1. The Compounding Math of Conversion Rate Optimisation',
        content: [
          'Most small business owners believe the answer to sluggish revenue is always "more traffic". They spend thousands on Google Ads or search engine optimization to push more visitors onto an underperforming website.',
          'Consider the mathematics: A website with 1,000 monthly visitors converting at 0.5% produces 5 enquiries per month. By systematically improving the conversion rate to 2.0% through clearer messaging, reduced friction, and proof adjacency, that same website generates 20 enquiries per month—a 300% increase with zero additional traffic acquisition spend.',
          'Conversion rate optimisation (CRO) is the single most cost-effective lever available to Australian micro and small service firms.',
        ],
        actionTakeaway:
          'Calculate your current baseline: Divide monthly qualified enquiries by total unique service page visitors to establish your benchmark conversion rate.',
      },
      {
        id: 'the-three-second-rule',
        heading: '2. The 3-Second Credibility Test for B2B Websites',
        content: [
          'When a busy executive or practice director lands on your homepage from a Google search, they make a subconscious decision within 3 seconds whether to stay or return to the search results.',
          'Your hero section must answer three fundamental questions instantly:',
          '1. What exact service do you provide?',
          '2. Who specifically is it designed for?',
          '3. What is the immediate next step to evaluate working together?',
          'If your hero headline uses abstract poetic slogans like "Empowering Tomorrow’s Horizons" or "Your Trusted Innovation Partner", you fail the credibility test. State your business value in plain, unmistakable language.',
        ],
        actionTakeaway:
          'Audit your homepage hero headline: Can an unfamiliar client immediately tell what you do and who you serve without scrolling?',
        internalLink: {
          text: 'Request a comprehensive Website & SEO Audit from Signal & Scale',
          targetPage: 'services',
          sectionId: 'seo-audits',
        },
      },
      {
        id: 'eliminating-cognitive-friction',
        heading: '3. Eliminating Cognitive Friction in the Inbound Journey',
        content: [
          'Friction is anything that forces a user to think, hesitate, or guess during their interaction with your website.',
          'Common sources of friction on B2B service websites include:',
          '• Hidden Pricing or Scope: While exact advisory fees often depend on scope, refusing to explain deliverables or methodology creates suspicion.',
          '• Vague Call-to-Actions: Buttons labelled "Submit" or "Click Here" create cognitive resistance. Use benefit-oriented action labels like "Request an SEO Audit" or "Book a 20-Minute Discovery Call".',
          '• Excessive Contact Fields: Demanding a fax number, mailing address, or mandatory telephone number on an initial contact form drives abandonment.',
          '• Poor Mobile Readability: Over 45% of B2B preliminary research occurs on mobile devices during commutes or between meetings. If your site requires pinch-to-zoom, potential clients leave immediately.',
        ],
        actionTakeaway:
          'Review your primary contact form and remove every field that is not strictly necessary for conducting an initial 15-minute qualification triage.',
      },
      {
        id: 'proof-adjacency',
        heading: '4. The Principle of Social Proof Adjacency',
        content: [
          'Many websites tuck client testimonials away on a dedicated "Testimonials" page that fewer than 4% of visitors ever visit.',
          'In conversion psychology, proof must be situated adjacent to the point of friction. When a prospective buyer is reading about your 90-day roadmap or preparing to submit an audit request, their anxiety peaks ("Will this be worth my time?").',
          'Placing concrete outcome data, client quotes, or methodology guarantees directly alongside the call-to-action button dramatically reduces anxiety and lifts completed submissions.',
        ],
        actionTakeaway:
          'Move your strongest client feedback and outcome data directly onto your service and contact pages.',
        internalLink: {
          text: 'View our evidence-based Performance Evaluation Methodology',
          targetPage: 'evidence',
        },
      },
    ],
  },
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    category: 'SEO Audits & Scope',
    question: 'How is a Signal & Scale SEO Audit different from free automated audit tools?',
    answer:
      'Free automated website checkers run generic robotic scans that flag meaningless technical warnings (such as missing meta tags on irrelevant pages) while completely ignoring commercial intent, B2B user journeys, and conversion architecture. Our audits are manually conducted by senior B2B strategists. We evaluate not just technical health, but whether your website clearly communicates your expertise to Australian decision-makers and where prospective clients are dropping off before submitting an enquiry.',
  },
  {
    category: 'SEO Audits & Scope',
    question: 'Do you guarantee a #1 ranking on Google?',
    answer:
      'No, and no ethical consultancy ever should. Search engine algorithms change constantly, and guaranteeing specific keyword rankings violates Google’s Search Essentials. What we do guarantee is a transparent, evidence-based process that fixes proven technical bottlenecks, targets high-intent commercial keywords, and optimizes your site architecture so Google and qualified buyers recognize your genuine authority.',
  },
  {
    category: 'Lead Quality & Strategy',
    question: 'Why do you focus on smaller B2B firms with 1–20 staff?',
    answer:
      'Micro and small professional service firms have unique commercial dynamics. They possess deep subject-matter expertise but lack full-time marketing directors. They cannot afford to waste $6,000/month on generic agency retainers that produce irrelevant social media posts. Our structured roadmaps and transparent audits deliver targeted, high-impact marketing infrastructure that fee-earners can realistically maintain alongside client delivery.',
  },
  {
    category: 'Consulting & Deliverables',
    question: 'What happens during the 20-minute Discovery Call?',
    answer:
      'The discovery call is a low-pressure diagnostic conversation. We review your current business growth challenges, examine your website’s baseline visibility, and evaluate whether our structured services align with your commercial goals. If we determine that our services are not the right fit for your current stage, we will honestly tell you and recommend alternative resources.',
  },
  {
    category: 'Measurement & Reporting',
    question: 'How do you measure marketing success without vanity metrics?',
    answer:
      'We track commercial pipeline velocity rather than superficial pageviews. In our Google Analytics 4 setups, we configure tracking for qualified discovery calls, structured audit requests, high-intent service page engagement, and channel attribution. You receive a clear, plain-language dashboard showing exactly which channels bring paying clients to your practice.',
  },
  {
    category: 'Implementation & Support',
    question: 'Do you implement the technical fixes, or do we need our own developer?',
    answer:
      'Our Website & SEO Audits deliver detailed, developer-ready action items with precise code and configuration instructions that any competent web developer can easily deploy. If your firm does not have an existing web developer or IT partner, we offer implementation assistance or can coordinate directly with your hosting and CMS administrators.',
  },
];

export const DEMO_PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    metric: 'Organic Search Traffic (B2B Intent)',
    currentValue: '1,842 sessions',
    previousValue: '1,120 sessions',
    percentageChange: '+64.4%',
    trend: 'up',
    benchmark: 'Industry median: +15% YoY',
    notes: 'Growth concentrated in high-intent commercial queries for IT security & advisory services.',
  },
  {
    metric: 'Service-Page Dwell Time',
    currentValue: '2m 48s',
    previousValue: '1m 14s',
    percentageChange: '+127.0%',
    trend: 'up',
    benchmark: 'B2B Benchmark: 1m 30s',
    notes: 'Reflects restructured service page wireframes with structured methodology and proof adjacency.',
  },
  {
    metric: 'Qualified Discovery Call Bookings',
    currentValue: '28 requests',
    previousValue: '9 requests',
    percentageChange: '+211.1%',
    trend: 'up',
    benchmark: 'Conversion rate: 2.4% vs 0.8% baseline',
    notes: 'Measured through completed booking form submissions with verified business email domains.',
  },
  {
    metric: 'Bounce Rate on Key Service Pages',
    currentValue: '41.2%',
    previousValue: '68.5%',
    percentageChange: '-27.3%',
    trend: 'down',
    benchmark: 'Target: < 45%',
    notes: 'Improvement driven by mobile responsiveness fixes, Core Web Vitals optimisation, and clear hero value propositions.',
  },
  {
    metric: 'Organic Lead-to-Opportunity Ratio',
    currentValue: '68.0%',
    previousValue: '29.0%',
    percentageChange: '+39.0%',
    trend: 'up',
    benchmark: 'Practice target: > 60%',
    notes: 'Structured qualification fields on contact forms effectively filtered out low-budget consumer inquiries.',
  },
];

export const HYPOTHETICAL_FUNNEL_DATA = [
  {
    stage: '1. Organic Search Impressions',
    volume: '24,800',
    conversionRate: '7.4% CTR',
    description: 'High-intent B2B search terms across Australian capital cities',
  },
  {
    stage: '2. Targeted Website Visits',
    volume: '1,842',
    conversionRate: '62.0% engage',
    description: 'Visitors landing on educational insights or core service pages',
  },
  {
    stage: '3. Core Service Page Deep-Reads',
    volume: '1,142',
    conversionRate: '7.8% action rate',
    description: 'Sessions spending > 90 seconds reading methodology and scope',
  },
  {
    stage: '4. Discovery & Audit Submissions',
    volume: '89',
    conversionRate: '31.4% qualified',
    description: 'Completed discovery scheduling and diagnostic audit requests',
  },
  {
    stage: '5. Qualified Sales Conversations',
    volume: '28',
    conversionRate: 'Commercial pipeline',
    description: 'Target-profile Australian service businesses (1–20 staff)',
  },
];
