# Kulisani Capital - Professional Financial Services Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, professional website for **Kulisani Capital (Pty) Ltd**, a boutique professional services firm specializing in precision-driven financial and strategic advisory solutions. Built with Next.js 15, React 18, TypeScript, and enhanced with AI-powered customer support.

## 🏢 About Kulisani Capital

Kulisani Capital is a trusted financial advisory partner with over 30 years of combined experience, founded by seasoned Chartered Accountants. We serve diverse clients across multiple sectors, delivering tailored solutions that meet unique challenges and strategic goals.

### Our Core Services

- **Accounting & Technical Advisory** - IFRS implementation, complex group consolidations
- **Valuations & Due Diligence** - Business valuations, financial due diligence, deal structuring
- **Tax Advisory** - Corporate tax planning, SARS engagement, optimization strategies
- **Audit Readiness & Review** - External audit preparation, internal control assessments
- **Financial Modelling & Forecasting** - Bespoke financial models, scenario planning
- **Business Automation & IT Solutions** - Low-code automation, digital transformation

## ✨ Key Features

### 🎯 Professional Corporate Website

- **Modern Design System** - Clean, professional aesthetic with custom brand gradients
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Performance Optimized** - Built with Next.js 15 and Turbopack for fast loading
- **Accessibility Focused** - WCAG compliant with semantic HTML structure

### 🤖 AI-Powered Customer Support

- **Intelligent Chatbot** - Custom AI assistant powered by Google Genkit
- **Financial Expertise** - Trained on company services and financial advisory knowledge
- **Real-time Assistance** - Instant responses to client inquiries
- **Professional Tone** - Maintains brand voice and industry expertise

### 💼 Advanced Careers System

- **Dynamic Job Management** - Admin-editable job positions with comprehensive filtering
- **Modal-Based Interface** - Professional job browsing experience
- **Search & Filter** - Advanced filtering by department, experience level, and keywords
- **Application System** - Integrated job application process with file upload
- **Opportunity Categories** - Organized by Full-time, Graduate/Internship, and Contract roles

### 🎨 Premium UI Components

- **shadcn/ui Integration** - High-quality, accessible component library
- **Custom Brand Components** - Tailored design system matching corporate identity
- **Interactive Animations** - Smooth transitions and hover effects
- **Professional Forms** - Contact forms with validation and submission handling

## 🚀 Technology Stack

### Frontend Framework

- **Next.js 15.3.3** - React framework with App Router and Server Components
- **React 18.3.1** - Latest React with concurrent features
- **TypeScript 5.0+** - Full type safety and enhanced developer experience

### Styling & UI

- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom configuration
- **shadcn/ui** - Modern component library built on Radix UI primitives
- **Lucide React** - Beautiful, customizable icon library
- **Custom Brand System** - Tailored color palette and typography

### AI & Machine Learning

- **Google Genkit 1.14.1** - AI framework for building intelligent applications
- **Gemini 1.5 Flash** - Google's advanced language model for customer support
- **Server Actions** - Secure server-side AI processing

### Development Tools

- **ESLint & TypeScript** - Code quality and type checking
- **PostCSS** - CSS processing and optimization
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage with all sections
│   ├── about/page.tsx           # Detailed about page
│   ├── services/page.tsx        # Comprehensive services overview
│   ├── careers/page.tsx         # Careers with modal job system
│   ├── contact/page.tsx         # Enhanced contact page
│   ├── layout.tsx               # Root layout with navigation
│   └── globals.css              # Global styles and custom CSS
├── components/                   # Reusable React components
│   ├── sections/                # Homepage sections
│   │   ├── hero-section.tsx     # Hero banner with CTA
│   │   ├── about-section.tsx    # Company overview
│   │   ├── mission-section.tsx  # Mission, vision, purpose
│   │   ├── values-section.tsx   # Core company values
│   │   ├── services-section.tsx # Services preview
│   │   ├── teams-section.tsx    # Specialist teams
│   │   └── faq-section.tsx      # Frequently asked questions
│   ├── ui/                      # shadcn/ui components
│   ├── chatbot.tsx              # AI-powered customer support
│   ├── job-modal.tsx            # Job details modal
│   ├── job-application-modal.tsx # Application form modal
│   ├── opportunity-modal.tsx    # Filtered job opportunities
│   ├── site-header.tsx          # Navigation header
│   └── site-footer.tsx          # Footer with contact info
├── ai/                          # AI integration
│   ├── genkit.ts               # AI configuration
│   └── flows/                  # AI conversation flows
│       └── site-chat-flow.ts   # Customer support chatbot logic
├── data/                        # Application data
│   └── job-positions.ts         # Admin-editable job positions
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection
│   └── use-toast.ts            # Toast notifications
└── lib/                         # Utility functions
    └── utils.ts                # Shared utilities and helpers
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** 8.0 or later (recommended)
- **Git** for version control

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/kulisani-capital.git
   cd kulisani-capital
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following in `.env.local`:

   ```env
   # Google AI (for chatbot)
   GOOGLE_GENAI_API_KEY=your_google_ai_api_key

   # Optional: Firebase (if using analytics)
   NEXT_PUBLIC_FIREBASE_CONFIG=your_firebase_config
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## 🎮 AI Chatbot Setup

The website includes an intelligent customer support chatbot powered by Google Genkit.

### Development Mode

```bash
# Start the AI development server
pnpm genkit:dev

