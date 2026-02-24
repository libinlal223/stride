import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Rocket, BriefcaseBusiness, Globe, Target, Sparkles, Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './index.css';
import './downside.css';
import './CostCalculator.css';
import './hero-bento.css';
import logo from './assets/images/stride_logo.png';
import logoHero from './assets/images/stride_logo2.png';
import img1 from './assets/images/1-removebg-preview.png';
import img2 from './assets/images/2-removebg-preview.png';
import side1 from './assets/images/side1.png';
import side2 from './assets/images/side2.png';
import side3 from './assets/images/side3.png';
import side4 from './assets/images/side4.png';
import skyscraper from './assets/images/skyscraper box.png';
import strideBanner from './assets/images/stride_1.png';
import strideMobile from './assets/images/stride_2.png';
import ceoImage from './assets/images/ceo.png';
import handBg from './assets/images/handbg.png';
import heroBg from './assets/images/herobg.png';
import heroBgMobile from './assets/images/herobg1.png';
import meydanLogo from './assets/images/packages/mayden.png';
import spcLogo from './assets/images/packages/spc freezone.jpg';
import srtipLogo from './assets/images/packages/strip.jpg';
import rakezLogo from './assets/images/packages/rakez.jpg';
import ifzaLogo from './assets/images/packages/ifza.png';
import shamsLogo from './assets/images/packages/shams.jpg';
import meydanBg from './assets/images/packages/packages background/mayden.jpg';
import spcBg from './assets/images/packages/packages background/spc.jpg';
import srtipBg from './assets/images/packages/packages background/stripbg.jpg';
import rakezBg from './assets/images/packages/packages background/rakezbg.jpg';
import ifzaBg from './assets/images/packages/packages background/ifzabg.jpg';
import shamsBg from './assets/images/packages/packages background/shams.webp';

import serviceBusiness from './assets/images/services/business setup.jpeg';
import servicePRO from './assets/images/services/pro services.jpeg';
import serviceBank from './assets/images/services/bank acount openng.jpeg';
import serviceWeb from './assets/images/services/company website.jpeg';
import serviceAccount from './assets/images/services/account and bookeeping.jpeg';
import serviceLiquid from './assets/images/services/company liquidaion.jpeg';
import globeImg from './assets/images/globe.png';
import personbg from './assets/images/personbg.png';

import './Marquee.css';

const SIDE_IMAGES = [side1, side2, side3, side4];

// Updated Images for Wide Hero
const HERO_IMAGES = [
  { id: 1, src: img1, label: 'Model Showcase', fit: 'contain', bg: 'transparent' },
  { id: 2, src: img2, label: 'Featured Style', fit: 'contain', bg: 'transparent' },
];

const HERO_PACKAGES = [
  { name: 'SPC Freezone', price: '5,750', logo: spcLogo },
  { name: 'Meydan FZ', price: '12,500', logo: meydanLogo },
  { name: 'SRTIP', price: '5,500', logo: srtipLogo },
  { name: 'RAKEZ', price: '5,510', logo: rakezLogo },
  { name: 'IFZA', price: '7,500', logo: ifzaLogo },
  { name: 'SHAMS', price: '6,200', logo: shamsLogo },
];

