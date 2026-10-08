import React, { useEffect, useRef, useState } from 'react';
import SafeImage from './SafeImage';
import { PORTFOLIO_IMAGES } from '../assets/portfolioImages';

interface ReelItem {
  url: string;
  title: string;
  tag: string;
  badgeStyle?: 'primetime' | 'hatzinor' | 'adidas' | 'netflix' | 'default';
}

const ROW_1_BASE: ReelItem[] = [
  {
    url: PORTFOLIO_IMAGES.projectPrimetimeMom,
    title: 'PRIME TIME MOM — אמא פריים טיים',
    tag: 'ORIGINAL FILM',
    badgeStyle: 'primetime',
  },
  {
    url: PORTFOLIO_IMAGES.igHatzinorInterview,
    title: 'מתנאל גוטליב — מפיק ויוצר הסרט "אמא פריים טיים"',
    tag: 'הצינור · ספיישל טלוויזיה',
    badgeStyle: 'hatzinor',
  },
  {
    url: PORTFOLIO_IMAGES.projectCinemaFilms,
    title: 'בחורים טובים 3 — קולנוע',
    tag: 'FEATURE FILM · MM (US)',
  },
  {
    url: PORTFOLIO_IMAGES.projectAdidasCommercial,
    title: 'מגה ספורט | adidas EXCLUSIVE',
    tag: 'COMMERCIAL CAMPAIGN',
    badgeStyle: 'adidas',
  },
  {
    url: PORTFOLIO_IMAGES.igAnnaZakStudio,
    title: 'אנה זק — הפקת קליפ רשמי',
    tag: 'MUSIC VIDEO',
  },
  {
    url: PORTFOLIO_IMAGES.igIdoMalkaClip,
    title: 'עידו מלכה — קליפ רשמי',
    tag: 'DIRECTOR & PRODUCER',
  },
  {
    url: PORTFOLIO_IMAGES.igOrangeDressStage,
    title: 'שירי מימון / האחיות כרקוקלי — קליפ',
    tag: 'POP PRODUCTION',
  },
  {
    url: PORTFOLIO_IMAGES.igNetflixCrtTv,
    title: 'פרויקט קולנוע ודרמה — N SERIES',
    tag: 'CINEMA CONCEPT',
    badgeStyle: 'netflix',
  },
  {
    url: PORTFOLIO_IMAGES.projectMusicVideos,
    title: 'החדש של אבי נשר — הפקת קולנוע',
    tag: 'CINEMA PRODUCTION',
  },
];

const ROW_2_BASE: ReelItem[] = [
  {
    url: PORTFOLIO_IMAGES.igAnnaZakStudio,
    title: 'אנה זק — מאחורי הקלעים על הסט',
    tag: 'TOP ARTIST',
  },
  {
    url: PORTFOLIO_IMAGES.igOrangeDressStage,
    title: 'האחיות כרקוקלי — כוריאוגרפיה ובימוי',
    tag: 'MUSIC VIDEO',
  },
  {
    url: PORTFOLIO_IMAGES.projectAdidasCommercial,
    title: 'מגה ספורט x ADIDAS — קמפיין בלעדי',
    tag: 'BRAND COMMERCIAL',
    badgeStyle: 'adidas',
  },
  {
    url: PORTFOLIO_IMAGES.igIdoMalkaClip,
    title: 'עידו מלכה — סט צילומים',
    tag: 'MUSIC VIDEO',
  },
  {
    url: PORTFOLIO_IMAGES.projectPrimetimeMom,
    title: 'הצינור — מתנאל גוטליב בסרט מפתיע',
    tag: 'PRIME TIME MOM',
    badgeStyle: 'hatzinor',
  },
  {
    url: PORTFOLIO_IMAGES.projectCinemaFilms,
    title: 'בחורים טובים 3 & החדש של אבי נשר',
    tag: 'BOX OFFICE CINEMA',
  },
  {
    url: PORTFOLIO_IMAGES.igNetflixCrtTv,
    title: 'GOATLIB ENTERTAINMENT — סרטים וקליפים',
    tag: 'ORIGINAL PRODUCTION',
    badgeStyle: 'netflix',
  },
  {
    url: PORTFOLIO_IMAGES.projectMusicVideos,
    title: 'שירי מימון — הפקת ענק',
    tag: 'LIVE & VIDEO',
  },
  {
    url: PORTFOLIO_IMAGES.matanelDirectorPortrait,
    title: 'מתנאל גוטליב — על הסט (BSR)',
    tag: 'DIRECTOR ON SET',
  },
];

