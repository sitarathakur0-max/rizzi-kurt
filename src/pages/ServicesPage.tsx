import React, { useState } from 'react';
import { 
  ArrowRight, Phone, ShieldCheck, Ruler, Layers, CheckCircle2, 
  HardHat, ArrowUpRight, Compass, Drill, SlidersHorizontal 
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ServiceItem } from '../data/business';

interface ServicesPageProps {
  onNavigate: (page: string, extraData?: any) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'excavation' | 'management'>('all');

  const filteredServices = SERVICES.filter((service) => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Page Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>TECHNICAL SPECIFICATIONS & CAPABILITIES</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Excavation Services & Construction Management
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            Specialized groundworks, laser-guided building pit excavation, and disciplined site coordination for building projects in Gwatt, Thun, and the wider Bernese Oberland region.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 font-code text-xs">
            <span className="text-[#717a8a] mr-2">DISCIPLINE FILTER:</span>
            {[
              { id: 'all', label: 'All Disciplines (06)' },
              { id: 'excavation', label: 'Excavation & Earthworks (04)' },
              { id: 'management', label: 'Construction Management (02)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 uppercase tracking-wider transition-colors cut-corner-br ${
                  filter === tab.id
                    ? 'bg-[#ff5500] text-black font-bold'
                    : 'bg-[#15171b] border border-[#2b2f37] text-[#9ca3af] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className="bg-[#14161a] border border-[#272b33] p-6 sm:p-10 cut-corner-br relative hover:border-[#383f4b] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Metadata & Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-tech text-2xl font-bold text-[#ff5500]">
                      {service.code}
                    </span>
                    <span className="px-2 py-0.5 bg-[#1f2227] text-[10px] font-code text-[#8b939e] uppercase">
                      {service.category === 'excavation' ? 'EARTHWORKS & CIVIL' : 'SITE SUPERVISION'}
                    </span>
                  </div>

                  <h2 className="font-tech text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#c5cad3] leading-relaxed font-sans">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact', { service: service.title })}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors cut-corner-br"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Technical Specs & Deliverables */}
                <div className="lg:col-span-6 space-y-6 bg-[#0f1113] p-6 border border-[#21242a] cut-corner-br">
                  <div>
                    <span className="text-[11px] font-code text-[#ff5500] uppercase tracking-wider block mb-3 font-semibold">
                      ENGINEERING DELIVERABLES:
                    </span>
                    <ul className="space-y-2 text-xs text-[#9ca3af]">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                          <span className="leading-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#1a1d22]">
                    <span className="text-[11px] font-code text-[#d1d5db] uppercase tracking-wider block mb-2 font-semibold">
                      TECHNICAL SPECIFICATIONS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.technicalSpecs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-[#17191d] border border-[#2b3038] text-[10px] font-code text-[#8b939e]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Callout for Combined Package */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171a1f] border border-[#ff5500]/50 p-8 sm:p-10 cut-corner-br">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-code text-[#ff5500] uppercase font-bold">
                INTEGRATED DELIVERY MODEL
              </span>
              <h3 className="font-tech text-2xl font-bold text-white uppercase">
                Combining Excavation & Construction Management Under One Contract
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Reduce contractor friction and administrative overhead. When Rizzi Kurt coordinates both the physical ground removal and subsequent on-site trade sequencing, you gain end-to-end accountability from initial survey pegs through structural foundation sign-off.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full sm:w-auto px-5 py-3 bg-[#111215] border border-[#3c424c] hover:border-[#ff5500] text-white font-code text-xs font-bold text-center transition-colors"
              >
                Call 033 336 21 25
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-5 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider text-center transition-colors cut-corner-br"
              >
                Schedule Site Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
