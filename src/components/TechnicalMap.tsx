import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const TechnicalMap: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Rainweg 8, 3645 Gwatt, Switzerland'
  )}`;

  return (
    <div className="bg-[#14161a] border border-[#2a2e36] overflow-hidden relative cut-corner-br">
      {/* Blueprint Top Bar */}
      <div className="bg-[#0e1012] border-b border-[#25282f] px-4 py-2.5 flex items-center justify-between font-code text-xs">
        <div className="flex items-center gap-2 text-white font-medium">
          <Compass className="w-3.5 h-3.5 text-[#ff5500]" />
          <span>SITE GRID: GWATT // PLOT SECTOR 3645</span>
        </div>
        <div className="text-[#8b939e] hidden sm:block">
          DATUM: WGS84 // {BUSINESS_INFO.coordinates.decimal}
        </div>
      </div>

      {/* Map Display Container */}
      <div className="relative h-72 sm:h-80 w-full bg-[#111316] flex items-center justify-center overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-60"></div>
        <div className="absolute inset-0 bg-blueprint-grid-dense opacity-20 pointer-events-none"></div>

        {/* Topographic Contour Lines SVG */}
        <svg
          className="absolute inset-0 w-full h-full stroke-[#282d36] fill-none opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-50,60 Q150,20 350,70 T750,50 T1150,90" strokeWidth="1" />
          <path d="M-50,110 Q180,90 380,120 T780,100 T1150,140" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M-50,160 Q200,150 400,170 T800,160 T1150,190" strokeWidth="1" />
          <path d="M-50,220 Q220,210 420,230 T820,210 T1150,250" strokeWidth="1.2" />
          <path d="M-50,280 Q240,270 450,290 T850,270 T1150,300" strokeWidth="1" />

          {/* Lake Thun (Thunersee) shoreline abstract representation */}
          <path
            d="M 650,-20 C 600,120 700,240 850,350 L 1200,350 L 1200,-20 Z"
            className="fill-[#18202b]/70 stroke-[#2c3d52]"
            strokeWidth="1.5"
          />
          <text x="750" y="80" fill="#4d6582" fontSize="11" fontFamily="monospace" letterSpacing="2">
            THUNERSEE (LAKE THUN) ~558m
          </text>

          {/* Survey axes lines */}
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ff5500" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ff5500" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
        </svg>

        {/* Radar concentric range circles */}
        <div className="absolute w-44 h-44 rounded-full border border-[#2b303a] pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full border border-[#232730] pointer-events-none"></div>

        {/* Rainweg 8 Target Pin with Pulse */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            {/* Ping animation ring */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-50"></span>
            
            {/* Marker Crosshair Badge */}
            <div className="relative w-11 h-11 bg-[#ff5500] text-black border-2 border-white rounded-none cut-corner-br flex items-center justify-center shadow-2xl">
              <MapPin className="w-6 h-6 text-black" />
            </div>
          </div>

          <div className="mt-2 bg-[#0d0e10]/95 border border-[#ff5500] px-3 py-1.5 shadow-xl text-center">
            <span className="text-[11px] font-tech font-bold text-white tracking-wide block uppercase">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[10px] font-code text-[#ff5500] block">
              Rainweg 8, 3645 Gwatt
            </span>
          </div>
        </div>

        {/* Scale and Reference Labels in corners */}
        <div className="absolute bottom-3 left-4 font-code text-[10px] text-[#717a8a] bg-[#0c0d0f]/90 px-2.5 py-1 border border-[#25282f]">
          SCALE: 1:5000 // CONTOUR INTERVAL: 5.0m
        </div>

        <div className="absolute top-3 right-4 font-code text-[10px] text-[#ff5500] bg-[#0c0d0f]/90 px-2.5 py-1 border border-[#ff5500]/30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>
          <span>ELEVATION ~560m</span>
        </div>
      </div>

      {/* Footer bar with external link */}
      <div className="p-4 bg-[#111215] border-t border-[#25282f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-code text-xs">
        <div className="text-[#9ca3af]">
          <span className="text-white font-semibold">Base Operations:</span> {BUSINESS_INFO.address.fullFormatted}
        </div>
        <a
          id="open-google-maps-btn"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#ff5500] hover:text-[#ff7733] font-semibold transition-colors"
        >
          <span>Open External Route in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
