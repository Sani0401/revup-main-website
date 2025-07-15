import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline fade-in">
              Automate. Qualify. Convert.<br />
              <span className="gradient-text">The Modern Way to Manage Leads & Demos</span>
            </h1>
            <p className="hero-subheadline fade-in">
              Transform your lead management with intelligent automation, seamless scheduling, 
              and powerful analytics. Close more deals with less effort.
            </p>
            <div className="hero-actions fade-in">
              <button className="btn btn-primary">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">300%</span>
                <span className="stat-label">Faster Lead Response</span>
              </div>
              <div className="stat">
                <span className="stat-number">85%</span>
                <span className="stat-label">Higher Conversion Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Integrations</span>
              </div>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">RevUp Dashboard</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  <div className="sidebar-item active">Dashboard</div>
                  <div className="sidebar-item">Leads</div>
                  <div className="sidebar-item">Calendar</div>
                  <div className="sidebar-item">Analytics</div>
                </div>
                <div className="mockup-main">
                  <div className="metric-cards">
                    <div className="metric-card">
                      <div className="metric-value">247</div>
                      <div className="metric-label">New Leads</div>
                      <div className="metric-trend positive">+23%</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">89%</div>
                      <div className="metric-label">Qualification Rate</div>
                      <div className="metric-trend positive">+12%</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">156</div>
                      <div className="metric-label">Demos Scheduled</div>
                      <div className="metric-trend positive">+34%</div>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <div className="chart-bars">
                      <div className="bar" style={{height: '60%'}}></div>
                      <div className="bar" style={{height: '80%'}}></div>
                      <div className="bar" style={{height: '45%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                      <div className="bar" style={{height: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;