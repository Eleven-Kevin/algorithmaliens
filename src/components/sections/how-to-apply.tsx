import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Go to Resources',
    description: 'Navigate to the Resources page from the main menu.',
  },
  {
    title: 'Click on Internships',
    description: 'Select the "Internships" tab to view available opportunities.',
  },
  {
    title: 'Apply Now',
    description: 'Click the "Apply Now" button for your desired role.',
  },
  {
    title: 'Fill Google Form',
    description: 'A Google Form will appear; please fill it out completely.',
  },
  {
    title: 'Review and Submit',
    description: 'Double-check your details and submit the form.',
  },
];

const postApplicationSteps = [
    {
      title: 'Receive Documents',
      description: 'After applying, you will receive a process document with problem statements for your domain and your Offer Letter.',
    },
    {
      title: 'Final Submission Form',
      description: 'Five days before the project deadline, a Google Form will be sent for your final submission.',
    },
  ];

const postCompletionSteps = [
    {
      title: 'Submit Final Details',
      description: 'Upon completing your project, fill out the final Google Form with all required details.',
    },
    {
      title: 'Create Public Repository',
      description: 'You must create a public GitHub repository and upload your project for evaluation.',
    },
    {
      title: 'Submit Repository Link',
      description: 'Submit the GitHub repository link in the final Google Form.',
    },
];

export default function HowToApplySection() {
  return (
    <section id="how-to-apply" className="bg-secondary text-secondary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How to Apply for an Internship</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to join our internship program and kickstart your career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Application Process</h3>
                {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                    </div>
                    <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Post-Application</h3>
                 {postApplicationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="flex-shrink-0 h-8 w-8 text-primary" />
                    <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Post-Completion</h3>
                 {postCompletionSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                     <CheckCircle className="flex-shrink-0 h-8 w-8 text-primary" />
                    <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
