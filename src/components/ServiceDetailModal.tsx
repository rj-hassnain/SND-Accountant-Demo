import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem, COMPANY_INFO } from '../data/sndData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const handleBookService = () => {
    const encoded = encodeURIComponent(service.title);
    onClose();
    navigate(`/contact?service=${encoded}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070E1D]/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono tabular-nums">
            <span>SERVICE BRIEFING {service.number}</span>
            <span aria-hidden="true">·</span>
            <span className="font-sans font-medium text-[#1E5663]">{service.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-500 hover:text-[#0B162C] hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3
              id="modal-service-title"
              className="font-display text-2xl sm:text-3xl text-[#0B162C] font-normal"
            >
              {service.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-3">
              What SND Accountants Handles For You
            </h4>
            <ul className="space-y-2.5">
              {service.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5663] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-md p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0B162C]">
              Who This Service Supports
            </p>
            <p className="text-sm text-slate-600">{service.whoItHelps}</p>
            <p className="text-xs text-slate-500 pt-1 border-t border-slate-200/70">
              Available under SND Accountants’ competitive, all-inclusive monthly fixed pricing tailored to your individual circumstances.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={COMPANY_INFO.primaryPhoneHref}
            className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-mono tabular-nums text-slate-600 hover:text-[#0B162C] py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#1E5663]" />
            <span>Speak directly: {COMPANY_INFO.primaryPhone}</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-[#0B162C] border border-slate-300 rounded-md hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleBookService}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#0B162C] hover:bg-[#16284C] rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Discuss This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
