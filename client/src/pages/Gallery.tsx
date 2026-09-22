import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";

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

export default function Gallery() {
  const homeHref = `${import.meta.env.BASE_URL}#top`;
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
            <a className={`gallery-page-card gallery-page-card-${(index % 4) + 1}`} href={image} target="_blank" rel="noreferrer" key={image}>
              <img src={image} alt={title} loading="eager" />
              <span className="gallery-page-card-info"><small>0{index + 1}</small><strong>{title}</strong><ArrowUpRight size={17} /></span>
            </a>
          ))}
        </section>
      </main>
      <footer className="gallery-page-footer"><span>© {new Date().getFullYear()} Hotel Royal Garden, Daman</span><a href="mailto:rylgarden@yahoo.com">rylgarden@yahoo.com</a><a href="tel:+919824045633">+91 98240 45633</a></footer>
    </div>
  );
}
