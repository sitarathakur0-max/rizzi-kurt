import React, { useState } from 'react';
import { Phone, Menu, X, Compass, ShieldCheck, HardHat, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', code: '01' },
    { id: 'services', label: 'Services', code: '02' },
    { id: 'about', label: 'About', code: '03' },
    { id: 'projects', label: 'Projects', code: '04' },
    { id: 'process', label: 'Process', code: '05' },
    { id: 'faq', label: 'FAQ', code: '06' },
    { id: 'contact', label: 'Contact', code: '07' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121315]/95 backdrop-blur-md border-b border-[#2b2f36]">
      {/* Top Technical Status Datum Bar */}
      <div className="border-b border-[#212429] bg-[#0c0d0e] px-4 py-1.5 text-xs text-[#8b939e] font-code">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#ff5500]">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
              <span className="font-semibold tracking-wider">OFFICE & SITE DISPATCH ACTIVE</span>
            </span>
            <span className="hidden md:inline-block text-[#3c424c]">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#d1d5db]">
              <Compass className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>GWATT CH-3645 // {BUSINESS_INFO.coordinates.decimal}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[#8b939e]">
              Rainweg 8, 3645 Gwatt
            </span>
            <span className="text-[#3c424c] hidden sm:inline-block">|</span>
            <a
              id="header-top-phone"
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 text-[#ff5500] font-semibold hover:text-[#ff7733] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Engineering Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Technical Mark */}
          <button
            id="brand-home-link"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#ff5500] rounded p-1"
          >
            {/* Geometric Technical Badge */}
            <div className="relative w-11 h-11 bg-[#1a1c20] border border-[#ff5500] flex items-center justify-center cut-corner-br shadow-inner group-hover:border-white transition-colors">
              <span className="text-[#ff5500] font-tech text-xl font-bold tracking-tighter group-hover:text-white transition-colors">
                RK
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5500]"></div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-tech text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                  Rizzi Kurt
                </span>
                <span className="hidden lg:inline-block bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 text-[10px] font-code px-1.5 py-0.5 uppercase tracking-wider font-semibold">
                  CH-3645
                </span>
              </div>
              <p className="text-[11px] font-code text-[#9ca3af] tracking-wider uppercase">
                Construction Management & Excavation
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 font-code text-xs tracking-wider transition-all duration-150 flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? 'text-white font-semibold bg-[#1f2227] border-b-2 border-[#ff5500]'
                      : 'text-[#9ca3af] hover:text-white hover:bg-[#1a1d22]'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#ff5500]' : 'text-[#555d6b]'}`}>
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Phone Link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-2 px-3.5 py-2.5 bg-[#1a1c20] border border-[#3c424c] hover:border-[#ff5500] text-xs font-code text-white transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500] group-hover:scale-110 transition-transform" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-enquire-btn"
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-all cut-corner-br shadow-md"
            >
              <span>Site Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-call-icon"
              href={BUSINESS_INFO.phoneHref}
              className="p-2 bg-[#1a1c20] border border-[#3c424c] text-[#ff5500] rounded"
              aria-label="Call Rizzi Kurt"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-[#1a1c20] border border-[#3c424c] text-white hover:border-[#ff5500] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Technical Blueprint Ruler Detail Line */}
      <div className="h-1 w-full bg-[#181a1d] border-t border-[#2b2f36] ruler-ticks"></div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#121315] border-b border-[#2b2f36] px-4 pt-3 pb-6 space-y-2">
          <div className="p-3 bg-[#181a1d] border border-[#2b2f36] mb-4 text-xs font-code text-[#9ca3af] flex justify-between items-center">
            <span>LOCATION: GWATT (3645)</span>
            <span className="text-[#ff5500]">TEL: 033 336 21 25</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-code flex items-center justify-between border-l-2 transition-all ${
                    isActive
                      ? 'bg-[#1e2126] text-white border-[#ff5500] font-semibold'
                      : 'text-[#9ca3af] hover:text-white hover:bg-[#181a1d] border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#ff5500]">{item.code}</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#ff5500]' : 'text-[#3c424c]'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#2b2f36] grid grid-cols-2 gap-2">
            <a
              id="mobile-menu-call"
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1a1c20] border border-[#ff5500] text-[#ff5500] font-code text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>033 336 21 25</span>
            </a>
            <button
              id="mobile-menu-enquiry"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-[#ff5500] text-black font-tech text-xs font-bold uppercase tracking-wider"
            >
              Contact Desk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
