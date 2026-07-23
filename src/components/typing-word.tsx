"use client";

import { useEffect, useState } from "react";

type Word = { text: string; withPrefix?: boolean };

export function TypingWord({
  words,
  pre,
  typeSpeed = 55,
  deleteSpeed = 30,
  pauseDelay = 1400,
}: {
  words: Word[];
  pre: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDelay?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  const current = words[wordIndex];
  const fullWord = `${current.withPrefix ? "with " : ""}${current.text}`;

  useEffect(() => {
    const delay = phase === "typing" ? typeSpeed : phase === "deleting" ? deleteSpeed : pauseDelay;
    const timeout = setTimeout(() => {
      if (phase === "typing") {
        if (charIndex < fullWord.length) {
          setCharIndex((c) => c + 1);
        } else {
          setPhase("pause");
        }
      } else if (phase === "pause") {
        setPhase("deleting");
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setWordIndex((w) => (w + 1) % words.length);
          setPhase("typing");
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [phase, charIndex, fullWord, words.length, typeSpeed, deleteSpeed, pauseDelay]);

  const visible = fullWord.slice(0, charIndex);

  return (
    <p className="compound-line compound-line--typing">
      <span className="sr-only">{pre}{fullWord}</span>
      <span aria-hidden="true">
        {pre}
        <span className="typing-word">{visible}</span>
        <span className="typing-cursor" />
      </span>
    </p>
  );
}
