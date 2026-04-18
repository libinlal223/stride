import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOLayout({ title, description, keywords, currentUrl, structuredData, children }) {
  // Base organizational structured data for all pages
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "ConsultingBusiness",
    "name": "Stride Business Setup L.L.C",
    "url": "https://stride-business.com",
    "logo": "https://stride-business.com/stride_logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Deira Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE",
      "streetAddress": "M08, Al Owais Building, Abu Hail Street, Al Khabaisi"
    },
    "telephone": "+971501072044",
    "email": "info@stride-business.com"
  };

  // Combine schemas
  const schemas = [baseSchema];
  if (structuredData) {
    schemas.push(structuredData);
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={currentUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Inject JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>
      {children}
    </>
  );
}
