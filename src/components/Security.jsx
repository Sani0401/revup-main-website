import React from 'react';
import { Shield, Lock, Eye, Users } from 'lucide-react';
import './Security.css';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield size={32} />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your sensitive data'
    },
    {
      icon: <Lock size={32} />,
      title: 'SSO Integration',
      description: 'Single sign-on support with SAML, OAuth, and popular identity providers'
    },
    {
      icon: <Eye size={32} />,
      title: 'Privacy Controls',
      description: 'Comprehensive privacy settings and GDPR compliance built-in'
    },
    {
      icon: <Users size={32} />,
      title: 'Access Management',
      description: 'Role-based permissions and audit trails for complete visibility'
    }
  ];

  const certifications = [
    { name: 'SOC 2', description: 'Type II Certified' },
    { name: 'GDPR', description: 'Compliant' },
    { name: 'CCPA', description: 'Compliant' },
    { name: 'ISO 27001', description: 'Certified' }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Security</span> you can trust
          </h2>
          <p className="section-subtitle">
            Your data security is our top priority. RevUp meets the highest 
            industry standards for data protection and compliance.
          </p>
        </div>

        <div className="security-content">
          <div className="security-features">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="security-feature fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="security-icon">
                  {feature.icon}
                </div>
                <div className="security-text">
                  <h3 className="security-title">{feature.title}</h3>
                  <p className="security-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3 className="certifications-title">Certifications & Compliance</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-badge">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-description">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;