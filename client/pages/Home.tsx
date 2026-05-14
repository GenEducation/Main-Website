import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, Wifi, Lock, Zap, Shield, Users } from "lucide-react";

const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
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
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-student.jpg"
            alt="Student studying with GenEd deskbot"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay — dark at bottom for text legibility, light at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        </div>

        {/* Hero text — anchored to bottom-left */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-green/20 text-brand-green border border-brand-green/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Live now — try it today
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your child's personal AI tutor.{" "}
              <span className="text-brand-green">
                No distractions. Just learning.
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              GenEd is a dedicated AI learning device that sits on your child's
              desk — not a phone, not a tablet. It adapts to how they learn,
              closes knowledge gaps, and keeps parents informed. All without a
              browser in sight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.gened.ai"
                className="inline-block bg-brand-green hover:bg-opacity-90 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg text-center"
              >
                Try GenEd
              </a>
              <a
                href="#device"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-lg text-center border border-white/20"
              >
                Meet the Device ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                The problem with giving kids a device to learn
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every parent knows this moment — you set your child up to study,
                and twenty minutes later they're watching videos.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Tablets and phones are too distracting",
                description:
                  "A device with a browser is a device with YouTube, games, and social media. No app or parental control fully solves this — the temptation is always one tap away.",
              },
              {
                icon: "🧀",
                title: "Knowledge gaps go unnoticed",
                description:
                  "In a classroom of 30, teachers can't see each student's gaps in real time. Students move to the next chapter whether they've mastered the last one or not.",
              },
              {
                icon: "🔒",
                title: "Parents are left in the dark",
                description:
                  "A grade tells you what your child scored. It doesn't tell you what they don't understand, where they're stuck, or what they need next. GenEd does.",
              },
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-brand-blue flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVICE INTRO ── */}
      <section id="device" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeInSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/student-desk.jpg"
                  alt="GenEd deskbot on a student's desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSection>

            {/* Text */}
            <FadeInSection delay={0.15}>
              <div>
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">
                  The GenEd Deskbot
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                  A dedicated AI tutor. Not another screen.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The GenEd Deskbot is a standalone AI learning device designed
                  to sit on your child's study desk. It has no browser, no apps,
                  no social media — just a focused AI that talks, teaches, and
                  adapts to each student's pace and learning style.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: <Lock className="w-5 h-5 text-brand-green" />,
                      title: "Distraction-free by design",
                      desc: "No browser. No games. No rabbit holes. The hardware enforces the focus that no app ever could.",
                    },
                    {
                      icon: <Zap className="w-5 h-5 text-brand-green" />,
                      title: "Adapts in real time",
                      desc: "The device reads how your child responds and adjusts its explanations on the fly — like a tutor who actually listens.",
                    },
                    {
                      icon: <Wifi className="w-5 h-5 text-brand-green" />,
                      title: "Always available",
                      desc: "10pm before an exam? The GenEd Deskbot is ready. No scheduling, no waiting, no extra cost.",
                    },
                    {
                      icon: <BarChart2 className="w-5 h-5 text-brand-green" />,
                      title: "Syncs with the parent app",
                      desc: "Everything the device learns about your child's progress is available to you in the GenEd parent app — in plain language, not just scores.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-green-50 rounded-lg p-2 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-brand-navy">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── PARENT TRANSPARENCY ── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text first on this side */}
            <FadeInSection>
              <div>
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">
                  For Parents
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                  Know exactly where your child stands. Not just what they
                  scored.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The GenEd parent app gives you a real-time window into what
                  your child understands, where they're stuck, and what the
                  device is working on with them. Not after the exam — during
                  the learning.
                </p>

                <div className="space-y-4">
                  {[
                    "See which topics your child has mastered vs. where gaps exist",
                    "Get notified when they've been struggling with a concept",
                    "Track daily study sessions and time spent learning",
                    "Understand their progress in plain language — no jargon",
                    "Share reports directly with their class teacher",
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-brand-green font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Parent image */}
            <FadeInSection delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/parent-analytics-5.jpg"
                  alt="Parent checking child's learning progress on their phone"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── SCHOOL SECTION ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">
                For Schools
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                Every student gets a tutor. Every teacher gets visibility.
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deploy GenEd Deskbots across your classrooms and give every
                student their own personalised learning companion — aligned to
                your curriculum, under your control.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-brand-green" />,
                title: "School-wide dashboard",
                desc: "See learning progress across every student, class, and subject from one place.",
              },
              {
                icon: <Shield className="w-6 h-6 text-brand-green" />,
                title: "Your curriculum, built in",
                desc: "Upload your syllabi and the device teaches to your school's standards — not a generic one.",
              },
              {
                icon: <BarChart2 className="w-6 h-6 text-brand-green" />,
                title: "Identify at-risk students early",
                desc: "Spot which students are falling behind — before results day, not after.",
              },
              {
                icon: <Lock className="w-6 h-6 text-brand-green" />,
                title: "Safe and controlled",
                desc: "Fully managed by school administration. No unsupervised internet access, ever.",
              },
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-green hover:shadow-lg transition-all h-full">
                  <div className="bg-green-50 rounded-lg p-3 w-fit mb-4">
                    {item.icon}
                  </div>
                  <p className="font-bold text-brand-navy mb-2">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2}>
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-block bg-brand-navy hover:bg-opacity-90 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Book a School Demo
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-4 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How GenEd works
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The device does the hard work. Your child just learns.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Student turns it on",
                desc: "The device greets them by name and picks up exactly where they left off — no login, no setup.",
              },
              {
                step: "02",
                title: "It reads how they're learning",
                desc: "GenEd watches how the student responds and builds a real-time picture of what they understand and where the gaps are.",
              },
              {
                step: "03",
                title: "Adapts explanations until it clicks",
                desc: "If the first explanation doesn't land, it tries another. It keeps going until the concept is genuinely understood — not just repeated.",
              },
              {
                step: "04",
                title: "Parents see everything",
                desc: "Every session syncs to the GenEd parent app. See what your child worked on, what clicked, and what still needs attention — in plain language.",
              },
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="relative h-full">
                  <div className="bg-white/5 border border-white/10 text-white rounded-xl px-6 py-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-bold text-brand-green mb-6 opacity-80">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[1.7rem] z-20">
                      <div className="bg-brand-navy rounded-full p-1">
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

      {/* ── CTA ── */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-student-2.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-brand-navy/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Give your child the learning companion they deserve.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              GenEd is live and ready. Give your child a focused, distraction-free
              AI tutor that actually adapts to how they learn.
            </p>
            <a
              href="https://app.gened.ai"
              className="inline-block bg-brand-green hover:bg-opacity-90 text-white font-bold px-12 py-5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Try GenEd
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
