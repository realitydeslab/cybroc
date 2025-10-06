'use client';

import { useEffect, useMemo, useState } from 'react';

export type StoryFrame = {
  src: string;
  alt: string;
  caption?: string;
};

type StoryboardProps = {
  frames: StoryFrame[];
  interval?: number;
};

export default function Storyboard({ frames, interval = 5200 }: StoryboardProps) {
  const safeFrames = useMemo(() => (frames.length ? frames : []), [frames]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeFrames.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % safeFrames.length);
    }, interval);
    return () => clearInterval(timer);
  }, [safeFrames.length, interval]);

  if (!safeFrames.length) {
    return null;
  }

  return (
    <div>
      <div className="storyboard" aria-live="polite">
        {safeFrames.map((frame, frameIndex) => (
          <figure
            key={frame.src}
            className={frameIndex === index ? 'is-active' : ''}
            aria-hidden={frameIndex !== index}
          >
            <img src={frame.src} alt={frame.alt} loading={frameIndex === index ? 'eager' : 'lazy'} />
            {frame.caption ? <figcaption>{frame.caption}</figcaption> : null}
          </figure>
        ))}
      </div>

      <div className="storyboard-progress" aria-hidden="true">
        {safeFrames.map((frame, frameIndex) => (
          <span key={frame.src} className={frameIndex === index ? 'is-active' : ''} />
        ))}
      </div>
    </div>
  );
}
