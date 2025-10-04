import { useEffect, useRef, useState } from 'react';

export function useAudioPlayer(audioSrc: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = false;

    const audio = audioRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
      audio.currentTime = 0;
    };

    audio.addEventListener('ended', handleEnded);

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay blocked by browser');
      }
    };

    attemptAutoplay();

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, [audioSrc]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return {
    isPlaying,
    play,
    stop,
    toggle,
  };
}
