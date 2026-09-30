import React from 'react';
import {
  Building2,
  FileSpreadsheet,
  Calculator,
  Receipt,
  Users,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Scale,
  Landmark,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem } from '../data/sndData';

const ICON_MAP = {
  Building2,
  FileSpreadsheet,
  Calculator,
  Receipt,
  Users,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Scale,
  Landmark,
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  linkLabel?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  linkLabel = 'Learn more',
}) => {
  const IconComponent = ICON_MAP[service.iconName] || Building2;

  return (
    <article
      onClick={() => onSelect(service)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${service.title} — ${linkLabel}`}
      className="group relative flex flex-col justify-between bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 transition-all duration-150 hover:-translate-y-1 hover:border-[#0B162C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A4E] cursor-pointer text-left"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-center text-[#0B162C] group-hover:bg-[#0B162C] group-hover:text-white group-hover:border-[#0B162C] transition-colors duration-150">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs tabular-nums text-slate-400 group-hover:text-[#B48A4E] transition-colors">
            {service.number} · {service.category}
          </span>
        </div>

        <h3 className="font-display text-xl font-normal text-[#0B162C] group-hover:text-[#1E5663] transition-colors duration-150">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold tracking-wide text-[#0B162C]">
        <span className="group-hover:text-[#1E5663] transition-colors">{linkLabel}</span>
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 group-hover:bg-[#0B162C] group-hover:text-white transition-all duration-150 group-hover:translate-x-0.5">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