const RAW_PACKAGES = [
  {
    id: 'meydan',
    name: 'Meydan FZ',
    label: 'DUBAI TO THE WORLD',
    logo: meydanLogo,
    bgImage: meydanBg,
    priceBase: 12500,
    priceVisa: 14500,
    oldPrice: null,
    features: ['100% Foreign Ownership', 'No Paid Up Capital', 'Prestigious Dubai Address', 'Fast & Easy Setup', 'Bank Account Assistance', 'Flexi Desk Included']
  },
  {
    id: 'spc',
    name: 'SPC Freezone',
    label: 'SHARJAH PUBLISHING CITY',
    logo: spcLogo,
    bgImage: spcBg,
    priceBase: 6375,
    priceVisa: 9275,
    oldPrice: 8875,
    features: ['Instant License Issuance', 'Up to 20 Visas Allocation', 'Co-working Space Access', 'Closer to Dubai Airport', 'No NOC Required', 'Multi-Year License Options']
  },
  {
    id: 'srtip',
    name: 'SRTIP Freezone',
    label: 'SHARJAH RESEARCH TECH',
    logo: srtipLogo,
    bgImage: srtipBg,
    priceBase: 5500,
    priceVisa: 7500,
    oldPrice: 6500,
    features: ['Innovation Ecosystem', '100% Tax Exemption', 'Academic & Research Access', 'Cost-Effective Setup', 'Wide Activity Range', 'Zero Paid Up Capital']
  },
  {
    id: 'rakez',
    name: 'RAKEZ',
    label: 'RAS AL KHAIMAH ZONE',
    logo: rakezLogo,
    bgImage: rakezBg,
    priceBase: 5510,
    priceVisa: 8010,
    oldPrice: null,
    features: ['Industrial & Trading Hub', 'Customizable Warehouses', 'Quick Business Setup', 'Global Market Access', 'Cost-Effective Solution', 'Business Support Services']
  },
  {
    id: 'ifza',
    name: 'IFZA',
    label: 'INTERNATIONAL FREEZONE AUTHORITY',
    logo: ifzaLogo,
    bgImage: ifzaBg,
    priceBase: 7500,
    priceVisa: 9500,
    oldPrice: null,
    features: ['100% Foreign Ownership', 'Zero Corporate Tax', 'Flexible Office Solutions', 'Fast License Processing', 'Multi-Currency Accounts', 'Strategic Dubai Location']
  },
  {
    id: 'shams Freezone',
    name: 'SHAMS Freezone',
    label: 'SHARJAH MEDIA CITY',
    logo: shamsLogo,
    bgImage: shamsBg,
    priceBase: 6200,
    priceVisa: 8700,
    oldPrice: 7500,
    features: ['Media & Creative Industries', 'Instant License Approval', 'Modern Office Spaces', 'Tax-Free Environment', 'Full Business Ownership', 'Networking Opportunities']
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('credit');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSideImageIndex, setCurrentSideImageIndex] = useState(0);
  const [freezoneVisas, setFreezoneVisas] = useState({});
  const [showVisaPrice, setShowVisaPrice] = useState(true);
  const [currentPkgIndex, setCurrentPkgIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll for logo switch
  const [selectedCv, setSelectedCv] = useState(null);
  const fileInputRef = useRef(null);

  const detailedPackages = useMemo(() => RAW_PACKAGES.map(pkg => ({
    ...pkg,
    features: [...pkg.features].sort(() => Math.random() - 0.5)
  })), []);

  // Scroll Listener for Logo Switch
  useEffect(() => {
    const caseStudiesSection = document.getElementById('business-setup');
    const handleScroll = () => {
      if (caseStudiesSection) {
        const switchPoint = caseStudiesSection.offsetTop - 80;
        setIsScrolled(window.scrollY > switchPoint);
      } else {
        // Fallback retry if element wasn't mounted initially
        const section = document.getElementById('business-setup');
        if (section) {
          const switchPoint = section.offsetTop - 80;
          setIsScrolled(window.scrollY > switchPoint);
        } else {
          setIsScrolled(window.scrollY > window.innerHeight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Package Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPkgIndex((prev) => (prev + 1) % HERO_PACKAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleVisa = (id) => {
    setFreezoneVisas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Auto-cycle between with visa and without visa prices
  useEffect(() => {
    const interval = setInterval(() => {
      setShowVisaPrice(prev => !prev);
    }, 3000); // Toggle every 3 seconds
    return () => clearInterval(interval);
  }, []);


  // Image Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Side Image Loop
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSideImageIndex((prev) => (prev + 1) % SIDE_IMAGES.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSideImageIndex]);





  // Scroll Reveal Logic
  const ceoRef = useRef(null);
  const businessRef = useRef(null);
  const bottomRowRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (bottomRowRef.current) observer.observe(bottomRowRef.current);
    if (ceoRef.current) observer.observe(ceoRef.current);
    if (businessRef.current) observer.observe(businessRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">

      {/* Navbar */}
      {/* HERO SECTION (Contained Card Version) */}
      {/* Navbar Fixed */}
      <header className="hero-inner-navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
          <picture>
            <source media="(max-width: 1024px)" srcSet={logo} />
            <img src={logoHero} alt="Stride" style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
          </picture>
        </div>

        {/* Centered Links */}
        <nav className="navbar-links-center">
          <a href="#business-setup" style={{ color: '#0F172A' }}>About Us</a>
          <a href="#services" style={{ color: '#0F172A' }}>Services</a>
          <a href="#packages" style={{ color: '#0F172A' }}>Packages</a>
          <a href="#contact" style={{ color: '#0F172A' }}>Contact Us</a>
        </nav>

        {/* Right Action */}
        <div className="navbar-right-action">
          <a href="#contact" className="btn-nav-blue" style={{ textDecoration: 'none' }}>
            Book an Appointment
          </a>
          <button className="navbar-mobile-toggle-dark" onClick={() => setMobileMenuOpen(true)}>
            <span style={{ color: '#0F172A', fontSize: '1.5rem' }}>☰</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#FFFFFF', zIndex: 9999, display: 'flex', flexDirection: 'column',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <img src={logoHero} alt="Stride" style={{ width: '120px' }} />
            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '2.5rem', color: '#0F172A', cursor: 'pointer', lineHeight: 1 }}>×</button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', fontWeight: '600' }}>
            <a href="#business-setup" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>Services</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>Packages</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>Contact Us</a>
          </nav>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: 'auto', background: '#0052CC', color: 'white', padding: '1rem', textAlign: 'center', borderRadius: '50px', textDecoration: 'none', fontWeight: '600' }}>
            Book an Appointment
          </a>
        </div>
      )}

      <div style={{ paddingTop: '0' }}>
        {/* We use CSS variables to pass the imported image paths to our CSS stylesheet where the media queries handle swapping them */}
        <section id="home" className="smart-section-container" ref={bottomRowRef} style={{ '--desktop-bg': `url(${heroBg})`, '--mobile-bg': `url(${heroBgMobile})` }}>
          <div className="smart-bg-stripes"></div>
          <div className="smart-blur-glow" style={{ top: '-10%', left: '20%' }}></div>
          <div className="smart-blur-glow" style={{ bottom: '-10%', right: '20%', background: '#4F46E5', opacity: 0.15 }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="smart-header-content">
              <br>
              </br>
              <br />
              <h2 className="smart-main-title" style={{ color: '#FFFFFF' }}>
                Grow Your Business <br />
                <span style={{ color: '#0052CC', fontWeight: '800' }}>With Stride</span>
              </h2>
              <button className="btn-smart-primary">
                Book a Free Consultation <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
            </div>

            <div className="smart-visual-grid">


              {/* Center Card: App Interface */}



              {/* Right Card: Deal */}


            </div>

          </div>
        </section>

        {/* SERVICES REDESIGN (Stats & Testimonial) */}
        <section id="business-setup" className="container business-modern-section" style={{ margin: '6rem auto' }}>

          <div className="business-modern-grid" ref={businessRef}>

            {/* Left Heading - order 1 on mobile */}
            <div className="business-heading-area">
              <span style={{
                display: 'inline-block',
                background: '#E0F2FE',
                color: '#0052CC',
                padding: '8px 16px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '0.9rem',
                marginBottom: '1.5rem'
              }}>
                Premier Consultancy
              </span>

              <h2 className="business-setup-title" style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
                Stride Business Setup L.L.C
              </h2>
            </div>

            {/* Right Card - order 2 on mobile */}
            <div className="business-image-wrapper">
              {/* Image */}
              <img src={skyscraper} alt="Business Setup" className="business-main-img" />

              {/* Floating Badge */}
              <div className="experience-badge">
                <span className="exp-years">16+</span>
                <span className="exp-label">Years of<br />Excellence</span>
              </div>

              {/* Floating Rating Badge (Top Right) */}
              <div className="rating-badge">
                <span style={{ fontSize: '1.5rem', color: '#FFD700' }}>★</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0F172A' }}>Top Rated</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Trust &amp; Quality</div>
                </div>
              </div>
            </div>

            {/* Left Body - order 3 on mobile */}
            <div className="business-body-area">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="business-setup-desc" style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6, fontFamily: 'var(--font-main)' }}>
                  We are a leading business consultancy firm specializing in company formation and comprehensive corporate services. With over 16 years of industry expertise, our team delivers strategic guidance and end-to-end support for entrepreneurs and enterprises across the UAE, GCC, and India.
                </p>

                <p className="business-setup-desc" style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6, fontFamily: 'var(--font-main)' }}>
                  We simplify the complexities of business setup through personalized solutions, regulatory expertise, and practical insights tailored to each client's goals. Our commitment is to build long-term partnerships by ensuring efficiency, compliance, and sustainable growth at every stage of your business journey.
                </p>

                <a href="#contact" className="business-cta-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Get Expert Advisory Support <span style={{ marginLeft: '8px' }}>→</span>
                </a>
              </div>
            </div>

          </div>
        </section>
        <section className='newmodel' style={{ position: 'relative', marginTop: '-2rem', zIndex: 5 }}>
          <div className="container">
            <div className="hero-bottom-row visible">

              {/* Side Image Transition with Floating Boxes */}
              <div className="hero-visual-container">
                <div className="hero-image-frame">
                  {SIDE_IMAGES.map((img, index) => {
                    const links = ['#services', '#business-setup', '#packages', '#contact'];
                    return (
                      <a
                        key={index}
                        href={links[index]}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: currentSideImageIndex === index ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          borderRadius: '24px',
                          pointerEvents: currentSideImageIndex === index ? 'auto' : 'none',
                          zIndex: currentSideImageIndex === index ? 2 : 1,
                          display: 'block'
                        }}
                      >
                        <img
                          src={img}
                          alt="Side Visual"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '24px'
                          }}
                        />
                      </a>
                    )
                  })}

                  {/* Floating Glass Boxes */}
                  <div className="floating-glass-box" style={{ top: '10%', left: '-10%' }}>
                    <Rocket size={18} color="#0052CC" />
                    <span>Fast Setup</span>
                  </div>
                  <div className="floating-glass-box" style={{ top: '40%', right: '-10%' }}>
                    <BriefcaseBusiness size={18} color="#0052CC" />
                    <span>100% Ownership</span>
                  </div>
                  <div className="floating-glass-box" style={{ bottom: '15%', left: '-5%' }}>
                    <Globe size={18} color="#0052CC" />
                    <span>Global Reach</span>
                  </div>
                </div>
              </div>

              {/* Schedule & Vision Section */}
              <div className="schedule-section">
                <div className="schedule-section-grid">

                  {/* Card 1: Wide (Vision) */}
                  <div className="hero-bento-card span-large wide" style={{ position: 'relative', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white' }}>
                    <div className="bento-card-content">
                      <div className="bento-icon-circle" style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Target size={24} color="#e2e8f0" /></div>
                      <div>
                        <div className="bento-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Vision</div>
                        <div className="bento-subtitle" style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#e2e8f0' }}>
                          Our Vision is to be the leading business setup consultancy in the GCC, empowering entrepreneurs with seamless business solutions that foster growth and success.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Narrow (Freezone Setup) */}
                  <div className="hero-bento-card span-small light narrow">
                    <div className="bento-card-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="bento-icon-circle" style={{ background: '#e2e8f0', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sparkles size={24} /></div>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0052CC' }}>100%</span>
                      </div>
                      <div>
                        <div className="bento-title" style={{ fontSize: '1rem' }}>Freezone Setup</div>
                        <div className="bento-subtitle">
                          Tax benefits, 100% foreign ownership, and minimal restrictions.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Narrow (Schedule / Planning) */}
                  {/* Card 3: Narrow (Mainland Setup) */}
                  <div className="hero-bento-card span-small accent narrow">
                    <div className="bento-card-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Mainland</span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Building2 size={16} color="white" /></span>
                      </div>
                      <div style={{ marginTop: 'auto' }}>
                        <div className="bento-title" style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Mainland Setup</div>
                        <div className="bento-subtitle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', lineHeight: 1.3 }}>
                          Full ownership solutions with complete market access and legal support.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Wide (Global Reach) */}
                  <div className="hero-bento-card span-large wide light" style={{ backgroundImage: `url(${globeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(241,245,249,0.9), rgba(241,245,249,0.4))', zIndex: 1 }}></div>
                    <div className="bento-card-content" style={{ position: 'relative', zIndex: 2 }}>
                      <div className="bento-icon-circle" style={{ background: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={24} color="#0052CC" /></div>
                      <div>
                        <div className="bento-title" style={{ color: '#0F172A' }}>Global Reach</div>
                        <div className="bento-subtitle" style={{ color: '#475569' }}>
                          Connecting businesses across UAE, GCC, and India.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        {/* hand section / Cost Calculator */}
        <section className="cost-calculator-section">
          {/* Background Image */}
          <img
            src={handBg}
            alt="Hand Background"
            className="cost-calculator-bg-img"
          />

          <div className="container">
            <div className="cost-calculator-grid">
              {/* Left Column */}
              <div className="cost-calculator-left">
                <h2 className="cost-calc-title">
                  Plan Your Business<br />
                  With Confidence<br />
                  <br />
                  <span style={{ color: '#94A3B8' }}>Empowering Entrepreneurs</span>
                </h2>


              </div>

              {/* Center Column - Spacer */}
              <div></div>

              {/* Right Column */}
              <div className="cost-calculator-right">



                <p className="cost-calc-desc">
                  Get a clear estimate of your business setup costs across the UAE, GCC, and India. Plan confidently with accurate and transparent insights.                </p>
                <button className="btn btn-dark-pill cost-calc-btn">
                  contact now<span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        < section id="ceo" className="container" style={{ paddingTop: '40px' }}>




          <div className="service-content fade-in">
            <div>
              <span className="ceo-label">Managing Director & Co-Founder</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Fasal Rahman
              </h3>
              <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                With over 16 years of experience in the business setup industry, Fasal Rahman brings strategic insight, regulatory expertise, and decisive leadership to STRIDE BUSINESS SETUP LLC. His approach is rooted in precision, transparency, and delivering practical solutions tailored to each client’s goals.
                <br />

                Under his direction, STRIDE has supported entrepreneurs and enterprises through complex processes with clarity and efficiency. He leads with a forward-focused vision, ensuring every client benefits from reliable execution and long-term business stability.
              </p>
            </div>
            <div style={{ height: '450px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={ceoImage} alt="Fasal Rahman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </section >

        <br />
        <br />
        <br />


        {/* NEW EXTENDED SERVICES SECTION */}
        < section id="services" className="container" style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Our Services</h2>
            <p className="text-muted">Comprehensive business solutions tailored for your success.</p>
          </div>

          <div className="services-modern-grid">
            {[
              {
                title: "Business Setup",
                desc: "Mainland, Freezone, Offshore, India, GCC. We handle all registration and licensing requirements.",
                image: serviceBusiness
              },
              {
                title: "PRO Services",
                desc: "Expert assistance with documentation, visa services, and government liaison.",
                image: servicePRO
              },
              {
                title: "Bank Account Opening",
                desc: "End-to-end support for opening corporate and personal accounts with leading banks.",
                image: serviceBank
              },
              {
                title: "Company Website Development",
                desc: "Professional website creation to enhance your digital presence.",
                image: serviceWeb
              },
              {
                title: "Accounting & Bookkeeping",
                desc: "Full-service compliance, financial reporting, and auditing solutions.",
                image: serviceAccount
              },
              {
                title: "Company Liquidation",
                desc: "Comprehensive support for closing businesses while ensuring full regulatory compliance.",
                image: serviceLiquid
              }
            ].map((service, index) => (
              <div key={index} className="service-modern-card">
                <div className="service-modern-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-modern-content">
                  <h3 className="service-modern-title">{service.title}</h3>
                  <p className="service-modern-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section >



        {/* FREEZONE PACKAGES SECTION (NEW) */}
        < section id="packages" className="freezone-section" >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Packages</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Secure your business license in UAE's top free zones with exclusive pricing and benefits.
              </p>
            </div>

            <div className="freezone-grid">
              {detailedPackages.map((pkg) => (
                <div key={pkg.id} className="freezone-card">
                  {/* Left Side */}
                  <div className="freezone-left" style={{
                    backgroundImage: `url(${pkg.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 255, 255, 0.5)',
                      zIndex: 0
                    }}></div>
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%'
                    }}>
                      <div className="freezone-logo-box">
                        <img src={pkg.logo} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div className="freezone-title">{pkg.name}</div>
                      <div className="freezone-label">{pkg.label}</div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="freezone-right">
                    <div className="freezone-header">
                      <div className="freezone-price-box" style={{ width: '100%', minHeight: '120px' }}>
                        <div key={showVisaPrice ? 'visa' : 'base'} className="price-fade-anim">
                          <div style={{
                            display: 'inline-block',
                            background: showVisaPrice ? '#E0F2FE' : '#F1F5F9',
                            color: showVisaPrice ? '#0052CC' : '#64748B',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                          }}>
                            {showVisaPrice ? 'With Visa' : 'Without Visa'}
                          </div>
                          <br />
                          <span className="freezone-price-label">Starting from</span>
                          <div className="freezone-price">
                            AED {(showVisaPrice ? pkg.priceVisa : pkg.priceBase).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="freezone-features">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="freezone-feature-item">
                          <div className="freezone-icon-check">✓</div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* TESTIMONIAL MARQUEE */}
        < div className="marquee-section" >
          <div className="marquee-container">
            <div className="marquee-track">
              {/* Cards */}
              {[
                {
                  text: "STRIDE simplified what seemed complicated. Their professionalism and steady guidance helped us establish our company with confidence and peace of mind.",
                  name: "AHMAD SEYER",
                  role: "OWNER, AL JAF PROJECT MANAGEMENT"

                },
                {
                  text: "Stride transformed our business operations with their customized strategies. Their team identified key areas for improvement and provided actionable solutions.",
                  name: "MUHAMMED FARHAN KARIM",
                  role: "WARDAT AL KAREEM TECHNICAL NOVATIONS"
                },
                {
                  text: "The leadership training provided by Stride has been invaluable. Our team is now more cohesive and motivated, driving the company forward with renewed energy.",
                  name: "LISA NGUYEN",
                  role: "COO OF HEALTHYBITES INC."
                },
                {
                  text: "Exceptional service from start to finish. The team at Stride truly understands the intricacies of business setup in the GCC. They handled everything with precision.",
                  name: "DAVID CHEN",
                  role: "DIRECTOR AT GLOBAL VENTURES"
                },
                // Duplicates for seamless loop
                {
                  text: "Working with Stride was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities.",
                  name: "MICHAEL THOMPSON",
                  role: "FOUNDER OF ECOGREEN SOLUTIONS"
                },
                {
                  text: "Stride transformed our business operations with their customized strategies. Their team identified key areas for improvement and provided actionable solutions.",
                  name: "EMMA RODRIGUEZ",
                  role: "CEO OF TRENDTECH INNOVATIONS"
                },
                {
                  text: "The leadership training provided by Stride has been invaluable. Our team is now more cohesive and motivated, driving the company forward with renewed energy.",
                  name: "LISA NGUYEN",
                  role: "COO OF HEALTHYBITES INC."
                },
                {
                  text: "Exceptional service from start to finish. The team at Stride truly understands the intricacies of business setup in the GCC. They handled everything with precision.",
                  name: "DAVID CHEN",
                  role: "DIRECTOR AT GLOBAL VENTURES"
                }
              ].map((item, i) => (
                <div key={i} className="testimonial-card-marquee">
                  <div style={{ fontSize: '3rem', color: '#0052CC', lineHeight: 1, marginBottom: '1rem' }}>"</div>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-author">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div >

        {/* FINANCIAL PRODUCTS (Tabs) */}


        {/* FEATURES GRID / RESOURCES */}
        <section id="resources" className="resources-section">
          {/* Background Image */}
          <div className="resources-bg-wrapper">
            <img src={globeImg} alt="Global Network" className="resources-bg-img" />
            <div className="resources-overlay"></div>
          </div>

          <div className="container resources-content">
            <h2 className="resources-title">
              Empowering Your  <br /><span className="text-highlight-blue">Business Journey</span>
            </h2>
            <br />
            <p className="resources-desc" style={{ fontFamily: 'var(--font-main)' }}>
              We simplify company formation and corporate services across UAE, GCC, and India with expertise, efficiency, and integrity.
            </p>
            <br />
            {/* Additional Element: Stats Row */}
            <div className="resources-stats">
              <div className="stat-item">
                <span className="stat-number">16+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">990</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">420</span>
                <span className="stat-label">Consulting Solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES (PRICING) */}
        < section id="pricing" className="container" >

        </section >

        {/* CONTACT SECTION */}
        < section id="contact" className="container" >
          <div className="contact-wrapper">
            <div className="contact-grid">
              <div>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Build the Future</h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
                  Kickstart your entrepreneurial journey with Stride Bound Business Setup Services LLC.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Mail size={24} color="#0052CC" />
                    <span>ccontact@stride.consulting</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Phone size={24} color="#0052CC" />
                    <span>+1 (800) 555-0123</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Building2 size={24} color="#0052CC" />
                    <span>101 Stride Tower, New York, NY</span>
                  </div>
                </div>
              </div>
              <form action="mailto:ccontact@stride.consulting" method="POST" encType="multipart/form-data">
                <input type="text" name="Name" className="form-input" placeholder="Your Name" required />
                <input type="email" name="Email" className="form-input" placeholder="Email Address" required />
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94A3B8', fontSize: '0.9rem' }}>Add CV (Optional)</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="file"
                      name="CV"
                      className="form-input"
                      style={{ padding: '0.8rem', margin: 0, flex: 1 }}
                      accept=".pdf,.doc,.docx"
                      ref={fileInputRef}
                      onChange={(e) => setSelectedCv(e.target.files[0])}
                    />
                    {selectedCv && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCv(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        style={{
                          background: 'rgba(239, 68, 68, 0.2)',
                          color: '#F87171',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          borderRadius: '6px',
                          padding: '0.8rem 1rem',
                          cursor: 'pointer',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
                <textarea name="Message" className="form-input" rows="4" placeholder="Enter your message" required></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </section >

        {/* SOCIAL IMPACT / FOOTER */}
        {/* PREMIUM FOOTER */}
        <footer className="premium-footer">
          <div className="container">
            {/* Top Section: Slogan & Newsletter */}
            <div className="footer-top">
              <div className="footer-slogan">
                <h2>Partnering for your <br /> Business Success.</h2>
              </div>
              <div className="footer-newsletter-wrapper">
                <p style={{ marginBottom: '1rem', fontWeight: '500' }}>Get In Touch!</p>
                <form className="footer-newsletter-pill" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>

            <div className="footer-divider-line"></div>

            {/* Main Grid */}
            <div className="footer-grid-new">
              {/* Col 1: Contact Information */}
              <div className="footer-col-new">
                <h4>CONTACT INFORMATION</h4>
                <div className="contact-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Mail size={16} />
                  <span>contact@stride.consulting</span>
                </div>
                <div className="contact-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Phone size={16} />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="contact-row" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <MapPin size={16} />
                  <span>101 Stride Tower, Dubai</span>
                </div>
              </div>

              {/* Col 2: Company */}
              <div className="footer-col-new">
                <h4>COMPANY</h4>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Packages</a>
                <a href="#">Contact Us</a>
              </div>

              {/* Col 3: Services */}
              <div className="footer-col-new">
                <h4>SERVICES</h4>
                <a href="#services">Business Setup</a>
                <a href="#services">PRO Services</a>
                <a href="#services">Bank Account Opening</a>
                <a href="#services">Company Website Development</a>
                <a href="#services">Accounting & Bookkeeping</a>
                <a href="#services">Company Liquidation</a>
              </div>

              {/* Col 4: Follow Us */}
              <div className="footer-col-new">
                <h4>FOLLOW US</h4>
                <div className="social-icons-row">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom-new">
              <div className="footer-divider-line" style={{ margin: '2rem 0' }}></div>
              <p>© 2026 Stride Business Setup. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div >
    </div >
  );
}

export default App;


