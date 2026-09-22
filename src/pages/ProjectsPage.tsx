import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, MapPin, Layers, Phone } from 'lucide-react';
import { BUSINESS_INFO, WORK_PROFILES, ProjectProfile } from '../data/business';

interface ProjectsPageProps {
  onNavigate: (page: string, extraData?: any) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>SITE LOGS & TECHNICAL EXECUTION PROFILES</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Selected Groundworks & Site Scopes
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            Review technical execution profiles demonstrating how Rizzi Kurt manages building pit excavation, sloped terrain terracing, and multi-trade construction coordination in real-world site conditions.
          </p>
        </div>
      </section>

      {/* Project Profiles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {WORK_PROFILES.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#14161a] border border-[#272b33] cut-corner-br overflow-hidden hover:border-[#383e4a] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Project Image & Technical Stamp */}
                <div className="lg:col-span-5 relative bg-[#0e1012] min-h-[280px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#14161a]"></div>

                  <div className="absolute top-4 left-4 bg-[#0c0d0f]/90 border border-[#ff5500] px-3 py-1 text-xs font-code text-[#ff5500]">
                    {project.code}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-[#0c0d0f]/90 border border-[#262930] px-3 py-1 text-[11px] font-code text-[#9ca3af] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#ff5500]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Project Breakdown Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#21242a] text-xs font-code text-[#8b939e] mb-3">
                      <span>DISCIPLINE: {project.category.toUpperCase()}</span>
                      <span className="text-[#ff5500]">STATUS: EXECUTED</span>
                    </div>

                    <h2 className="font-tech text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[#c5cad3] leading-relaxed mb-6 font-sans">
                      {project.scopeSummary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#21242a]">
                      <div>
                        <span className="text-[11px] font-code text-[#ff5500] uppercase tracking-wider block mb-2 font-semibold">
                          SITE CHALLENGES ADDRESSED:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#9ca3af]">
                          {project.technicalChallenges.map((ch, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="text-[#ff5500] leading-tight">›</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[11px] font-code text-[#d1d5db] uppercase tracking-wider block mb-2 font-semibold">
                          KEY EXECUTION SPECIFICATIONS:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#9ca3af]">
                          {project.executionKeypoints.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-[#ff5500] leading-tight">■</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#21242a] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs font-code text-[#8b939e]">
                      Planning an equivalent scope in the Gwatt / Thun region?
                    </span>
                    <button
                      onClick={() => onNavigate('contact', { project: project.title })}
                      className="px-5 py-2.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider transition-colors cut-corner-br flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Inquire About This Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Information Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#15171b] border border-[#282d36] cut-corner-br flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#8b939e] space-y-1">
            <span className="font-code text-white font-semibold block uppercase">
              CONFIDENTIALITY & TECHNICAL SITE REVIEWS
            </span>
            <p>
              Exact client plot cadastral details are anonymized in compliance with Swiss data protection standards. Full geotechnical and project logs are shared during on-site consultations.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="px-5 py-3 bg-[#1b1e24] border border-[#3c424c] hover:border-[#ff5500] text-white font-code text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Direct Telephone: {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
};
