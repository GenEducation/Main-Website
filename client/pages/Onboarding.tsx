import { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { ComingSoonOverlay } from '@/components/ComingSoonOverlay';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Parent Info
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    // Child Info
    childName: '',
    childAge: '',
    grade: '',
    school: '',
    // Academic Details
    subjects: [] as string[],
    strengths: '',
    learningOpportunities: '',
    // Interests
    likes: '',
    gamesPlayed: '',
    hobbies: '',
    favoriteCharacters: ''
  });

  const totalSteps = 4;

  const subjects = ['Math', 'Science', 'English', 'History', 'Art', 'Physical Education', 'Languages', 'Computer Science'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We\'ll be in touch soon.');
  };

  return (
    <ComingSoonOverlay
      title="Upcoming Feature"
      description="The onboarding experience is being refined to better serve our families. We'll be live soon!"
    >
      <div className="min-h-screen bg-gradient-to-br from-brand-navy/5 to-brand-green/5 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${s <= step
                      ? 'bg-brand-green text-white'
                      : 'bg-gray-300 text-gray-600'
                      }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${s < step ? 'bg-brand-green' : 'bg-gray-300'
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">
              Step {step} of {totalSteps}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Parent Information */}
              {step === 1 && (
                <div className="animate-in">
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">Tell us about yourself</h2>
                  <p className="text-gray-600 mb-8">We'll use this to keep you updated on your child's progress</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Child Information */}
              {step === 2 && (
                <div className="animate-in">
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">Tell us about your child</h2>
                  <p className="text-gray-600 mb-8">Basic information helps us personalize the learning experience</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="Emma Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          placeholder="10"
                          min="6"
                          max="15"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-navy mb-2">
                          Grade
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Select Grade</option>
                          {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(g => (
                            <option key={g} value={g}>{g} Grade</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        School Name
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        placeholder="Lincoln Elementary School"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Academic Profile */}
              {step === 3 && (
                <div className="animate-in">
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">Academic Profile</h2>
                  <p className="text-gray-600 mb-8">Help us understand your child's learning profile</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-4">
                        Favorite Subjects (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {subjects.map(subject => (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => handleSubjectToggle(subject)}
                            className={`p-3 rounded-lg font-medium transition-all ${formData.subjects.includes(subject)
                              ? 'bg-brand-green text-white'
                              : 'bg-gray-100 text-brand-navy hover:bg-gray-200'
                              }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Key Strengths
                      </label>
                      <textarea
                        name="strengths"
                        value={formData.strengths}
                        onChange={handleInputChange}
                        placeholder="E.g., Good at problem-solving, creative thinking, quick learner..."
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Learning Opportunities (Areas to improve)
                      </label>
                      <textarea
                        name="learningOpportunities"
                        value={formData.learningOpportunities}
                        onChange={handleInputChange}
                        placeholder="E.g., Struggles with focus, needs more practice in writing..."
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Interests & Preferences */}
              {step === 4 && (
                <div className="animate-in">
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">Interests & Preferences</h2>
                  <p className="text-gray-600 mb-8">Tell us what makes your child tick – this helps us keep learning fun!</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        What does your child like? (Interests)
                      </label>
                      <textarea
                        name="likes"
                        value={formData.likes}
                        onChange={handleInputChange}
                        placeholder="E.g., Space, dinosaurs, cooking, animals..."
                        rows={2}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Games Played
                      </label>
                      <textarea
                        name="gamesPlayed"
                        value={formData.gamesPlayed}
                        onChange={handleInputChange}
                        placeholder="E.g., Chess, Minecraft, Roblox, Board games..."
                        rows={2}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Hobbies
                      </label>
                      <textarea
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleInputChange}
                        placeholder="E.g., Drawing, coding, sports, reading..."
                        rows={2}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Favorite Characters/Role Models
                      </label>
                      <textarea
                        name="favoriteCharacters"
                        value={formData.favoriteCharacters}
                        onChange={handleInputChange}
                        placeholder="E.g., Harry Potter, Einstein, Spider-Man, Teacher..."
                        rows={2}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-12 flex gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={step === 1}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${step === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-brand-navy hover:bg-gray-300'
                    }`}
                >
                  Previous
                </button>

                {step === totalSteps ? (
                  <button
                    type="submit"
                    className="flex-1 bg-brand-green hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={20} />
                    Complete Registration
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-brand-green hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </ComingSoonOverlay>
  );
}
