'use client';

import { useState, useEffect, useRef } from 'react';

type IntersectionObserverHook = [React.RefObject<HTMLElement>, boolean];

export function useIntersectionObserver(
  options = { threshold: 0.1, triggerOnce: true }
): IntersectionObserverHook {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const { threshold, triggerOnce } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce]);

  return [elementRef as React.RefObject<HTMLElement>, isVisible];
}