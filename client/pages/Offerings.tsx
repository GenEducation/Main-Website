import { Check, Zap, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Offerings() {
  const plans = [
    {
      name: 'Family Plan',
      subtitle: 'For Parents',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual students and families',
      cta: 'Get Started',
      highlighted: false,
      features: [
        'AI-powered personalized learning path',
        'Unlimited subject coverage',
        'Real-time progress tracking',
        'Adaptive learning speed',
        '24/7 availability',
        'Monthly parent reports',
        'Basic learning style assessment',
        'Community access'
      ]
    },
    {
      name: 'Teacher Pro',
      subtitle: 'For Educators',
      price: '$99',
      period: '/month',
      description: 'Manage multiple students and classrooms',
      cta: 'Get Started',
      highlighted: true,
      features: [
        'Everything in Family Plan',
        'Classroom dashboard',
        'Manage up to 30 students',
        'Detailed class analytics',
        'Customizable lesson plans',
        'Student progress exports',
        'Automated homework assignments',
        'Advanced performance metrics',
        'Priority email support',
        'Professional development resources'
      ]
    },
    {
      name: 'School License',
      subtitle: 'For Institutions',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise solution for schools and districts',
      cta: 'Contact Sales',
      highlighted: false,
      features: [
        'Unlimited students and teachers',
        'School-wide dashboard',
        'Advanced admin controls',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Staff training & onboarding',
        'Custom branding options',
        'Data privacy & security',
        'Phone & email support',
        'Quarterly strategy reviews',
        'Annual license discount'
      ]
    }
  ];

  const addOns = [
    {
      title: 'Premium Content Library',
      description: 'Access to 10,000+ lessons, interactive games, and educational resources',
      price: '$9.99/month'
    },
    {
      title: 'Tutoring Sessions',
      description: 'Connect with certified tutors for one-on-one live sessions',
      price: '$50/session'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights into learning patterns and detailed performance analysis',
      price: '$14.99/month'
    },
    {
      title: 'Multilingual Support',
      description: 'Learn in 15+ languages with native speaker pronunciation guides',
      price: '$7.99/month'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial – no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-brand-navy to-blue-700 text-white shadow-2xl'
                    : 'bg-gray-50 shadow-lg hover:shadow-xl border-2 border-gray-200'
                }`}
              >
                {/* Best Value Badge */}
                {plan.highlighted && (
                  <div className="bg-brand-green text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR ⭐
                  </div>
                )}

                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${!plan.highlighted && 'text-brand-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm font-semibold mb-6 ${!plan.highlighted && 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-sm opacity-75">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm mb-8 ${!plan.highlighted && 'text-gray-700'}`}>
                    {plan.description}
                  </p>

                  <Link
                    to="/onboarding"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                      plan.highlighted
                        ? 'bg-brand-green hover:bg-opacity-90 text-white shadow-lg'
                        : 'bg-brand-green text-white hover:bg-opacity-90 shadow-md'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4 border-t border-gray-300 pt-8">
                    <p className={`font-semibold text-sm mb-4 ${!plan.highlighted && 'text-brand-navy'}`}>
                      Includes:
                    </p>
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Check size={20} className="flex-shrink-0 text-brand-green mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Plan Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 font-bold text-brand-navy">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-brand-navy">Family Plan</th>
                      <th className="text-center py-4 px-4 font-bold text-brand-navy">Teacher Pro</th>
                      <th className="text-center py-4 px-4 font-bold text-brand-navy">School License</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['AI Personalization', true, true, true],
                      ['Progress Tracking', true, true, true],
                      ['Multiple Students', false, true, true],
                      ['Class Dashboard', false, true, true],
                      ['Analytics & Reports', 'Basic', 'Advanced', 'Advanced'],
                      ['API Access', false, false, true],
                      ['Custom Integrations', false, false, true],
                      ['Priority Support', false, true, true]
                    ].map((row, ridx) => (
                      <tr key={ridx} className="border-b border-gray-200 hover:bg-white transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-700">{row[0]}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[1] === 'boolean' ? (
                            row[1] ? (
                              <Check className="w-5 h-5 text-brand-green mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-600">{row[1]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[2] === 'boolean' ? (
                            row[2] ? (
                              <Check className="w-5 h-5 text-brand-green mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-600">{row[2]}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row[3] === 'boolean' ? (
                            row[3] ? (
                              <Check className="w-5 h-5 text-brand-green mx-auto" />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-600">{row[3]}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-gray-600">
              Add optional features to customize your plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{addon.title}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-green">{addon.price}</span>
                  <button className="text-brand-green hover:text-brand-navy font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes! You can upgrade, downgrade, or cancel your plan anytime. Changes take effect at the next billing cycle.'
              },
              {
                question: 'Is there a long-term contract?',
                answer: 'No. All plans are on a month-to-month basis with no contracts or hidden fees. Cancel anytime with one click.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for institutional plans.'
              },
              {
                question: 'Do you offer discounts for annual billing?',
                answer: 'Yes! Sign up for annual billing and save 20% on any plan.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Absolutely! All plans include a 14-day free trial. No credit card required to get started.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before any overage charges. You can upgrade instantly to get more capacity.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-brand-green">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Choose a plan and start your free 14-day trial today.
          </p>
          <Link
            to="/onboarding"
            className="inline-block bg-brand-green hover:bg-opacity-90 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            Start Free Trial <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
