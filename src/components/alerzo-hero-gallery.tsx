import Image from "next/image";

export function AlerzoHeroGallery({ images }: { images: string[] }) {
  const mid = Math.ceil(images.length / 2);
  const rowA = images.slice(0, mid);
  const rowB = images.slice(mid);

  return (
    <div className="alerzo-hero-rows">
      {[rowA, rowB].map((row, rowIndex) => (
        <div className={`alerzo-hero-row${rowIndex === 1 ? " alerzo-hero-row--reverse" : ""}`} key={rowIndex}>
          <div className="alerzo-hero-row-track">
            {row.map((src) => (
              <Image src={src} alt="" width={480} height={360} key={src} />
            ))}
            {row.map((src) => (
              <Image src={src} alt="" aria-hidden width={480} height={360} key={`${src}-repeat`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
