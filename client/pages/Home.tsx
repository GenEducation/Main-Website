import { Link } from 'react-router-dom';
import { Zap, Sparkles, Gauge, Target, Users, BookOpen, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-brand-navy via-blue-700 to-brand-navy text-white py-20 px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Unlock Your Child's <span className="text-brand-green">Unique Potential</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Meet GenEd - the AI-powered educational companion. Every child deserves learning that adapts to their pace, champions their strengths, and sparks their curiosity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-bold px-8 py-4 rounded-lg transition-all duration-200">
                  Watch Demo
                </button>
              </div>
              <p className="text-gray-200 mt-6 text-sm">
                🎓 Join 50,000+ families already transforming their child's learning
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green rounded-3xl opacity-10 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-400 to-brand-green rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">∞</div>
                      <p className="text-sm font-semibold">Personalized</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <p className="text-sm font-semibold">Available</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">📈</div>
                      <p className="text-sm font-semibold">Growth Tracking</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">🎯</div>
                      <p className="text-sm font-semibold">Goal Focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              The Challenge in Today's Classroom
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern education faces unprecedented challenges that traditional methods can't solve alone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'One Size Doesn\'t Fit All',
                description: 'Teachers manage 30+ students with different learning styles, paces, and needs. Individual attention is impossible.'
              },
              {
                icon: '⏰',
                title: 'Learning Pace Mismatch',
                description: 'Some students rush ahead while others fall behind. The classroom pace can\'t adapt to each child\'s needs.'
              },
              {
                icon: '❓',
                title: 'Hidden Knowledge Gaps',
                description: 'Students struggle silently with gaps that compound over time, leading to frustration and disengagement.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Children Need Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              What Today's Children Need to Stay Ahead
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To thrive in a competitive, rapidly changing world, students need more than textbooks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Adaptive Learning', desc: 'Content that adjusts to their pace, not vice versa' },
                { title: 'Personalized Guidance', desc: 'Support tailored to their unique strengths and weaknesses' },
                { title: 'Continuous Feedback', desc: 'Real-time insights into progress and areas for improvement' },
                { title: 'Confidence Building', desc: 'Positive reinforcement and achievable milestones' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-brand-green/20 to-blue-100 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <Sparkles size={80} className="mx-auto text-brand-green mb-6" />
                <p className="text-2xl font-bold text-brand-navy mb-4">Personalized Learning Path</p>
                <p className="text-gray-700">Every child learns differently. Our AI ensures every lesson is perfectly suited for them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy/5 to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Our AI-Powered Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              GenEd understands your child like a personal tutor would
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Identifies Strengths',
                desc: 'Recognizes what your child excels at and builds on it'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Understands Knowledge Gaps',
                desc: 'Pinpoints knowledge gaps before they become problems'
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: 'Adapts to Pace',
                desc: 'Slows down, speeds up, or changes approach as needed'
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Matches Learning Style',
                desc: 'See it. Hear it. Do it. Get it.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:border-brand-green border-2 border-transparent transition-all">
                <div className="text-brand-green mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              How GenEd Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Get to Know',
                desc: 'Parents tell us what the child loves, where they struggle, and how they learn best.'
              },
              {
                step: '02',
                title: 'Assess',
                desc: 'AI evaluates learning style, pace, strengths, and areas for improvement through interactive sessions'
              },
              {
                step: '03',
                title: 'Personalize',
                desc: 'Creates a unique learning path tailored to the child\'s profile and educational goals'
              },
              {
                step: '04',
                title: 'Support',
                desc: 'Provides 24/7 guidance, feedback, and celebration of progress every step of the way'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-brand-navy text-white rounded-xl p-8 h-full">
                  <div className="text-5xl font-bold text-brand-green mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-green text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Meet the Team Behind GenEd
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built by educators, technologists, and child development experts passionate about transforming education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'CEO & Founder',
                bio: 'Former education researcher with 15+ years in EdTech innovation',
                initials: 'SC'
              },
              {
                name: 'James Mitchell',
                role: 'Chief AI Officer',
                bio: 'PhD in Machine Learning, previously at leading AI research labs',
                initials: 'JM'
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Child Development',
                bio: 'Child psychologist and learning specialist with 20+ years experience',
                initials: 'PS'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-green flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-navy">
                    {member.initials}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy">{member.name}</h3>
                  <p className="text-brand-green font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Partners Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Our Content Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading educational institutions and content providers worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Partner Name 1',
              'Partner Name 2',
              'Partner Name 3',
              'Partner Name 4',
              'Partner Name 5',
              'Partner Name 6',
              'Partner Name 7',
              'Partner Name 8'
            ].map((partner, idx) => (
              <div
                key={idx}
                className="h-32 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-brand-green hover:bg-green-50 transition-all"
              >
                <p className="text-gray-400 font-semibold text-center px-4">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Child's Learning?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join thousands of students experiencing personalized, AI-powered learning today.
          </p>
          <Link
            to="/onboarding"
            className="inline-block bg-brand-green hover:bg-opacity-90 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
