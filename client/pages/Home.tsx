import { Link } from 'react-router-dom';
import { Zap, Sparkles, Gauge, Target, Users, BookOpen, Award } from 'lucide-react';
import { Check, Lock, Brain, AlertCircle } from 'lucide-react';
import { CheckCircle2, Play } from 'lucide-react';
export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-brand-navy via-blue-700 to-brand-navy text-white py-20 px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Personalised Education <span className="text-brand-green">Guided by AI, Trusted by Parents</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                GenEd guides students with personalized, curriculum-aligned learning while sharing insights with parents — building confidence, closing gaps, & driving true mastery, not just homework completion.              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green rounded-3xl opacity-10 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-400 to-brand-green rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold mb-2">100%</div>
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
                      <p className="text-sm font-semibold">Curriculum Aligned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* The Scientific Gap Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header: Shift from "Challenges" to "The Scientific Problem" */}
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
                // subtitle: 'One Teacher 30 Students',
                title: 'One Size Doesn\'t Fit All',
                description: 'Teachers manage 30+ students with different learning styles, paces, and needs. Individual attention is impossible.'
              },
              {
                icon: '⏰',
                // subtitle: 'One Teacher 30 Students',
                title: 'Learning Pace Mismatch',
                description: 'Some students rush ahead while others fall behind. The classroom pace can\'t adapt to each child\'s needs.'
              },
              {
                icon: '🧀', // The Swiss Cheese visual
                title: 'The Swiss Cheese Effect',
                // subtitle: 'Compound Learning Gaps',
                description: 'In a fixed-pace classroom, missed concepts go undetected. These "holes" in foundational knowledge compound over time, causing students to hit a wall in higher grades.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-brand-blue relative overflow-hidden group">

                {/* Subtle Background Number for Academic feel */}
                <div className="absolute -right-4 -top-4 text-9xl text-gray-50 opacity-5 font-serif group-hover:text-brand-blue group-hover:opacity-10 transition-colors">
                  {idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-brand-blue">
                    {item.icon}
                  </div>

                  {/* Scientific Subtitle (The Hook for Academics) */}
                  <div className="text-xs font-bold tracking-widest text-brand-blue uppercase mb-1">
                    {item.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Children Need Section */}
      < section className="py-20 px-4" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Bridging the Gap Between Learning Theory & Execution            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To thrive in a competitive, rapidly changing world, students need more than textbooks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Adaptive Learning', desc: 'Content that adjusts to their pace, not vice versa' },
                { title: 'Personalized Guidance', desc: 'Support tailored to their unique strengths and weaknesses' },
                { title: 'Dynamic ZPD Calibration', desc: 'The Zone of Proximal Development (ZPD) is the "sweet spot" of learning—tasks that are too hard to do alone but possible with guidance.' },
                { title: 'Mastery-Based Progression', desc: 'In schools, the class moves on to Chapter 5 even if the student failed Chapter 4. This creates the "Swiss Cheese Effect"' }
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
            {/* RIGHT COLUMN: The Simplified "Smart Journey" UI */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 overflow-hidden">

              {/* Header: Simple & Clear */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                <h4 className="font-bold text-brand-navy text-lg">Aarav's Math Journey</h4>
                <span className="text-xs font-medium text-gray-400">Live Session</span>
              </div>

              {/* The Timeline Container */}
              <div className="relative space-y-8 pl-8">

                {/* The Connecting Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100"></div>

                {/* STEP 1: DONE (The Foundation) */}
                <div className="relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="absolute -left-8 w-6 h-6 bg-white text-green-500 z-10">
                    <CheckCircle2 size={24} fill="white" className="bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-700">Basic Fractions</h5>
                    <p className="text-xs text-green-600 font-medium">✅ Mastered (No Gaps)</p>
                  </div>
                </div>

                {/* STEP 2: NOW (The Personalization Magic) */}
                <div className="relative">

                  {/* The "Play" Icon with Pulse */}
                  <div className="absolute -left-8 z-10">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                    <div className="relative w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center border-2 border-white shadow-md">
                      <Play size={10} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>

                  {/* The Active Card */}
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm relative">
                    <div className="absolute -right-2 -top-2 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                      LEARNING NOW
                    </div>

                    <h5 className="font-bold text-brand-blue mb-2 text-lg">Equivalent Fractions</h5>

                    {/* The "Self-Explanatory" Story */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1">🤖</span>
                        <p>"Aarav was stuck on the textbook definition..."</p>
                      </div>

                      {/* The Adaptation Arrow */}
                      <div className="pl-6 text-gray-400 text-xs font-bold">⬇️ AI ADAPTED LESSON</div>

                      <div className="flex items-start gap-2 text-sm font-medium text-brand-navy bg-white p-2 rounded-lg border border-blue-100">
                        <Zap size={16} className="text-yellow-500 fill-yellow-500 mt-0.5" />
                        <p>Switched to "Pizza Slices" visual mode.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STEP 3: NEXT (The Safety Lock) */}
                <div className="relative">
                  <div className="absolute -left-8 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white z-10">
                    <Lock size={12} className="text-gray-400" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-400">Adding Mixed Numbers</h5>

                    {/* Simple Explanation */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200">
                        LOCKED
                      </span>
                      <span className="text-xs text-gray-400">
                        Finish "Equivalent Fractions" first.
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Our Solution Section
      < section className="py-20 px-4 bg-gradient-to-r from-brand-navy/5 to-brand-green/5" >
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
      </section > */}

      {/* How It Works Section */}
      < section className="py-20 px-4" >
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
      </section >

      {/* Team Section */}
      < section className="py-20 px-4 bg-gray-50" >
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
      </section >

      {/* Content Partners Section */}
      < section className="py-20 px-4" >
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
      </section >

      {/* CTA Section */}
      < section className="py-20 px-4 bg-gradient-to-r from-brand-navy to-blue-700 text-white" >
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
      </section >
    </div >
  );
}
