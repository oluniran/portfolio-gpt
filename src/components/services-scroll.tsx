"use client";

import { useEffect, useRef, useState } from "react";
import type { ServiceDiscipline } from "@/content/site-content";

const iconPaths: Record<string, string> = {
  content: "M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1zM14.5 8a4 4 0 0 1 0 8M17.5 5a8 8 0 0 1 0 14",
  "case-study": "M6 3h12v18l-6-3-6 3V3z",
  webinar: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM10 8l6 4-6 4V8z",
  "paid-social": "M3 11l17-7-4 17-6-5-4 3v-4l9-8-9 5",
  email: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3.5 6l8.5 7 8.5-7",
  "landing-page": "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 9h18M7 13h6M7 16h4",
  form: "M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 12l2 2 4-4M8 17h8",
  "lead-scoring": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12l0-.01",
  "ab-testing": "M7 4v16M17 4v16M4 8l3-3 3 3M14 16l3 3 3-3",
  retargeting: "M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0 0 14.5 3.5M19.5 9A8 8 0 0 0 5 5.5",
  crm: "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zM4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2",
  automation: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L10 21h4l.5-2.6c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z",
  attribution: "M4 19V5M4 19h16M8 15l3-4 3 3 4-6",
  segmentation: "M12 3a9 9 0 1 0 9 9h-9V3z M12 3a9 9 0 0 1 9 9",
  reporting: "M4 19V5M4 19h16M8 19v-6M12 19V9M16 19v-9",
};

function ConceptIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={iconPaths[name] ?? iconPaths.content} />
    </svg>
  );
}

export function ServicesScroll({ services }: { services: ServiceDiscipline[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sentinelRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sentinelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = services[activeIndex];

  return (
    <div className="scroll-services-track" style={{ height: `${services.length * 100}vh` }}>
      {services.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            sentinelRefs.current[i] = el;
          }}
          className="scroll-services-sentinel"
          style={{ top: `${i * 100}vh` }}
        />
      ))}
      <div className="scroll-services-sticky">
        <div className="scroll-services-list">
          {services.map((service, i) => (
            <div className={`scroll-services-item${i === activeIndex ? " is-active" : ""}`} key={service.number}>
              <p className="service-number">{service.number}</p>
              <h3 className="subheading">{service.title}</h3>
              <p className="body-copy">{service.copy}</p>
            </div>
          ))}
        </div>
        <div className="scroll-services-chips">
          {active.chips.map((chip) => (
            <div className="scroll-services-chip" key={chip.label}>
              <ConceptIcon name={chip.icon} />
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
