"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@kulisanicapital.com",
      subtitle: "We'll respond within 24 hours",
      href: "mailto:info@kulisanicapital.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+27 72 224 3956",
      subtitle: "Primary Contact Number",
      href: "tel:+27722243956",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Alternative",
      content: "+27 82 338 2653",
      subtitle: "Alternative Contact Number",
      href: "tel:+27823382653",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Alternative",
      content: "+27 83 979 5640",
      subtitle: "Alternative Contact Number",
      href: "tel:+27839795640",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "109 Leeuwkop Rd, 123 The Kanyin",
      subtitle: "Sandton, Gauteng, 2191",
      href: "#",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 - 18:00",
      subtitle: "Sat: 9:00 - 14:00",
      href: "#",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    "Tax Advisory", "Audit Services", "Financial Consulting", 
    "Business Valuations", "Risk Management", "Strategic Planning", "Other"
  ];

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
              📞 Get In Touch
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-brand-black sm:text-6xl">
              Let's Start a 
              <span className="text-brand-gradient-vibrant block mt-2"> Conversation</span>
            </h1>
            <div className="w-24 h-1 bg-brand-gradient-primary rounded-full mx-auto mt-6"></div>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Our expert team is here to provide personalized solutions that drive growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-16 lg:py-24">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.href.startsWith('#') ? (
                    <p className="text-gray-900 font-medium">{info.content}</p>
                  ) : (
                    <a href={info.href} className="text-gray-900 font-medium hover:text-brand-primary transition-colors">
                      {info.content}
                    </a>
                  )}
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-headline text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="border-gray-200 focus:border-brand-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="border-gray-200 focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      required
                      className="border-gray-200 focus:border-brand-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+27 12 345 6789"
                      className="border-gray-200 focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="border-gray-200 focus:border-brand-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or question..."
                    rows={5}
                    required
                    className="border-gray-200 focus:border-brand-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map Placeholder */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-headline mb-6">Why Choose Kulisani Capital?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expert Team</h4>
                      <p className="text-white/80">Seasoned professionals with deep industry knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tailored Solutions</h4>
                      <p className="text-white/80">Customized strategies for your unique business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Proven Results</h4>
                      <p className="text-white/80">Track record of driving sustainable growth</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-gray-500 text-sm">Pretoria, South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
