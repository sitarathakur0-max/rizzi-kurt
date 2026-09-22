import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from './data/business';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize with URL hash on mount & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const validPages = ['home', 'services', 'about', 'projects', 'process', 'faq', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string, extraData?: any) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    if (extraData?.service) {
      setContactInitialService(extraData.service);
    } else if (extraData?.project) {
      setContactInitialService(`Inquiry regarding: ${extraData.project}`);
    } else {
      setContactInitialService('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121315] text-[#e3e5e8] selection:bg-[#ff5500] selection:text-white">
      {/* Structural Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View with Dynamic Page Switching */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
        {currentPage === 'process' && <ProcessPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialService={contactInitialService} />}
      </main>

      {/* Structural Technical Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#1a1c21] border border-[#3c424c] hover:border-[#ff5500] text-white flex items-center justify-center cut-corner-br shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#ff5500]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#ff5500]" />
          </button>
        )}

        {/* Floating Quick Phone Call Target for Mobile/Site Field Workers */}
        <a
          id="floating-phone-btn"
          href={BUSINESS_INFO.phoneHref}
          className="sm:hidden flex items-center gap-2 px-4 py-3 bg-[#ff5500] text-black font-tech text-xs font-bold uppercase tracking-wider cut-corner-br shadow-2xl"
          aria-label="Call Rizzi Kurt"
        >
          <Phone className="w-4 h-4" />
          <span>033 336 21 25</span>
        </a>
      </div>
    </div>
  );
}
