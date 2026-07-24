"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioExperience } from "@/content/site-content";

function ExpandedGallery({
  images,
  index,
  setIndex,
}: {
  images: string[];
  index: number;
  setIndex: (updater: (i: number) => number) => void;
}) {
  const showControls = images.length > 1;

  return (
    <div className="experience-gallery">
      <div className="experience-gallery-frame">
        <Image src={images[index]} alt="" fill sizes="(min-width: 768px) 40rem, 90vw" />
      </div>
      {showControls ? (
        <div className="experience-gallery-controls">
          <div className="experience-gallery-buttons">
            <button
              type="button"
              className="experience-gallery-nav"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="experience-gallery-nav"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="experience-gallery-dots">
            {images.map((src, i) => (
              <button
                type="button"
                key={src}
                className="experience-gallery-dot"
                data-active={i === index}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(() => i)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ExperienceRow({
  experience,
  index,
  total,
  isDimmed,
  isOpen,
  isVisible,
  onHover,
  onToggle,
}: {
  experience: PortfolioExperience;
  index: number;
  total: number;
  isDimmed: boolean;
  isOpen: boolean;
  isVisible: boolean;
  onHover: () => void;
  onToggle: () => void;
}) {
  const galleryImages = experience.gallery && experience.gallery.length > 0 ? experience.gallery : [experience.image];
  const [galleryIndex, setGalleryIndex] = useState(0);
  const stickyImage = galleryImages[galleryIndex] ?? experience.image;
  const panelId = `experience-panel-${experience.slug}`;

  return (
    <li className="experience-portfolio-row" data-dimmed={isDimmed} data-open={isOpen}>
      <div className="experience-portfolio-image-col" aria-hidden="true" style={{ zIndex: total - index }}>
        <div className="experience-portfolio-image-inner" data-visible={isVisible}>
          <Image src={stickyImage} alt="" fill sizes="45vw" />
        </div>
      </div>
      <button
        type="button"
        className="experience-portfolio-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onMouseEnter={onHover}
        onClick={onToggle}
      >
        <span className="experience-portfolio-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="experience-portfolio-heading">
          <span className="experience-portfolio-name">{experience.name}</span>
        </span>
        <svg className="experience-item-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="experience-item-panel" id={panelId} role="region" aria-hidden={!isOpen}>
        <div className="experience-item-panel-inner">
          <div className="experience-item-panel-content">
            <span className="experience-portfolio-tag experience-portfolio-tag--plain">{experience.tag}</span>
            <p className="experience-item-summary">{experience.summary}</p>
            <ExpandedGallery images={galleryImages} index={galleryIndex} setIndex={setGalleryIndex} />
            {experience.href ? (
              <a className="button button--accent focus-ring" href={experience.href} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}

export function ExperiencePortfolio({ experiences }: { experiences: PortfolioExperience[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="experience-portfolio" onMouseLeave={() => setHoveredIndex(null)}>
      <div className="experience-portfolio-list-wrap">
        <div className="experience-portfolio-backdrop" aria-hidden="true" />
        <ul className="experience-portfolio-list">
          {experiences.map((experience, index) => (
            <ExperienceRow
              key={experience.slug}
              experience={experience}
              index={index}
              total={experiences.length}
              isDimmed={hoveredIndex !== null && hoveredIndex !== index}
              isOpen={openSlug === experience.slug}
              isVisible={hoveredIndex === index || hoveredIndex === null}
              onHover={() => setHoveredIndex(index)}
              onToggle={() => setOpenSlug(openSlug === experience.slug ? null : experience.slug)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
