import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How quickly can I get started with RevUp?',
      answer: 'You can be up and running in under 15 minutes. Our setup wizard guides you through connecting your CRM, configuring lead qualification rules, and setting up your team\'s availability.'
    },
    {
      question: 'Does RevUp integrate with my existing CRM?',
      answer: 'Yes! RevUp integrates with all major CRMs including Salesforce, HubSpot, Pipedrive, and many others. We also support custom integrations for enterprise customers.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You maintain full ownership of your data. We provide easy export options and will help you migrate your data if needed. Your data is permanently deleted 30 days after cancellation.'
    },
    {
      question: 'Can I customize the qualification criteria?',
      answer: 'Absolutely! RevUp allows you to create custom qualification rules based on any lead attributes, behavior, or scoring criteria that matter to your business.'
    },
    {
      question: 'Is there a limit on team members?',
      answer: 'Team member limits vary by plan. Starter supports up to 5 users, Professional up to 25 users, and Enterprise has no limits. You can always upgrade as your team grows.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Professional and Enterprise customers get priority phone support. Starter customers have access to email support and our comprehensive help center.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about RevUp. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp size={20} /> : 
                  <ChevronDown size={20} />
                }
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Our team is here to help you get the most out of RevUp.</p>
          <button className="btn btn-primary">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;