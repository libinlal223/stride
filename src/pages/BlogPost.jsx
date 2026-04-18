import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOLayout from '../components/SEOLayout';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <Link to="/blog">Return to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
        "@type": "Organization",
        "name": "Stride Business Setup",
        "logo": {
            "@type": "ImageObject",
            "url": "https://stride-business.com/stride_logo.svg"
        }
    }
  };

  return (
    <SEOLayout
      title={`${post.title} | Stride Insights`}
      description={post.excerpt}
      currentUrl={`https://stride-business.com/blog/${post.slug}`}
      structuredData={articleSchema}
    >
      <div style={{ background: '#0F172A', padding: '20px', textAlign: 'center' }}>
        <Link to="/blog" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Blog Index</Link>
      </div>
      
      <main className="container" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-main)', lineHeight: '1.8' }}>
        <article>
          <header style={{ marginBottom: '40px', borderBottom: '1px solid #E2E8F0', paddingBottom: '30px' }}>
            <h1 style={{ fontSize: '3rem', color: '#1E293B', marginBottom: '20px', lineHeight: '1.3' }}>{post.title}</h1>
            <div style={{ color: '#64748B', display: 'flex', gap: '20px', fontSize: '0.95rem' }}>
              <span><strong>By:</strong> {post.author}</span>
              <span><strong>Published:</strong> {new Date(post.date).toLocaleDateString()}</span>
            </div>
          </header>

          <div 
            className="blog-content"
            style={{ fontSize: '1.1rem', color: '#334155' }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        <div style={{ marginTop: '60px', background: '#F8FAFC', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#0F172A', marginBottom: '15px' }}>Need Expert Assistance?</h3>
          <p style={{ marginBottom: '25px', color: '#475569' }}>Our corporate advisors are ready to help you navigate the complexities of running a business in the UAE.</p>
          <a href="tel:+971501072044" style={{ background: '#0052CC', color: '#fff', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Contact Stride Today</a>
        </div>
      </main>
    </SEOLayout>
  );
}
