import React from 'react';
import { Play, Instagram } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import SafeImage from './SafeImage';
import { PORTFOLIO_IMAGES } from '../assets/portfolioImages';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenShowreel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenShowreel,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="h-screen min-h-[700px] w-full flex flex-col justify-between relative bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Top area: 3-Zone Top Bar Contract + Massive Heading */}
      <div className="w-full relative z-20">
        <FadeIn
          as="header"
          delay={0}
          y={-20}
          className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
        >
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg md:text-2xl font-display-en whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            GOATLIB™
          </a>

          {/* Zone 2: Clean navigation links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-[#D7E2EA] font-medium text-base lg:text-lg hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              הפקות נבחרות
            </a>
            <a
              href="#roster"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('roster');
              }}
              className="text-[#D7E2EA] font-medium text-base lg:text-lg hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              שואוריל ואמנים
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-[#D7E2EA] font-medium text-base lg:text-lg hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              מה אנחנו מפיקים
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-[#D7E2EA] font-medium text-base lg:text-lg hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              הסיפור
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/matanelgot/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#D7E2EA]/80 hover:text-[#D7E2EA] transition-colors whitespace-nowrap font-display-en"
            >
              <Instagram className="w-4 h-4" />
              <span>@matanelgot</span>
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#0C0C0C] bg-[#D7E2EA] font-bold text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-white transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              דברו איתי
            </button>
          </div>
        </FadeIn>

        <div className="overflow-hidden w-full px-4 sm:px-6 md:px-10">
          <FadeIn delay={0.15} y={40} className="flex flex-col items-center">
            <h1
              dir="ltr"
              className="hero-heading font-display-en font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.5vw] sm:text-[12.2vw] md:text-[12.8vw] lg:text-[13.2vw] mt-4 sm:mt-2 md:-mt-2 select-none"
            >
              MATANEL GOTLIB
            </h1>
            <p className="text-[#D7E2EA] font-bold text-base sm:text-xl md:text-2xl tracking-wide -mt-1 sm:-mt-2 text-center">
              אני עושה הפקות שנהנים מהן · סרטים / קליפים / פרסומות / מה שמצטלם יפה
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait Centered Absolutely with Magnet Effect & Showreel Trigger */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[54%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-6 w-[250px] sm:w-[310px] md:w-[360px] lg:w-[400px] pointer-events-auto">
        <FadeIn delay={0.55} y={30} className="w-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <div
              onClick={onOpenShowreel}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onOpenShowreel();
              }}
              className="group relative rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-[#D7E2EA]/80 bg-[#141518] shadow-[0_24px_80px_rgba(182,0,168,0.28)] cursor-pointer"
            >
              <SafeImage
                src={PORTFOLIO_IMAGES.matanelDirectorPortrait}
                alt="מתנאל גוטליב — מפיק, תסריטאי ובמאי"
                fallbackLabel="MATANEL GOTLIB"
                className="w-full h-[300px] sm:h-[370px] md:h-[420px] lg:h-[450px] object-cover object-top block select-none transition-transform duration-500 group-hover:scale-105"
              />
              {/* Measured contrast scrim at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-between p-4 sm:p-5">
                <div className="flex items-center justify-between text-[11px] font-display-en tracking-widest uppercase text-[#D7E2EA]/80">
                  <span>REC ● 24FPS</span>
                  <span>@GOATLIB.ENTERTAINMENT</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-bold text-sm sm:text-base leading-tight">
                      מתנאל גוטליב
                    </div>
                    <div className="text-[#D7E2EA]/75 text-xs font-display-en">
                      Prod / Screenwriter / Dir
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/40 px-3.5 py-2 text-xs font-bold text-white group-hover:bg-white group-hover:text-[#0C0C0C] transition-colors whitespace-nowrap">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>שואוריל</span>
                  </span>
                </div>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 relative z-20 gap-4">
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[200px] sm:max-w-[280px] md:max-w-[340px] flex flex-col gap-1.5">
            <p
              className="text-[#D7E2EA] font-bold leading-snug"
              style={{ fontSize: 'clamp(0.85rem, 1.35vw, 1.35rem)' }}
            >
              אנה זק · שירי מימון · עידו מלכה · האחיות כרקוקלי · בחורים טובים 3 · החדש של אבי נשר · אמא פריים טיים
            </p>
            <p className="text-[#D7E2EA]/60 text-xs sm:text-sm font-light">
              עשרות קליפים, סרטי קולנוע ופרסומות שמכתיבים את הקצב בתעשייה.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="בואו נרים הפקה" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
