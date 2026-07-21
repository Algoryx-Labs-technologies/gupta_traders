import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  initialDelay?: number;
  charDelay?: number;
  charDuration?: number;
}

export function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        const chars = Array.from(line);
        return (
          <span key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              const delay =
                lineIndex * lineLength * charDelay + charIndex * charDelay;
              return (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  style={{
                    display: 'inline-block',
                    opacity: started ? 1 : 0,
                    transform: started
                      ? 'translateX(0)'
                      : 'translateX(-18px)',
                    transition: `opacity ${charDuration}ms ease, transform ${charDuration}ms ease`,
                    transitionDelay: `${delay}ms`,
                    whiteSpace: 'pre',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
