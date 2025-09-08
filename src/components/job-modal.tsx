"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { JobPosition } from "@/data/job-positions";
import { 
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  Calendar,
  CheckCircle,
  Star,
  Building,
  Send
} from "lucide-react";

interface JobModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: JobPosition) => void;
}

export function JobModal({ job, isOpen, onClose, onApply }: JobModalProps) {
  if (!job) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
      case 'Part-time': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Contract': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Internship': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            {/* Header Section */}
            <DialogHeader className="space-y-4 pb-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <DialogTitle className="text-3xl font-bold text-gray-900 leading-tight">
                    {job.title}
                  </DialogTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{job.department}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={`${getExperienceColor(job.experience)} border`}>
                    {job.experience}
                  </Badge>
                  <Badge className={`${getTypeColor(job.type)} border`}>
                    {job.type}
                  </Badge>
                </div>
              </div>
              
              {/* Job Meta Information */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Posted {formatDate(job.postedDate)}</span>
                </div>
              </div>
            </DialogHeader>

            <Separator className="my-6" />

            {/* Job Description */}
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  About This Role
                </h3>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </section>

              {/* Responsibilities */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  Key Responsibilities
                </h3>
                <div className="grid gap-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  Requirements
                </h3>
                <div className="grid gap-3">
                  {job.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                      <Star className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  What We Offer
                </h3>
                <div className="grid gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Apply Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ready to Apply?</h3>
                  <p className="text-white/90">
                    Join our team and help drive impactful solutions for African enterprises.
                  </p>
                </div>
                <Button
                  onClick={() => onApply(job)}
                  className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-6 py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
