import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import QueryForm from './query-form';

const faqs = [
  {
    category: 'About Certifications',
    items: [
      {
        question: 'How long does it take to complete a certification?',
        answer: 'Our certifications typically take 4-6 weeks to complete, depending on your pace and prior experience.',
      },
      {
        question: 'What are the prerequisites for enrolling?',
        answer: 'Basic programming knowledge and a strong desire to learn.',
      },
      {
        question: 'Is there any placement assistance?',
        answer: 'Yes, we offer a letter of recommendation.',
      },
    ],
  },
  {
    category: 'About Courses',
    items: [
      {
        question: 'Are the courses self-paced?',
        answer: 'Yes, all our courses are self-paced with support available when needed.',
      },
      {
        question: 'Do I get a certificate after completion?',
        answer: 'Yes, you\'\'\'ll receive an industry-recognized certificate upon successful completion of the course and projects.',
      },
      {
        question: 'What is the course structure?',
        answer: 'Courses include lectures, quizzes, and real-world assignments with feedback.',
      },
    ],
  },
  {
    category: 'About Internships',
    items: [
      {
        question: 'Is the internship paid?',
        answer: 'Yes, all our internships are paid opportunities with competitive stipends.',
      },
      {
        question: 'Can I extend my internship duration?',
        answer: 'No, It has particular duration. If you want to do internship you can apply in next batch.',
      },
    ],
  },
];

export default function HelpSection() {
  return (
    <section id="help" className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary-foreground">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full bg-card p-6 rounded-lg shadow-sm">
                {category.items.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${catIndex}-${index}`} className="border-b-border last:border-b-0">
                    <AccordionTrigger className="text-left text-lg hover:no-underline text-card-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pt-2 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <QueryForm />
        </div>
      </div>
    </section>
  );
}
