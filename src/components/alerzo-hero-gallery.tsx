import Image from "next/image";

type HeroImage = { src: string; width: number; height: number };

export function AlerzoHeroGallery({ images }: { images: HeroImage[] }) {
  const mid = Math.ceil(images.length / 2);
  const rowA = images.slice(0, mid);
  const rowB = images.slice(mid);

  return (
    <div className="alerzo-hero-rows">
      {[rowA, rowB].map((row, rowIndex) => (
        <div className={`alerzo-hero-row${rowIndex === 1 ? " alerzo-hero-row--reverse" : ""}`} key={rowIndex}>
          <div className="alerzo-hero-row-track">
            {row.map((image) => (
              <Image src={image.src} alt="" width={image.width} height={image.height} key={image.src} />
            ))}
            {row.map((image) => (
              <Image src={image.src} alt="" aria-hidden width={image.width} height={image.height} key={`${image.src}-repeat`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
