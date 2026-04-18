import React, { useState, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, defaultMessage = "Hello," }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/-2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      color: '#25D366',
      action: () => {
        window.open(`https://wa.me/971501072044?text=${encodeURIComponent(defaultMessage)}`, '_blank');
        onClose();
      }
    },
    {
      id: 'phone',
      label: 'Call Us',
      icon: (
        <svg xmlns="http://www.w3.org/-2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      color: '#0052CC',
      action: () => {
        window.location.href = 'tel:+971501072044';
        onClose();
      }
    },
    {
      id: 'email',
      label: 'Email Us',
      icon: (
        <svg xmlns="http://www.w3.org/-2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      color: '#EA4335',
      action: () => {
        window.location.href = `mailto:info@stride-business.com?subject=Inquiry&body=${encodeURIComponent(defaultMessage)}`;
        onClose();
      }
    }
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <div className="contact-modal-content">
        <button className="contact-modal-close" onClick={onClose}>
          &times;
        </button>
        <h3 className="contact-modal-title">How would you like to connect?</h3>
        <p className="contact-modal-subtitle">Choose your preferred method of communication</p>
        
        <div className="contact-modal-options">
          {contactOptions.map((option) => (
            <button
              key={option.id}
              className="contact-modal-option-btn"
              onClick={option.action}
              style={{ '--hover-color': option.color }}
            >
              <div className="option-icon-wrapper" style={{ color: option.color }}>
                {option.icon}
              </div>
              <span className="option-label">{option.label}</span>
              <div className="option-arrow">
                <svg xmlns="http://www.w3.org/-2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
