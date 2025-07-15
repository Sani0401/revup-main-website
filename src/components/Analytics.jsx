import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import './Analytics.css';

const Analytics = () => {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="analytics-content">
          <div className="analytics-text">
            <h2 className="section-title">
              <span className="gradient-text">Actionable insights</span><br />
              that drive results
            </h2>
            <p className="section-subtitle">
              Get real-time visibility into your sales pipeline with comprehensive 
              analytics and reporting that help you make data-driven decisions.
            </p>
            <div className="analytics-features">
              <div className="analytics-feature">
                <TrendingUp className="feature-icon-small" />
                <div>
                  <h4>Performance Tracking</h4>
                  <p>Monitor conversion rates, response times, and team performance</p>
                </div>
              </div>
              <div className="analytics-feature">
                <Users className="feature-icon-small" />
                <div>
                  <h4>Lead Attribution</h4>
                  <p>Track lead sources and identify your highest-converting channels</p>
                </div>
              </div>
              <div className="analytics-feature">
                <Calendar className="feature-icon-small" />
                <div>
                  <h4>Scheduling Analytics</h4>
                  <p>Optimize booking rates and reduce no-shows with smart insights</p>
                </div>
              </div>
            </div>
          </div>
          <div className="analytics-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <h3>Sales Dashboard</h3>
                <div className="time-filter">
                  <span className="filter-active">This Month</span>
                  <span>Last Month</span>
                  <span>Quarter</span>
                </div>
              </div>
              <div className="metrics-overview">
                <div className="metric-item">
                  <div className="metric-icon">
                    <DollarSign size={20} />
                  </div>
                  <div className="metric-details">
                    <div className="metric-value">$847K</div>
                    <div className="metric-label">Revenue</div>
                    <div className="metric-change positive">+23.5%</div>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <Users size={20} />
                  </div>
                  <div className="metric-details">
                    <div className="metric-value">1,247</div>
                    <div className="metric-label">Leads</div>
                    <div className="metric-change positive">+18.2%</div>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-icon">
                    <Calendar size={20} />
                  </div>
                  <div className="metric-details">
                    <div className="metric-value">89%</div>
                    <div className="metric-label">Show Rate</div>
                    <div className="metric-change positive">+5.3%</div>
                  </div>
                </div>
              </div>
              <div className="chart-section">
                <div className="chart-header">
                  <h4>Conversion Funnel</h4>
                </div>
                <div className="funnel-chart">
                  <div className="funnel-stage" style={{width: '100%'}}>
                    <span>Leads: 1,247</span>
                  </div>
                  <div className="funnel-stage" style={{width: '75%'}}>
                    <span>Qualified: 935</span>
                  </div>
                  <div className="funnel-stage" style={{width: '50%'}}>
                    <span>Demos: 623</span>
                  </div>
                  <div className="funnel-stage" style={{width: '25%'}}>
                    <span>Closed: 312</span>
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

export default Analytics;