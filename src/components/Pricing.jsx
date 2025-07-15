import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that fits your team size and needs. 
            All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">
                <span className="price">$29</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">Perfect for small teams getting started</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Up to 500 leads/month</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Basic CRM integration</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Email support</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Standard analytics</span>
              </div>
            </div>
            <button className="btn btn-outline plan-button">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="plan-header">
              <h3 className="plan-name">Professional</h3>
              <div className="plan-price">
                <span className="price">$79</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">Ideal for growing sales teams</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Up to 2,000 leads/month</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Advanced CRM integration</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Priority support</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Advanced analytics</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Automated workflows</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Team collaboration</span>
              </div>
            </div>
            <button className="btn btn-primary plan-button">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">
                <span className="price">Custom</span>
              </div>
              <p className="plan-description">For large organizations with custom needs</p>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Unlimited leads</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Custom integrations</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Dedicated support</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Custom analytics</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>SSO & advanced security</span>
              </div>
              <div className="feature-item">
                <Check size={20} className="check-icon" />
                <span>Onboarding & training</span>
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