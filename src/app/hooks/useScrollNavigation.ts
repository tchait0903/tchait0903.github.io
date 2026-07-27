import { useCallback } from 'react';

export const useScrollNavigation = () => {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection };
}; 