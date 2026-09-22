import {
  ArrowDownRight,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  GlassWater,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Utensils,
  Users,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";

const ASSET = `${import.meta.env.BASE_URL}images/`;

const heroImages = [
  `${ASSET}banner01-1920x1280.jpg`,
  `${ASSET}banner02-1920x1280.jpg`,
  `${ASSET}banner03-1920x1280.jpg`,
  `${ASSET}banner04-1920x1280.jpg`,
];

const rooms = [
  {
    name: "AC DELUXE",
    image: `${ASSET}home-rooms4.jpg-510x340.jpg`,
    copy: "Smart air-conditioned comfort for business trips, weekend breaks and easy family stays.",
    features: ["A/C comfort", "Room service", "Work-friendly"],
    rent: "₹2,600",
    extra: "₹900",
  },
  {
    name: "AC SUPER DELUXE",
    image: `${ASSET}home-rooms4.jpg-510x340.jpg`,
    copy: "A spacious air-conditioned retreat with polished details and a calm, restful mood.",
    features: ["A/C comfort", "King bed", "Complimentary Wi-Fi"],
    rent: "₹2,900",
    extra: "₹900",
  },
  {
    name: "ROYAL DELUXE",
    image: `${ASSET}home-rooms-1080x720.jpg`,
    copy: "Our refined deluxe stay with extra space, elegant details and a peaceful garden-facing setting.",
    features: ["Premium interiors", "Garden outlook", "Daily housekeeping"],
    rent: "₹4,000",
    extra: "₹1,000",
  },
  {
    name: "ROYAL SUITE",
    image: `${ASSET}home-rooms3.jpg-510x340.jpg`,
    copy: "A generous suite-style stay for celebrations, longer escapes and guests who want a little more room.",
    features: ["Suite comfort", "Premium interiors", "Breakfast included"],
    rent: "₹5,000",
    extra: "₹1,000",
  },
];

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

const experiences = [
  {
    type: "Dining",
    title: "Saffron Veg. Restaurant",
    text: "Familiar favourites and thoughtful vegetarian plates, served with the warmth of home.",
    image: `${ASSET}home-saffron.jpg-700x1050.jpg`,
    icon: Utensils,
  },
  {
    type: "Lounge",
    title: "Aqua Lounge",
    text: "A relaxed evening setting with a wine list designed to enhance every palate.",
    image: `${ASSET}home-aqua.jpg-700x1050.jpg`,
    icon: GlassWater,
  },
  {
    type: "Dining",
    title: "Garden Restaurant",
    text: "Fresh air, green surroundings and a fusion of flavours that begins in our kitchens.",
    image: `${ASSET}home-garden.jpg-700x1050.jpg`,
    icon: Leaf,
  },
];

const today = new Date().toISOString().split("T")[0];

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your stay request is ready for the Royal Garden team.", {
      description: "We’ll call you shortly on the number you shared.",
    });
    window.setTimeout(onClose, 900);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="booking-modal">
        <button className="icon-button modal-close" aria-label="Close booking form" onClick={onClose}><X size={20} /></button>
        <div className="modal-kicker"><Sparkles size={15} /> Direct reservations</div>
        <h2 id="booking-title">Plan your quiet escape.</h2>
        <p className="modal-intro">Share your dates and we’ll help you find the right room and best available deal.</p>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid two-col">
            <label>Check in<input type="date" min={today} defaultValue={today} required /></label>
            <label>Check out<input type="date" min={today} required /></label>
          </div>
          <div className="form-grid two-col">
            <label>Guests<select defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label>
            <label>Room type<select defaultValue="any"><option value="any">Any available room</option><option value="super">Super Deluxe</option><option value="deluxe">Deluxe A/C</option><option value="garden">Garden View</option></select></label>
          </div>
          <label>Your name<input type="text" placeholder="Enter your name" required /></label>
          <label>Mobile number<input type="tel" placeholder="+91 98 2404 5633" required /></label>
          <button className="button button-primary button-wide" type="submit" disabled={submitted}>{submitted ? <><Check size={17} /> Request sent</> : <>Request best available rate <ArrowRight size={17} /></>}</button>
        </form>
        <p className="modal-footnote"><Phone size={14} /> Prefer to call? <a href="tel:+919824045633">+91 98240 45633</a></p>
      </div>
    </div>
  );
}

