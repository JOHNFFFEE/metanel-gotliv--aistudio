import React, { useEffect, useRef, useState } from 'react';
import SafeImage from './SafeImage';

interface ReelItem {
  url: string;
  title: string;
  tag: string;
}

const ROW_1_BASE: ReelItem[] = [
  {
    url: '/src/assets/images/project_music_videos_1791452018952.jpg',
    title: 'אנה זק — הפקת קליפ',
    tag: 'MUSIC VIDEO',
  },
  {
    url: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    title: 'שירי מימון — קליפ רשמי',
    tag: 'POP PRODUCTION',
  },
  {
    url: '/src/assets/images/project_cinema_films_1791452032075.jpg',
    title: 'בחורים טובים 3 — קולנוע',
    tag: 'FEATURE FILM',
  },
  {
    url: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    title: 'עידו מלכה — סינגל חדש',
    tag: 'DIRECTOR CUT',
  },
  {
    url: '/src/assets/images/project_primetime_mom_1791452057828.jpg',
    title: 'אמא פריים טיים — יוצר ומפיק',
    tag: 'PRIME TIME MOM',
  },
  {
    url: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    title: 'האחיות כרקוקלי — קליפ',
    tag: 'MUSIC VIDEO',
  },
  {
    url: '/src/assets/images/project_adidas_commercial_1791452044667.jpg',
    title: 'ADIDAS x מגה ספורט',
    tag: 'COMMERCIAL',
  },
  {
    url: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    title: 'החדש של אבי נשר — קולנוע',
    tag: 'CINEMA',
  },
  {
    url: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    title: 'קמפיין פריים טיים',
    tag: 'TV CAMPAIGN',
  },
  {
    url: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    title: 'הפקת מקור — NETFLIX VIBE',
    tag: 'ORIGINAL',
  },
  {
    url: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    title: 'הצינור — ספיישל אמא פריים טיים',
    tag: 'PRESS & TV',
  },
];

const ROW_2_BASE: ReelItem[] = [
  {
    url: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    title: 'אנה זק — סט צילומים',
    tag: 'BACKSTAGE',
  },
  {
    url: '/src/assets/images/project_adidas_commercial_1791452044667.jpg',
    title: 'ADIDAS EXCLUSIVE CAMPAIGN',
    tag: 'BRAND FILM',
  },
  {
    url: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    title: 'שירי מימון — לייב סשן',
    tag: 'LIVE VISUALS',
  },
  {
    url: '/src/assets/images/project_primetime_mom_1791452057828.jpg',
    title: 'PRIME TIME MOM — הסרט',
    tag: 'FESTIVAL & TV',
  },
  {
    url: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    title: 'עידו מלכה — קליפ רשמי',
    tag: 'MUSIC VIDEO',
  },
  {
    url: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    title: 'האחיות כרקוקלי — הפקה',
    tag: 'ART DIRECTION',
  },
  {
    url: '/src/assets/images/project_cinema_films_1791452032075.jpg',
    title: 'בחורים טובים 3 — על הסט',
    tag: 'BOX OFFICE HIT',
  },
  {
    url: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    title: 'החדש של אבי נשר',
    tag: 'FEATURE FILM',
  },
  {
    url: '/src/assets/images/project_music_videos_1791452018952.jpg',
    title: 'GOATLIB SHOWREEL 2026',
    tag: 'SHOWREEL',
  },
  {
    url: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
    title: 'קמפיינים ופרסומות — GOATLIB',
    tag: 'COMMERCIALS',
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
        {/* Row 1: first 11 images, tripled, moves RIGHT on scroll */}
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
              className="group relative w-[340px] sm:w-[420px] h-[220px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141518] cursor-pointer"
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                fallbackLabel={item.title}
                loading="lazy"
                className="w-full h-full rounded-2xl object-cover block transition-transform duration-500 group-hover:scale-105"
              />
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
            </div>
          ))}
        </div>

        {/* Row 2: remaining 10 images, tripled, moves LEFT on scroll */}
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
              className="group relative w-[340px] sm:w-[420px] h-[220px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141518] cursor-pointer"
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                fallbackLabel={item.title}
                loading="lazy"
                className="w-full h-full rounded-2xl object-cover block transition-transform duration-500 group-hover:scale-105"
              />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
