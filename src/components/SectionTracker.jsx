'use client';
import { useEffect, useState } from 'react';
import { trackSectionView } from '@/lib/gtag';

const SectionTracker = ({ sectionName, children }) => {
  const [entryTime, setEntryTime] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setEntryTime(Date.now());
          } else if (entryTime) {
            const timeSpent = Math.floor((Date.now() - entryTime) / 1000);
            trackSectionView(sectionName, timeSpent);
            setEntryTime(null);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById(sectionName);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionName, entryTime]);

  return children;
};

export default SectionTracker;
