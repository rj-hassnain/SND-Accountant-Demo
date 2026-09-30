import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BRAND_IMAGES,
  COMPANY_INFO,
  TRUST_PILLARS,
  SERVICES_LIST,
  WHY_SND_BENEFITS,
  HOW_IT_WORKS_STEPS,
  SPECIALIST_CAPABILITIES_TAGS,
  ServiceItem,
} from '../data/sndData';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { CTASection } from '../components/CTASection';
import { ResilientImage } from '../components/ResilientImage';

export const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about-snd') {
      const timer = setTimeout(() => {
        const el = document.getElementById('about-snd');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const featuredServices = SERVICES_LIST.filter((s) => s.featuredOnHome);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B162C] text-white overflow-hidden border-b border-white/10">
        {/* Subtle architectural grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Positioning & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C89F65]">
                ACCOUNTING • TAX • BUSINESS SUPPORT
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-normal tracking-tight text-white leading-[1.1]">
                Minimising your tax burden while meeting the highest standards of compliance.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                SND Accountants &amp; Business Consultants advises businesses and individuals across Bolton, Manchester, and the North West — taking care of your company accounts, personal tax, payroll, VAT, and business strategy under a clear, all-inclusive monthly fixed price.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button to="/contact" variant="secondary" size="lg">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/services" variant="darkOutline" size="lg">
                  <span>Explore Our Services</span>
                </Button>
              </div>

              {/* Clean unboxed office metadata */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C89F65]" />
                  <span>Bolton Head Office (BL3 3LZ)</span>
                </span>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C89F65]" />
                  <span>Manchester Portland Street (M1 3LD)</span>
                </span>
                <span aria-hidden="true" className="text-white/25 hidden sm:inline">
                  ·
                </span>
                <a
                  href={COMPANY_INFO.primaryPhoneHref}
                  className="inline-flex items-center gap-1.5 font-mono tabular-nums text-white hover:text-[#C89F65] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89F65]" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Composed Visual Frame */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-lg overflow-hidden border border-white/15 bg-[#132342] shadow-2xl">
                <div className="aspect-16/10 sm:aspect-16/9 lg:aspect-4/3 w-full overflow-hidden">
                  <ResilientImage
                    src={BRAND_IMAGES.heroOffice}
                    alt="SND Accountants & Business Consultants advisory room in the North West UK"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Measured Scrim Overlay */}
                <div className="bg-gradient-to-t from-[#070E1D] via-[#070E1D]/90 to-[#070E1D]/60 p-5 sm:p-6 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C89F65]">
                    NORTH WEST PRACTICE
                  </p>
                  <p className="mt-1.5 text-sm text-white/95 leading-snug">
                    Advising company directors, sole traders, landlords, and growing organisations with tailored monthly fixed-fee accountancy.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono tabular-nums">
                    <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
                    <Link
                      to="/contact"
                      className="font-sans font-medium text-[#C89F65] hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>Arrange a meeting</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRO STRIP */}
      <section
        aria-label="Practice Commitments"
        className="bg-white border-b border-slate-200/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {TRUST_PILLARS.map((item, idx) => (
              <div
                key={item.label}
                className={`${
                  idx > 0 ? 'pt-5 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                } flex flex-col justify-between`}
              >
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0B162C]">
                  {item.label}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <SectionHeading
            eyebrow="OUR SPECIALIST SERVICES"
            title="Accounting support that works around your business"
            description="Whether you require complete year-end company accounts, self-assessment personal tax returns, or ongoing VAT and payroll administration, our specialists handle the detail so you can focus on your business."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B162C] hover:text-[#1E5663] transition-colors whitespace-nowrap shrink-0 group pb-1 border-b border-[#0B162C]/30 hover:border-[#1E5663]"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(s) => setSelectedService(s)}
              linkLabel="View service scope"
            />
          ))}
        </div>

        {/* Additional Specialist Coverage Bar */}
        <div className="mt-10 bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1E5663]">
              EXTENDED PRACTICE &amp; ASSOCIATE NETWORK
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Alongside traditional accountancy, SND Accountants supports clients with{' '}
              <span className="font-medium text-[#0B162C]">
                {SPECIALIST_CAPABILITIES_TAGS.slice(6).join(' · ')}
              </span>
              .
            </p>
          </div>
          <Button to="/services" variant="outline" size="md">
            <span>View Full Service Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 4. WHY SND / VALUE SECTION */}
      <section
        id="about-snd"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/90 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Editorial Image & Mission Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ResilientImage
                    src={BRAND_IMAGES.partnerConsultation}
                    alt="SND Accountants advising a business client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#0B162C] text-white space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C89F65]">
                    OUR MISSION
                  </p>
                  <blockquote className="font-display text-lg sm:text-xl font-normal text-white/95 leading-snug">
                    “To assist individuals and organisations to minimise their tax burdens while meeting the highest standards of statutory compliance.”
                  </blockquote>
                  <p className="text-xs text-slate-400 pt-1">
                    SND Accountants &amp; Business Consultants · Bolton &amp; Manchester
                  </p>
                </div>
              </div>

              {/* Expanding Associate Network Box */}
              <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200/90 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1E5663]">
                  PROFESSIONAL ASSOCIATE NETWORK
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.networkStatement}
                </p>
              </div>
            </div>

            {/* Right Column: Value Proposition & 4 Authentic Pillars */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                eyebrow="WHY EMPLOY SND ACCOUNTANTS"
                title="More than numbers. A partner for your business."
                description="Choosing the right accountant means working with professionals who understand your day-to-day commercial realities and keep your statutory obligations clear, predictable, and well-managed."
              />

              <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {WHY_SND_BENEFITS.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="py-6 first:pt-6 last:pb-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                  >
                    <span className="font-mono text-xs font-medium tabular-nums text-[#B48A4E] pt-1 shrink-0">
                      {benefit.number}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-display text-xl font-normal text-[#0B162C]">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="md">
                  <span>Speak With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Link
                  to="/services"
                  className="text-sm font-medium text-slate-600 hover:text-[#0B162C] underline underline-offset-4 transition-colors"
                >
                  Explore how we support businesses &amp; individuals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeading
          eyebrow="HOW WE WORK WITH YOU"
          title="A straightforward path to clearer finances"
          description="Whether you are launching a new venture, switching accountants, or seeking help with a personal tax return, getting started is simple."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200/90 rounded-lg p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                  <span className="font-mono text-2xl font-medium tabular-nums text-[#0B162C]">
                    {item.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#B48A4E]" />
                </div>
                <h3 className="font-display text-2xl font-normal text-[#0B162C]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <CTASection />

      {/* Service Detail Briefing Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
