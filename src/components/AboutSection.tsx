import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import SafeImage from './SafeImage';
import { PORTFOLIO_IMAGES } from '../assets/portfolioImages';

interface AboutSectionProps {
  onOpenContact: () => void;
}

const ABOUT_TEXT =
  'אני לא כאן כדי למכור לכם מצגות סאחיות או סיסמאות משרד פרסום. אני מתנאל גוטליב (GOATLIB ENTERTAINMENT) — מפיק, תסריטאי ובמאי. מאנה זק, שירי מימון, עידו מלכה והאחיות כרקוקלי ועד בחורים טובים 3, החדש של אבי נשר, אמא פריים טיים וקמפיינים לאדידס — אנחנו בונים הפקות שגורמות לכל התעשייה לעצור ולהסתכל. מה שמצטלם יפה, מרגיש קולנוע, ומשאיר אבק למתחרים.';

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-28 bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Decorative 3D Cinema & Film Equipment Corner Icons */}
      {/* Top-Left: 3D HDR Cinema Camera Rig */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[115px] sm:w-[165px] md:w-[220px] pointer-events-none select-none z-0"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <SafeImage
            src={PORTFOLIO_IMAGES.iconCinemaCameraHdr}
            alt="HDR Cinema Camera Rig"
            transparentFallback
            className="w-full h-auto object-contain mix-blend-lighten rounded-3xl"
          />
          <span className="hidden sm:inline-block text-[10px] font-display-en tracking-widest uppercase text-[#D7E2EA]/40 -mt-2">
            HDR CINEMA CAMERA
          </span>
        </motion.div>
      </FadeIn>

      {/* Bottom-Left: 3D Cinema Studio Fresnel Light */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] w-[110px] sm:w-[155px] md:w-[205px] pointer-events-none select-none z-0"
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <SafeImage
            src={PORTFOLIO_IMAGES.iconCinemaFresnelLight}
            alt="Cinema Studio Fresnel Spotlight"
            transparentFallback
            className="w-full h-auto object-contain mix-blend-lighten rounded-3xl"
          />
          <span className="hidden sm:inline-block text-[10px] font-display-en tracking-widest uppercase text-[#D7E2EA]/40 -mt-2">
            STUDIO CINEMA LIGHTS
          </span>
        </motion.div>
      </FadeIn>

      {/* Top-Right: 3D Director Clapperboard & Anamorphic Lens */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[115px] sm:w-[165px] md:w-[220px] pointer-events-none select-none z-0"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <SafeImage
            src={PORTFOLIO_IMAGES.iconCinemaClapperLens}
            alt="Director Clapperboard & Anamorphic Lens"
            transparentFallback
            className="w-full h-auto object-contain mix-blend-lighten rounded-3xl"
          />
          <span className="hidden sm:inline-block text-[10px] font-display-en tracking-widest uppercase text-[#D7E2EA]/40 -mt-2">
            ANAMORPHIC & SLATE
          </span>
        </motion.div>
      </FadeIn>

      {/* Bottom-Right: 3D 35mm Film Reel & Director Monitor */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] w-[115px] sm:w-[165px] md:w-[215px] pointer-events-none select-none z-0"
      >
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <SafeImage
            src={PORTFOLIO_IMAGES.iconCinemaFilmReel}
            alt="35mm Film Reel & Director Monitor"
            transparentFallback
            className="w-full h-auto object-contain mix-blend-lighten rounded-3xl"
          />
          <span className="hidden sm:inline-block text-[10px] font-display-en tracking-widest uppercase text-[#D7E2EA]/40 -mt-2">
            35MM REEL & MONITOR
          </span>
        </motion.div>
      </FadeIn>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16 md:gap-20 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-14">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 135px)' }}
            >
              לא עוד בית הפקה
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(1.05rem, 2.1vw, 1.45rem)' }}
          />
        </div>

        {/* Quantitative Proof Row */}
        <FadeIn
          delay={0.15}
          y={25}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full pt-8 border-t border-[#D7E2EA]/15 text-center"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="font-display-en font-black text-4xl sm:text-5xl text-[#D7E2EA] tabular-nums">
              50+
            </span>
            <span className="text-sm sm:text-base font-bold text-[#D7E2EA]">
              קליפים לאמנים המובילים בישראל
            </span>
            <span className="text-xs text-[#D7E2EA]/60">
              אנה זק · שירי מימון · עידו מלכה · כרקוקלי ועוד
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-display-en font-black text-4xl sm:text-5xl text-[#D7E2EA] tabular-nums">
              TOP TIER
            </span>
            <span className="text-sm sm:text-base font-bold text-[#D7E2EA]">
              קולנוע, פיצ&apos;רים ופריים טיים
            </span>
            <span className="text-xs text-[#D7E2EA]/60">
              בחורים טובים 3 · החדש של אבי נשר · אמא פריים טיים
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="font-display-en font-black text-4xl sm:text-5xl text-[#D7E2EA] tabular-nums">
              100M+
            </span>
            <span className="text-sm sm:text-base font-bold text-[#D7E2EA]">
              צפיות ביוטיוב, טיקטוק וטלוויזיה
            </span>
            <span className="text-xs text-[#D7E2EA]/60">
              הפקות שמתפוצצות אורגנית ומייצרות כותרות
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <ContactButton label="בואו נדבר תכל׳ס" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
