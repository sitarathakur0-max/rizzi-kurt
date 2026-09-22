import React from 'react';
import { Phone, MapPin, Clock, Compass, Mail, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { ContactForm } from '../components/ContactForm';
import { TechnicalMap } from '../components/TechnicalMap';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>DIRECT LOCAL DISPATCH & SITE CONSULTATION</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Contact Rizzi Kurt Desk
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            Connect directly with our construction management and excavation operations based at Rainweg 8, 3645 Gwatt, Switzerland.
          </p>
        </div>
      </section>

      {/* Main Contact Grid: Information & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="bg-[#15171b] border-2 border-[#ff5500] p-6 cut-corner-br space-y-3">
              <span className="text-[11px] font-code text-[#ff5500] font-bold uppercase tracking-wider block">
                DIRECT TELEPHONE // IMMEDIATE CONTACT
              </span>

              <a
                id="contact-page-phone-link"
                href={BUSINESS_INFO.phoneHref}
                className="font-tech text-3xl font-bold text-white hover:text-[#ff5500] transition-colors flex items-center justify-between group"
              >
                <span>{BUSINESS_INFO.phone}</span>
                <ArrowUpRight className="w-6 h-6 text-[#ff5500] group-hover:scale-110 transition-transform" />
              </a>

              <p className="text-xs text-[#8b939e] leading-relaxed">
                Available during standard Swiss operating hours for site inquiries, plant scheduling, and urgent excavation requirements.
              </p>
            </div>

            {/* Address & Physical Base Card */}
            <div className="bg-[#14161a] border border-[#272b33] p-6 cut-corner-br space-y-4">
              <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold uppercase">
                <MapPin className="w-4 h-4" />
                <span>PHYSICAL BASE STATION</span>
              </div>

              <div className="text-sm text-white font-sans space-y-1">
                <div className="font-bold text-base">{BUSINESS_INFO.name}</div>
                <div className="text-[#c5cad3]">{BUSINESS_INFO.address.street}</div>
                <div className="text-[#c5cad3]">
                  {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}
                </div>
              </div>

              <div className="p-3 bg-[#0d0e10] border border-[#202329] font-code text-xs text-[#8b939e] space-y-1">
                <div className="flex justify-between">
                  <span>CANTON:</span>
                  <span className="text-white">{BUSINESS_INFO.address.canton}</span>
                </div>
                <div className="flex justify-between">
                  <span>GEO COORDINATES:</span>
                  <span className="text-[#ff5500]">{BUSINESS_INFO.coordinates.decimal}</span>
                </div>
                <div className="flex justify-between">
                  <span>ELEVATION REF:</span>
                  <span className="text-white">{BUSINESS_INFO.coordinates.altitude}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#14161a] border border-[#272b33] p-6 cut-corner-br space-y-3">
              <div className="flex items-center gap-2 text-xs font-code text-[#ff5500] font-semibold uppercase">
                <Clock className="w-4 h-4" />
                <span>OFFICE & SITE DISPATCH HOURS</span>
              </div>

              <div className="space-y-2 text-xs font-code">
                {BUSINESS_INFO.workingHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-[#1f2227] last:border-b-0 text-[#8b939e]"
                  >
                    <span>{schedule.days}:</span>
                    <span className="text-white font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Area Scope */}
            <div className="bg-[#111316] border border-[#242830] p-5 text-xs text-[#8b939e] space-y-1.5">
              <span className="font-code text-white font-semibold uppercase block">
                REGIONAL SERVICE CORRIDOR
              </span>
              <p className="leading-relaxed">
                Regularly operating across Gwatt, Thun, Spiez, Steffisburg, and the surrounding communities of the Bernese Oberland.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={initialService} />
          </div>

        </div>
      </section>

      {/* Technical Blueprint Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-code text-[#ff5500] uppercase tracking-wider block">
                CAD ASTRAL LOCATION
              </span>
              <h2 className="font-tech text-2xl font-bold text-white uppercase">
                Topographic Site Orientation — Gwatt CH-3645
              </h2>
            </div>
            <div className="text-xs font-code text-[#8b939e] hidden sm:block">
              SECTOR 3645 // LAKE THUN
            </div>
          </div>

          <TechnicalMap />
        </div>
      </section>
    </div>
  );
};
