"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { JobPosition } from "@/data/job-positions";
import { 
  Upload,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  Building,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

interface JobApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentCompany: string;
  experience: string;
  expectedSalary: string;
  startDate: string;
  coverLetter: string;
  resume: File | null;
  portfolio: string;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentCompany: "",
    experience: "",
    expectedSalary: "",
    startDate: "",
    coverLetter: "",
    resume: null,
    portfolio: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData({ ...applicationData, resume: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailContent = `
NEW JOB APPLICATION RECEIVED

Position: ${job?.title}
Department: ${job?.department}

APPLICANT DETAILS:
Name: ${applicationData.firstName} ${applicationData.lastName}
Email: ${applicationData.email}
Phone: ${applicationData.phone}
Current Company: ${applicationData.currentCompany}
Years of Experience: ${applicationData.experience}
Expected Salary: ${applicationData.expectedSalary}
Available Start Date: ${applicationData.startDate}
Portfolio/LinkedIn: ${applicationData.portfolio}

COVER LETTER:
${applicationData.coverLetter}

RESUME: ${applicationData.resume ? applicationData.resume.name : 'Not provided'}

Please review this application and contact the candidate directly.
    `;

    try {
      // In a real application, you would send this to your backend API
      // For now, we'll simulate the email sending
      console.log("Sending application email:", emailContent);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setApplicationData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentCompany: "",
      experience: "",
      expectedSalary: "",
      startDate: "",
      coverLetter: "",
      resume: null,
      portfolio: ""
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!job) return null;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Application Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in the {job.title} position. We'll review your application and get back to you within 5-7 business days.
            </p>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Apply for {job.title}
              </DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-sm">
                  {job.department}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {job.location}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5 text-brand-primary" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={applicationData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={applicationData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={applicationData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  placeholder="+27 12 345 6789"
                  required
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building className="h-5 w-5 text-brand-primary" />
              Professional Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="currentCompany" className="text-sm font-medium text-gray-700">
                  Current Company
                </label>
                <Input
                  id="currentCompany"
                  name="currentCompany"
                  value={applicationData.currentCompany}
                  onChange={handleInputChange}
                  placeholder="Your current employer"
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13+">13+ years</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expectedSalary" className="text-sm font-medium text-gray-700">
                  Expected Salary
                </label>
                <Input
                  id="expectedSalary"
                  name="expectedSalary"
                  value={applicationData.expectedSalary}
                  onChange={handleInputChange}
                  placeholder="e.g., R450,000 - R550,000"
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                  Available Start Date
                </label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={applicationData.startDate}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio" className="text-sm font-medium text-gray-700">
                Portfolio/LinkedIn URL
              </label>
              <Input
                id="portfolio"
                name="portfolio"
                value={applicationData.portfolio}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="border-gray-200 focus:border-brand-primary"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand-primary" />
              Resume & Cover Letter
            </h3>
            
            <div className="space-y-2">
              <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                Resume/CV *
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> your resume
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 5MB)</p>
                    {applicationData.resume && (
                      <p className="mt-2 text-sm text-brand-primary font-medium">
                        Selected: {applicationData.resume.name}
                      </p>
                    )}
                  </div>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="coverLetter" className="text-sm font-medium text-gray-700">
                Cover Letter *
              </label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={applicationData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                rows={6}
                required
                className="border-gray-200 focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </div>
                )}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
