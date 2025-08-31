import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, GraduationCap, Handshake, ArrowRight } from "lucide-react";

const opportunities = [
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Open Roles",
        description: "Explore current opportunities to join our team of experts. We are always looking for talented professionals to help us drive impact.",
        cta: "View Openings",
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Internship & Graduate Opportunities",
        description: "Kickstart your career with our internship and graduate programs. Gain hands-on experience and mentorship from industry leaders.",
        cta: "Learn More",
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Partnerships & Subcontracting",
        description: "We believe in the power of collaboration. If you are a freelancer or firm with complementary expertise, let's explore how we can work together.",
        cta: "Become a Partner",
    }
]

export default function CareersPage() {
    return (
        <div className="bg-background">
            <div className="container py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Join Our Team
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Become part of a dynamic firm dedicated to elevating African enterprises. We're building a team of passionate, innovative, and impactful professionals.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((opp, index) => (
                        <Card key={index} className="flex flex-col bg-card/50 hover:bg-card/90 transition-colors">
                            <CardHeader>
                                 <div className="mb-4">
                                    {opp.icon}
                                </div>
                                <CardTitle className="font-headline text-xl text-foreground">{opp.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">
                                    {opp.description}
                                </p>
                            </CardContent>
                             <CardFooter>
                                <Button variant="outline" className="w-full">
                                    {opp.cta}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                 <div className="mt-20 text-center bg-card p-8 rounded-lg">
                    <h2 className="font-headline text-2xl font-bold text-foreground">No open roles that fit your profile?</h2>
                    <p className="mt-4 text-muted-foreground">We are always interested in hearing from exceptional talent. Send us your resume and tell us why you'd be a great fit for Kulisani Capital.</p>
                    <Button className="mt-6">
                        <a href="mailto:careers@kulisani.co.za">Submit Your CV</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
