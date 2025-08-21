import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const internships = [
  {
    title: 'Web Development',
    description: 'Gain hands-on experience in real-world projects.',
    duration: '1 month',
  },
  {
    title: 'Android Development',
    description: 'Gain hands-on experience in real-world projects.',
    duration: '1 month',
  },
  {
    title: 'Python Developer',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
  {
    title: 'Artificial Intelligence and Machine Learning',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
  {
    title: 'Data Science',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
  {
    title: 'Cloud Engineering',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
  {
    title: 'UI/UX',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
  {
    title: 'Internet Of Things',
    description: 'Learn product development lifecycle.',
    duration: '4 months',
  },
  {
    title: 'Cyber Security',
    description: 'Learn product development lifecycle.',
    duration: '1 month',
  },
];

const certifications = [
  {
    title: 'Introduction to C',
    description: 'C Intermediate Level Certificate.',
    duration: 'Flexible',
  },
  {
    title: 'C++/Cpp',
    description: 'Advanced certification in c++',
    duration: 'Flexible',
  },
  {
    title: 'Python',
    description: 'Advanced certification in Python',
    duration: 'Flexible',
  },
  {
    title: 'Java',
    description: 'Advanced certification in data analysis and machine learning.',
    duration: 'Flexible',
  },
  {
    title: 'HTML',
    description: 'Advanced certification in HTML',
    duration: 'Flexible',
  },
  {
    title: 'CSS',
    description: 'Advanced certification in CSS',
    duration: 'Flexible',
  },
  {
    title: 'JavaScript',
    description: 'Advanced certification in JavaScript',
    duration: '4 months',
  },
  {
    title: 'Git',
    description: 'Git Basics Certificate',
    duration: 'Flexible',
  },
  {
    title: 'SQL',
    description: 'Advanced certification in SQL',
    duration: 'Flexible',
  },
  {
    title: 'Arduino',
    description: 'Basic Arduino Programming.',
    duration: 'Flexible',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background text-foreground py-20 md:py-32 pt-32 md:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resources</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Expand your skills with our internships and certification programs.
          </p>
        </div>

        <section id="internships">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Internships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((item, index) => (
              <Card key={index} className="h-full flex flex-col bg-card border-border/50 transition-all duration-300 ease-in-out hover:border-accent/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                   <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{item.duration}</span>
                    </div>
                  <Button asChild variant="outline">
                    <Link href="#">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16 md:my-24" />

        <section id="certifications">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((item, index) => (
              <Card key={index} className="h-full flex flex-col bg-card border-border/50 transition-all duration-300 ease-in-out hover:border-accent/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                   <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{item.duration}</span>
                    </div>
                  <Button asChild variant="outline">
                    <Link href="#">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
