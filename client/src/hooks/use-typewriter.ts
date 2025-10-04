import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      currentIndex++;
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  return { displayText, isComplete };
}
