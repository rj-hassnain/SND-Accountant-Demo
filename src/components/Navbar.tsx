import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/sndData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('about-snd');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about-snd');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-150 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs'
          : 'bg-white border-b border-slate-200/70'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-150 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#0B162C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A4E] rounded-xs"
        >
          SND Accountants
        </Link>

        {/* Zone 2: 4 clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          <Link
            to="/"
            className={`py-1 border-b-2 transition-colors duration-150 whitespace-nowrap ${
              isActive('/') && !location.hash
                ? 'border-[#0B162C] text-[#0B162C]'
                : 'border-transparent hover:text-[#0B162C] hover:border-slate-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`py-1 border-b-2 transition-colors duration-150 whitespace-nowrap ${
              isActive('/services')
                ? 'border-[#0B162C] text-[#0B162C]'
                : 'border-transparent hover:text-[#0B162C] hover:border-slate-300'
            }`}
          >
            Services
          </Link>
          <a
            href="/#about-snd"
            onClick={handleAboutClick}
            className={`py-1 border-b-2 transition-colors duration-150 whitespace-nowrap cursor-pointer ${
              location.hash === '#about-snd'
                ? 'border-[#0B162C] text-[#0B162C]'
                : 'border-transparent hover:text-[#0B162C] hover:border-slate-300'
            }`}
          >
            About
          </a>
          <Link
            to="/contact"
            className={`py-1 border-b-2 transition-colors duration-150 whitespace-nowrap ${
              isActive('/contact')
                ? 'border-[#0B162C] text-[#0B162C]'
                : 'border-transparent hover:text-[#0B162C] hover:border-slate-300'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: Primary action + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#0B162C] hover:bg-[#16284C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#0B162C] hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                isActive('/')
                  ? 'bg-slate-100 text-[#0B162C]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                isActive('/services')
                  ? 'bg-slate-100 text-[#0B162C]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Services
            </Link>
            <a
              href="/#about-snd"
              onClick={handleAboutClick}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </a>
            <Link
              to="/contact"
              className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                isActive('/contact')
                  ? 'bg-slate-100 text-[#0B162C]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#0B162C] hover:bg-[#16284C] rounded-md transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.primaryPhoneHref}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono tabular-nums text-slate-700 bg-slate-50 border border-slate-200 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#1E5663]" />
              <span>Bolton: {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
