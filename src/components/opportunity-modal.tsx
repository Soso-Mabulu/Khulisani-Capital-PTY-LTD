"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { JobPosition } from "@/data/job-positions";
import { 
  MapPin, 
  DollarSign, 
  Clock,
  Building,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Handshake,
  Search,
  Filter
} from "lucide-react";
import { useState, useMemo } from "react";

interface OpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunityType: 'full-time' | 'internship' | 'contract' | null;
  positions: JobPosition[];
  onJobClick: (job: JobPosition) => void;
}

export function OpportunityModal({ 
  isOpen, 
  onClose, 
  opportunityType, 
  positions, 
  onJobClick 
}: OpportunityModalProps) {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  // Get unique departments from positions
  const departments = useMemo(() => {
    const depts = positions.map(job => job.department);
    return Array.from(new Set(depts));
  }, [positions]);

  // Get unique experience levels from positions
  const experienceLevels = useMemo(() => {
    const levels = positions.map(job => job.experience);
    return Array.from(new Set(levels));
  }, [positions]);

  // Filter positions based on search and filters
  const filteredPositions = useMemo(() => {
    return positions.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
      const matchesExperience = !selectedExperience || job.experience === selectedExperience;
      
      return matchesSearch && matchesDepartment && matchesExperience;
    });
  }, [positions, searchTerm, selectedDepartment, selectedExperience]);

  // Reset filters when modal closes or opportunity type changes
  const handleClose = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSelectedExperience("");
    onClose();
  };
  
  const getOpportunityInfo = () => {
    switch (opportunityType) {
      case 'full-time':
        return {
          title: "Full-Time Career Opportunities",
          description: "Join our permanent team and build a long-term career with growth opportunities, comprehensive benefits, and meaningful work.",
          icon: <Briefcase className="h-8 w-8 text-blue-600" />,
          color: "from-blue-500 to-blue-600"
        };
      case 'internship':
        return {
          title: "Internships & Graduate Programs",
          description: "Start your career journey with mentorship, training, and hands-on experience in a supportive environment.",
          icon: <GraduationCap className="h-8 w-8 text-green-600" />,
          color: "from-green-500 to-green-600"
        };
      case 'contract':
        return {
          title: "Contract & Partnership Opportunities",
          description: "Collaborate with us on specific projects or explore subcontracting opportunities with our expert team.",
          icon: <Handshake className="h-8 w-8 text-purple-600" />,
          color: "from-purple-500 to-purple-600"
        };
      default:
        return {
          title: "Opportunities",
          description: "",
          icon: <Briefcase className="h-8 w-8" />,
          color: "from-gray-500 to-gray-600"
        };
    }
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
      case 'Part-time': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contract': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Internship': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const opportunityInfo = getOpportunityInfo();

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${opportunityInfo.color} rounded-xl flex items-center justify-center text-white`}>
              {opportunityInfo.icon}
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {opportunityInfo.title}
              </DialogTitle>
              <p className="text-gray-600 mt-2">
                {opportunityInfo.description}
              </p>
            </div>
          </div>
        </DialogHeader>

        {positions.length > 0 ? (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Available Positions ({filteredPositions.length} of {positions.length})
                  </h3>
                  {(searchTerm || selectedDepartment || selectedExperience) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedDepartment("");
                        setSelectedExperience("");
                      }}
                      className="text-xs"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search positions, departments, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* Department Filter */}
                {departments.length > 1 && (
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent min-w-[150px]"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                )}
                
                {/* Experience Filter */}
                {experienceLevels.length > 1 && (
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent min-w-[150px]"
                  >
                    <option value="">All Levels</option>
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            
            {/* Results */}
            {filteredPositions.length > 0 ? (
              <div className="grid gap-4">
                {filteredPositions.map((job) => (
                  <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200" onClick={() => onJobClick(job)}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <Badge className={`${getTypeColor(job.type)} border text-xs`}>
                              {job.type}
                            </Badge>
                            <Badge className={`${getExperienceColor(job.experience)} border text-xs`}>
                              {job.experience}
                            </Badge>
                          </div>
                          <CardTitle className="font-headline text-lg text-gray-900 group-hover:text-brand-primary transition-colors">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:bg-brand-primary group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            onJobClick(job);
                          }}
                        >
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {job.description}
                      </p>
                      <div className="mt-3 text-xs text-gray-500">
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Positions Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No positions match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("");
                    setSelectedExperience("");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className={`w-16 h-16 bg-gradient-to-r ${opportunityInfo.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 opacity-50`}>
              {opportunityInfo.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Current Openings
            </h3>
            <p className="text-gray-600 mb-6">
              We don't have any {opportunityType} positions available at the moment, but we're always growing! 
              Check back soon or submit your CV for future opportunities.
            </p>
            <Button 
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white"
              onClick={() => window.location.href = 'mailto:info@kulisanicapital.com?subject=Future Opportunities - Kulisani Capital'}
            >
              Submit Your CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Can't find what you're looking for? 
              <a href="mailto:info@kulisanicapital.com" className="text-brand-primary hover:underline ml-1">
                Contact our HR team
              </a>
            </p>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
