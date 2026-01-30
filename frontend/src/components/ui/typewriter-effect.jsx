import React, { useEffect, useState } from "react";

/**
 * TypewriterEffectSmooth
 *
 * Simple, dependency‑free typewriter effect that matches the
 * `TypewriterEffectSmooth` API used in the design snippet.
 *
 * Props:
 * - words: [{ text: string, className?: string }]
 * - className?: string — extra classes for the wrapper
 * - cursorClassName?: string — optional class for the cursor (e.g. "bg-white" for light cursor on dark bg)
 */
export function TypewriterEffectSmooth({ words = [], className = "", cursorClassName = "" }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex]?.text ?? "";

    // Finished typing current word — pause, then start deleting
    if (!isDeleting && charIndex === currentWord.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    // Finished deleting — move to next word
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const delay = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  if (!words.length) {
    return null;
  }

  const currentWord = words[wordIndex];
  const baseClasses =
    "flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-roboto";

  return (
    <div className={`${baseClasses} ${className}`}>
      <span className="whitespace-pre">
        <span className={currentWord.className || ""}>
          {currentWord.text.slice(0, charIndex)}
        </span>
      </span>
      <span className={`ml-1 inline-block w-[2px] h-[1.2em] animate-pulse ${cursorClassName || "bg-foreground"}`} />
    </div>
  );
}

