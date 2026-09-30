import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  COMPANY_INFO,
  SERVICES_LIST,
  BRAND_IMAGES,
} from '../data/sndData';
import { ResilientImage } from '../components/ResilientImage';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceRequired: string;
  preferredOffice: string;
  message: string;
}

const SERVICE_OPTIONS = [
  ...SERVICES_LIST.map((s) => s.title),
  'Self-Assessment Tax Return',
  'Tax Refund Enquiry',
  'Company Formation / Virtual Office',
  'General Accountancy Consultation',
];

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: 'Company Accounts & Corporation Tax',
    preferredOffice: 'Bolton — Head Office (9 Prescott Street)',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeOfficeTab, setActiveOfficeTab] = useState<'bolton' | 'manchester'>('bolton');

  useEffect(() => {
    const preselectedService = searchParams.get('service');
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: preselectedService,
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (location.hash === '#direct-contact') {
      const timer = setTimeout(() => {
        const el = document.getElementById('direct-contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid contact telephone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe how we can help you.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const selectedOfficeObj =
    COMPANY_INFO.offices.find((o) => o.id === activeOfficeTab) || COMPANY_INFO.offices[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B162C] text-white border-b border-white/10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C89F65]">
              BOLTON &amp; MANCHESTER · BOOK A CONSULTATION
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-white leading-[1.12]">
              Let&apos;s talk about your accounting needs.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need help with company accounts, self-assessment personal tax, VAT, payroll, or starting a new business, our team responds quickly and provides clear, practical guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN TWO-COLUMN CONTACT & CONSULTATION SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT COLUMN: Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E5663]">
                PRACTICE CONTACT DETAILS
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
                Our North West Offices
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                You are welcome to arrange an appointment at either our Bolton Head Office or our Manchester Portland Street office, or speak with an accountant directly by telephone.
              </p>
            </div>

            {/* Office Cards */}
            <div className="space-y-4">
              {COMPANY_INFO.offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white border border-slate-200/90 rounded-lg p-6 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-display text-lg text-[#0B162C]">
                      {office.label}
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-slate-500">
                      {office.postcode}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-sm text-slate-600">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#1E5663] shrink-0 mt-0.5" />
                      <span>
                        {office.street}, {office.city}, {office.postcode}
                      </span>
                    </p>
                    <p className="flex items-center gap-2.5 font-mono tabular-nums text-[#0B162C]">
                      <Phone className="w-4 h-4 text-[#1E5663] shrink-0" />
                      <a
                        href={office.phoneHref}
                        className="hover:text-[#1E5663] transition-colors font-medium"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#1E5663] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#0B162C] transition-colors"
                      >
                        {office.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-slate-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-[#B48A4E] shrink-0" />
                      <span>{office.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Note */}
            <div className="bg-[#0B162C] text-white rounded-lg p-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C89F65]">
                ALL-INCLUSIVE FIXED PRICING
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                During your consultation, we take the time to understand the business or personal tax matters that concern you and provide a competitive, all-inclusive monthly fixed price based on your individual circumstances.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Consultation / Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-8 space-y-6 text-center max-w-lg mx-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      CONSULTATION REQUEST CONFIRMED
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
                      Thank you. Your enquiry has been received.
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      A member of our team at SND Accountants &amp; Business Consultants will review your details and respond promptly during office hours (Monday – Friday, 9:00 AM – 5:00 PM).
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] border border-slate-200 rounded-md p-5 text-left text-xs space-y-2 text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200/70">
                      <span className="font-medium text-slate-500">Name:</span>
                      <span className="text-[#0B162C] font-medium">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/70">
                      <span className="font-medium text-slate-500">Service Required:</span>
                      <span className="text-[#0B162C] font-medium">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/70">
                      <span className="font-medium text-slate-500">Preferred Office:</span>
                      <span className="text-[#0B162C]">{formData.preferredOffice}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-slate-500">Contact:</span>
                      <span className="font-mono tabular-nums text-[#0B162C]">
                        {formData.phone} · {formData.email}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          businessName: '',
                          serviceRequired: 'Company Accounts & Corporation Tax',
                          preferredOffice: 'Bolton — Head Office (9 Prescott Street)',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-[#0B162C] border border-slate-300 rounded-md hover:border-[#0B162C] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-slate-200 pb-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
                      Request a Consultation
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600">
                      Complete the form below and an experienced accountant will get in touch with you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Harrison"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border rounded-md text-[#0B162C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.co.uk"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border rounded-md text-[#0B162C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 01204 237 861 or 07700 900000"
                        className={`w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-[#F8FAFC] border rounded-md text-[#0B162C] placeholder:font-sans placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your company or trading name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-slate-300 rounded-md text-[#0B162C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Required */}
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Service Required
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-slate-300 rounded-md text-[#0B162C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors"
                      >
                        {!SERVICE_OPTIONS.includes(formData.serviceRequired) && (
                          <option value={formData.serviceRequired}>
                            {formData.serviceRequired}
                          </option>
                        )}
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Office */}
                    <div>
                      <label
                        htmlFor="preferredOffice"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Preferred Office Location
                      </label>
                      <select
                        id="preferredOffice"
                        name="preferredOffice"
                        value={formData.preferredOffice}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-slate-300 rounded-md text-[#0B162C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors"
                      >
                        <option value="Bolton — Head Office (9 Prescott Street)">
                          Bolton — Head Office (9 Prescott Street)
                        </option>
                        <option value="Manchester Office (53 Portland Street)">
                          Manchester Office (53 Portland Street)
                        </option>
                        <option value="Telephone / Remote Consultation">
                          Telephone / Remote Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      How Can We Help? <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your business or personal accounting requirements..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border rounded-md text-[#0B162C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0B162C] transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      We respond promptly during office hours (Mon–Fri, 9am–5pm).
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#0B162C] hover:bg-[#16284C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Request a Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "PREFER TO SPEAK DIRECTLY?" + ARCHITECTURAL LOCATION DIRECTORY */}
      <section
        id="direct-contact"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/90 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Direct Contact Strip */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-lg p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E5663]">
                DIRECT TELEPHONE &amp; EMAIL
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0B162C]">
                Prefer to speak directly?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Call our Bolton Head Office or Manchester office directly during business hours (Monday – Friday, 9:00 AM – 5:00 PM) or send us an email.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <a
                href="tel:01204237861"
                className="bg-white border border-slate-200/90 hover:border-[#0B162C] rounded-md p-4 transition-colors flex flex-col justify-between"
              >
                <span className="text-xs text-slate-500">Bolton Head Office</span>
                <span className="mt-1.5 font-mono text-sm font-semibold tabular-nums text-[#0B162C] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1E5663]" />
                  01204 237 861
                </span>
              </a>

              <a
                href="tel:01617712341"
                className="bg-white border border-slate-200/90 hover:border-[#0B162C] rounded-md p-4 transition-colors flex flex-col justify-between"
              >
                <span className="text-xs text-slate-500">Manchester Office</span>
                <span className="mt-1.5 font-mono text-sm font-semibold tabular-nums text-[#0B162C] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1E5663]" />
                  0161 771 2341
                </span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="bg-white border border-slate-200/90 hover:border-[#0B162C] rounded-md p-4 transition-colors flex flex-col justify-between"
              >
                <span className="text-xs text-slate-500">Email Enquiries</span>
                <span className="mt-1.5 text-sm font-semibold text-[#0B162C] flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#1E5663] shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Interactive Location & Map-Style Visual Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B162C] text-white rounded-xl overflow-hidden border border-white/10">
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C89F65]">
                  VISIT US IN THE NORTH WEST
                </p>
                {/* Interactive Office Switcher */}
                <div className="flex items-center gap-1 p-1 bg-white/10 rounded-md">
                  <button
                    type="button"
                    onClick={() => setActiveOfficeTab('bolton')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                      activeOfficeTab === 'bolton'
                        ? 'bg-white text-[#0B162C]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Bolton (BL3 3LZ)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveOfficeTab('manchester')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                      activeOfficeTab === 'manchester'
                        ? 'bg-white text-[#0B162C]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Manchester (M1 3LD)
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {selectedOfficeObj.label}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedOfficeObj.directionsNote}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    Street Address
                  </span>
                  <p className="text-white text-sm font-medium pt-0.5">
                    {selectedOfficeObj.street}
                  </p>
                  <p className="text-slate-300 font-mono tabular-nums">
                    {selectedOfficeObj.city} · {selectedOfficeObj.postcode}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">
                    Direct Telephone &amp; Hours
                  </span>
                  <p className="text-white text-sm font-mono tabular-nums font-medium pt-0.5">
                    {selectedOfficeObj.phone}
                  </p>
                  <p className="text-slate-300">{selectedOfficeObj.hours}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-full min-h-[280px] sm:min-h-[340px] bg-[#132342]">
              <ResilientImage
                src={BRAND_IMAGES.manchesterBoltonOffice}
                alt={`${selectedOfficeObj.label} — ${selectedOfficeObj.street}, ${selectedOfficeObj.city}`}
                className="w-full h-full object-cover min-h-[280px] sm:min-h-[340px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1D]/90 via-[#070E1D]/30 to-transparent flex items-end p-6 sm:p-8">
                <div className="w-full bg-[#0B162C]/90 backdrop-blur-md border border-white/15 rounded-md p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#C89F65]/20 border border-[#C89F65]/40 flex items-center justify-center text-[#C89F65] shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {selectedOfficeObj.street}, {selectedOfficeObj.city}
                      </p>
                      <p className="text-xs font-mono tabular-nums text-slate-300">
                        Postcode: {selectedOfficeObj.postcode} · Tel: {selectedOfficeObj.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