const ROW_1_ITEMS = [...ROW_1_BASE, ...ROW_1_BASE, ...ROW_1_BASE];
const ROW_2_ITEMS = [...ROW_2_BASE, ...ROW_2_BASE, ...ROW_2_BASE];

const CREDITS_LIST = [
  'אנה זק',
  'בחורים טובים 3',
  'שירי מימון',
  'החדש של אבי נשר',
  'עידו מלכה',
  'אמא פריים טיים',
  'האחיות כרקוקלי',
  'ADIDAS X מגה ספורט',
  'הצינור',
  'GOATLIB ENTERTAINMENT',
];

interface MarqueeSectionProps {
  onSelectReel?: () => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({
  onSelectReel,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateScrollOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    updateScrollOffset();
    window.addEventListener('scroll', updateScrollOffset, { passive: true });
    window.addEventListener('resize', updateScrollOffset, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollOffset);
      window.removeEventListener('resize', updateScrollOffset);
    };
  }, []);

  const renderTileOverlay = (item: ReelItem) => {
    if (item.badgeStyle === 'primetime') {
      return (
        <div
          dir="ltr"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end items-center text-center"
        >
          <span className="font-display-en font-black text-red-600 text-xl sm:text-2xl tracking-tight leading-none drop-shadow">
            PRIME TIME
          </span>
          <span className="font-display-en font-black text-white text-4xl sm:text-5xl tracking-tight leading-none -mt-1 drop-shadow">
            MOM
          </span>
        </div>
      );
    }

    if (item.badgeStyle === 'hatzinor') {
      return (
        <div
          dir="rtl"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent p-4 flex flex-col justify-end items-center text-center"
        >
          <div className="bg-red-600 text-white font-black text-xl sm:text-2xl px-4 py-0.5 leading-tight tracking-tight">
            הצינור
          </div>
          <div className="bg-black/90 border border-white/20 text-white font-bold text-xs sm:text-sm px-3 py-1 mt-1">
            {item.title}
          </div>
        </div>
      );
    }

    if (item.badgeStyle === 'adidas') {
      return (
        <div
          dir="rtl"
          className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors p-4 flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl tracking-wide drop-shadow-md">
            <span>מגה ספורט</span>
            <span className="text-white/50">|</span>
            <span className="font-display-en uppercase">adidas</span>
          </div>
          <span className="font-display-en text-[11px] tracking-[0.35em] text-white/90 uppercase mt-1">
            E X C L U S I V E
          </span>
        </div>
      );
    }

    return (
      <div
        dir="rtl"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end"
      >
        <span className="text-[11px] font-display-en tracking-widest uppercase text-[#D7E2EA]/75">
          {item.tag}
        </span>
        <span className="text-white font-bold text-base sm:text-lg leading-tight">
          {item.title}
        </span>
      </div>
    );
  };

  return (
    <section
      id="roster"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 pb-10 overflow-hidden"
    >
      {/* Top Artist & Film Roster Ribbon */}
      <div className="w-full border-y border-[#D7E2EA]/15 py-5 mb-12 overflow-hidden bg-[#101114]">
        <div
          dir="ltr"
          className="flex items-center gap-8 whitespace-nowrap justify-center flex-wrap px-6 text-sm sm:text-base md:text-xl font-black uppercase tracking-wider text-[#D7E2EA]"
        >
          {CREDITS_LIST.map((credit, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-[#B600A8] transition-colors cursor-default">
                {credit}
              </span>
              {idx < CREDITS_LIST.length - 1 && (
                <span className="text-[#B600A8]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3" dir="ltr">
        {/* Row 1: moves RIGHT on scroll */}
        <div
          className="flex gap-3 justify-center"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_1_ITEMS.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={onSelectReel}
              className="group relative w-[340px] sm:w-[420px] h-[230px] sm:h-[280px] shrink-0 rounded-2xl overflow-hidden bg-[#141518] cursor-pointer border border-white/10"
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                fallbackLabel={item.title}
                loading="lazy"
                className="w-full h-full rounded-2xl object-cover block transition-transform duration-500 group-hover:scale-105"
              />
              {renderTileOverlay(item)}
            </div>
          ))}
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div
          className="flex gap-3 justify-center"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_2_ITEMS.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={onSelectReel}
              className="group relative w-[340px] sm:w-[420px] h-[230px] sm:h-[280px] shrink-0 rounded-2xl overflow-hidden bg-[#141518] cursor-pointer border border-white/10"
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                fallbackLabel={item.title}
                loading="lazy"
                className="w-full h-full rounded-2xl object-cover block transition-transform duration-500 group-hover:scale-105"
              />
              {renderTileOverlay(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
