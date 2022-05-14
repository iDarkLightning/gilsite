import { useEffect, useState } from 'react';
import * as React from 'react';

export const Typewriter: React.FC<{
  string: string;
  wait?: number;
  children: (string: string) => React.ReactElement;
}> = ({ string, wait = 0, children }) => {
  const [progress, setProgress] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, wait);
  }, []);

  useEffect(() => {
    if (progress === -1) return;

    const i = setInterval(() => {
      setProgress(progress + 1);
    }, 50);

    if (progress === string.length) {
      clearInterval(i);
    }

    return () => clearInterval(i);
  }, [progress, setProgress]);

  return children(string.substring(0, progress));
};
