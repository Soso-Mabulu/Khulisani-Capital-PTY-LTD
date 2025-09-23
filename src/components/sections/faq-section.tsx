import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including financial services, banking, retail, manufacturing, and emerging sectors. Our expertise spans across multiple business areas, allowing us to provide tailored solutions regardless of your industry."
  },
  {
    question: "How do you ensure compliance with changing regulations?",
    answer: "Our team stays current with evolving regulations through continuous professional development, regulatory updates, and industry engagement. We proactively monitor changes in IFRS, tax legislation, and other compliance requirements to keep your business ahead of regulatory shifts."
  },
  {
    question: "What makes Kulisani Capital different from other advisory firms?",
    answer: "Our boutique approach combines deep technical expertise with personalized service. We focus on building long-term relationships, providing accessible guidance, and delivering innovative solutions that feel approachable while maintaining the highest professional standards."
  },
  {
    question: "Do you work with small to medium enterprises or only large corporations?",
    answer: "We proudly serve businesses of all sizes. Our scalable service model ensures that whether you're a growing SME or an established corporation, you receive the same high-quality, tailored financial advisory support."
  },
  {
    question: "How quickly can you start working on our project?",
    answer: "We typically can begin initial consultations within 48 hours of contact. Project timelines depend on complexity and scope, but we pride ourselves on responsive service and efficient project initiation while maintaining our quality standards."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1.5 rounded-full text-sm mb-4">
                <HelpCircle className="w-3 h-3" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                Common Questions About
                <span className="block text-brand-primary">Our Services</span>
              </h2>
              <p className="text-base text-brand-black/70">
                Find answers to the most common questions about our financial advisory services and approach.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-medium text-brand-black hover:text-brand-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-brand-black/70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8">
              <Button 
                className="bg-brand-primary hover:bg-brand-purple-600 text-white px-6 py-3"
                asChild
              >
                <Link href="/contact">
                  Get Your Questions Answered
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Images Side */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40">
                <Image
                  src="/images/friendly-african-american-staff-taking-pictures-corporate-office.jpg"
                  alt="Professional African team"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-40">
                <Image
                  src="/images/intercultural-hand-shake-outdoor.jpg"
                  alt="Professional handshake"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div className="relative h-48">
              <Image
                src="/images/man-colleagues-talking-selfie-picture-after-successful-briefing-meeting.jpg"
                alt="Team celebrating success"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="relative h-24">
                <Image
                  src="/images/woman-8797459_1280.jpg"
                  alt="Professional woman"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-24">
                <Image
                  src="/images/nairobi-109492_1280.jpg"
                  alt="African cityscape"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-24">
                <Image
                  src="/images/african-huts-5509918_1280.jpg"
                  alt="African heritage"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}