import React from 'react';
import { ArrowRight, UserPlus, CheckCircle, Calendar, BarChart } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: 'Lead Received',
      description: 'New leads automatically enter your RevUp pipeline from multiple sources'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Qualified',
      description: 'AI-powered qualification scores and routes leads based on your criteria'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Demo Scheduled',
      description: 'Qualified leads are automatically scheduled with the right sales rep'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Analytics Logged',
      description: 'All interactions and outcomes are tracked for continuous optimization'
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            How <span className="gradient-text">RevUp</span> works
          </h2>
          <p className="section-subtitle">
            From lead capture to closed deal - streamlined in four simple steps
          </p>
        </div>

        <div className="workflow-container">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="workflow-cta">
          <button className="btn btn-primary">
            Start Your Free Trial
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;