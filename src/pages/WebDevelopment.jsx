import React from 'react';
import SEOLayout from '../components/SEOLayout';

export default function WebDevelopment() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Company Website Development",
    "provider": {
      "@type": "ConsultingBusiness",
      "name": "Stride Business Setup"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "description": "Professional corporate website development and ecommerce solutions in Dubai. Launch your digital presence alongside your business setup."
  };

  return (
    <SEOLayout
      title="Company Website Development Dubai | Digital Presence UAE"
      description="Launch your digital storefront with professional company website development in Dubai. Stride provides corporate web design and e-commerce solutions in the UAE."
      keywords="company website development Dubai, corporate web design UAE, ecommerce site Dubai, digital presence business setup, web development agency Dubai"
      currentUrl="https://www.stridesetups.com/company-website-development-dubai"
      structuredData={serviceSchema}
    >
      <div style={{ background: '#0F172A', padding: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</a>
      </div>
      
      <main className="container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-main)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', color: '#0052CC', marginBottom: '20px' }}>Premium Company Website Development in Dubai</h1>
        
        <section>
          <p>
            In the modern business ecosystem, a trade license gives you the legal right to operate, but a digital presence gives you the ability to thrive. Our <strong>Company Website Development in Dubai</strong> is tailored specifically for newly established corporations and startups looking to immediately capture market share across the UAE and beyond.
          </p>
          <p>
            At Stride Business Setup, we believe that your incorporation process should run parallel to your digital launch. You don't need to spend weeks sourcing external agencies after your license is issued. Our in-house tech team builds highly optimized, responsive, and conversion-focused websites ready to represent your brand on day one.
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>Our Web Development Solutions</h2>
          <p>
            We don't just build websites; we engineer digital assets. Our solutions cater to a variety of industries ranging from B2B services to dynamic retail ecommerce platforms.
          </p>
          <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
            <li><strong>Corporate Portfolios:</strong> High-end, multi-page websites designed to establish authority and trust. Perfect for consultancies, real estate brokers, and B2B enterprises.</li>
            <li><strong>Ecommerce Platforms:</strong> Fully integrated online stores utilizing modern frameworks (Shopify, WooCommerce, React/Next.js) equipped with UAE payment gateway integration (Stripe, PayFort).</li>
            <li><strong>Custom Web Applications:</strong> Tailored portals for customer management, booking systems, or SaaS products designed specifically for your unique operational workflow.</li>
            <li><strong>Responsive UI/UX Design:</strong> Flawless rendering on mobile phones, tablets, and massive desktop displays to ensure your audience faces zero friction.</li>
            <li><strong>SEO & Performance Focus:</strong> We build with clean code, lightning-fast load times, and on-page SEO best practices out of the box, pushing your site to the top of Google from the moment you launch.</li>
          </ul>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>The Advantage of the "Digital Package"</h2>
          <p>
            Merging your corporate incorporation with digital development creates immense operational synergy:
          </p>
          <ol style={{ marginLeft: '20px' }}>
            <li><strong>Time Efficiency:</strong> While your trade license is pending government approval, we design, develop, and test your website. By the time your corporate bank account is ready, you're ready to accept payments online.</li>
            <li><strong>Domain & Hosting Registration:</strong> We handle the complexities of registering local .ae domains through the TRA (Telecommunications Regulatory Authority) via approved registrars.</li>
            <li><strong>Brand Consistency:</strong> Creating your logo, corporate identity, business cards, and website simultaneously ensures absolute visual consistency everywhere your company is seen.</li>
            <li><strong>Technical Support:</strong> Ongoing retainer packages for maintenance, security updates, and daily backups mean you never have to worry about crashing servers.</li>
          </ol>
        </section>

        <section style={{ marginTop: '40px', background: '#F1F5F9', padding: '30px', borderRadius: '12px' }}>
           <h2 style={{ fontSize: '2rem', color: '#0F172A', textAlign: 'center' }}>Establish Your Digital Dominance</h2>
           <p style={{ textAlign: 'center' }}>
             Ready to make a massive impact in the UAE market? Let our designers and engineers craft a digital storefront that converts visitors into dedicated clients.
           </p>
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <a href="tel:+971501072044" style={{ background: '#0052CC', color: '#fff', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Discuss Your Web Project</a>
           </div>
        </section>
      </main>
    </SEOLayout>
  );
}
