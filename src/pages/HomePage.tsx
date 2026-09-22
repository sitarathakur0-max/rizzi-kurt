import React, { useState } from 'react';
import { 
  Phone, ArrowRight, ArrowUpRight, Compass, ShieldCheck, Ruler, 
  Layers, ChevronDown, ChevronRight, HardHat, FileText, CheckCircle2,
  Calendar, Check, MapPin, Drill
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, WORK_PROFILES, PROCESS_PHASES, FAQS } from '../data/business';

interface HomePageProps {
  onNavigate: (page: string, extraData?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCalcScope, setSelectedCalcScope] = useState<'foundation' | 'levelling' | 'management'>('foundation');
  const [estimatedM3, setEstimatedM3] = useState<number>(350);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const excavationServices = SERVICES.filter(s => s.category === 'excavation');
  const managementServices = SERVICES.filter(s => s.category === 'management');

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION: Bold Swiss Engineering Blueprint */}
      <section className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#252930]">
        {/* Blueprint background grid lines */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none"></div>

        {/* Ambient structural accent lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#ff5500]/40 via-transparent to-transparent hidden lg:block"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-[#ff5500]/30 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Engineering Metadata Header Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-6 cut-corner-br">
            <span className="w-2 h-2 rounded-none bg-[#ff5500]"></span>
            <span>CIVIL ENGINEERING & EARTHMOVING // GWATT CH-3645</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-tech text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]">
                Construction <span className="text-[#ff5500]">Management</span> & Precision <span className="text-white">Excavation</span>
              </h1>

              <div className="h-1 w-24 bg-[#ff5500] my-4"></div>

              <p className="text-base sm:text-lg text-[#c5cad3] leading-relaxed max-w-2xl font-sans">
                Operating from <strong className="text-white">Rainweg 8, 3645 Gwatt</strong>, Rizzi Kurt delivers disciplined site preparation, laser-guided building pit excavation, and hands-on construction coordination tailored to Swiss building regulations and topography.
              </p>

              {/* Technical Spec Matrix Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#171a1f] border border-[#2c313a] font-code">
                  <span className="text-[10px] text-[#8b939e] block uppercase">BASE LOCATION</span>
                  <span className="text-xs text-white font-semibold">3645 Gwatt (BE)</span>
                </div>
                <div className="p-3 bg-[#171a1f] border border-[#2c313a] font-code">
                  <span className="text-[10px] text-[#8b939e] block uppercase">PRIMARY FOCUS</span>
                  <span className="text-xs text-[#ff5500] font-semibold">Earthworks & CM</span>
                </div>
                <div className="p-3 bg-[#171a1f] border border-[#2c313a] font-code col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#8b939e] block uppercase">DIRECT DISPATCH</span>
                  <span className="text-xs text-white font-semibold">033 336 21 25</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-request-evaluation-btn"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-4 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cut-corner-br shadow-lg group"
                >
                  <span>Request Site Evaluation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  id="hero-phone-cta-btn"
                  href={BUSINESS_INFO.phoneHref}
                  className="px-6 py-4 bg-[#1a1c21] border border-[#3c424d] hover:border-[#ff5500] text-white font-code text-sm font-semibold transition-all flex items-center justify-center gap-2.5 cut-corner-br group"
                >
                  <Phone className="w-4 h-4 text-[#ff5500] group-hover:scale-110 transition-transform" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Hero Right Column: Technical Blueprint Schematic Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#14161a] border border-[#2f3540] p-6 cut-corner-br shadow-2xl">
                {/* Visual Technical Frame Header */}
                <div className="flex items-center justify-between border-b border-[#252930] pb-3 mb-4 font-code text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ff5500]"></span>
                    <span className="text-white font-bold">SITE COORDINATE SPEC</span>
                  </div>
                  <span className="text-[#8b939e]">FIG 01 // GEOMETRY</span>
                </div>

                {/* Technical Imagery with Blueprint Frame */}
                <div className="relative aspect-[4/3] overflow-hidden border border-[#2b303b] mb-4 bg-[#0e1013]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1000&q=80"
                    alt="Precision excavation works on an active Swiss construction site"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-transparent to-transparent"></div>

                  {/* Survey Crosshair Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#ff5500]/60 rounded-full flex items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-[#ff5500]/70"></div>
                    <div className="h-full w-px bg-[#ff5500]/70 absolute"></div>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-[#0d0e11]/90 border border-[#ff5500] px-2.5 py-1 text-[10px] font-code text-white">
                    LOCATION: GWATT / RAINWEG 8
                  </div>
                </div>

                {/* Technical Spec List */}
                <div className="space-y-2.5 text-xs font-code">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#1f2227] text-[#9ca3af]">
                    <span>EXCAVATION ACCURACY:</span>
                    <span className="text-white font-semibold">Laser-verified grade control</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#1f2227] text-[#9ca3af]">
                    <span>TERRAIN HANDLING:</span>
                    <span className="text-white font-semibold">Sloped, clay, gravel & rock</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#1f2227] text-[#9ca3af]">
                    <span>MANAGEMENT INTERFACE:</span>
                    <span className="text-[#ff5500] font-semibold">Civil to Structural handoff</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-[#9ca3af]">
                    <span>CANTONAL DISPOSAL:</span>
                    <span className="text-white font-semibold">Compliant soil segregation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS INTRODUCTION & REGIONAL COMPETENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="bg-[#17191d] border border-[#2b303a] p-8 cut-corner-br relative">
              <div className="absolute -top-3 -left-3 px-3 py-1 bg-[#ff5500] text-black font-code text-xs font-bold uppercase">
                SWISS SITE PRECISION
              </div>

              <h3 className="font-tech text-2xl font-bold text-white uppercase tracking-tight mt-2 mb-4">
                Local Discipline on Every Ground Cut
              </h3>

              <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
                Construction in the Bernese Oberland and Lake Thun region presents distinct geological and logistic demands: sloping terrain, variable subgrade bearing capacities, tight residential boundaries, and strict municipal transport windows.
              </p>

              <p className="text-sm text-[#9ca3af] leading-relaxed">
                At <strong className="text-white">Rizzi Kurt</strong>, we combine heavy earthworks execution with structured construction management. This dual focus ensures that ground preparation is executed precisely to structural plans, avoiding the delays that commonly occur when excavation teams and structural engineers operate in isolation.
              </p>

              <div className="mt-6 pt-6 border-t border-[#25282f] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-code text-[#717a8a] block uppercase">OFFICE & OPERATIONS</span>
                  <span className="text-xs font-code text-white">Rainweg 8, 3645 Gwatt</span>
                </div>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-code text-[#ff5500] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>More About Us</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] uppercase tracking-wider">
              <span>SECTION 02 // TECHNICAL ORIENTATION</span>
            </div>

            <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Bridging Heavy Earthmoving & Site Management
            </h2>

            <p className="text-[#a4abb7] leading-relaxed font-sans text-base">
              A successful build depends on two foundational pillars: physical terrain precision and rigorous trade coordination. By consolidating excavation and construction management under one direct local partner, property owners and developers benefit from single-point accountability.
            </p>

            {/* 3 Key Structural Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#14161a] border border-[#242830]">
                <div className="w-8 h-8 bg-[#1f2227] text-[#ff5500] flex items-center justify-center font-code text-xs font-bold mb-3 cut-corner-br">
                  01
                </div>
                <h4 className="font-tech text-base font-bold text-white uppercase mb-1">
                  Laser Accuracy
                </h4>
                <p className="text-xs text-[#8b939e] leading-relaxed">
                  Excavating to millimeter-tolerances according to surveyor pegs and structural datum points.
                </p>
              </div>

              <div className="p-4 bg-[#14161a] border border-[#242830]">
                <div className="w-8 h-8 bg-[#1f2227] text-[#ff5500] flex items-center justify-center font-code text-xs font-bold mb-3 cut-corner-br">
                  02
                </div>
                <h4 className="font-tech text-base font-bold text-white uppercase mb-1">
                  Slope Stability
                </h4>
                <p className="text-xs text-[#8b939e] leading-relaxed">
                  Engineered battering, water diversion, and sub-base compaction on hillside contours.
                </p>
              </div>

              <div className="p-4 bg-[#14161a] border border-[#242830]">
                <div className="w-8 h-8 bg-[#1f2227] text-[#ff5500] flex items-center justify-center font-code text-xs font-bold mb-3 cut-corner-br">
                  03
                </div>
                <h4 className="font-tech text-base font-bold text-white uppercase mb-1">
                  Trade Handover
                </h4>
                <p className="text-xs text-[#8b939e] leading-relaxed">
                  Smooth transition from earthworks to formwork, concrete foundations, and utilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXCAVATION & EARTHWORKS SERVICES */}
      <section className="bg-[#0f1013] border-y border-[#25282f] py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] uppercase tracking-wider mb-2">
                <span>SERVICE DIVISION // 01</span>
              </div>
              <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                Excavation & Earthmoving Capabilities
              </h2>
              <p className="text-sm text-[#8b939e] mt-2 max-w-xl">
                Targeted mechanical earth excavation, laser-controlled terrain contouring, and subgrade stabilization throughout Gwatt and neighboring areas.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] hover:text-white uppercase font-bold tracking-wider"
            >
              <span>View Comprehensive Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {excavationServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#15171b] border border-[#282d36] hover:border-[#ff5500] transition-colors p-6 flex flex-col justify-between cut-corner-br group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#21242a]">
                    <span className="text-xs font-code text-[#ff5500] font-bold">
                      {service.code}
                    </span>
                    <span className="text-[10px] font-code text-[#717a8a] uppercase">
                      EARTHWORKS
                    </span>
                  </div>

                  <h3 className="font-tech text-lg font-bold text-white uppercase mb-2 group-hover:text-[#ff5500] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#8b939e] leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1f2227]">
                    <span className="text-[10px] font-code text-[#d1d5db] uppercase block">
                      KEY DELIVERABLES:
                    </span>
                    {service.deliverables.slice(0, 3).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                        <span className="text-[#ff5500] text-xs leading-tight">›</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#21242a]">
                  <button
                    onClick={() => onNavigate('contact', { service: service.title })}
                    className="w-full py-2 bg-[#1a1c21] group-hover:bg-[#ff5500] text-[#c5cad3] group-hover:text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSTRUCTION MANAGEMENT SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] uppercase tracking-wider">
              <span>SERVICE DIVISION // 02</span>
            </div>

            <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Construction Management & Site Leadership
            </h2>

            <p className="text-base text-[#a4abb7] leading-relaxed">
              Construction sites are complex networks of subcontractors, suppliers, heavy deliveries, and time-critical dependencies. Rizzi Kurt provides on-site managerial oversight to ensure work proceeds safely, accurately, and without uncoordinated friction.
            </p>

            <div className="p-4 bg-[#17191d] border border-[#2b303a] font-code text-xs text-[#9ca3af] space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Synchronized Multi-Trade Schedules</span>
              </div>
              <p className="text-[11px] text-[#8b939e] pl-6">
                Preventing expensive site standstills by keeping earthmoving, foundation concrete, and utility contractors aligned on shared milestones.
              </p>
              
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>Strict Compliance & Safety Oversight</span>
              </div>
              <p className="text-[11px] text-[#8b939e] pl-6">
                Enforcing municipal access routes, perimeter security, and Swiss construction health and safety requirements.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cut-corner-br"
            >
              <span>Discuss Site Coordination</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {managementServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#15171b] border border-[#282d36] p-6 cut-corner-br space-y-4 hover:border-[#3d4350] transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#21242a]">
                  <span className="text-xs font-code text-[#ff5500] font-bold">{service.code}</span>
                  <span className="text-[10px] font-code text-[#8b939e]">MANAGEMENT</span>
                </div>

                <h3 className="font-tech text-lg font-bold text-white uppercase">
                  {service.title}
                </h3>

                <p className="text-xs text-[#8b939e] leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-3 border-t border-[#1f2227] space-y-1.5">
                  <span className="text-[10px] font-code text-[#d1d5db] uppercase block">
                    INCLUDED CONTROLS:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                      <span className="text-[#ff5500]">■</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TECHNICAL SCOPE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16181d] border border-[#2e343f] p-6 sm:p-10 cut-corner-br relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#252930] gap-4">
            <div>
              <span className="text-xs font-code text-[#ff5500] uppercase tracking-wider block mb-1">
                INTERACTIVE PLANNING TOOL // REF: EST-3645
              </span>
              <h3 className="font-tech text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Preliminary Scope & Phase Checklist
              </h3>
            </div>
            <div className="text-xs font-code text-[#8b939e]">
              SIMULATE PROJECT WORKFLOW & SAFETY VERIFICATIONS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-code text-[#d1d5db] uppercase mb-2">
                  Select Project Profile:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'foundation', label: 'Building Pit' },
                    { id: 'levelling', label: 'Slope Levelling' },
                    { id: 'management', label: 'Site Mgmt' },
                  ].map((scope) => (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setSelectedCalcScope(scope.id as any)}
                      className={`py-2.5 px-3 font-code text-xs uppercase tracking-wider transition-all border text-center ${
                        selectedCalcScope === scope.id
                          ? 'bg-[#ff5500] text-black border-[#ff5500] font-bold'
                          : 'bg-[#111215] text-[#9ca3af] border-[#2c313a] hover:text-white'
                      }`}
                    >
                      {scope.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-code text-[#d1d5db] mb-2">
                  <span>ESTIMATED EXCAVATION VOLUME / FOOTPRINT:</span>
                  <span className="text-[#ff5500] font-bold">{estimatedM3} m³</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={estimatedM3}
                  onChange={(e) => setEstimatedM3(Number(e.target.value))}
                  className="w-full h-2 bg-[#21242a] accent-[#ff5500] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-code text-[#717a8a] mt-1">
                  <span>50 m³ (Trenching/Utility)</span>
                  <span>1,000 m³</span>
                  <span>2,000 m³ (Full Pit)</span>
                </div>
              </div>

              <div className="p-4 bg-[#111215] border border-[#262a32] text-xs font-code text-[#8b939e] space-y-2">
                <div className="text-white font-semibold">SITE PARAMETERS (GWATT REGION):</div>
                <div>• Average Topsoil Depth: 25–40 cm (Segregated for reuse)</div>
                <div>• Slope Battering Standard: 3:2 to 1:1 depending on geotechnical test</div>
                <div>• Municipal Haulage Window: 07:00 – 17:30 Mon–Fri</div>
              </div>
            </div>

            {/* Simulated Technical Checklist Output */}
            <div className="lg:col-span-7 bg-[#111215] border border-[#2b303a] p-6 cut-corner-br">
              <div className="flex items-center justify-between pb-3 border-b border-[#21252d] font-code text-xs mb-4">
                <span className="text-[#ff5500] font-bold uppercase">
                  RECOMMENDED EXECUTION SEQUENCE
                </span>
                <span className="text-[#717a8a]">CALCULATED CHECKLIST</span>
              </div>

              <div className="space-y-3">
                {selectedCalcScope === 'foundation' && (
                  <>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 01: Municipal Utility & Ground Line Verification
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Confirm gas, sewer, water, and telecom routes with authorities prior to machine arrival.
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 02: Bulk Pit Excavation (~{estimatedM3} m³)
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Laser-controlled depth cut with engineered slopes. Approx. {Math.ceil(estimatedM3 / 10)} truck hauls coordinated with regional disposal.
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 03: Subgrade Compaction & Drainage Handover
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Perimeter trenches for drainage pipes and level sign-off ready for the concrete contractor.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {selectedCalcScope === 'levelling' && (
                  <>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 01: Topographic Survey & Contour Mapping
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Calculate cut-and-fill balance to minimize haul-off and retain usable soil on site.
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 02: Terracing & Slope Retention Preparation
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Staged bench cuts to prevent erosion and foundation trenching for retaining walls.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {selectedCalcScope === 'management' && (
                  <>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 01: Trade Scheduling & Critical Path Setup
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Harmonize excavator, formwork, concrete pump, and utility connections on a synchronized timeline.
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-[#17191d] border-l-2 border-[#ff5500] flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-tech text-white font-bold uppercase block">
                          Phase 02: On-Site Quality & Dimension Audits
                        </span>
                        <p className="text-xs text-[#8b939e] mt-0.5">
                          Daily presence, verifying axis positions, material delivery receipts, and solving site clashes instantly.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#21252d] flex items-center justify-between">
                <span className="text-xs font-code text-[#9ca3af]">
                  Need a tailored on-site assessment in Gwatt?
                </span>
                <button
                  onClick={() => onNavigate('contact', { estimatedM3, scope: selectedCalcScope })}
                  className="px-4 py-2 bg-[#ff5500] text-black font-tech text-xs font-bold uppercase tracking-wider cut-corner-br hover:bg-[#e04a00] transition-colors"
                >
                  Send Site Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL PROCESS & EXECUTION METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] uppercase tracking-wider">
            <span>METHODOLOGY // 4-PHASE STANDARD</span>
          </div>
          <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Engineered Process From Survey to Handover
          </h2>
          <p className="text-sm text-[#8b939e]">
            Transparent milestones designed to protect site stability, eliminate structural rework, and ensure compliance with Swiss standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_PHASES.map((phase, idx) => (
            <div
              key={phase.code}
              className="bg-[#14161a] border border-[#272b33] p-6 cut-corner-br relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#21242a]">
                  <span className="font-tech text-2xl font-bold text-[#ff5500]">
                    {phase.step}
                  </span>
                  <span className="text-[10px] font-code text-[#717a8a]">
                    {phase.code}
                  </span>
                </div>

                <span className="text-[11px] font-code text-[#ff5500] uppercase block mb-1">
                  {phase.phase}
                </span>

                <h3 className="font-tech text-base font-bold text-white uppercase mb-3">
                  {phase.title}
                </h3>

                <p className="text-xs text-[#8b939e] leading-relaxed mb-4">
                  {phase.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-[#1f2227]">
                  <span className="text-[10px] font-code text-[#d1d5db] uppercase block">
                    CRITICAL CHECKS:
                  </span>
                  {phase.criticalChecks.map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5 text-[11px] text-[#9ca3af]">
                      <span className="text-[#ff5500]">•</span>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#21242a] text-[10px] font-code text-[#717a8a]">
                TIMEFRAME: {phase.durationTypical}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('process')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#17191d] border border-[#3c424d] hover:border-[#ff5500] text-white font-code text-xs uppercase tracking-wider transition-colors"
          >
            <span>Read Complete Process Documentation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ff5500]" />
          </button>
        </div>
      </section>

      {/* 7. PROJECT / SITE WORK SHOWCASE */}
      <section className="bg-[#0f1013] border-y border-[#25282f] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] uppercase tracking-wider mb-2">
                <span>SITE LOGS // RECENT WORK PROFILES</span>
              </div>
              <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                Execution Profiles & Site Scopes
              </h2>
              <p className="text-sm text-[#8b939e] mt-2 max-w-xl">
                Representative examples illustrating building pit excavation, sloped terrain terracing, and coordinated civil groundworks.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] hover:text-white uppercase font-bold tracking-wider"
            >
              <span>Explore All Site Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORK_PROFILES.map((project) => (
              <div
                key={project.id}
                className="bg-[#15171b] border border-[#282d36] hover:border-[#ff5500] transition-colors cut-corner-br overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image with technical status overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0e10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171b] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-[#0d0e10]/90 border border-[#ff5500]/60 px-2 py-0.5 text-[10px] font-code text-[#ff5500]">
                      {project.code}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-code text-[#8b939e] uppercase block">
                        {project.category} // {project.location}
                      </span>
                      <h3 className="font-tech text-lg font-bold text-white uppercase group-hover:text-[#ff5500] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#8b939e] leading-relaxed">
                      {project.scopeSummary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#21242a]">
                      <span className="text-[10px] font-code text-[#d1d5db] uppercase block">
                        KEY EXECUTION POINTS:
                      </span>
                      {project.executionKeypoints.slice(0, 2).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                          <span className="text-[#ff5500]">›</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('contact', { project: project.title })}
                    className="w-full py-2.5 bg-[#1b1e24] hover:bg-[#ff5500] text-white hover:text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire About Similar Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE PROFESSIONAL CONSTRUCTION SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161a] border border-[#272b33] p-8 sm:p-12 cut-corner-br">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-code text-[#ff5500] uppercase tracking-wider block mb-2">
              RISK MITIGATION // FOUNDATIONAL CERTAINTY
            </span>
            <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Why Disciplined Groundwork & Management Matters
            </h2>
            <p className="text-sm text-[#8b939e] mt-3 leading-relaxed">
              Every franc invested in proper site preparation and experienced coordination prevents exponentially larger structural costs and project standstills down the line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#101214] border border-[#22252c]">
              <div className="text-[#ff5500] font-tech text-2xl font-bold mb-2">01</div>
              <h4 className="font-tech text-base font-bold text-white uppercase mb-2">
                Subgrade Integrity
              </h4>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                Settlement cracking and moisture problems almost always stem from inadequate subgrade compaction or improper drainage trenches. Precision excavation guarantees the foundation rests on solid ground.
              </p>
            </div>

            <div className="p-5 bg-[#101214] border border-[#22252c]">
              <div className="text-[#ff5500] font-tech text-2xl font-bold mb-2">02</div>
              <h4 className="font-tech text-base font-bold text-white uppercase mb-2">
                Eliminating Trade Delays
              </h4>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                When an excavation site is delivered with exact level tolerances and cleared perimeter access, the subsequent concrete crews can mobilize immediately without rework or disputes.
              </p>
            </div>

            <div className="p-5 bg-[#101214] border border-[#22252c]">
              <div className="text-[#ff5500] font-tech text-2xl font-bold mb-2">03</div>
              <h4 className="font-tech text-base font-bold text-white uppercase mb-2">
                Direct Local Accountability
              </h4>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                Being established at Rainweg 8 in Gwatt ensures prompt site inspections, immediate responses to on-site issues, and deep familiarity with regional soil conditions and municipal offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-code text-[#ff5500] uppercase tracking-wider block">
              QUESTIONS & ANSWERS // FAQ
            </span>
            <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Frequently Addressed Technical Questions
            </h2>
            <p className="text-sm text-[#8b939e] leading-relaxed">
              Find answers regarding planning permissions, soil investigations, coordination handoffs, and operational procedures in Gwatt and the Bernese Oberland.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('faq')}
                className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] hover:text-white uppercase font-semibold"
              >
                <span>Browse All FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.slice(0, 4).map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#14161a] border border-[#272b33] cut-corner-br overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-tech text-base font-bold text-white uppercase tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#ff5500] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#9ca3af] leading-relaxed border-t border-[#1f2227]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL STRONG TECHNICAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative bg-[#17191e] border-2 border-[#ff5500] p-8 sm:p-12 cut-corner-br shadow-2xl overflow-hidden">
          {/* Subtle background ruler ticks */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-code text-[#ff5500] font-bold">
                <span className="w-2 h-2 bg-[#ff5500]"></span>
                <span>DIRECT REGIONAL CONTACT DESK // GWATT</span>
              </div>

              <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                Plan Your Earthworks or Site Management with Rizzi Kurt
              </h2>

              <p className="text-sm text-[#a4abb7] leading-relaxed">
                Contact our office at <strong className="text-white">Rainweg 8, 3645 Gwatt</strong> for preliminary project discussions, site plan evaluations, or equipment dispatch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <a
                id="home-final-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="px-6 py-4 bg-[#0d0e10] border border-[#ff5500] hover:bg-[#ff5500] text-[#ff5500] hover:text-black font-tech text-sm font-bold uppercase tracking-wider transition-all text-center cut-corner-br flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                id="home-final-enquiry-btn"
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-sm font-bold uppercase tracking-wider transition-all text-center cut-corner-br shadow-lg flex items-center justify-center gap-2"
              >
                <span>Submit Technical Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
