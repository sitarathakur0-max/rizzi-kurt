import React from 'react';
import { ShieldCheck, Ruler, CheckCircle2, ArrowRight, HardHat, Phone, AlertTriangle, FileCheck } from 'lucide-react';
import { BUSINESS_INFO, PROCESS_PHASES } from '../data/business';

interface ProcessPageProps {
  onNavigate: (page: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>ENGINEERED METHODOLOGY // SIA COMPLIANT WORKFLOW</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            The Technical Execution Process
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            How Rizzi Kurt structures site preparation and construction management from the initial boundary review through final subgrade handover.
          </p>
        </div>
      </section>

      {/* Process Flow Stages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {PROCESS_PHASES.map((phase, idx) => (
            <div
              key={phase.code}
              className="bg-[#14161a] border border-[#272b33] p-6 sm:p-10 cut-corner-br relative hover:border-[#3a414e] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Step Marker & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-[#ff5500] text-black font-tech text-2xl font-bold flex items-center justify-center cut-corner-br">
                      {phase.step}
                    </span>
                    <div>
                      <span className="text-xs font-code text-[#ff5500] uppercase block font-semibold">
                        {phase.code} // {phase.phase}
                      </span>
                      <span className="text-[11px] font-code text-[#717a8a]">
                        TYPICAL WINDOW: {phase.durationTypical}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-tech text-2xl font-bold text-white uppercase tracking-tight pt-2">
                    {phase.title}
                  </h2>
                </div>

                {/* Narrative & Description */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-code text-[#d1d5db] uppercase tracking-wider block">
                    OPERATIONAL PROTOCOL:
                  </span>
                  <p className="text-sm text-[#c5cad3] leading-relaxed font-sans">
                    {phase.description}
                  </p>
                </div>

                {/* Quality & Safety Checkpoints */}
                <div className="lg:col-span-3 bg-[#0e1012] p-5 border border-[#202329] cut-corner-br space-y-3">
                  <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold uppercase">
                    <FileCheck className="w-4 h-4" />
                    <span>MANDATORY VERIFICATIONS</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#9ca3af]">
                    {phase.criticalChecks.map((chk, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{chk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Standards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16181d] border border-[#2e333e] p-8 sm:p-10 cut-corner-br">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-code text-[#ff5500] uppercase font-bold">
                STANDARDS ALIGNMENT
              </span>
              <h3 className="font-tech text-xl font-bold text-white uppercase">
                Swiss Technical Norms
              </h3>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                All earthworks, slope cuts, trenching shoring, and subgrade preparations strictly comply with Swiss SIA standards and SUVA workplace safety guidelines.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-code text-[#ff5500] uppercase font-bold">
                ENVIRONMENTAL PROTOCOL
              </span>
              <h3 className="font-tech text-xl font-bold text-white uppercase">
                Soil Care & Cantonal Disposal
              </h3>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                We safeguard living humus layers through segregated topsoil stripping and manage mineral subgrade logistics to minimize environmental impact and truck movements.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-code text-[#ff5500] uppercase font-bold">
                COMMUNICATION DISCIPLINE
              </span>
              <h3 className="font-tech text-xl font-bold text-white uppercase">
                Active Site Documentation
              </h3>
              <p className="text-xs text-[#8b939e] leading-relaxed">
                All level sign-offs and trade milestone completions are systematically recorded, protecting owners and architects against post-construction boundary disputes.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#25282f] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-code text-[#9ca3af]">
              Ready to schedule an initial phase 01 site analysis?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors cut-corner-br"
            >
              Initiate Project Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
