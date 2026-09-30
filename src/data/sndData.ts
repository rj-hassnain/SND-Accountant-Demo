export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Core Accountancy' | 'Taxation' | 'Business Advisory' | 'Payroll & Compliance';
  shortDescription: string;
  fullDescription: string;
  keyDeliverables: string[];
  whoItHelps: string;
  iconName:
    | 'Building2'
    | 'FileSpreadsheet'
    | 'Calculator'
    | 'Receipt'
    | 'Users'
    | 'Briefcase'
    | 'TrendingUp'
    | 'ShieldCheck'
    | 'Scale'
    | 'Landmark';
  featuredOnHome: boolean;
}

export const BRAND_IMAGES = {
  heroOffice: '/src/assets/images/hero_uk_accounting_1790781330764.jpg',
  partnerConsultation: '/src/assets/images/value_partner_consultation_1790781348646.jpg',
  manchesterBoltonOffice: '/src/assets/images/office_manchester_bolton_1790781363266.jpg',
};

export const COMPANY_INFO = {
  name: 'SND Accountants',
  fullName: 'SND Accountants & Business Consultants',
  region: 'North West UK · Bolton & Manchester',
  mission:
    'We are a leading firm of Accountants and Business Consultants based in the North West, with offices in Bolton and Manchester. Our mission is to assist individuals and organisations to minimise their tax burdens while meeting the highest standards of statutory compliance.',
  networkStatement:
    'In an effort to serve the best needs of our clients, the practice has established its own expanding network of professional associates to provide specialist support across company formations, virtual office services, and corporate advisory.',
  email: 'info@sndaccountants.co.uk',
  primaryPhone: '01204 237 861',
  primaryPhoneHref: 'tel:01204237861',
  hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  offices: [
    {
      id: 'bolton',
      label: 'Bolton — Head Office',
      street: '9 Prescott Street',
      city: 'Bolton',
      postcode: 'BL3 3LZ',
      phone: '01204 237 861',
      phoneHref: 'tel:01204237861',
      email: 'info@sndaccountants.co.uk',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
      directionsNote: 'Centrally located in Bolton with convenient access for local business owners and individual clients.',
    },
    {
      id: 'manchester',
      label: 'Manchester Office',
      street: '53 Portland Street, 11th Floor',
      city: 'Manchester',
      postcode: 'M1 3LD',
      phone: '0161 771 2341',
      phoneHref: 'tel:01617712341',
      email: 'info@sndaccountants.co.uk',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
      directionsNote: 'Situated in the heart of Manchester city centre on Portland Street, serving commercial clients across Greater Manchester.',
    },
  ],
};

export const TRUST_PILLARS = [
  {
    label: 'FIXED MONTHLY PRICING',
    detail: 'All-inclusive monthly fixed price tailored to your circumstances',
  },
  {
    label: 'STATUTORY COMPLIANCE',
    detail: 'Up-to-date HMRC & Companies House filing procedures',
  },
  {
    label: 'RESPONSIVE ADVICE',
    detail: 'Direct access to experienced professionals who understand your business',
  },
  {
    label: 'BOLTON & MANCHESTER',
    detail: 'Established North West practices serving businesses & individuals',
  },
];

