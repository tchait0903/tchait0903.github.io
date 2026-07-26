'use client';

import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = sectionIds[0];
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near or past the offset, we consider it active
          if (rect.top <= offset) {
            currentActiveId = id;
          }
        }
      }
      
      setActiveId(currentActiveId);
    };

    // Run on initial mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};
