import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/sndData';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('about-snd');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#about-snd');
    }
  };

  return (
    <footer className="bg-[#070E1D] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6">
            <Link
              to="/"
              className="inline-block font-display text-2xl text-white tracking-tight"
            >
              SND Accountants
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C89F65]">
              Accountants &amp; Business Consultants
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Based in the North West with offices in Bolton and Manchester. Assisting individuals and organisations to minimise their tax burdens while meeting the highest standards of statutory compliance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#C89F65] shrink-0" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/#about-snd"
                  onClick={handleAboutClick}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About SND
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#C89F65] hover:text-white transition-colors font-medium">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services?highlight=${service.id}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Bolton & Manchester Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Our Offices
            </h3>

            {COMPANY_INFO.offices.map((office) => (
              <div key={office.id} className="space-y-1.5 text-sm border-l-2 border-white/15 pl-3.5">
                <p className="text-xs font-semibold text-white tracking-wide">
                  {office.label}
                </p>
                <p className="text-xs text-slate-400 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C89F65] shrink-0 mt-0.5" />
                  <span>
                    {office.street}, {office.city}, {office.postcode}
                  </span>
                </p>
                <p className="text-xs font-mono tabular-nums text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C89F65] shrink-0" />
                  <a href={office.phoneHref} className="hover:text-white transition-colors">
                    {office.phone}
                  </a>
                </p>
              </div>
            ))}

            <div className="pt-1 text-xs">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C89F65]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy &amp; Cookies Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Policy Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070E1D]/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-xl border border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h4 className="font-display text-xl text-[#0B162C]">
                {legalModal === 'privacy'
                  ? 'Privacy & Cookies Policy'
                  : 'Terms & Conditions'}
              </h4>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close legal notice"
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    {COMPANY_INFO.fullName} is committed to protecting the privacy and confidentiality of client and visitor information across our Bolton and Manchester practices.
                  </p>
                  <p>
                    Information submitted through our consultation enquiry form is used solely to respond to your accountancy, taxation, or business consultancy request. For data enquiries, please contact{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#1E5663] underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    .
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All accountancy, taxation, payroll, and business consultancy engagements with {COMPANY_INFO.fullName} are subject to formal client engagement letters and statutory UK compliance procedures.
                  </p>
                  <p>
                    Fixed monthly pricing quotations are tailored to individual client circumstances following an initial consultation with our Bolton (9 Prescott Street, BL3 3LZ) or Manchester (53 Portland Street, M1 3LD) office.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-medium bg-[#0B162C] text-white rounded-md hover:bg-[#16284C] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
