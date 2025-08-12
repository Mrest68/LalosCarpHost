/**
 * Contact Form Handler for Lalos Carpentry
 * Handles form submission to Google Apps Script
 */

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    projectDetails: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // UPDATE THIS URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          projectType: '',
          projectDetails: '',
          phone: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-zinc-50 to-amber-50/30 dark:from-zinc-800 dark:to-amber-950/20 rounded-3xl p-10 shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50">
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Get Your Free Consultation</h3>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 font-medium">
                Sorry, there was an error sending your message. Please try again or call us directly.
              </p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">First Name *</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all shadow-sm"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">Last Name *</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all shadow-sm"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">Email Address *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all shadow-sm"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">Phone (Optional)</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all shadow-sm"
              placeholder="(954) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">Project Type *</label>
            <select 
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all shadow-sm"
            >
              <option value="">Select project type</option>
              <option value="Custom Kitchen Cabinets">Custom Kitchen Cabinets</option>
              <option value="Built-in Storage Solutions">Built-in Storage Solutions</option>
              <option value="Furniture Restoration">Furniture Restoration</option>
              <option value="Crown Molding & Trim">Crown Molding & Trim</option>
              <option value="Commercial Millwork">Commercial Millwork</option>
              <option value="Other">Other (please specify)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2">Project Details *</label>
            <textarea 
              rows="5"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#3D2412] focus:border-transparent transition-all resize-none shadow-sm"
              placeholder="Tell us about your vision, timeline, and any specific requirements..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#3D2412] text-white font-bold py-5 px-8 rounded-xl hover:bg-[#BFA575] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Request Free Consultation'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