function BookingWidget({ onReserve }: { onReserve: () => void }) {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!checkOut) {
      toast.error("Please select a check-out date.");
      return;
    }
    onReserve();
  };

  return (
    <form className="booking-widget" onSubmit={submit}>
      <div className="booking-widget-intro"><span>Stay with us</span><strong>Make it a Royal stay.</strong></div>
      <label><span><CalendarDays size={16} /> Check in</span><input type="date" value={checkIn} min={today} onChange={(event) => setCheckIn(event.target.value)} /></label>
      <label><span><CalendarDays size={16} /> Check out</span><input type="date" value={checkOut} min={checkIn || today} onChange={(event) => setCheckOut(event.target.value)} /></label>
      <label><span><Users size={16} /> Guests</span><select value={guests} onChange={(event) => setGuests(event.target.value)}><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label>
      <button className="button button-accent" type="submit">Check availability <ArrowRight size={17} /></button>
    </form>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((current) => (current + 1) % heroImages.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const visibleExperiences = useMemo(() => experienceFilter === "All" ? experiences : experiences.filter((experience) => experience.type === experienceFilter), [experienceFilter]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    toast.success("You’re on the list.", { description: "We’ll send Royal Garden offers to your inbox." });
    setEmail("");
  };

  return (
    <div className="site-shell">
      <header className="site-header"><div className="container nav-inner"><button className="mobile-menu-button" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={23} /> : <Menu size={23} />}</button><a href="#top" className="brand-mark" onClick={() => setIsMenuOpen(false)}><img src={`${ASSET}hotel-royal-garden-logo-423x152.png`} alt="Hotel Royal Garden" /></a><nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}><button onClick={() => scrollTo("stay")}>Stay</button><button onClick={() => scrollTo("dining")}>Dining</button><button onClick={() => scrollTo("story")}>Our story</button><button onClick={() => scrollTo("location")}>Location</button><a href={`${import.meta.env.BASE_URL}#gallery`} className="nav-gallery-link">Gallery</a><a href="tel:+919824045633" className="nav-call"><Phone size={15} /> Call us</a><button className="button button-dark nav-cta" onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}>Book your stay <ArrowUpRightIcon /></button></nav><button className="button button-dark desktop-cta" onClick={() => setIsBookingOpen(true)}>Book your stay <ArrowUpRightIcon /></button></div></header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${heroImages[heroIndex]})` }} />
          <div className="hero-scrim" />
          <div className="container hero-content"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-dot" /> A garden retreat in Daman</div><h1>Stay close to<br /><em>what feels good.</em></h1><p>Unhurried mornings, leafy corners and the comfort of a place that feels like yours.</p><div className="hero-actions"><button className="button button-accent" onClick={() => setIsBookingOpen(true)}>Find your room <ArrowRight size={17} /></button><button className="text-link text-link-light" onClick={() => scrollTo("story")}>Discover Royal Garden <ArrowDownRight size={18} /></button></div></div><div className="hero-note"><span>01 — 04</span><span className="hero-rule" /><span>Every stay, naturally better</span></div></div>
          <div className="hero-dots" aria-label="Hero image selector">{heroImages.map((_, index) => <button key={index} className={index === heroIndex ? "active" : ""} onClick={() => setHeroIndex(index)} aria-label={`Show hero image ${index + 1}`} />)}</div>
        </section>
        <BookingWidget onReserve={() => setIsBookingOpen(true)} />

        <section id="story" className="story-section section-pad"><div className="container split-layout"><div className="story-media"><img src={`${ASSET}home-welcome.jpg-1110x740.jpg`} alt="Green garden surrounding Hotel Royal Garden" /></div><div className="story-copy"><SectionHeading eyebrow="A slower kind of stay" title="Room to breathe, right at the edge of the city." copy="Escape the rush without going too far. Hotel Royal Garden brings you clean, fresh air and a warm, easygoing stay in the peaceful green stretches of Dhabhel, Daman." /><p className="body-copy">Just a 5-minute drive from Vapi Railway Station, our 58 thoughtfully designed rooms are made for short breaks, family getaways and peaceful business stays. Come to disconnect from the everyday. Stay for the feeling.</p><button className="text-link" onClick={() => scrollTo("stay")}>Explore the stay <ArrowRight size={17} /></button><div className="story-stats"><div><strong>58</strong><span>Thoughtful rooms</span></div><div><strong>5 min</strong><span>From Vapi station</span></div><div><strong>24/7</strong><span>Warm hospitality</span></div></div></div></div></section>

        <section id="stay" className="stay-section section-pad"><div className="container"><div className="section-row"><SectionHeading eyebrow="Your room, your rhythm" title="Stay a little longer." copy="58 rooms across four tariff categories, with the details that make switching off feel effortless." /><div className="tariff-note">Tariff shown in INR · GST 5% extra · Check-in 12pm · Check-out 11am</div><button className="text-link desktop-only" onClick={() => setIsBookingOpen(true)}>View availability <ArrowRight size={17} /></button></div><div className="room-grid">{rooms.map((room, index) => <article className="room-card" key={room.name}><div className="room-image-wrap"><img src={room.image} alt={room.name} /><span className="room-index">0{index + 1}</span><button className="card-arrow" aria-label={`Book ${room.name}`} onClick={() => setIsBookingOpen(true)}><ArrowUpRightIcon /></button></div><div className="room-card-content"><span className="card-eyebrow">Hotel Royal Garden · Daman</span><h3>{room.name}</h3><p>{room.copy}</p><div className="feature-list">{room.features.map((feature) => <span key={feature}><Check size={13} /> {feature}</span>)}</div><div className="room-tariff"><span><small>R. RENT</small><strong>{room.rent}</strong></span><span><small>EX. AD. & CH.</small><strong>{room.extra}</strong></span></div></div></article>)}</div></div></section>

        <section id="dining" className="dining-section section-pad"><div className="container"><div className="section-row section-row-light"><SectionHeading light eyebrow="Good food, good company" title="Gather around the table." copy="From a slow afternoon coffee to an evening with a little sparkle, there’s a seat waiting for you." /><div className="filter-tabs" role="tablist">{["All", "Dining", "Lounge"].map((filter) => <button key={filter} role="tab" aria-selected={experienceFilter === filter} className={experienceFilter === filter ? "active" : ""} onClick={() => setExperienceFilter(filter)}>{filter}</button>)}</div></div><div className="experience-grid">{visibleExperiences.map((experience) => { const Icon = experience.icon; return <article className="experience-card" key={experience.title}><div className="experience-image"><img src={experience.image} alt={experience.title} /><span className="experience-icon"><Icon size={19} /></span></div><div className="experience-content"><span className="card-eyebrow">{experience.type} at Royal Garden</span><h3>{experience.title}</h3><p>{experience.text}</p><button className="text-link text-link-light" onClick={() => toast.info(`${experience.title} enquiries`, { description: "Call +91 98240 45633 for today’s menu and timings." })}>Explore the experience <ArrowRight size={16} /></button></div></article> })}</div></div></section>

        <section id="gallery" className="gallery-section section-pad"><div className="container"><div className="section-row"><SectionHeading eyebrow="A glimpse of Royal Garden" title="See the stay before you arrive." copy="Explore the rooms, dining spaces and green corners that make Hotel Royal Garden feel easy to return to." /><span className="gallery-count">13 moments · Hotel Royal Garden</span></div><div className="gallery-grid">{galleryImages.map(([title, image], index) => <a className={`gallery-card gallery-card-${(index % 4) + 1}`} href={image} target="_blank" rel="noreferrer" key={image}><img src={image} alt={title} loading="eager" /><span className="gallery-card-label"><small>0{index + 1}</small>{title}<ArrowUpRightIcon /></span></a>)}</div></div></section>

        <section className="offer-section"><div className="container offer-inner"><div className="offer-mark"><Sparkles size={28} /></div><div><span className="eyebrow">Make it a little more special</span><h2>Best deals for corporate clients & travellers.</h2><p>Call us directly for a thoughtful offer tailored to your stay.</p></div><a className="button button-accent" href="tel:+919824045633">Call now <Phone size={16} /></a></div></section>

        <section id="location" className="location-section section-pad"><div className="container location-layout location-layout-single"><div className="location-copy"><SectionHeading eyebrow="Find your way here" title="A green pause, well connected." copy="Tucked away in Dhabhel, Daman, Royal Garden gives you the best of both worlds: easy access and a quieter pace." /><div className="contact-list"><div><span className="contact-icon"><MapPin size={17} /></span><div><strong>Address</strong><p>Hotel Royal Garden, Dhabhel, Daman<br />Near Vapi Railway Station</p></div></div><div><span className="contact-icon"><Clock3 size={17} /></span><div><strong>Check-in / check-out</strong><p>Check-in: 12 noon<br />Check-out: 11 am</p></div></div><div><span className="contact-icon"><Phone size={17} /></span><div><strong>Reservations</strong><p><a href="tel:+919824045633">+91 98240 45633</a> · <a href="tel:+919714746633">+91 97147 46633</a></p></div></div></div><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Royal+Garden+Daman" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRightIcon /></a></div></div></section>

        <section className="faq-section section-pad"><div className="container faq-layout"><SectionHeading eyebrow="Good to know" title="The little details." copy="A few answers before you arrive." /><div className="faq-list"><details open><summary>What time is check-in and check-out?<ChevronDown size={18} /></summary><p>Check-in is from 12 noon and check-out is by 11 am. If you need flexibility, call our team and we’ll do our best to help.</p></details><details><summary>How far is the hotel from Vapi Railway Station?<ChevronDown size={18} /></summary><p>We’re approximately a 5-minute drive from Vapi Railway Station, along the peaceful green stretches of Dhabhel.</p></details><details><summary>Can I enquire for a corporate stay or group booking?<ChevronDown size={18} /></summary><p>Absolutely. Call +91 98240 45633 for a tailored corporate, group or tourist offer.</p></details></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><img src={`${ASSET}hotel-royal-garden-logo-423x152.png`} alt="Hotel Royal Garden" /><p>A refreshing retreat in Daman, where comfort meets the calm of nature.</p><div className="footer-socials"><a href="https://wa.me/919824045633" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={16} /></a><a href="mailto:rylgarden@yahoo.com" aria-label="Email"><Mail size={16} /></a><a href="tel:+919824045633" aria-label="Phone"><Phone size={16} /></a></div></div><div className="footer-links"><div><span className="footer-label">Explore</span><button onClick={() => scrollTo("stay")}>Stay</button><button onClick={() => scrollTo("dining")}>Dining</button><button onClick={() => scrollTo("story")}>Our story</button><button onClick={() => scrollTo("location")}>Location</button><a href={`${import.meta.env.BASE_URL}#gallery`}>Gallery</a></div><div><span className="footer-label">Contact</span><a href="tel:+919824045633">+91 98240 45633</a><a href="tel:+919714746633">+91 97147 46633</a><a href="mailto:rylgarden@yahoo.com">rylgarden@yahoo.com</a></div><div className="newsletter"><span className="footer-label">A little Royal news</span><p>Offers, seasonal menus and reasons to return.</p><form onSubmit={subscribe}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-label="Your email address" required /><button aria-label="Subscribe"><ArrowRight size={17} /></button></form></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Hotel Royal Garden, Daman</span><span>Made for slower stays.</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/919824045633?text=Hello%20Hotel%20Royal%20Garden%2C%20I%27d%20like%20to%20know%20more%20about%20a%20stay." target="_blank" rel="noreferrer"><span className="whatsapp-pulse" /> <span>Chat with us</span><span className="whatsapp-symbol"><MessageCircle size={16} /></span></a>
      {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight size={16} className="arrow-up-right" />;
}
