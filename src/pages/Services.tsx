import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import {
  SERVICES_LIST,
  COMPANY_INFO,
  ServiceItem,
} from '../data/sndData';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { CTASection } from '../components/CTASection';

type CategoryFilter =
  | 'All'
  | 'Core Accountancy'
  | 'Taxation'
  | 'Payroll & Compliance'
  | 'Business Advisory';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Core Accountancy',
  'Taxation',
  'Payroll & Compliance',
  'Business Advisory',
];

const SPECIALIST_BREAKDOWN = [
  {
    group: 'Taxation & HMRC Representation',
    items: [
      {
        name: 'Self-Assessment Tax Returns',
        detail:
          'Specialist preparation for Landlords, Self-Employed individuals, Company Directors, Medical Professionals, and Taxi Drivers.',
      },
      {
        name: 'Tax Refunds & Code Reviews',
        detail:
          'Reviewing emergency tax codes, student tax overpayments, or tax paid prior to leaving the UK to recover refunds due from HMRC.',
      },
      {
        name: 'Capital Gains Tax & Tax Planning',
        detail:
          'Protecting your income and assets while adapting to the latest HMRC rules and statutory reliefs.',
      },
      {
        name: 'HMRC Investigations, Enquiries & Disclosures',
        detail:
          'Experienced representation and constructive management of HMRC compliance checks and voluntary disclosures.',
      },
    ],
  },
  {
    group: 'Business Operations, Payroll & Growth',
    items: [
      {
        name: 'Making Tax Digital (MTD) & VAT',
        detail:
          'Advising on the best VAT schemes, handling registration and de-registration, and keeping digital VAT filings compliant.',
      },
      {
        name: 'Construction Industry Scheme (CIS) & Workplace Pensions',
        detail:
          'Full CIS return administration alongside Real Time Information (RTI) payroll and pension auto-enrolment.',
      },
      {
        name: 'Monthly Customised Management Accounts',
        detail:
          'Tailored monthly financial reporting enabling you to analyse performance and address areas where your business may be struggling.',
      },
      {
        name: 'Start-Ups, Formations & Associate Network',
        detail:
          'Company formations, virtual office services, financial forecasting, raising finance, investment appraisal, and Brexit planning.',
      },
    ],
  },
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const highlightId = searchParams.get('highlight');
    if (highlightId) {
      const found = SERVICES_LIST.find((s) => s.id === highlightId);
      if (found) {
        setSelectedService(found);
      }
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setSelectedService(null);
    if (searchParams.has('highlight')) {
      searchParams.delete('highlight');
      setSearchParams(searchParams, { replace: true });
    }
  };

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. SERVICES HERO */}
      <section className="bg-[#0B162C] text-white border-b border-white/10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C89F65]">
              ACCOUNTANCY • TAXATION • BUSINESS CONSULTANCY
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-white leading-[1.12]">
              Accounting services designed around your needs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              SND Accountants &amp; Business Consultants offers a comprehensive range of accountancy, taxation, payroll, and advisory services. Every engagement is underpinned by experienced professionals and a competitive, all-inclusive monthly fixed price based on your individual circumstances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTERABLE SERVICE GRID */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
              Practice Areas &amp; Core Capabilities
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Select any service below to inspect deliverables or request a tailored consultation.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg overflow-x-auto max-w-full"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#0B162C] shadow-2xs'
                      : 'text-slate-600 hover:text-[#0B162C]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
              linkLabel="Learn more"
            />
          ))}
        </div>
      </section>

      {/* 3. COMPLETE SPECIALIST COVERAGE MATRIX */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            eyebrow="DETAILED PRACTICE SCOPE"
            title="Specialist compliance, tax & advisory coverage"
            description="Even straightforward tax returns and compliance obligations often require in-depth specialist knowledge to avoid paying more tax than necessary or missing strict HMRC deadlines."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {SPECIALIST_BREAKDOWN.map((column) => (
              <div
                key={column.group}
                className="bg-[#F8FAFC] border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-6"
              >
                <h3 className="font-display text-2xl text-[#0B162C] pb-4 border-b border-slate-200">
                  {column.group}
                </h3>
                <div className="space-y-5">
                  {column.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1E5663] shrink-0 mt-1" />
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-[#0B162C]">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/contact?service=${encodeURIComponent(item.name)}`
                              )
                            }
                            className="text-xs font-medium text-[#1E5663] hover:text-[#0B162C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                          >
                            Enquire →
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "NEED SOMETHING MORE SPECIFIC?" SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white border border-slate-200/90 rounded-lg p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E5663]">
              TAILORED GUIDANCE
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
              Need something more specific?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If you are unsure which service fits your current circumstances — whether you are launching a new company, managing landlord property income, checking a potential HMRC tax refund, or outsourcing bookkeeping — our accountants in Bolton and Manchester will gladly advise you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <Button to="/contact" variant="primary" size="lg">
              <span>Talk to an Accountant</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href={COMPANY_INFO.primaryPhoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-mono tabular-nums text-[#0B162C] bg-[#F8FAFC] border border-slate-300 hover:border-[#0B162C] rounded-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#1E5663]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CONSULTATION CTA */}
      <CTASection />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={handleCloseModal}
      />
    </div>
  );
};
