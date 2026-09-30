import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../data/sndData';

interface CTASectionProps {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "Let's make your accounting simpler.",
  description = 'Speak with our experienced accountants and business consultants in Bolton or Manchester. We offer clear advice and a competitive, all-inclusive monthly fixed price tailored to your circumstances.',
  primaryLabel = 'Book a Consultation',
  secondaryLabel = 'Contact Us',
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-[#0B162C] text-white px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 border border-white/10">
          {/* Subtle architectural grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C89F65]">
                BOLTON HEAD OFFICE · MANCHESTER OFFICE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.12]">
                {headline}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl pt-1">
                {description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-end xl:items-center justify-end gap-3.5">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                to="/contact#direct-contact"
                variant="darkOutline"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                <span>{secondaryLabel}</span>
              </Button>
            </div>
          </div>

          {/* Direct contact strip */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="tel:01204237861"
                className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89F65]" />
                <span>Bolton: 01204 237 861</span>
              </a>
              <span aria-hidden="true" className="text-white/20 hidden sm:inline">
                ·
              </span>
              <a
                href="tel:01617712341"
                className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89F65]" />
                <span>Manchester: 0161 771 2341</span>
              </a>
              <span aria-hidden="true" className="text-white/20 hidden md:inline">
                ·
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C89F65]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
            <span className="text-xs text-slate-400">
              {COMPANY_INFO.hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
