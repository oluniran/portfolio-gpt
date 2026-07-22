"use client";

import { useState } from "react";
import Image from "next/image";
import type { LandmarkExperience } from "@/content/site-content";

export function LandmarkExperiences({ experiences }: { experiences: LandmarkExperience[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <ul className="experience-list">
      {experiences.map((experience) => {
        const isOpen = openSlug === experience.slug;
        const panelId = `experience-panel-${experience.slug}`;
        return (
          <li className="experience-item" data-open={isOpen} key={experience.slug}>
            <button
              type="button"
              className="experience-item-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenSlug(isOpen ? null : experience.slug)}
            >
              <span className="experience-item-thumb">
                <Image src={experience.image} alt="" width={400} height={300} sizes="(min-width: 768px) 20vw, 40vw" />
              </span>
              <span className="experience-item-name">{experience.name}</span>
              <svg className="experience-item-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="experience-item-panel" id={panelId} role="region" aria-hidden={!isOpen}>
              <div className="experience-item-panel-inner">
                <div className="experience-item-panel-content">
                  <p className="experience-item-tagline">{experience.tagline}</p>
                  <ul className="experience-item-contributions">
                    {experience.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="button button--ghost focus-ring" href={experience.href} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
