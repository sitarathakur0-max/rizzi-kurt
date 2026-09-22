import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, FAQS, FaqItem } from '../data/business';

interface FaqPageProps {
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'excavation' | 'management' | 'site-logistics'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleAccordion = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* Header Banner */}
      <section className="relative border-b border-[#252830] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#17191d] border border-[#ff5500]/40 text-xs font-code text-[#ff5500] mb-4">
            <span>TECHNICAL KNOWLEDGE BASE & COMMON QUESTIONS</span>
          </div>

          <h1 className="font-tech text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Frequently Addressed Questions
          </h1>

          <p className="text-base sm:text-lg text-[#9ca3af] max-w-3xl mt-4 leading-relaxed font-sans">
            Technical guidance regarding site assessments, excavation tolerances, soil regulations, and multi-trade construction coordination in Gwatt and the Canton of Bern.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical topics (e.g. permits, slope, soil)..."
                className="w-full bg-[#14161a] border border-[#2b2f38] px-4 py-2.5 pl-10 text-xs text-white placeholder-[#555d6b] focus:outline-none focus:border-[#ff5500] font-sans"
              />
              <Search className="w-4 h-4 text-[#717a8a] absolute left-3.5 top-3" />
            </div>

            <div className="md:col-span-7 flex flex-wrap items-center gap-2 font-code text-xs">
              {[
                { id: 'all', label: 'All Topics' },
                { id: 'excavation', label: 'Excavation' },
                { id: 'management', label: 'Construction Mgmt' },
                { id: 'site-logistics', label: 'Site Logistics' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-2 uppercase tracking-wider transition-colors cut-corner-br ${
                    activeCategory === cat.id
                      ? 'bg-[#ff5500] text-black font-bold'
                      : 'bg-[#15171b] border border-[#2b2f37] text-[#9ca3af] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-[#14161a] border border-[#25282f] cut-corner-br space-y-3">
            <p className="text-sm text-[#9ca3af]">
              No questions found matching your search term.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-code text-[#ff5500] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="bg-[#14161a] border border-[#272b33] cut-corner-br overflow-hidden transition-colors hover:border-[#383e4a]"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-code text-[#ff5500] font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-tech text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                        {faq.question}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#ff5500] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#9ca3af] leading-relaxed border-t border-[#1f2227] font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Unanswered Query Direct Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16181d] border border-[#2e333e] p-8 sm:p-10 cut-corner-br flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-tech text-2xl font-bold text-white uppercase">
              Have Specific Site Constraints or Soil Questions?
            </h3>
            <p className="text-xs text-[#8b939e] leading-relaxed">
              Every construction plot in the Gwatt area has unique boundary lines and access angles. Reach out directly to discuss your project specifics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto px-5 py-3 bg-[#111215] border border-[#3c424c] hover:border-[#ff5500] text-white font-code text-xs font-bold text-center transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-5 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-black font-tech text-xs font-bold uppercase tracking-wider text-center transition-colors cut-corner-br"
            >
              Send Technical Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
