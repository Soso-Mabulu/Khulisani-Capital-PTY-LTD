import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What does Kulisani Capital do?",
        answer: "Kulisani Capital is a boutique professional services firm offering high-impact financial advisory solutions. Our services include accounting and technical advisory, valuations and due diligence, tax consulting, audit readiness, financial modeling, and business automation. We help businesses make informed decisions with confidence and clarity."
    },
    {
        question: "Is Kulisani Capital a licensed provider?",
        answer: "Yes. Kulisani Capital (Pty) Ltd is a registered South African entity founded by Chartered Accountants (CA(SA)) with over 30 years of combined experience. Our team adheres to the highest professional and ethical standards, ensuring full compliance with regulatory frameworks."
    },
    {
        question: "How do I request a consultation or quote?",
        answer: "You can reach out to us via our Contact Us page or email us directly. Once we understand your needs, we’ll tailor a proposal or engagement plan that suits your business objectives."
    },
    {
        question: "How do I prepare for an engagement or submit documentation?",
        answer: "Once your engagement is confirmed, we’ll guide you through a streamlined onboarding process. This includes a checklist of required documents and a secure channel for submission. Our team ensures minimal friction and maximum efficiency throughout."
    },
    {
        question: "What industries do you work with?",
        answer: "We serve a diverse client base across multiple sectors — from startups and SMEs to large enterprises. Our experience spans financial services, fintech, manufacturing, professional services, and more."
    },
]

export default function FaqSection() {
    return (
        <section id="faq" className="py-16 lg:py-24">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find quick answers to common questions about our services and processes.
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
