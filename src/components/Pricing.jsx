import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            RevUp <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="section-subtitle">
            Simple, transparent, and all-in-one: Every plan includes core sales workflow automation—no hidden fees.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Pro Plan</h3>
              <div className="plan-price">
                <span className="price">$99</span>
                <span className="period">/user/month</span>
              </div>
              <p className="plan-description">Ideal for SMBs and fast-moving sales teams.</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Up to 750 qualified leads/requests per month</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Core sales scheduling & booking</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>AI-powered lead scoring and qualification</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Smart lead routing</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Basic CRM integration</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Standard analytics dashboard</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Real-time chat scheduling</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Team collaboration features</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Email and chat support</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>No platform fees. All features bundled.</span>
              </div>
            </div>
            <button className="btn btn-outline plan-button">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="plan-header">
              <h3 className="plan-name">Scale Plan</h3>
              <div className="plan-price">
                <span className="price">$199</span>
                <span className="period">/user/month</span>
              </div>
              <p className="plan-description">Best for growing organizations and mid-market teams seeking end-to-end automation.</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Up to 3,500 qualified leads/requests per month</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Everything in Pro, plus:</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Advanced workflow automation</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Deep integrations (Salesforce, HubSpot, Slack, Zoom, Pipedrive, etc.)</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Multi-calendar & large team management</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Enhanced analytics & data exports</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Custom workflow builder</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Priority support</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Inbound/outbound call routing</span>
              </div>
            </div>
            <button className="btn btn-primary plan-button">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Enterprise Plan</h3>
              <div className="plan-price">
                <span className="price">$349</span>
                <span className="period">/user/month</span>
              </div>
              <p className="plan-description">Perfect for large enterprise sales teams demanding top-level automation, support, and security.</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Up to 10,000+ qualified leads/requests per month</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Everything in Scale, plus:</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Single Sign-On (SSO), advanced security & compliance (SOC2, GDPR)</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Custom integrations & API/webhook access</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Dedicated Customer Success Manager</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>White-glove onboarding & training</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Custom Service Level Agreements (SLA)</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Audit logs & advanced access control</span>
              </div>
            </div>
            <button className="btn btn-outline plan-button">Contact Sales</button>
          </div>
        </div>

        <div className="pricing-footer">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;