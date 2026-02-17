import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './CostCalculator.css';
import logo from './assets/images/logo.png';
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
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
const modelUrl = '/Untitled.glb';
import './Marquee.css';

const SIDE_IMAGES = [side1, side2, side3, side4];

// Updated Images for Wide Hero
const HERO_IMAGES = [
  { id: 1, src: img1, label: 'Model Showcase', fit: 'contain', bg: 'transparent' },
  { id: 2, src: img2, label: 'Featured Style', fit: 'contain', bg: 'transparent' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('credit');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSideImageIndex, setCurrentSideImageIndex] = useState(0);
  const [freezoneVisas, setFreezoneVisas] = useState({});
  const [showVisaPrice, setShowVisaPrice] = useState(true);

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
      <section id="home" className="hero-section-outer">
        <div style={{ width: '100%', padding: 0 }}>

          <div className="hero-contained-card">

            {/* Navbar Inside Card */}
            <header className="hero-inner-navbar">

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="Stride" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                <span style={{
                  fontFamily: "'Lexend', sans-serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em',
                  color: '#0F172A', lineHeight: 1
                }}>stride</span>
              </div>

              {/* Centered Links */}
              <nav className="navbar-links-center">
                <a href="#case-studies">Services</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact Us</a>
              </nav>

              {/* Right Action */}
              <div className="navbar-right-action">
                <a href="tel:+18005550123" className="btn-nav-outline">
                  (800) 555-0123
                </a>
                <button className="navbar-mobile-toggle-dark" onClick={() => setMobileMenuOpen(true)}>
                  <span style={{ color: '#0F172A', fontSize: '1.5rem' }}>☰</span>
                </button>
              </div>
            </header>

            {/* Hero Content Grid */}
            <div className="hero-inner-grid">
              {/* Left Content */}
              <div className="hero-text-content">
                <h1 className="hero-main-headline">
                  <span className="text-highlight-blue">Grow Your Business</span><br />
                  <span className="text-dark-main">with Stride</span>
                </h1>
                <p className="hero-sub-text">
                  Guiding Your Success Journey Through Expertise and Innovation
                </p>

                {/* New CTA Group */}
                <div className="hero-cta-group">
                  <div className="hero-input-wrapper">
                    <span className="input-icon">✉</span>
                    <input type="email" placeholder="Enter your email to get started" className="hero-email-input" />
                    <button className="btn-hero-submit">
                      GET STARTED <span className="arrow-icon">↗</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="hero-visual-side">
                {/* Spacer for Grid Layout */}
                <div style={{ width: '100%', height: '450px' }}></div>

                {/* Floating Overlay 3D Model */}
                <div style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '140%',
                  height: '140%',
                  zIndex: 50,
                  pointerEvents: 'none'
                }}>
                  <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
                  >
                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <Model />
                    <ModelInteraction />
                    <Environment preset="city" />
                  </Canvas>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div style={{ paddingTop: '0' }}>
        <section style={{ position: 'relative' }}>
          <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 1 }}>

            {/* Bottom Row: Model + Schedule Section */}
            <div className="hero-bottom-row" ref={bottomRowRef}>
              {/* Model Section */}
              <div className="hero-visual-container">
                <div className="hero-image-frame" style={{ overflow: 'visible', background: 'transparent', boxShadow: 'none', border: 'none', borderRadius: 0 }}>
                  <div style={{ width: '95%', position: 'relative', perspective: '1000px', transform: 'translateY(50px)' }}>
                    <>
                      {SIDE_IMAGES.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt="Strategic Growth"
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            position: index === 0 ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentSideImageIndex === index ? 1 : 0,
                            transform: `rotateY(${currentSideImageIndex === index ? 0 : 90}deg)`,
                            transition: 'transform 0.25s ease-in-out, opacity 0.25s ease-in-out',
                            pointerEvents: 'none',
                            backfaceVisibility: 'hidden',
                            transformOrigin: 'center'
                          }}
                        />
                      ))}
                    </>

                    {/* Floating Service Boxes */}
                    {[
                      { text: 'Business Setup', icon: '🏢', top: '15%', left: '-5%', delay: '0s' },
                      { text: 'Visa Services', icon: '📄', top: '30%', right: '-10%', delay: '2s' },
                      { text: 'License Setup', icon: '🪪', top: '45%', left: '-12%', delay: '4s' },
                      { text: 'Tax Optimizations', icon: '📊', top: '60%', right: '-4%', delay: '1s' },
                      { text: 'GCC Expansion', icon: '🌍', top: '75%', left: '0%', delay: '3s' }
                    ].map((box, i) => (
                      <div
                        key={i}
                        className="floating-glass-box"
                        style={{
                          top: box.top,
                          left: box.left ? box.left : 'auto',
                          right: box.right ? box.right : 'auto',
                          animationDelay: box.delay
                        }}
                      >
                        <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>{box.icon}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e3a8a' }}>{box.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule / Chat Section */}
              <div className="schedule-section">
                <div className="schedule-content-grid">
                  {/* Left Column: Heading + Chat Card */}
                  {/* Left Column: Mission */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
                    {[
                      {
                        title: "Mission",
                        text: "Empowering businesses with strategic insights.",
                        bg: "#020B1D"
                      },
                      {
                        title: "Strategy",
                        text: "Seamless setup solutions for global growth.",
                        bg: "#020B1D"
                      },
                      {
                        title: "Excellence",
                        text: "Operational excellence to thrive clearly.",
                        bg: "#020B1D"
                      }
                    ].map((item, i) => (
                      <div key={i} className="schedule-card" style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '1.5rem',
                        background: item.bg,
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '24px', // Explicit radius for smoothness
                        minHeight: 'auto', // Override CSS min-height
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                        color: '#FFFFFF',
                        overflow: 'hidden', // Clip backdrop filter edges
                        backgroundClip: 'padding-box'
                      }}>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                            {item.title}
                          </h4>
                          <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Flipping Vision/Values */}
                  <div className="schedule-card" style={{ padding: 0, border: 'none', background: 'transparent', minHeight: '300px' }}>
                    <div className="flip-card-container">
                      <div className="flip-card-inner">
                        {/* Front Side */}
                        <div className="flip-card-front" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'white' }}>Vision</h3>
                          <p style={{ fontSize: '0.8rem', lineHeight: 1.4, letterSpacing: '0.3px', margin: 0, fontFamily: 'var(--font-main)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Our Vision is to be the leading business setup consultancy in the GCC, empowering entrepreneurs with seamless business solutions that foster growth and success.
                          </p>
                        </div>
                        {/* Back Side */}
                        <div className="flip-card-back" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>Approach</h3>
                          <p style={{ fontSize: '0.8rem', lineHeight: 1.4, letterSpacing: '0.3px', margin: 0, fontFamily: 'var(--font-main)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            We combine deep local expertise with global standards to deliver tailored strategies. We prioritize transparency, efficiency, and long-term partnership in every engagement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Sparkle Left */}
            <div style={{ position: 'absolute', left: '0', top: '50%', fontSize: '3rem', color: '#1a1a1a', opacity: 0.1 }}>âœ§</div>

          </div>
        </section >

        {/* SERVICES REDESIGN (Stats & Testimonial) */}
        <section id="case-studies" className="container business-modern-section" style={{ margin: '6rem auto' }}>
          <div className="business-modern-grid" ref={businessRef}>

            {/* Left Content */}
            <div className="animate-text-group">
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

              <h2 className="business-setup-title" style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '1.5rem' }}>
                Stride Business Setup L.L.C
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="business-setup-desc" style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6, fontFamily: 'var(--font-main)' }}>
                  We are a leading business consultancy firm specializing in company formation and comprehensive corporate services. With over 16 years of industry expertise, our team delivers strategic guidance and end-to-end support for entrepreneurs and enterprises across the UAE, GCC, and India.
                </p>

                <p className="business-setup-desc" style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6, fontFamily: 'var(--font-main)' }}>
                  We simplify the complexities of business setup through personalized solutions, regulatory expertise, and practical insights tailored to each client’s goals. Our commitment is to build long-term partnerships by ensuring efficiency, compliance, and sustainable growth at every stage of your business journey.
                </p>


                {/* Features List */}


                <a href="#contact" className="business-cta-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Get Expert Advisory Support <span style={{ marginLeft: '8px' }}>→</span>
                </a>
              </div>
            </div>

            {/* Right Card */}
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
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Trust & Quality</div>
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
        < section id="products" className="container" style={{ paddingTop: '40px' }}>




          <div className="service-content fade-in">
            <div>
              <span className="ceo-label">Managing Director & Co-Founder</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Fasal Rahman
              </h3>
              <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                With 16 years of experience in the business setup
                industry, Fasal leads the company with a vision for
                excellence and integrity. His message: "At STRIDE
                BUSINESS SETUP LLC, we are committed to
                empowering entrepreneurs with the tools and
                guidance needed for sustainable success. We believe
                in providing not just solutions but partnerships built
                on trust, transparency, and a genuine interest in the
                long-term growth of our clients. Every decision we
                make is aimed at ensuring our clients receive
                exceptional service and unwavering support.
              </p>
            </div>
            <div style={{ height: '450px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={ceoImage} alt="Fasal Rahman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </section >

        {/* Full Width Banner */}
        < div style={{ width: '100%', overflow: 'hidden', marginTop: '4rem', marginBottom: '4rem' }}>
          <picture>
            <source media="(max-width: 767px)" srcSet={strideMobile} />
            <img src={strideBanner} alt="Stride Banner" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </picture>
        </div >


        {/* NEW EXTENDED SERVICES SECTION */}
        < section className="container" style={{ marginBottom: '6rem' }}>
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

        {/* FREEZONE PACKAGES SECTION (NEW) */}
        < section className="freezone-section" >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Packages</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Secure your business license in UAE's top free zones with exclusive pricing and benefits.
              </p>
            </div>

            <div className="freezone-grid">
              {[
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
                  priceVisa: 9275, // Sample visa price
                  oldPrice: 8875,
                  features: ['Instant License Issuance', 'Up to 20 Visas Allocation', 'Co-working Space Access', 'Closer to Dubai Airport', 'No NOC Required', 'Multi-Year License Options']
                },
                {
                  id: 'srtip',
                  name: 'SRTIP',
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
                  id: 'shams',
                  name: 'SHAMS Freezone',
                  label: 'SHARJAH MEDIA CITY',
                  logo: shamsLogo,
                  bgImage: shamsBg,
                  priceBase: 6200,
                  priceVisa: 8700,
                  oldPrice: 7500,
                  features: ['Media & Creative Industries', 'Instant License Approval', 'Modern Office Spaces', 'Tax-Free Environment', 'Full Business Ownership', 'Networking Opportunities']
                }
              ].map((pkg) => (
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
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Build the Future</h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
                  Kickstart your entrepreneurial journey with Stride Bound Business Setup Services LLC.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', color: '#0052CC' }}>📧</span>
                    <span>ccontact@stride.consulting</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', color: '#0052CC' }}>☎️</span>
                    <span>+1 (800) 555-0123</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', color: '#0052CC' }}>🏢</span>
                    <span>101 Stride Tower, New York, NY</span>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="form-input" placeholder="Your Name" />
                <input type="email" className="form-input" placeholder="Email Address" />
                <input type="text" className="form-input" placeholder="Company Name" />
                <textarea className="form-input" rows="4" placeholder="How can we help?"></textarea>
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
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>

            <div className="footer-divider-line"></div>

            {/* Main Grid */}
            <div className="footer-grid-new">
              {/* Col 1: Contact Information */}
              <div className="footer-col-new">
                <h4>CONTACT INFORMATION</h4>
                <div className="contact-row">
                  <span className="icon">📧</span>
                  <span>contact@stride.consulting</span>
                </div>
                <div className="contact-row">
                  <span className="icon">📞</span>
                  <span>+971 4 123 4567</span>
                </div>
                <div className="contact-row">
                  <span className="icon">📍</span>
                  <span>101 Stride Tower, Dubai</span>
                </div>
              </div>

              {/* Col 2: Company */}
              <div className="footer-col-new">
                <h4>COMPANY</h4>
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Blog & Insights</a>
              </div>

              {/* Col 3: Services */}
              <div className="footer-col-new">
                <h4>SERVICES</h4>
                <a href="#">Business Setup</a>
                <a href="#">PRO Services</a>
                <a href="#">Bank Account Opening</a>
                <a href="#">Tax & Accounting</a>
              </div>

              {/* Col 4: Follow Us */}
              <div className="footer-col-new">
                <h4>FOLLOW US</h4>
                <div className="social-icons-row">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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

function Model() {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={3.5} position={[0, -1, 0]} />;
}
useGLTF.preload(modelUrl);

function ModelInteraction() {
  const controlsRef = useRef();
  const timeoutRef = useRef(null);
  const isCorrecting = useRef(false);
  const startCorrectionTime = useRef(0);
  const startPolarAngle = useRef(0);

  const handleStart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    isCorrecting.current = false;
    // Reset limits to allow full movement during interaction
    if (controlsRef.current) {
      controlsRef.current.minPolarAngle = 0;
      controlsRef.current.maxPolarAngle = Math.PI;
    }
  };

  const handleEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!controlsRef.current) return;

      const currentPolar = controlsRef.current.getPolarAngle();
      // Target is PI/2 (90 degrees). Check if correction is needed.
      // We correct if it's deviated by more than 0.1 radians (~5 degrees).
      if (Math.abs(currentPolar - Math.PI / 2) > 0.1) {
        startCorrectionTime.current = Date.now();
        startPolarAngle.current = currentPolar;
        isCorrecting.current = true;
      }
    }, 3000); // 3 seconds of inactivity
  };

  useFrame(() => {
    if (isCorrecting.current && controlsRef.current) {
      const now = Date.now();
      const duration = 2500; // 2.5 seconds for slow, smooth correction
      const elapsed = now - startCorrectionTime.current;

      if (elapsed >= duration) {
        // Snap to exact value at the end
        controlsRef.current.minPolarAngle = Math.PI / 2;
        controlsRef.current.maxPolarAngle = Math.PI / 2;
        isCorrecting.current = false;
      } else {
        const t = elapsed / duration;
        // Ease-in-out cubic interpolation
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const target = Math.PI / 2;
        const current = startPolarAngle.current + (target - startPolarAngle.current) * ease;

        // Apply correction by constraining the angle
        controlsRef.current.minPolarAngle = current;
        controlsRef.current.maxPolarAngle = current;
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      onStart={handleStart}
      onEnd={handleEnd}
      enableZoom={false}
      enablePan={false}
      enableDamping={true}
      dampingFactor={0.05}
      autoRotate={true}
      autoRotateSpeed={2.0}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  );
}
