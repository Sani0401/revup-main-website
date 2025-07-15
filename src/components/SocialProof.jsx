import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const companies = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'GrowthCo', logo: 'GC' },
    { name: 'ScaleUp', logo: 'SU' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' }
  ];

  const testimonials = [
    {
      quote: "RevUp transformed our lead management process. We're closing 40% more deals with half the manual work.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechCorp",
      avatar: "SC"
    },
    {
      quote: "The automated scheduling feature alone saved us 20 hours per week. Our sales team can focus on what they do best - selling.",
      author: "Michael Rodriguez",
      role: "Sales Director",
      company: "GrowthCo",
      avatar: "MR"
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We can optimize our entire sales funnel in real-time.",
      author: "Emily Johnson",
      role: "Head of Revenue",
      company: "ScaleUp",
      avatar: "EJ"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="social-proof-header">
          <p className="trusted-text">Trusted by leading companies worldwide</p>
          <div className="company-logos">
            {companies.map((company, index) => (
              <div key={index} className="company-logo">
                <div className="logo-placeholder">{company.logo}</div>
                <span className="company-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h2 className="section-title">
            What our <span className="gradient-text">customers</span> say
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;