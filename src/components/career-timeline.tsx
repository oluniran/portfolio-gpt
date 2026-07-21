import Image from "next/image";
import type { TimelineEntry } from "@/content/site-content";

export function CareerTimeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline-zigzag">
      <div className="timeline-zigzag-line" />
      {items.map((item, i) => (
        <div className={`timeline-zigzag-item${i % 2 ? " timeline-zigzag-item--reverse" : ""}`} key={item.date}>
          <div className="timeline-zigzag-content">
            <div className="timeline-brand"><Image src={item.logo} alt={`${item.title} logo`} width={96} height={96} /><div><p className="timeline-date">{item.date}</p><h3 className="subheading">{item.title}</h3></div></div>
            <p className="body-copy">{item.copy}</p>
          </div>
          <div className="timeline-zigzag-dot" />
          <div className="timeline-zigzag-spacer" />
        </div>
      ))}
    </div>
  );
}
