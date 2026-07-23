"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Word = { text: string; withPrefix?: boolean };

const MIN_SIZE = 28; // px
const MAX_SIZE = 72; // px

export function RotatingWord({
  words,
  pre,
  interval = 2200,
}: {
  words: Word[];
  pre: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const lineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const current = words[index];
  const fullText = `${pre}${current.withPrefix ? "with " : ""}${current.text}`;

  const fit = () => {
    const line = lineRef.current;
    const container = line?.parentElement;
    if (!line || !container) return;
    const containerWidth = container.clientWidth;

    const lineStyle = getComputedStyle(line);
    const measurer = document.createElement("span");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "nowrap";
    measurer.style.display = "inline-block";
    measurer.style.left = "-9999px";
    measurer.style.top = "0";
    measurer.style.fontFamily = lineStyle.fontFamily;
    measurer.style.fontWeight = lineStyle.fontWeight;
    measurer.style.fontStyle = lineStyle.fontStyle;
    measurer.style.letterSpacing = lineStyle.letterSpacing;
    measurer.style.fontSize = `${MAX_SIZE}px`;
    measurer.append(document.createTextNode(`${pre}${current.withPrefix ? "with " : ""}`));
    const pillClone = document.createElement("span");
    pillClone.className = "rotating-word-pill";
    pillClone.textContent = current.text;
    measurer.append(pillClone);
    document.body.appendChild(measurer);
    const widthAtMax = measurer.getBoundingClientRect().width;
    document.body.removeChild(measurer);

    if (widthAtMax <= 0) return;
    const ideal = (containerWidth / widthAtMax) * MAX_SIZE * 0.96;
    const size = Math.max(MIN_SIZE, Math.min(MAX_SIZE, ideal));
    line.style.fontSize = `${size}px`;
  };

  useLayoutEffect(() => {
    fit();
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(fit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText]);

  useEffect(() => {
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText]);

  return (
    <p className="compound-line compound-line--rotating" ref={lineRef}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {pre}
        {current.withPrefix ? "with " : ""}
        <span className="rotating-word-pill" key={index}>
          {current.text}
        </span>
      </span>
    </p>
  );
}
