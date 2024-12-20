"use client";

import { useRef, useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { Heading } from "./heading";
import { Subheading } from "./subheading";

const MapFrame = loadable(() => import('./map-frame'), {
  fallback: <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 animate-pulse rounded-[20px]" />
});

export const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { 
          rootMargin: '200px'
        }
      );

      observer.observe(mapRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-16 sm:mt-32">
      <div className="text-center mb-16">
        <Heading as="h2">Loved by Community Members around the World</Heading>
        <Subheading className="text-center max-w-lg mx-auto">
          See how VoiceLoop is transforming community engagement and saving time
          for managers across industries
        </Subheading>
      </div>
      <div className="px-4 sm:px-8">
        <div ref={mapRef} className="p-2 sm:p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-2xl sm:rounded-[32px] relative">
          <div className="absolute inset-x-0 -top-[1px] h-32 sm:h-48 w-full bg-gradient-to-b from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 -bottom-[1px] h-32 sm:h-48 w-full bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent z-10 pointer-events-none" />
          <div className="relative bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-xl sm:rounded-[24px] overflow-hidden">
            <div className="relative w-full aspect-[16/10] sm:aspect-video">
              {shouldLoad && <MapFrame />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 