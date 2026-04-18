import React from 'react';
import { Link } from 'react-router-dom';
import SEOLayout from '../components/SEOLayout';
import { blogPosts } from '../data/blogPosts';

export default function BlogIndex() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Stride Business Insights",
    "url": "https://stride-business.com/blog",
    "description": "Expert insights, news, and guides on business setup, freezones, accounting, and PRO services in the UAE.",
    "publisher": {
      "@type": "ConsultingBusiness",
      "name": "Stride Business Setup"
    }
  };

  return (
    <SEOLayout
      title="UAE Business Setup Blog & Insights | Stride Consulting"
      description="Read the latest insights, step-by-step guides, and news about company formation, corporate tax, corporate banking, and PRO services in Dubai and the UAE."
      keywords="business setup blog UAE, company formation news Dubai, UAE corporate tax guide, freezone benefits 2026, Dubai business insights"
      currentUrl="https://stride-business.com/blog"
      structuredData={blogSchema}
    >
      <div style={{ background: '#0F172A', padding: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      </div>
      
      <main className="container" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-main)' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#0052CC', marginBottom: '10px' }}>Business Insights & Strategies</h1>
          <p style={{ fontSize: '1.2rem', color: '#64748B' }}>Master the UAE corporate landscape with our expert guides and latest regulatory news.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {blogPosts.map((post) => (
            <div key={post.id} style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', transition: 'box-shadow 0.3s ease', cursor: 'pointer', background: '#fff' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <div style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '10px' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
              <h2 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '15px', lineHeight: '1.4' }}>
                <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} style={{ color: '#0052CC', fontWeight: '600', textDecoration: 'none' }}>Read Full Article →</Link>
            </div>
          ))}
        </div>
      </main>
    </SEOLayout>
  );
}
