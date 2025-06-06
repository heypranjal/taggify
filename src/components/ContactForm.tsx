import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8" id="contact-form">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-gray-600">
          Have questions about our audit services? Fill out the form below and our team will get back to you shortly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service of Interest</label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          <option value="bpo">BPO Operations Audit</option>
          <option value="kpo">KPO Compliance Verification</option>
          <option value="social-media">Social Media Operations Audit</option>
          <option value="data-security">Data Security Compliance</option>
          <option value="process">Process Efficiency Evaluation</option>
          <option value="risk">Risk Management Consulting</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Please describe your requirements or questions..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 disabled:bg-blue-400"
      >
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            Send Message <Send size={16} className="ml-2" />
          </>
        )}
      </button>

      {submitSuccess && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      )}
    </form>
  );
};

export default ContactForm;