# Start with file watching
pnpm genkit:watch
```

### Configuration

The chatbot is configured in `src/ai/genkit.ts` and the conversation flow is defined in `src/ai/flows/site-chat-flow.ts`. It's trained on:

- Company services and expertise
- Financial advisory knowledge
- Contact information and booking procedures
- Industry-specific terminology

## 💼 Content Management

### Job Positions Management

Administrators can easily manage job positions through the `src/data/job-positions.ts` file:

```typescript
// Add new positions
{
  id: 7,
  title: "Senior Financial Analyst",
  department: "Financial Advisory",
  location: "Pretoria, South Africa",
  type: "Full-time",
  experience: "Senior Level",
  salary: "R450,000 - R650,000",
  isActive: true,
  description: "Join our growing team...",
  // ... additional fields
}
```

### Content Updates

- **Company Information**: Update `src/components/sections/about-section.tsx`
- **Services**: Modify `src/components/sections/services-section.tsx`
- **Team Information**: Edit `src/components/sections/teams-section.tsx`
- **Contact Details**: Update `src/components/site-footer.tsx`

## 🎨 Design System

### Brand Colors

```css
/* Primary Brand Colors */
--brand-primary: #4a5568; /* Dark grayish-blue */
--brand-secondary: #f7fafc; /* Light grayish-blue */
--brand-accent: #90cdf4; /* Soft blue */

/* Custom Gradients */
--brand-gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--brand-gradient-card: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### Typography

- **Headlines**: Space Grotesk (bold, professional)
- **Body Text**: Inter (clean, readable)
- **Responsive scales** for mobile and desktop

### Component Standards

- Consistent padding and margin scales
- Hover states and smooth transitions
- Accessible color contrasts
- Mobile-first responsive design

## 📱 Features Overview

### Homepage Sections

1. **Hero Section** - Compelling introduction with call-to-action
2. **About Section** - Company overview with visual elements
3. **Mission Section** - Mission, vision, purpose, and promise
4. **Values Section** - Core company values with icons
5. **Services Section** - Service categories with links
6. **Teams Section** - Specialist team descriptions
7. **FAQ Section** - Common questions and answers

### Dedicated Pages

- **About** - Detailed company story and leadership
- **Services** - Comprehensive service descriptions
- **Careers** - Interactive job search with modals
- **Contact** - Professional contact form and information

### Interactive Elements

- **AI Chatbot** - Floating chat interface with professional responses
- **Job Search** - Advanced filtering and search capabilities
- **Modal System** - Professional job and application modals
- **Contact Forms** - Validated forms with success feedback

## 🔧 Customization

### Styling

The website uses a custom Tailwind configuration with brand-specific colors, gradients, and animations. Modify `tailwind.config.ts` to adjust the design system.

### Components

All components are modular and reusable. The `src/components/ui/` directory contains the base component library, while custom components are in the main `components/` directory.

### AI Responses

Customize the chatbot's knowledge base by modifying the system prompt in `src/ai/flows/site-chat-flow.ts`.

## 📊 Performance

### Optimization Features

- **Next.js 15** with Turbopack for fast development
- **Server Components** for reduced client-side JavaScript
- **Image Optimization** with Next.js Image component
- **Code Splitting** with dynamic imports
- **CSS Optimization** with Tailwind CSS purging

### Best Practices Implemented

- Semantic HTML structure
- Proper meta tags and SEO optimization
- Accessible components with ARIA attributes
- Performance monitoring ready
- Type-safe development with TypeScript

## 🤝 Contributing

We welcome contributions to improve the Kulisani Capital website. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Standards

- Follow TypeScript best practices
- Maintain consistent code formatting
- Write meaningful commit messages
- Test changes across different devices
- Update documentation as needed

## 📄 License

This project is proprietary software belonging to Kulisani Capital (Pty) Ltd. All rights reserved.

## 📞 Support & Contact

**Kulisani Capital (Pty) Ltd**

- 📧 Email: info@kulisani.co.za
- 📱 Phone: +27 12 345 6789
- 📍 Location: Pretoria, South Africa
- 🌐 Website: [kulisani.co.za](https://kulisani.co.za)

**Development Support**
For technical issues or questions about the website, please contact the development team or create an issue in the repository.

---

_Built with ❤️ using Next.js, React, and modern web technologies for Kulisani Capital - Your trusted financial advisory partner._
