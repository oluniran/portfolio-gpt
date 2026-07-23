"use client";

import { useState } from "react";
import Image from "next/image";
import type { LandmarkExperience } from "@/content/site-content";

export function LandmarkExperiences({ experiences }: { experiences: LandmarkExperience[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="experience-portfolio" onMouseLeave={() => setHoveredIndex(null)}>
      <div className="experience-portfolio-list-wrap">
        <div className="experience-portfolio-backdrop" aria-hidden="true" />
        <ul className="experience-portfolio-list">
        {experiences.map((experience, index) => {
          const isOpen = openSlug === experience.slug;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
          const panelId = `experience-panel-${experience.slug}`;
          return (
            <li className="experience-portfolio-row" data-dimmed={isDimmed} data-open={isOpen} key={experience.slug}>
              <div className="experience-portfolio-image-col" aria-hidden="true" style={{ zIndex: experiences.length - index }}>
                <div className="experience-portfolio-image-inner" data-visible={hoveredIndex === index || hoveredIndex === null}>
                  <Image src={experience.image} alt="" fill sizes="45vw" />
                </div>
              </div>
              <button
                type="button"
                className="experience-portfolio-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setOpenSlug(isOpen ? null : experience.slug)}
              >
                <span className="experience-portfolio-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="experience-portfolio-heading">
                  <span className="experience-portfolio-name">{experience.name}</span>
                  <span className="experience-portfolio-tag experience-portfolio-tag--plain">{experience.tag}</span>
                </span>
                <svg className="experience-item-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="experience-item-panel" id={panelId} role="region" aria-hidden={!isOpen}>
                <div className="experience-item-panel-inner">
                  <div className="experience-item-panel-content">
                    <span className="experience-portfolio-mobile-image">
                      <Image src={experience.image} alt="" width={400} height={300} />
                    </span>
                    <p className="experience-item-summary">{experience.summary}</p>
                    <a className="button button--accent focus-ring" href={experience.href} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}
