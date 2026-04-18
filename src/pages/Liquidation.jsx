import React from 'react';
import SEOLayout from '../components/SEOLayout';

export default function Liquidation() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Company Liquidation",
    "provider": {
      "@type": "ConsultingBusiness",
      "name": "Stride Business Setup"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "description": "Legally secure company liquidation services in Dubai, UAE. We manage license cancellations, asset liquidations, and clearance certificates seamlessly."
  };

  return (
    <SEOLayout
      title="Company Liquidation Services UAE | Business Cancellation Dubai"
      description="Require company liquidation in Dubai? Stride handles legal closures, license cancellations, and government clearances to ensure maximum compliance."
      keywords="company liquidation Dubai, business cancellation UAE, close company Dubai, liquidator UAE, deregistrations company UAE"
      currentUrl="https://stride-business.com/company-liquidation-uae"
      structuredData={serviceSchema}
    >
      <div style={{ background: '#0F172A', padding: '20px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</a>
      </div>
      
      <main className="container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-main)', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '3rem', color: '#0052CC', marginBottom: '20px' }}>Secure Company Liquidation Services in the UAE</h1>
        
        <section>
          <p>
            Closing a business in the United Arab Emirates is a complex legal process that must be executed with absolute precision to avoid accumulating massive fines, legal liabilities, and travel bans for the shareholders. Our <strong>Company Liquidation Services in Dubai</strong> offer a secure, transparent, and expedited pathway to shutting down your corporate entity, whether it operates in a Freezone or the Mainland.
          </p>
          <p>
            Liquidation simply means winding up the affairs of a registered company. This involves selling off assets, paying off creditors, terminating employment contracts legally, and distributing the remaining capital among shareholders according to the Memorandum of Association (MOA) and UAE Commercial Companies Law.
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>The Stride Liquidation Process</h2>
          <p>
            The Department of Economic Development (DED) and specific Free Zone Authorities demand stringent clearance procedures before officially canceling your trade license. Attempting to abandon a company without formal liquidation leads to compounding fines and potential civil cases. Here is how we expertly guide you through a safe exit:
          </p>
          <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
            <li><strong>Board Resolution & Liquidator Appointment:</strong> We assist in drafting the notarized Board Resolution formally dissolving the company and appointing a registered liquidator (usually a certified auditing firm like us).</li>
            <li><strong>Official Gazette Publication:</strong> For mainland LLCs, a formal notice of liquidation must be published in two local Arabic newspapers providing a 45-day grace period for creditors to submit claims.</li>
            <li><strong>Visa Cancellations:</strong> Processing the cancellation of all dependent, employee, and investor visas associated with the trade license while ensuring all Ministry of Human Resources and Emiratisation (MOHRE) end-of-service regulations are met.</li>
            <li><strong>Clearances & NOCs:</strong> We secure all mandatory No Objection Certificates (NOCs) from the Federal Tax Authority (canceling VAT and Corporate Tax registrations), DEWA/SEWA (utilities), Emirates Telecommunications (Etisalat/Du), and the respective landlords.</li>
            <li><strong>Bank Account Closure:</strong> After settling liabilities, we assist in the formal closure of all corporate bank accounts connected to the business.</li>
            <li><strong>Final Liquidation Report:</strong> Submitting the exhaustive audit and clearance report to the DED or Freezone to obtain the final License Cancellation Certificate.</li>
          </ul>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1E293B' }}>Types of Business Closures We Handle</h2>
          <p>
            Our dedicated legal and financial advisors are equipped to handle various liquidation scenarios:
          </p>
          <ol style={{ marginLeft: '20px' }}>
            <li><strong>Voluntary Liquidation:</strong> Initiated by the shareholders deciding to close operations due to lack of profitability, restructuring, or end of the fixed-term project.</li>
            <li><strong>Compulsory / Judicial Liquidation:</strong> Mandated by a UAE court ruling, usually resulting from insolvency where the company's debts surpass its assets and it can no longer operate.</li>
            <li><strong>Branch Office Deregistration:</strong> Formally striking off a local branch of a foreign or freezone parent company while keeping the parent company legally active.</li>
          </ol>
        </section>

        <section style={{ marginTop: '40px', background: '#F1F5F9', padding: '30px', borderRadius: '12px' }}>
           <h2 style={{ fontSize: '2rem', color: '#0F172A', textAlign: 'center' }}>Protect Your Future Legacy</h2>
           <p style={{ textAlign: 'center' }}>
             Exit with confidence. Let our liquidation specialists handle the bureaucratic heavy lifting, ensuring you are legally cleared of all corporate liabilities in the UAE.
           </p>
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
             <a href="tel:+971501072044" style={{ background: '#0052CC', color: '#fff', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Consult a Liquidation Expert</a>
           </div>
        </section>
      </main>
    </SEOLayout>
  );
}
