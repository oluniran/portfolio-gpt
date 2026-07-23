import Image from "next/image";
import type { ProjectTile } from "@/content/site-content";

export function AlerzoProjectTiles({ projects }: { projects: ProjectTile[] }) {
  return (
    <div>
      {projects.map((project, index) => (
        <article className={`portfolio-row${index % 2 ? " portfolio-row--reverse" : ""}`} key={project.slug}>
          <div className="portfolio-image">
            <Image src={project.image.src} alt={project.image.alt} width={600} height={450} />
          </div>
          <div className="portfolio-content">
            <span className="experience-portfolio-index">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="subheading">{project.title}</h3>
            <p className="body-copy">{project.description}</p>
            <ul className="portfolio-tags">
              <li className="experience-portfolio-tag">{project.tag}</li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
