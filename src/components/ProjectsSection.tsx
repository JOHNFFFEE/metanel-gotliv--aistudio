import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import SafeImage from './SafeImage';
import { PORTFOLIO_IMAGES } from '../assets/portfolioImages';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  credits: string;
  description: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    number: '01',
    name: 'אנה זק · שירי מימון · עידו מלכה · כרקוקלי',
    category: 'קליפים והפקות מוזיקה · TOP ARTISTS',
    credits: 'בימוי, הפקה וקריאייטיב לעשרות אמנים מובילים',
    description:
      'הפקת קליפים קולנועיים לאמנים הגדולים ביותר בישראל — אנה זק, שירי מימון, עידו מלכה, האחיות כרקוקלי ועוד עשרות כוכבים. סטים מרהיבים, ארט מוקפד וצילום שמציב רף חדש בתעשייה.',
    col1Image1: PORTFOLIO_IMAGES.igAnnaZakStudio,
    col1Image2: PORTFOLIO_IMAGES.igIdoMalkaClip,
    col2Image: PORTFOLIO_IMAGES.igOrangeDressStage,
  },
  {
    number: '02',
    name: 'בחורים טובים 3 & החדש של אבי נשר',
    category: 'קולנוע ופיצ׳רים · FEATURE FILMS',
    credits: 'הפקות קולנוע שוברות קופות בקנה מידה ארצי',
    description:
      'עשייה קולנועית על הסטים הגדולים והמדוברים בישראל — החל מלהיט הקופות "בחורים טובים 3" ועד הפיצ׳ר החדש של המאסטר אבי נשר. עבודה עם השחקנים והצוותים המובילים במדינה.',
    col1Image1: PORTFOLIO_IMAGES.igNetflixCrtTv,
    col1Image2: PORTFOLIO_IMAGES.matanelDirectorPortrait,
    col2Image: PORTFOLIO_IMAGES.projectCinemaFilms,
  },
  {
    number: '03',
    name: 'אמא פריים טיים — PRIME TIME MOM',
    category: 'יצירת מקור · מפיק ויוצר הסרט (סוקר ב"הצינור")',
    credits: 'מתנאל גוטליב — מפיק, תסריטאי ויוצר',
    description:
      'הסרט המקורי והמדובר של מתנאל גוטליב שעורר הדים בתקשורת וב"הצינור". דרמה חדה, אנושית ומפתיעה שמדגימה איך סטוריטלינג מדויק ובימוי נועז הופכים לתופעה.',
    col1Image1: PORTFOLIO_IMAGES.igHatzinorInterview,
    col1Image2: PORTFOLIO_IMAGES.projectCinemaFilms,
    col2Image: PORTFOLIO_IMAGES.projectPrimetimeMom,
  },
  {
    number: '04',
    name: 'ADIDAS x מגה ספורט & קמפיינים',
    category: 'פרסומות ומסחרי · COMMERCIAL CAMPAIGNS',
    credits: 'קמפיינים ופרסומות למותגים מובילים',
    description:
      'הפקות מסחריות ופרסומות שלא נראות כמו עוד תשדיר גנרי. שילוב של אנרגיה גבוהה, כוריאוגרפיה, אופנה וצילום קולנועי חד שמייצר נוכחות מיידית ומניע לפעולה.',
    col1Image1: PORTFOLIO_IMAGES.projectMusicVideos,
    col1Image2: PORTFOLIO_IMAGES.igAnnaZakStudio,
    col2Image: PORTFOLIO_IMAGES.projectAdidasCommercial,
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  onSelectProject,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-20 md:top-28">
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
          willChange: 'transform',
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 shadow-[0_-20px_60px_rgba(0,0,0,0.85)]"
      >
        {/* Top Row: Number, Category + Name, and Live Project Ghost Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10">
            <span
              className="font-display-en font-black leading-none text-[#D7E2EA] tabular-nums"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 120px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span
                className="text-[#D7E2EA]/65 font-medium uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-black uppercase leading-tight tracking-wide"
                style={{ fontSize: 'clamp(1.15rem, 2.3vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <span className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mt-0.5">
                {project.credits}
              </span>
            </div>
          </div>

          <LiveProjectButton
            label="צפה בהפקה"
            onClick={() => onSelectProject(project)}
          />
        </div>

        {/* Bottom Row: Two-column image grid (40% left stacked, 60% right tall) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full">
          {/* Column 1: 40% width, 2 stacked images */}
          <div className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div
              className="w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#141518] cursor-pointer group relative"
              style={{ height: 'clamp(125px, 15vw, 215px)' }}
              onClick={() => onSelectProject(project)}
            >
              <SafeImage
                src={project.col1Image1}
                alt={`${project.name} פריים 1`}
                fallbackLabel={`${project.name} 01`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div
              className="w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#141518] cursor-pointer group relative"
              style={{ height: 'clamp(150px, 20vw, 310px)' }}
              onClick={() => onSelectProject(project)}
            >
              <SafeImage
                src={project.col1Image2}
                alt={`${project.name} פריים 2`}
                fallbackLabel={`${project.name} 02`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: 60% width, 1 tall image */}
          <div
            className="w-full sm:w-[60%] rounded-[32px] sm:rounded-[44px] md:rounded-[52px] overflow-hidden bg-[#141518] cursor-pointer group relative"
            style={{
              height:
                'calc(clamp(125px, 15vw, 215px) + clamp(150px, 20vw, 310px) + 1.25rem)',
            }}
            onClick={() => onSelectProject(project)}
          >
            <SafeImage
              src={project.col2Image}
              alt={`${project.name} תמונה ראשית`}
              fallbackLabel={`${project.name} Featured`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[52px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-normal max-w-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS_DATA.length;

  return (
    <section
      id="projects"
      className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
    >
      <FadeIn delay={0} y={40} className="flex flex-col items-center mb-12 sm:mb-16 md:mb-24">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 135px)' }}
        >
          הפקות נבחרות
        </h2>
        <p className="text-[#D7E2EA]/65 text-sm sm:text-lg mt-3 text-center max-w-xl">
          כשעובדים עם השמות הכי גדולים בארץ, כל פריים חייב לדבר בעד עצמו.
        </p>
      </FadeIn>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {PROJECTS_DATA.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const startRange = index * (1 / totalCards);
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[startRange, 1]}
              targetScale={targetScale}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
