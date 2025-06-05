"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Upload, CheckCircle, Building, MapPin, Clock, DollarSign, User, Mail, Phone, FileText, Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

interface ApplicationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  experience: {
    currentPosition: string;
    yearsExperience: string;
    previousCompany: string;
    education: string;
  };
  documents: {
    resume: File | null;
    coverLetter: File | null;
  };
  additionalInfo: string;
}

const JobApplicationWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    },
    experience: {
      currentPosition: '',
      yearsExperience: '',
      previousCompany: '',
      education: ''
    },
    documents: {
      resume: null,
      coverLetter: null
    },
    additionalInfo: ''
  });

  // Sample job data
  const jobData: JobData = {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Mongolia',
    location: 'Ulaanbaatar, Mongolia',
    type: 'Full-time',
    salary: '₮2,500,000 - ₮3,500,000',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern technologies.',
    requirements: [
      '3+ years of React/Next.js experience',
      'Strong TypeScript knowledge',
      'Experience with modern CSS frameworks',
      'Knowledge of state management (Redux, Zustand)',
      'Experience with testing frameworks'
    ]
  };

  const steps = [
    { title: 'Job Details', icon: Briefcase },
    { title: 'Personal Info', icon: User },
    { title: 'Experience', icon: GraduationCap },
    { title: 'Documents', icon: FileText },
    { title: 'Review & Submit', icon: CheckCircle }
  ];

  const handlePersonalInfoChange = (field: keyof ApplicationData['personalInfo'], value: string) => {
    setApplicationData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleExperienceChange = (field: keyof ApplicationData['experience'], value: string) => {
    setApplicationData(prev => ({
      ...prev,
      experience: {
        ...prev.experience,
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field: keyof ApplicationData['documents'], file: File | null) => {
    setApplicationData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        const { firstName, lastName, email, phone } = applicationData.personalInfo;
        return !!(firstName && lastName && email && phone);
      case 2:
        const { currentPosition, yearsExperience, education } = applicationData.experience;
        return !!(currentPosition && yearsExperience && education);
      case 3:
        return !!applicationData.documents.resume;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitApplication = () => {
    alert('Application submitted successfully!');
    // Here you would typically send the data to your backend
    console.log('Application Data:', applicationData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{jobData.title}</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-5 h-5" />
                  <span>{jobData.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{jobData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{jobData.type}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-5 h-5" />
                  <span>{jobData.salary}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Job Description</h3>
              <p className="text-gray-600 mb-4">{jobData.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {jobData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={applicationData.personalInfo.firstName}
                  onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={applicationData.personalInfo.lastName}
                  onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={applicationData.personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={applicationData.personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+976 XXXX XXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={applicationData.personalInfo.address}
                onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Enter your full address"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Position *</label>
                <input
                  type="text"
                  value={applicationData.experience.currentPosition}
                  onChange={(e) => handleExperienceChange('currentPosition', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Frontend Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                <select
                  value={applicationData.experience.yearsExperience}
                  onChange={(e) => handleExperienceChange('yearsExperience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Previous Company</label>
                <input
                  type="text"
                  value={applicationData.experience.previousCompany}
                  onChange={(e) => handleExperienceChange('previousCompany', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education *</label>
                <select
                  value={applicationData.experience.education}
                  onChange={(e) => handleExperienceChange('education', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select education</option>
                  <option value="high-school">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">
                    {applicationData.documents.resume ? 
                      applicationData.documents.resume.name : 
                      'Click to upload or drag and drop your resume'
                    }
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload('resume', e.target.files?.[0] || null)}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Choose File
                  </label>
                  <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">
                    {applicationData.documents.coverLetter ? 
                      applicationData.documents.coverLetter.name : 
                      'Click to upload your cover letter'
                    }
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload('coverLetter', e.target.files?.[0] || null)}
                    className="hidden"
                    id="cover-letter-upload"
                  />
                  <label
                    htmlFor="cover-letter-upload"
                    className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    Choose File
                  </label>
                  <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
              <textarea
                value={applicationData.additionalInfo}
                onChange={(e) => setApplicationData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Tell us why you're a great fit for this role..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Review Your Application</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                <p className="text-gray-600">
                  {applicationData.personalInfo.firstName} {applicationData.personalInfo.lastName}
                </p>
                <p className="text-gray-600">{applicationData.personalInfo.email}</p>
                <p className="text-gray-600">{applicationData.personalInfo.phone}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                <p className="text-gray-600">Current Position: {applicationData.experience.currentPosition}</p>
                <p className="text-gray-600">Experience: {applicationData.experience.yearsExperience}</p>
                <p className="text-gray-600">Education: {applicationData.experience.education}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Documents</h4>
                <p className="text-gray-600">
                  Resume: {applicationData.documents.resume ? '✓ Uploaded' : '✗ Not uploaded'}
                </p>
                <p className="text-gray-600">
                  Cover Letter: {applicationData.documents.coverLetter ? '✓ Uploaded' : '✗ Not uploaded'}
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    By submitting this application, you confirm that all information provided is accurate and complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Progress Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isActive ? 'bg-white text-blue-600 border-white' :
                    isCompleted ? 'bg-green-500 text-white border-green-500' :
                    'bg-transparent text-white border-white/50'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-white/30 mx-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="border-t bg-gray-50 px-6 py-4 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          
          {currentStep === steps.length - 1 ? (
            <button
              onClick={submitApplication}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit Application
              <CheckCircle className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationWorkflow;