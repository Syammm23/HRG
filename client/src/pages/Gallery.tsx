import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const ASSET = `${import.meta.env.BASE_URL}images/`;

const galleryImages = [
  ["Hotel Royal Garden exterior", `${ASSET}banner01-1920x1280.jpg`],
  ["A welcoming Royal Garden stay", `${ASSET}banner02-1920x1280.jpg`],
  ["Comfortable rooms", `${ASSET}banner03-1920x1280.jpg`],
  ["A quiet garden mood", `${ASSET}banner04-1920x1280.jpg`],
  ["Green surroundings", `${ASSET}home-welcome.jpg-1110x740.jpg`],
  ["Super Deluxe Room", `${ASSET}home-rooms1.jpg-510x340.jpg`],
  ["Deluxe A/C Room", `${ASSET}home-rooms2.jpg-510x340.jpg`],
  ["Garden View Stay", `${ASSET}home-rooms3.jpg-510x340.jpg`],
  ["ROYAL DELUXE", `${ASSET}home-rooms-1080x720.jpg`],
  ["AC DELUXE / AC SUPER DELUXE", `${ASSET}home-rooms4.jpg-510x340.jpg`],
  ["Saffron Veg. Restaurant", `${ASSET}home-saffron.jpg-700x1050.jpg`],
  ["Aqua Lounge", `${ASSET}home-aqua.jpg-700x1050.jpg`],
  ["Garden Restaurant", `${ASSET}home-garden.jpg-700x1050.jpg`],
];

function GalleryLightbox({ selectedIndex, onClose, onChange }: { selectedIndex: number; onClose: () => void; onChange: (index: number) => void }) {
  const [title, image] = galleryImages[selectedIndex];
  const previous = () => onChange((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  const next = () => onChange((selectedIndex + 1) % galleryImages.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, onClose]);

  return (
    <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <button className="icon-button gallery-lightbox-close" onClick={onClose} aria-label="Close image viewer"><X size={22} /></button>
      <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={previous} aria-label="Previous image"><ChevronLeft size={28} /></button>
      <figure className="gallery-lightbox-content"><img src={image} alt={title} /><figcaption><span>{String(selectedIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span>{title}</figcaption></figure>
      <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={next} aria-label="Next image"><ChevronRight size={28} /></button>
    </div>
  );
}

export default function Gallery() {
  const homeHref = `${import.meta.env.BASE_URL}#top`;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="gallery-page">
      <header className="gallery-page-header">
        <a className="gallery-back" href={homeHref}><ArrowLeft size={17} /> Back to Royal Garden</a>
        <img src={`${ASSET}hotel-royal-garden-logo-423x152.png`} alt="Hotel Royal Garden" />
        <a className="button button-accent" href="tel:+919824045633">Enquire <Phone size={16} /></a>
      </header>
      <main>
        <section className="gallery-page-intro">
          <span className="eyebrow"><span className="eyebrow-line" /> Hotel Royal Garden · Daman</span>
          <h1>A closer look at <em>your next stay.</em></h1>
          <p>Rooms, restaurants and green corners from the Royal Garden experience. Tap any photograph to view it in full.</p>
        </section>
        <section className="gallery-page-grid" aria-label="Hotel Royal Garden photo gallery">
          {galleryImages.map(([title, image], index) => (
              <button className={`gallery-page-card gallery-page-card-${(index % 4) + 1}`} onClick={() => setSelectedIndex(index)} aria-label={`View ${title}`} key={image}>
                <img src={image} alt={title} loading="eager" />
                <span className="gallery-page-card-info"><small>0{index + 1}</small><strong>{title}</strong><ArrowUpRight size={17} /></span>
              </button>
          ))}
        </section>
      </main>
      <footer className="gallery-page-footer"><span>© {new Date().getFullYear()} Hotel Royal Garden, Daman</span><a href="mailto:rylgarden@yahoo.com">rylgarden@yahoo.com</a><a href="tel:+919824045633">+91 98240 45633</a></footer>
      {selectedIndex !== null && <GalleryLightbox selectedIndex={selectedIndex} onClose={() => setSelectedIndex(null)} onChange={setSelectedIndex} />}
    </div>
  );
}
