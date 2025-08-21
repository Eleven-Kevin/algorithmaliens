import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We specialize in custom algorithm development, AI and machine learning consulting, and data analysis solutions. Our team works with you to understand your unique challenges and build tailored technological solutions.',
  },
  {
    question: 'Who are your typical clients?',
    answer:
      'We work with a diverse range of clients, from tech startups to established enterprises across various industries including finance, healthcare, logistics, and more. Anyone with a complex problem that can be solved with data and algorithms is a potential partner.',
  },
  {
    question: 'How do you approach a new project?',
    answer:
      'Our process begins with a deep discovery phase to fully understand your goals and constraints. We then move to a collaborative design and development cycle, with iterative feedback loops to ensure the final product meets your exact needs. We prioritize transparency and communication throughout the project.',
  },
  {
    question: 'What is an "algorithm alien"?',
    answer:
      'It\'s our playful term for our team of expert engineers and data scientists. They possess an "out-of-this-world" ability to tackle complex algorithmic problems that seem alien to others. It represents our commitment to innovative, forward-thinking solutions.',
  },
];

export default function HelpSection() {
  return (
    <section id="help" className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Need Help?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">Frequently Asked Questions</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-primary-foreground/20">
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-primary-foreground/90 pt-2 leading-relaxed">
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
