import React from 'react';
import SEOLayout from '../components/SEOLayout';

export default function Accounting() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Accounting and Bookkeeping",
    "provider": {
      "@type": "ConsultingBusiness",
      "name": "Stride Business Setup"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "description": "Professional accounting, bookkeeping, VAT registration, and Corporate Tax compliance services in Dubai, UAE."
  };

  return (
    <SEOLayout
      title="Accounting & Bookkeeping Services Dubai | Corporate Tax UAE"
      description="Expert accounting, bookkeeping, and Corporate Tax registration in Dubai. Ensure your UAE business stays compliant with Stride's financial advisory services."
      keywords="accounting services Dubai, bookkeeping UAE, VAT registration Dubai, Corporate Tax UAE, financial advisory Dubai, UAE tax compliance"
      currentUrl="https://stride-business.com/accounting-bookkeeping-dubai"
      structuredData={serviceSchema}
    >
      <div style={{ background: '#0F172A', padding: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</a>
      </div>
      
      <main className="container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-main)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', color: '#0052CC', marginBottom: '20px' }}>Expert Accounting & Bookkeeping Services in Dubai</h1>
        
        <section>
          <p>
            Financial clarity is the backbone of exceptional business growth. With the dynamic regulatory changes in the United Arab Emirates—most notably the implementation of Value Added Tax (VAT) and recent Corporate Tax frameworks—maintaining pristine financial records is no longer optional; it is a strict legal requirement. Our <strong>Accounting & Bookkeeping Services in Dubai</strong> ensure that your business remains 100% compliant while maximizing operational efficiency.
          </p>
          <p>
            We cater to companies of all scales across the UAE, ranging from independent freelancers and single-establishment startups to massive enterprise-level corporations in both Freezone and Mainland jurisdictions.
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>Comprehensive Financial Compliance & Strategy</h2>
          <p>
            Failing to adhere to the Federal Tax Authority (FTA) laws can result in devastating penalties. Stride acts as your outsourced CFO and accounting department, managing the minutiae of daily ledgers so you can focus on expansion.
          </p>
          <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
            <li><strong>Daily & Monthly Bookkeeping:</strong> Accurate, real-time logging of all accounts payable, accounts receivable, and bank reconciliations using FTA-approved cloud accounting software (e.g., Xero, QuickBooks).</li>
            <li><strong>VAT Registration & Return Filing:</strong> Full assessment of your taxable supplies, managing the mandatory or voluntary VAT registration process, and submitting timely, error-free quarterly tax returns.</li>
            <li><strong>Corporate Tax Compliance:</strong> Comprehensive advisory on the 9% UAE Corporate Tax. We guide you through registration, assessing qualifying income for Freezone entities, and establishing compliant tax structures.</li>
            <li><strong>Payroll Management (WPS):</strong> Administration of employee salaries in strict accordance with the UAE Wage Protection System (WPS) mandated by the Ministry of Human Resources and Emiratisation.</li>
            <li><strong>Financial Auditing & Reporting:</strong> Preparing balance sheets, profit & loss statements, and cash flow reports while facilitating external audits required for trade license renewals in various Free Zones.</li>
          </ul>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>The Strategic Advantage of Outsourcing</h2>
          <p>
            When you integrate our accounting services with your initial company formation package, you build a foundation of absolute financial control. Let the experts manage your books:
          </p>
          <ol style={{ marginLeft: '20px' }}>
            <li><strong>Avoid Severe Fines:</strong> The FTA heavily penalizes late registrations, incorrect tax filings, and failure to maintain proper corporate records for the mandated 5 years.</li>
            <li><strong>Data-Driven Decisions:</strong> Our monthly financial reports give you the exact insights needed to cut unnecessary expenses and double down on profitable services.</li>
            <li><strong>Investor Readiness:</strong> If you plan to seek venture capital or bank loans, immaculate audited financial statements are non-negotiable prerequisites.</li>
            <li><strong>Fraud Prevention:</strong> Professional third-party bookkeeping significantly reduces the risk of internal financial discrepancies.</li>
          </ol>
        </section>

        <section style={{ marginTop: '40px', background: '#F1F5F9', padding: '30px', borderRadius: '12px' }}>
           <h2 style={{ fontSize: '2rem', color: '#0F172A', textAlign: 'center' }}>Keep Your Business Compliant and Growing</h2>
           <p style={{ textAlign: 'center' }}>
             Don't let tax legislation and poor cash flow management hinder your success. Partner with our certified accountants in Dubai today.
           </p>
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <a href="tel:+971501072044" style={{ background: '#0052CC', color: '#fff', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Schedule a Financial Audit</a>
           </div>
        </section>
      </main>
    </SEOLayout>
  );
}
