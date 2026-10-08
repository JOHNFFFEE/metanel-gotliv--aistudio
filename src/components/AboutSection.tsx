import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import SafeImage from './SafeImage';

interface AboutSectionProps {
  onOpenContact: () => void;
}

const ABOUT_TEXT =
  'אני לא כאן כדי למכור לכם מצגות סאחיות או סיסמאות משרד פרסום. אני מתנאל גוטליב (GOATLIB ENTERTAINMENT) — מפיק, תסריטאי ובמאי. מאנה זק, שירי מימון, עידו מלכה והאחיות כרקוקלי ועד בחורים טובים 3, החדש של אבי נשר, אמא פריים טיים וקמפיינים לאדידס — אנחנו בונים הפקות שגורמות לכל התעשייה לעצור ולהסתכל. מה שמצטלם יפה, מרגיש קולנוע, ומשאיר אבק למתחרים.';

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Decorative 3D Corner Images */}
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none z-0"
      >
        <SafeImage
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Cinema Element"
          transparentFallback
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[95px] sm:w-[135px] md:w-[175px] pointer-events-none select-none z-0"
      >
        <SafeImage
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Sculptural Object"
          transparentFallback
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none select-none z-0"
      >
        <SafeImage
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Creative Element"
          transparentFallback
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <SafeImage
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Geometric Group"
          transparentFallback
          className="w-full h-auto object-contain"
        />
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
