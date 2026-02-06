import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Our team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Our Office</h4>
                    <p className="text-gray-600">123 Education Street</p>
                    <p className="text-gray-600">Learning City, LC 12345</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Phone</h4>
                    <a href="tel:+12345678900" className="text-brand-green hover:text-brand-navy font-semibold">
                      +1 (234) 567-8900
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Available Monday-Friday, 9AM-6PM EST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Email</h4>
                    <a href="mailto:info@gened.ai" className="text-brand-green hover:text-brand-navy font-semibold">
                      info@gened.ai
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-green text-white rounded-lg flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-300 pt-6">
                  <h4 className="font-semibold text-brand-navy mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors">
                      f
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors">
                      𝕏
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors">
                      in
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-navy text-white rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Send us a Message</h3>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-brand-green rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h4 className="text-xl font-bold text-brand-green mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>

                    <p className="text-gray-600 text-sm text-center">
                      We typically respond within 24 business hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is GenEd?',
                answer: 'GenEd is an AI-powered educational companion that personalizes learning for children aged 6-15, understanding their unique learning style, pace, and needs.'
              },
              {
                question: 'How long does it take to see results?',
                answer: 'Most parents notice improvement in engagement and confidence within the first 2-3 weeks. Significant academic improvements are typically seen within 4-8 weeks.'
              },
              {
                question: 'Is GenEd suitable for my child?',
                answer: 'LearnMate is designed for children aged 6-15 across all learning levels. We have specialized modules for advanced learners, average learners, and children needing additional support.'
              },
              {
                question: 'Can GenEd replace a teacher?',
                answer: 'No, LearnMate is designed to complement, not replace, traditional education. It works best as a supplement to classroom learning and provides 24/7 personalized support.'
              },
              {
                question: 'Is my child\'s data safe?',
                answer: 'Yes! We use enterprise-grade encryption and comply with COPPA, FERPA, and GDPR. Your data is never shared with third parties.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-brand-green hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-brand-navy mb-4" />
              <p className="text-gray-600 text-lg font-semibold">123 Education Street, Learning City, LC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
