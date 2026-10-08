import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordRevealProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const WordReveal: React.FC<WordRevealProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="relative inline-block mx-[0.18em]">
      <span className="opacity-0 select-none" aria-hidden="true">
        {word}
      </span>
      <motion.span style={{ opacity }} className="absolute right-0 top-0">
        {word}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.82', 'end 0.22'],
  });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p
      ref={containerRef}
      dir="rtl"
      className={`flex flex-wrap justify-center ${className}`}
      style={style}
      aria-label={text}
    >
      {words.map((word, idx) => {
        const start = idx / totalWords;
        const end = (idx + 1) / totalWords;
        return (
          <WordReveal
            key={idx}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
