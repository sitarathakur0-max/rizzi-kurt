import React from 'react';
import { Phone, MapPin, Compass, ShieldCheck, Ruler, ArrowRight, HardHat, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>ABOUT RIZZI KURT // GWATT CH-3645</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Local Construction Management & Excavation in Gwatt
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            Rooted in Gwatt (Rainweg 8), we provide dedicated on-site leadership, precision groundworks, and reliable trade oversight across the Lake Thun and Bernese Oberland region.
          </p>
        </div>
      </section>

      {/* Main Narrative & Regional Competence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-tech text-3xl font-bold text-white uppercase tracking-tight">
              An Engineering-First Mindset on Every Ground Cut
            </h2>

            <p className="text-[#c5cad3] leading-relaxed font-sans text-base">
              The terrain of Gwatt, Thun, and adjacent pre-alpine areas presents unique challenges: glacial moraine deposits, clay pockets, varying water tables near Lake Thun, and sloped hillside parcels. Successfully preparing these sites requires far more than simply moving earth—it requires an understanding of soil behavior, accurate laser grading, and tight synchronization with structural plans.
            </p>

            <p className="text-[#9ca3af] leading-relaxed font-sans text-sm">
              <strong className="text-white">Rizzi Kurt</strong> was established to meet this need directly. By pairing hands-on excavation capabilities with professional construction management, we eliminate the disconnect between civil earthworks and subsequent building phases.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="font-tech text-xl font-bold text-white uppercase">
                Core Operating Tenets
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#14161a] border border-[#272b33] cut-corner-br">
                  <div className="flex items-center gap-2 text-white font-tech text-sm font-bold uppercase mb-1">
                    <span className="w-2 h-2 bg-[#ff5500]"></span>
                    <span>Geometric Precision</span>
                  </div>
                  <p className="text-xs text-[#8b939e] leading-relaxed">
                    Executing earth cuts strictly according to surveyor benchmarks, depth elevations, and architectural datum lines.
                  </p>
                </div>

                <div className="p-4 bg-[#14161a] border border-[#272b33] cut-corner-br">
                  <div className="flex items-center gap-2 text-white font-tech text-sm font-bold uppercase mb-1">
                    <span className="w-2 h-2 bg-[#ff5500]"></span>
                    <span>Direct Site Presence</span>
                  </div>
                  <p className="text-xs text-[#8b939e] leading-relaxed">
                    Personal oversight on active sites, resolving unexpected subsoil findings or trade conflicts without bureaucratic delay.
                  </p>
                </div>

                <div className="p-4 bg-[#14161a] border border-[#272b33] cut-corner-br">
                  <div className="flex items-center gap-2 text-white font-tech text-sm font-bold uppercase mb-1">
                    <span className="w-2 h-2 bg-[#ff5500]"></span>
                    <span>Responsible Soil Care</span>
                  </div>
                  <p className="text-xs text-[#8b939e] leading-relaxed">
                    Adhering strictly to Swiss cantonal soil protection guidelines by segregating topsoil, preserving soil biology, and routing clean fill.
                  </p>
                </div>

                <div className="p-4 bg-[#14161a] border border-[#272b33] cut-corner-br">
                  <div className="flex items-center gap-2 text-white font-tech text-sm font-bold uppercase mb-1">
                    <span className="w-2 h-2 bg-[#ff5500]"></span>
                    <span>Clear Client Communication</span>
                  </div>
                  <p className="text-xs text-[#8b939e] leading-relaxed">
                    Straightforward updates regarding project status, verified quantities, milestone dates, and upcoming trade schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Location & Technical Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#15171b] border border-[#292e37] p-6 cut-corner-br">
              <div className="flex items-center justify-between pb-3 border-b border-[#21242a] mb-4">
                <span className="text-xs font-code text-[#ff5500] font-bold">
                  LOCAL STATION SPECIFICATIONS
                </span>
                <span className="text-[10px] font-code text-[#717a8a]">GWATT / CH</span>
              </div>

              <div className="space-y-3 text-xs font-code">
                <div className="flex justify-between py-1.5 border-b border-[#1c1f24] text-[#8b939e]">
                  <span>BUSINESS ENTITY:</span>
                  <span className="text-white font-semibold">{BUSINESS_INFO.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1f24] text-[#8b939e]">
                  <span>REGISTERED ADDRESS:</span>
                  <span className="text-[#ff5500] font-semibold">{BUSINESS_INFO.address.street}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1f24] text-[#8b939e]">
                  <span>POSTAL DISTRICT:</span>
                  <span className="text-white">{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1f24] text-[#8b939e]">
                  <span>CANTON:</span>
                  <span className="text-white">{BUSINESS_INFO.address.canton}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1f24] text-[#8b939e]">
                  <span>DIRECT DISPATCH:</span>
                  <a href={BUSINESS_INFO.phoneHref} className="text-[#ff5500] hover:underline font-bold">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex justify-between py-1.5 text-[#8b939e]">
                  <span>OPERATIONAL REACH:</span>
                  <span className="text-white text-right">Gwatt, Thun, Spiez & Oberland</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#21242a]">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full py-3 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cut-corner-br transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 033 336 21 25</span>
                </a>
              </div>
            </div>

            {/* Regional Geological Note */}
            <div className="bg-[#111316] border border-[#242830] p-5 text-xs text-[#8b939e] space-y-2">
              <div className="text-[#d1d5db] font-code font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>REGIONAL TOPOGRAPHY NOTE</span>
              </div>
              <p className="leading-relaxed">
                Sites across Gwatt often transition from lakeside alluvial soil to compact glacial subgrades within short distances. We review initial geotechnical soil data to select appropriate excavation slopes and drainage configurations before breaking ground.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#15171b] border border-[#282d36] p-8 cut-corner-br flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-tech text-xl font-bold text-white uppercase">
              Ready to Discuss an Upcoming Project in Gwatt?
            </h3>
            <p className="text-xs text-[#8b939e] mt-1">
              Contact our desk directly to arrange an on-site consultation or send your civil drawings.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors cut-corner-br shrink-0"
          >
            Contact Technical Desk
          </button>
        </div>
      </section>
    </div>
  );
};
