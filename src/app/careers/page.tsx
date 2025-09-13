"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JobModal } from "@/components/job-modal";
import { JobApplicationModal } from "@/components/job-application-modal";
import { OpportunityModal } from "@/components/opportunity-modal";
import { getActivePositions, getDepartments, JobPosition } from "@/data/job-positions";
import { 
  Briefcase, 
  GraduationCap, 
  Handshake, 
  ArrowRight, 
  MapPin, 
  DollarSign, 
  Building
} from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [selectedOpportunityType, setSelectedOpportunityType] = useState<'full-time' | 'internship' | 'contract' | null>(null);

  const jobPositions = getActivePositions();

  const handleJobClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsJobModalOpen(false);
    setIsApplicationModalOpen(true);
  };

  const handleOpportunityClick = (type: 'full-time' | 'internship' | 'contract') => {
    setSelectedOpportunityType(type);
    setIsOpportunityModalOpen(true);
  };

  const getPositionsByType = (type: 'full-time' | 'internship' | 'contract') => {
    switch (type) {
      case 'full-time':
        return jobPositions.filter(job => job.type === 'Full-time');
      case 'internship':
        return jobPositions.filter(job => job.type === 'Internship');
      case 'contract':
        return jobPositions.filter(job => job.type === 'Contract');
      default:
        return [];
    }
  };

  const opportunities = [
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Full-Time Careers",
      description: "Join our permanent team and build a long-term career with growth opportunities, comprehensive benefits, and meaningful work.",
      cta: "View Open Roles",
      color: "from-blue-500 to-blue-600",
      count: jobPositions.filter(job => job.type === 'Full-time').length,
      type: 'full-time' as const
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Internships & Graduate Programs",
      description: "Start your career journey with mentorship, training, and hands-on experience in a supportive environment.",
      cta: "Explore Programs",
      color: "from-green-500 to-green-600",
      count: jobPositions.filter(job => job.type === 'Internship').length,
      type: 'internship' as const
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      title: "Contract & Partnership",
      description: "Collaborate with us on specific projects or explore subcontracting opportunities with our expert team.",
      cta: "Partner With Us",
      color: "from-purple-500 to-purple-600",
      count: jobPositions.filter(job => job.type === 'Contract').length,
      type: 'contract' as const
    }
  ];

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Entry Level': return 'bg-green-100 text-green-800 border-green-200';
      case 'Mid Level': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Senior Level': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Executive': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Part-time': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contract': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Internship': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center bg-brand-gradient-hero overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl float-brand"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brand-primary/10 rounded-full blur-lg float-brand" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-brand-accent/15 rounded-full blur-2xl float-brand" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container relative py-16 lg:py-24 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-brand-accent/10 text-brand-accent border-brand-accent/20">
              🚀 Join Our Team
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-brand-black sm:text-6xl">
              Build Your Career with 
              <span className="text-brand-gradient-vibrant block mt-2"> Kulisani</span>
            </h1>
            <div className="w-24 h-1 bg-brand-gradient-primary rounded-full mx-auto mt-6"></div>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team dedicated to elevating African enterprises. We're building the future of financial services with passionate, innovative professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16 lg:py-24">
        {/* Opportunities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-gray-900 mb-4">
              Career Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the perfect role for your skills and ambitions. We offer diverse opportunities across all experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {opportunities.map((opp, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 backdrop-blur-sm overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-r ${opp.color} flex items-center justify-center relative`}>
                    {opp.icon}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">{opp.count} open</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold text-gray-900 mb-3">
                      {opp.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {opp.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
                      onClick={() => handleOpportunityClick(opp.type)}
                    >
                      {opp.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* General Application Section */}
        <Card className="bg-gradient-to-r from-brand-primary to-brand-accent text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Don't see the perfect role?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We're always interested in hearing from exceptional talent. Send us your resume and tell us why you'd be a great fit for Kulisani Capital.
            </p>
            <Button 
              className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => window.location.href = 'mailto:careers@kulisani.co.za?subject=General Application - Kulisani Capital'}
            >
              Submit Your CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      <JobModal
        job={selectedJob}
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        onApply={handleApplyClick}
      />

      <JobApplicationModal
        job={selectedJob}
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />

      <OpportunityModal
        isOpen={isOpportunityModalOpen}
        onClose={() => setIsOpportunityModalOpen(false)}
        opportunityType={selectedOpportunityType}
        positions={selectedOpportunityType ? getPositionsByType(selectedOpportunityType) : []}
        onJobClick={handleJobClick}
      />
    </div>
  );
}
