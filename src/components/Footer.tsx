import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, Compass, Shield, Layers, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0c0e] border-t border-[#25282e] text-[#9ca3af] relative overflow-hidden">
      {/* Background blueprint subtle markers */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Primary Technical Header Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#212429]">
          
          {/* Brand & Technical Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#181a1d] border border-[#ff5500] flex items-center justify-center cut-corner-br">
                <span className="font-tech text-lg font-bold text-[#ff5500]">RK</span>
              </div>
              <div>
                <span className="font-tech text-xl font-bold text-white uppercase tracking-tight block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs font-code text-[#ff5500] tracking-wider uppercase block">
                  {BUSINESS_INFO.legalCategory}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8b939e] leading-relaxed pr-4">
              Local construction management, site preparation, and excavation services based in Gwatt, Switzerland. Focused on engineering accuracy, ground stability, and transparent site coordination.
            </p>

            <div className="p-3 bg-[#131518] border border-[#25282e] font-code text-xs text-[#9ca3af] space-y-1">
              <div className="flex items-center justify-between text-[#d1d5db]">
                <span>MUNICIPALITY:</span>
                <span className="text-white">Gwatt / Thun (BE)</span>
              </div>
              <div className="flex items-center justify-between text-[#8b939e]">
                <span>STREET ADDRESS:</span>
                <span className="text-[#ff5500]">{BUSINESS_INFO.address.street}</span>
              </div>
              <div className="flex items-center justify-between text-[#8b939e]">
                <span>GEO POSITION:</span>
                <span>{BUSINESS_INFO.coordinates.decimal}</span>
              </div>
              <div className="flex items-center justify-between text-[#8b939e]">
                <span>ALTITUDE REF:</span>
                <span>{BUSINESS_INFO.coordinates.altitude}</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>NAVIGATION</span>
            </div>
            <ul className="space-y-2 text-sm font-code">
              {[
                { id: 'home', label: '01 / Home' },
                { id: 'services', label: '02 / Services' },
                { id: 'about', label: '03 / About' },
                { id: 'projects', label: '04 / Projects' },
                { id: 'process', label: '05 / Process' },
                { id: 'faq', label: '06 / FAQ' },
                { id: 'contact', label: '07 / Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 focus:outline-none focus:text-[#ff5500]"
                  >
                    <ChevronRight className="w-3 h-3 text-[#ff5500]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Scope */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES</span>
            </div>
            <ul className="space-y-2 text-sm text-[#8b939e]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Building Pit & Foundation Excavation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Terrain Reshaping & Site Levelling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Utility Trenching & Ground Conduit Lines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Slope Stabilization & Retaining Prep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Site Supervision & Multi-Trade Coordination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5500] font-code text-xs mt-0.5">•</span>
                <span>Tolerance & Measurement Verification</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold tracking-wider uppercase">
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT CONTACT</span>
            </div>

            <div className="space-y-3">
              <a
                id="footer-call-link"
                href={BUSINESS_INFO.phoneHref}
                className="block p-3.5 bg-[#17191d] border border-[#ff5500]/50 hover:border-[#ff5500] transition-colors rounded cut-corner-br group"
              >
                <span className="text-[11px] font-code text-[#8b939e] block uppercase">Direct Site Telephone</span>
                <span className="font-tech text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors flex items-center justify-between">
                  <span>{BUSINESS_INFO.phone}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
                </span>
              </a>

              <div className="flex items-start gap-2.5 text-sm text-[#8b939e]">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-[#8b939e]">
                <Clock className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-code text-white">HOURS OF OPERATION</span>
                  <span>Mon – Fri: 07:00 – 17:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-code text-[#6b7280]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All technical rights reserved. Gwatt, Switzerland.
          </div>
          <div className="flex items-center gap-6">
            <span>SIA-ALIGNED LOCAL STANDARDS</span>
            <span className="text-[#3c424c]">|</span>
            <span>ENGLISH DOCUMENTATION</span>
            <span className="text-[#3c424c]">|</span>
            <button
              onClick={() => handleNav('contact')}
              className="text-[#ff5500] hover:underline"
            >
              TECHNICAL DESK
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
