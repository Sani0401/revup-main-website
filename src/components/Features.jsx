import React from 'react';
import { Calendar, Users, Zap, BarChart3, Phone, Settings } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Calendar size={32} />,
      title: 'Automated Scheduling',
      description: 'Smart calendar integration that automatically books demos based on lead qualification and availability.'
    },
    {
      icon: <Users size={32} />,
      title: 'Lead Qualification',
      description: 'AI-powered qualification system that scores and routes leads to the right sales representatives.'
    },
    {
      icon: <Zap size={32} />,
      title: 'CRM Sync',
      description: 'Seamless integration with your existing CRM to keep all lead data synchronized and up-to-date.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Intelligent Routing',
      description: 'Advanced routing algorithms that assign leads based on territory, expertise, and workload.'
    },
    {
      icon: <Phone size={32} />,
      title: 'Autodial System',
      description: 'Automated calling system that connects qualified leads with sales reps at the optimal time.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track performance and optimize your sales process.'
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Everything you need to <span className="gradient-text">accelerate sales</span>
          </h2>
          <p className="section-subtitle">
            Powerful features designed to streamline your lead management and boost conversions
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;