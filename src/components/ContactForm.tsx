import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle, Compass, HardHat } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectAddress: '',
    projectScope: initialService || 'Building Pit & Foundation Excavation',
    estimatedTimeline: 'Immediate / Next 30 Days',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your name or business representative.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'A direct telephone number is required for site verification.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone number (at least 8 digits).';
    }
    if (!formData.email.trim()) {
      errs.email = 'An email address is required for technical documentation.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectAddress.trim()) {
      errs.projectAddress = 'Please state the site location (e.g. Gwatt, Thun, or specific plot).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details on your excavation or site management requirements.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectAddress: '',
      projectScope: 'Building Pit & Foundation Excavation',
      estimatedTimeline: 'Immediate / Next 30 Days',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#16181c] border border-[#2e333d] p-6 sm:p-8 relative cut-corner-br">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#25282f]">
        <div>
          <span className="text-xs font-code text-[#ff5500] uppercase tracking-wider block mb-1">
            [DOCUMENT REF: RK-ENQ-2026]
          </span>
          <h3 className="font-tech text-2xl font-bold text-white uppercase tracking-tight">
            Technical Site Enquiry
          </h3>
          <p className="text-xs text-[#8b939e] mt-1">
            Submit your construction management or excavation project details for direct engineering review.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-code text-[#9ca3af] bg-[#111214] px-2.5 py-1 border border-[#2b2f36]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>
          <span>DISPATCH GWATT</span>
        </div>
      </div>

      {isSubmitted ? (
        <div className="py-12 px-6 text-center space-y-4 bg-[#121315] border border-[#ff5500]/40">
          <div className="w-12 h-12 bg-[#ff5500]/10 border border-[#ff5500] text-[#ff5500] rounded flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-tech text-xl font-bold text-white uppercase">
            Enquiry Recorded Successfully
          </h4>
          <p className="text-sm text-[#9ca3af] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project inquiry for{' '}
            <strong className="text-[#ff5500]">{formData.projectAddress}</strong> has been logged. We will review the site specs and contact you at{' '}
            <strong className="text-white">{formData.phone}</strong>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="submitted-call-link"
              href={BUSINESS_INFO.phoneHref}
              className="px-5 py-2.5 bg-[#ff5500] text-black font-tech text-xs font-bold uppercase tracking-wider hover:bg-[#e04a00] transition-colors"
            >
              Immediate Questions? Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-[#1f2227] border border-[#3c424c] text-white font-code text-xs hover:border-[#ff5500] transition-colors"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Full Name / Representative <span className="text-[#ff5500]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Markus Keller"
                className={`w-full bg-[#111215] border px-3.5 py-2.5 text-sm text-white placeholder-[#555d6b] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors font-sans ${
                  errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-[#2e333d] focus:border-[#ff5500]'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400 font-code flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Direct Telephone <span className="text-[#ff5500]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 033 123 45 67"
                className={`w-full bg-[#111215] border px-3.5 py-2.5 text-sm text-white placeholder-[#555d6b] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors font-sans ${
                  errors.phone ? 'border-red-500 bg-red-950/20' : 'border-[#2e333d] focus:border-[#ff5500]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400 font-code flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email and Site Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Email Address <span className="text-[#ff5500]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="m.keller@domain.ch"
                className={`w-full bg-[#111215] border px-3.5 py-2.5 text-sm text-white placeholder-[#555d6b] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors font-sans ${
                  errors.email ? 'border-red-500 bg-red-950/20' : 'border-[#2e333d] focus:border-[#ff5500]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 font-code flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="projectAddress" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Site Location / Plot <span className="text-[#ff5500]">*</span>
              </label>
              <input
                id="projectAddress"
                type="text"
                value={formData.projectAddress}
                onChange={(e) => setFormData({ ...formData, projectAddress: e.target.value })}
                placeholder="e.g. 3645 Gwatt, Plot 842"
                className={`w-full bg-[#111215] border px-3.5 py-2.5 text-sm text-white placeholder-[#555d6b] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors font-sans ${
                  errors.projectAddress ? 'border-red-500 bg-red-950/20' : 'border-[#2e333d] focus:border-[#ff5500]'
                }`}
              />
              {errors.projectAddress && (
                <p className="mt-1 text-xs text-red-400 font-code flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.projectAddress}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Scope and Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="projectScope" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Required Scope Category
              </label>
              <select
                id="projectScope"
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                className="w-full bg-[#111215] border border-[#2e333d] focus:border-[#ff5500] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#ff5500] font-sans"
              >
                <option value="Building Pit & Foundation Excavation">Building Pit & Foundation Excavation</option>
                <option value="Site Levelling & Terrain Reshaping">Site Levelling & Terrain Reshaping</option>
                <option value="Trenching & Ground Utilities">Trenching & Ground Utilities</option>
                <option value="Retaining Prep & Slope Earthworks">Retaining Prep & Slope Earthworks</option>
                <option value="Construction Management & Site Oversight">Construction Management & Site Oversight</option>
                <option value="Multi-Trade Quality & Cost Control">Multi-Trade Quality & Cost Control</option>
                <option value="General Earthworks Consultation">General Earthworks Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimatedTimeline" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
                Target Timeline
              </label>
              <select
                id="estimatedTimeline"
                value={formData.estimatedTimeline}
                onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                className="w-full bg-[#111215] border border-[#2e333d] focus:border-[#ff5500] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#ff5500] font-sans"
              >
                <option value="Immediate / Urgent">Immediate / Within 14 Days</option>
                <option value="Next 30–60 Days">Upcoming (Next 30–60 Days)</option>
                <option value="Next Quarter / Future Planning">Next Quarter / Seasonal Planning</option>
                <option value="Tender / Preliminary Estimation">Preliminary Study / Engineering Review</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-code text-[#d1d5db] uppercase mb-1.5">
              Project Description & Site Specifications <span className="text-[#ff5500]">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Outline the site conditions, estimated volume or footprint, accessibility for machinery, or specific coordination requirements..."
              className={`w-full bg-[#111215] border px-3.5 py-2.5 text-sm text-white placeholder-[#555d6b] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors font-sans ${
                errors.message ? 'border-red-500 bg-red-950/20' : 'border-[#2e333d] focus:border-[#ff5500]'
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-xs text-red-400 font-code flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-code text-[#8b939e]">
              Direct dispatch call: <a href={BUSINESS_INFO.phoneHref} className="text-[#ff5500] font-bold hover:underline">{BUSINESS_INFO.phone}</a>
            </div>

            <button
              id="submit-enquiry-btn"
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-sm font-bold uppercase tracking-wider transition-all cut-corner-br disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmitting Data...</span>
              ) : (
                <>
                  <span>Transmit Technical Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
