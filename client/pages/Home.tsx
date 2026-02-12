import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Check, Lock, Brain, AlertCircle, Zap, Sparkles, Gauge, Target, Users, BookOpen, Award } from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

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
                      <p className="text-sm font-semibold">Availability</p>
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
                subtitle: 'Scale',
                title: 'One Size Doesn\'t Fit All',
                description: 'Teachers manage 30+ students with different learning styles, paces, and needs. Individual attention is impossible.'
              },
              {
                icon: '⏰',
                subtitle: 'Timing',
                title: 'Learning Pace Mismatch',
                description: 'Some students rush ahead while others fall behind. The classroom pace can\'t adapt to each child\'s needs.'
              },
              {
                icon: '🧀', // The Swiss Cheese visual
                subtitle: 'Gaps',
                title: 'The Swiss Cheese Effect',
                description: 'In a fixed-pace classroom, missed concepts go undetected. These "holes" in foundational knowledge compound over time, causing students to hit a wall in higher grades.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-brand-blue relative overflow-hidden group flex flex-col items-center text-center">

                {/* Subtle Background Number for Academic feel */}
                <div className="absolute -right-4 -top-4 text-9xl text-gray-50 opacity-5 font-serif group-hover:text-brand-blue group-hover:opacity-10 transition-colors">
                  {idx + 1}
                </div>

                <div className="relative z-10 flex flex-col items-center">
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
      <section className="py-20 px-4">
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
      <section className="py-20 px-4 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 -mt-1">
          <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,2.92V0H0V27.35A600.21,600.21,0,0,1,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                How GenEd Works
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Smart Understanding',
                desc: 'We continuously reads how a student thinks, learns, and responds — identifying strengths, misconceptions, and learning patterns in real time.'
              },
              {
                step: '02',
                title: 'Adaptive',
                desc: 'We keeps learning in the “sweet spot” — difficult enough to grow, but never so hard that students get stuck or frustrated.'
              },
              {
                step: '03',
                title: 'Practice with Purpose',
                desc: 'We reinforces learning through targeted practice, ensuring concepts are truly understood — not just memorized.'
              },
              {
                step: '04',
                title: 'Actionable Transparency',
                desc: 'Parents receive real-time insights into what their child understands, where they need support, and how they are progressing — beyond just grades.'
              }
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="relative h-full">
                  <div className="bg-brand-navy text-white rounded-xl px-6 py-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/10">
                    <div className="text-5xl font-bold text-brand-green mb-6 opacity-80 text-center">{item.step}</div>
                    <h3 className="text-lg lg:text-xl font-bold mb-4 tracking-tight text-center">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-left">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[1.7rem] z-20">
                      <div className="bg-white rounded-full p-1 shadow-md">
                        <span className="text-brand-green font-bold">→</span>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                Meet the Team Behind GenEd
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {/* Built by educators, technologists, and child development experts passionate about transforming education */}
              </p>
            </div>
          </FadeInSection>

          {/* Centered Grid for Team */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: 'Vedant Bisen',
                role: 'Founder & CEO',
                bio: 'Bachelors in Electronics and Computer Science',
                initials: 'VB',
                image: '/Vedant_bisen.jpeg'
              },
              {
                name: 'Vikesh Dutta',
                role: 'Co-Founder',
                bio: 'M.Sc in Marketing, Business Management and Entrepreneurship',
                initials: 'VD',
                image: '/Vikesh_dutta.jpeg'
              }
            ].map((member, idx) => (
              <FadeInSection key={idx} delay={idx * 0.2}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm group border-t-2 border-transparent hover:border-brand-green">
                  <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-brand-navy mb-1">{member.name}</h3>
                    <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Content Partners Section
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
      </section > */}

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
      </section >
    </div>
  );
}