export const WHY_SND_BENEFITS = [
  {
    number: '01',
    title: 'Experienced, Dedicated Professionals',
    description:
      'You are advised by experienced and highly trained professionals who take the time to understand the specific business issues that concern you.',
  },
  {
    number: '02',
    title: 'Prompt & Accountable Communication',
    description:
      'We share a high degree of responsibility across our practice, allowing us to respond to your queries quickly, clearly, and efficiently.',
  },
  {
    number: '03',
    title: 'Up-to-Date Regulatory Precision',
    description:
      'Our internal procedures ensure we are always current with legislative and HMRC changes, enabling clients to receive the highest standard of statutory compliance.',
  },
  {
    number: '04',
    title: 'All-Inclusive Fixed Monthly Pricing',
    description:
      'SND Accountants places strong emphasis on value for money — offering a competitive, all-inclusive monthly fixed price based on your individual circumstances.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Talk to us',
    description:
      'Schedule an initial conversation at our Bolton or Manchester office, or by telephone, to discuss your current accounting, tax, or business requirements.',
  },
  {
    step: '02',
    title: 'Understand your needs',
    description:
      'We review your circumstances in detail and propose a clear, all-inclusive monthly fixed price structured around the exact support you require.',
  },
  {
    step: '03',
    title: 'Get ongoing support',
    description:
      'From routine bookkeeping and payroll to proactive tax planning and statutory filings, our team keeps your obligations accurate and on schedule.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'company-accounts',
    number: '01',
    title: 'Company Accounts & Corporation Tax',
    category: 'Core Accountancy',
    shortDescription:
      'We take care of the entire statutory process from day-to-day records to final year-end accounts and HMRC Corporation Tax filings.',
    fullDescription:
      'Preparing statutory year-end accounts and Corporation Tax returns requires precision and up-to-date regulatory insight. We manage the complete cycle from bookkeeping reconciliation through to final accounts preparation and submission to Companies House and HMRC.',
    keyDeliverables: [
      'Full statutory year-end accounts preparation',
      'Corporation Tax computation and CT600 filing with HMRC',
      'Companies House statutory compliance and filing deadlines',
      'Pre-year-end review to legitimately minimise corporate tax burdens',
    ],
    whoItHelps: 'Limited companies, company directors, and growing enterprises across the North West.',
    iconName: 'Building2',
    featuredOnHome: true,
  },
  {
    id: 'personal-tax',
    number: '02',
    title: 'Personal Tax & Self-Assessment',
    category: 'Taxation',
    shortDescription:
      'Keeping your personal tax affairs in order can be daunting. Allow us to ease the burden, file accurately, and put your mind at rest.',
    fullDescription:
      'Even basic personal tax returns often require specialist knowledge to avoid paying more tax than necessary. We have broad experience completing Self-Assessment returns across a wide range of professions and income structures.',
    keyDeliverables: [
      'Self-Assessment tax returns for Self-Employed individuals, Company Directors, and Landlords',
      'Specialist returns for Medical Professionals, Contractors, and Taxi Drivers',
      'Capital Gains Tax (CGT) computation and reporting',
      'Tax Refund reviews for emergency tax codes, students, or individuals leaving the UK',
    ],
    whoItHelps: 'Self-employed professionals, landlords, company directors, medical professionals, and private individuals.',
    iconName: 'Calculator',
    featuredOnHome: true,
  },
  {
    id: 'vat-services',
    number: '03',
    title: 'VAT & Making Tax Digital',
    category: 'Taxation',
    shortDescription:
      'Our team keeps your VAT affairs in order — advising on the most suitable VAT schemes and ensuring returns are filed accurately and on time.',
    fullDescription:
      'SND Accountants handles every aspect of VAT administration and compliance. From selecting the most advantageous VAT scheme for your turnover to managing Making Tax Digital (MTD) obligations, we make sure your business remains compliant.',
    keyDeliverables: [
      'Advice on optimal VAT schemes (Flat Rate, Cash Accounting, Standard)',
      'VAT registration and de-registration with HMRC',
      'Quarterly and monthly VAT return preparation and filing',
      'Full Making Tax Digital (MTD) software and submission compliance',
    ],
    whoItHelps: 'VAT-registered businesses, growing traders approaching the VAT threshold, and e-commerce or service firms.',
    iconName: 'Receipt',
    featuredOnHome: true,
  },
  {
    id: 'payroll-pensions',
    number: '04',
    title: 'Payroll & Workplace Pensions',
    category: 'Payroll & Compliance',
    shortDescription:
      'Regardless of how many people you employ, we provide tailored payroll services that free you from Real Time Information and HMRC deadlines.',
    fullDescription:
      'The introduction of Real Time Information (RTI) and stricter HMRC enforcement of deadlines mean operating an in-house payroll scheme is more demanding than ever. Whatever the size of your organisation, we remove the administrative burden of running payroll yourself.',
    keyDeliverables: [
      'Weekly, fortnightly, or monthly payroll processing and payslips',
      'HMRC Real Time Information (RTI) submissions and PAYE management',
      'Workplace Pensions auto-enrolment setup and ongoing compliance',
      'Construction Industry Scheme (CIS) contractor and subcontractor returns',
    ],
    whoItHelps: 'Employers of all sizes, company directors, and construction businesses operating under CIS.',
    iconName: 'Users',
    featuredOnHome: true,
  },
  {
    id: 'business-consultancy',
    number: '05',
    title: 'Business Consultancy & Start-Ups',
    category: 'Business Advisory',
    shortDescription:
      'Thinking of starting a new business or planning expansion? We offer tailored business plans, financial forecasting, and strategic advisory.',
    fullDescription:
      'We have broad experience helping businesses across many sectors improve performance and scale. Alongside traditional accountancy, our practice and network of professional associates support you from initial company formation through to long-term expansion.',
    keyDeliverables: [
      'New business start-up planning, structure advice, and company formations',
      'Expansion strategies, raising finance, and investment appraisal',
      'Financial forecasting, cash-flow projections, and systems implementation',
      'Virtual office services and international trade / post-Brexit planning',
    ],
    whoItHelps: 'New founders, ambitious SMEs seeking finance, and established businesses planning strategic growth.',
    iconName: 'Briefcase',
    featuredOnHome: true,
  },
  {
    id: 'bookkeeping-management',
    number: '06',
    title: 'Bookkeeping & Management Accounts',
    category: 'Core Accountancy',
    shortDescription:
      'Free up your time to focus on growing your business with outsourced bookkeeping and customised monthly management accounts reports.',
    fullDescription:
      'Bookkeeping requires time and high concentration. By outsourcing your day-to-day financial record-keeping and monthly reporting to SND Accountants, you gain clear visibility into where your business is performing well and where attention is needed.',
    keyDeliverables: [
      'Comprehensive outsourced bookkeeping and bank reconciliations',
      'Customised monthly or quarterly management accounts reports',
      'Margin, overhead, and departmental performance analysis',
      'Flexible finance outsourcing that delivers operational cost savings',
    ],
    whoItHelps: 'Owner-managed businesses seeking timely financial clarity without the overhead of an internal finance team.',
    iconName: 'TrendingUp',
    featuredOnHome: true,
  },
  {
    id: 'tax-planning-investigations',
    number: '07',
    title: 'Tax Planning & HMRC Investigations',
    category: 'Taxation',
    shortDescription:
      'Proactive tax planning to protect your income under current HMRC rules, alongside specialist guidance on enquiries and disclosures.',
    fullDescription:
      'Effective tax planning protects your income while adapting to the latest HMRC rules and regulations. Should you ever face an HMRC compliance check, enquiry, or need to make a disclosure, our experienced professionals provide calm, thorough representation.',
    keyDeliverables: [
      'Personal and corporate tax planning aligned with current UK legislation',
      'HMRC investigations, compliance enquiries, and voluntary disclosures',
      'Remuneration planning for company directors and shareholders',
      'Property and Capital Gains Tax (CGT) planning for landlords and investors',
    ],
    whoItHelps: 'Individuals, landlords, and businesses looking for proactive tax efficiency or specialist HMRC representation.',
    iconName: 'ShieldCheck',
    featuredOnHome: false,
  },
  {
    id: 'specialist-compliance',
    number: '08',
    title: 'CIS, Company Formations & Virtual Office',
    category: 'Payroll & Compliance',
    shortDescription:
      'Dedicated support for the Construction Industry Scheme (CIS), rapid UK company formations, and professional virtual office services.',
    fullDescription:
      'To serve the broader operational needs of our clients, SND Accountants combines specialist sector compliance—such as Construction Industry Scheme administration—with an established network of professional associates for company formations and virtual office facilities.',
    keyDeliverables: [
      'Construction Industry Scheme (CIS) verification, deductions, and monthly returns',
      'Limited company formations and statutory register setup',
      'Virtual office address and mail handling via our associate network',
      'Cross-border and post-Brexit commercial compliance planning',
    ],
    whoItHelps: 'Construction contractors and subcontractors, new UK company founders, and remote-first businesses.',
    iconName: 'Landmark',
    featuredOnHome: false,
  },
];

export const SPECIALIST_CAPABILITIES_TAGS = [
  'Self-Assessment Returns',
  'Corporation Tax',
  'VAT Registration & Schemes',
  'Making Tax Digital (MTD)',
  'Bookkeeping & Outsourcing',
  'Monthly Management Accounts',
  'Payroll & RTI Submissions',
  'Workplace Pensions',
  'Construction Industry Scheme (CIS)',
  'Capital Gains Tax',
  'Tax Planning & Refunds',
  'Business Start-Ups',
  'Company Formations',
  'Virtual Office Services',
  'Financial Forecasting',
  'HMRC Investigations & Disclosures',
];
