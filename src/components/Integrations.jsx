import React from 'react';
import './Integrations.css';

const Integrations = () => {
  const integrations = [
    { name: 'Salesforce', category: 'CRM', logo: 'SF' },
    { name: 'HubSpot', category: 'CRM', logo: 'HS' },
    { name: 'Pipedrive', category: 'CRM', logo: 'PD' },
    { name: 'Slack', category: 'Communication', logo: 'SL' },
    { name: 'Microsoft Teams', category: 'Communication', logo: 'MT' },
    { name: 'Zoom', category: 'Video', logo: 'ZM' },
    { name: 'Google Calendar', category: 'Calendar', logo: 'GC' },
    { name: 'Outlook', category: 'Calendar', logo: 'OL' },
    { name: 'Zapier', category: 'Automation', logo: 'ZP' },
    { name: 'Mailchimp', category: 'Email', logo: 'MC' },
    { name: 'Intercom', category: 'Support', logo: 'IC' },
    { name: 'Zendesk', category: 'Support', logo: 'ZD' }
  ];

  return (
    <section id="integrations" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Seamless <span className="gradient-text">integrations</span>
          </h2>
          <p className="section-subtitle">
            Connect RevUp with your existing tools and workflows. 
            No disruption, just enhanced productivity.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="integration-card fade-in" 
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="integration-logo">
                {integration.logo}
              </div>
              <div className="integration-info">
                <h3 className="integration-name">{integration.name}</h3>
                <span className="integration-category">{integration.category}</span>
              </div>
              <div className="integration-status">
                <div className="status-dot"></div>
                <span>Connected</span>
              </div>
            </div>
          ))}
        </div>

        <div className="integrations-cta">
          <div className="cta-content">
            <h3>Don't see your tool?</h3>
            <p>We're constantly adding new integrations. Let us know what you need.</p>
            <button className="btn btn-outline">Request Integration</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;