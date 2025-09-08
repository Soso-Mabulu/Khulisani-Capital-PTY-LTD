// ===========================================================================
// JOB POSITIONS DATA - ADMIN EDIT ZONE
// ===========================================================================
// 
// INSTRUCTIONS FOR ADMINS:
// 1. To add a new job position, copy an existing job object and modify it
// 2. To edit a position, simply change the values in the job object
// 3. To remove a position, delete the entire job object
// 4. Make sure to keep the comma after each job object (except the last one)
// 5. Save the file after making changes
//
// REQUIRED FIELDS:
// - id: unique number for each position
// - title: job title
// - department: which department
// - location: work location
// - type: employment type
// - experience: required experience level
// - salary: salary range (can be "Competitive" if not disclosed)
// - isActive: true to show position, false to hide
// - description: brief job description
// - responsibilities: array of key responsibilities
// - requirements: array of job requirements
// - benefits: array of company benefits
// - postedDate: when the job was posted (YYYY-MM-DD format)
// 
// ===========================================================================

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive';
  salary: string;
  isActive: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

// ===========================================================================
// JOB POSITIONS LIST - EDIT BELOW THIS LINE
// ===========================================================================

export const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Financial Analyst",
    department: "Finance",
    location: "Pretoria, South Africa",
    type: "Full-time",
    experience: "Senior Level",
    salary: "R450,000 - R650,000",
    isActive: true,
    description: "We are seeking a Senior Financial Analyst to join our dynamic team. You will be responsible for financial planning, analysis, and reporting to support strategic business decisions.",
    responsibilities: [
      "Conduct comprehensive financial analysis and modeling",
      "Prepare detailed financial reports and presentations",
      "Support budgeting and forecasting processes",
      "Identify trends and provide strategic recommendations",
      "Collaborate with cross-functional teams on projects",
      "Mentor junior analysts and support team development"
    ],
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "CFA or CA(SA) qualification preferred",
      "5+ years of experience in financial analysis",
      "Advanced Excel and financial modeling skills",
      "Experience with ERP systems and financial software",
      "Strong analytical and problem-solving abilities",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Medical aid and pension fund contributions",
      "Professional development opportunities",
      "Flexible working arrangements",
      "25 days annual leave",
      "Training and certification support"
    ],
    postedDate: "2025-09-01"
  },
  {
    id: 2,
    title: "Tax Consultant",
    department: "Tax Advisory",
    location: "Pretoria, South Africa",
    type: "Full-time",
    experience: "Mid Level",
    salary: "R350,000 - R500,000",
    isActive: true,
    description: "Join our Tax Advisory team as a Tax Consultant. You will provide expert tax advice to clients, ensure compliance, and support tax planning strategies.",
    responsibilities: [
      "Provide tax advisory services to corporate clients",
      "Prepare and review tax returns and computations",
      "Research tax legislation and regulatory changes",
      "Support tax planning and optimization strategies",
      "Assist with tax audits and SARS interactions",
      "Maintain client relationships and provide ongoing support"
    ],
    requirements: [
      "Bachelor's degree in Accounting, Taxation, or related field",
      "Post-graduate tax qualification (HDip Tax) preferred",
      "3-5 years of tax consulting experience",
      "Strong knowledge of South African tax legislation",
      "Experience with tax software and systems",
      "Attention to detail and strong analytical skills",
      "Client-focused with excellent communication skills"
    ],
    benefits: [
      "Competitive salary with annual reviews",
      "Medical aid and retirement fund",
      "Continuing professional development",
      "Flexible work arrangements",
      "Performance-based incentives",
      "Professional membership support"
    ],
    postedDate: "2025-08-28"
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Business Development",
    location: "Pretoria, South Africa",
    type: "Full-time",
    experience: "Senior Level",
    salary: "R550,000 - R750,000",
    isActive: true,
    description: "We are looking for a dynamic Business Development Manager to drive growth and expand our client base. You will identify new opportunities and build strategic partnerships.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Develop and maintain strategic client relationships",
      "Create and execute business development strategies",
      "Conduct market research and competitive analysis",
      "Prepare proposals and presentations for clients",
      "Collaborate with internal teams to deliver solutions",
      "Represent the company at industry events and conferences"
    ],
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "MBA or professional qualification preferred",
      "7+ years of business development experience",
      "Proven track record in B2B sales and relationship management",
      "Strong understanding of financial services industry",
      "Excellent negotiation and presentation skills",
      "Strategic thinking and analytical abilities"
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Medical aid and pension contributions",
      "Car allowance or company vehicle",
      "Professional development budget",
      "Performance bonuses and incentives",
      "Flexible working arrangements"
    ],
    postedDate: "2025-09-03"
  },
  {
    id: 4,
    title: "Junior Auditor",
    department: "Audit Services",
    location: "Pretoria, South Africa",
    type: "Full-time",
    experience: "Entry Level",
    salary: "R220,000 - R300,000",
    isActive: true,
    description: "Kickstart your career in auditing with our Junior Auditor position. You will gain hands-on experience in audit procedures and support senior team members.",
    responsibilities: [
      "Assist in planning and executing audit engagements",
      "Perform audit testing and document findings",
      "Support senior auditors with fieldwork and analysis",
      "Prepare working papers and audit documentation",
      "Assist with client communication and queries",
      "Participate in team meetings and training sessions"
    ],
    requirements: [
      "Bachelor's degree in Accounting or related field",
      "SAICA articles or willingness to pursue CA(SA)",
      "0-2 years of audit experience",
      "Strong attention to detail and accuracy",
      "Basic knowledge of accounting standards",
      "Good communication and teamwork skills",
      "Proficiency in MS Office and audit software"
    ],
    benefits: [
      "Competitive starting salary",
      "Comprehensive training program",
      "SAICA articles and study support",
      "Medical aid and pension fund",
      "Mentorship and career development",
      "Study leave and exam support"
    ],
    postedDate: "2025-08-25"
  },
  {
    id: 5,
    title: "Finance Intern",
    department: "Finance",
    location: "Pretoria, South Africa",
    type: "Internship",
    experience: "Entry Level",
    salary: "R8,000 - R12,000 per month",
    isActive: true,
    description: "Our Finance Internship program offers recent graduates the opportunity to gain practical experience in corporate finance and develop professional skills.",
    responsibilities: [
      "Support financial reporting and analysis activities",
      "Assist with budget preparation and variance analysis",
      "Help with data collection and report preparation",
      "Participate in special projects and initiatives",
      "Learn and apply financial analysis techniques",
      "Attend training sessions and workshops"
    ],
    requirements: [
      "Bachelor's degree in Finance, Accounting, or Economics",
      "Recent graduate (within 12 months)",
      "Strong academic record",
      "Proficiency in Excel and basic financial concepts",
      "Eagerness to learn and develop skills",
      "Good communication and interpersonal skills",
      "Ability to work in a team environment"
    ],
    benefits: [
      "Monthly stipend",
      "Comprehensive training and mentorship",
      "Real-world business experience",
      "Networking opportunities",
      "Potential for permanent placement",
      "Certificate of completion"
    ],
    postedDate: "2025-09-05"
  },
  {
    id: 6,
    title: "IT Systems Administrator",
    department: "Information Technology",
    location: "Pretoria, South Africa",
    type: "Full-time",
    experience: "Mid Level",
    salary: "R400,000 - R550,000",
    isActive: false,  // This position is currently not active
    description: "We are seeking an IT Systems Administrator to manage our technology infrastructure and support business operations.",
    responsibilities: [
      "Manage and maintain IT infrastructure and systems",
      "Ensure network security and data protection",
      "Provide technical support to users",
      "Implement and maintain backup and disaster recovery procedures",
      "Monitor system performance and troubleshoot issues",
      "Support software installations and updates"
    ],
    requirements: [
      "Bachelor's degree in Information Technology or related field",
      "3-5 years of systems administration experience",
      "Experience with Windows Server and Active Directory",
      "Knowledge of network security and protocols",
      "Strong problem-solving and troubleshooting skills",
      "Excellent communication and documentation skills"
    ],
    benefits: [
      "Competitive salary",
      "Medical aid and pension fund",
      "Professional development opportunities",
      "Flexible working arrangements",
      "Technology allowance"
    ],
    postedDate: "2025-08-20"
  }
];

// ===========================================================================
// HELPER FUNCTIONS - DO NOT EDIT
// ===========================================================================

export const getActivePositions = (): JobPosition[] => {
  return jobPositions.filter(job => job.isActive);
};

export const getPositionById = (id: number): JobPosition | undefined => {
  return jobPositions.find(job => job.id === id);
};

export const getPositionsByDepartment = (department: string): JobPosition[] => {
  return jobPositions.filter(job => job.department === department && job.isActive);
};

export const getDepartments = (): string[] => {
  const departments = jobPositions
    .filter(job => job.isActive)
    .map(job => job.department);
  return Array.from(new Set(departments));
};
