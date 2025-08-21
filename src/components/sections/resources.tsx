import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    title: 'The Art of Algorithmic Thinking',
    description: 'A deep dive into the fundamental principles of creating efficient and elegant algorithms.',
    href: '#',
    category: 'Whitepaper',
  },
  {
    title: 'AI in Modern Business',
    description: 'Explore how artificial intelligence is reshaping industries and what it means for your business.',
    href: '#',
    category: 'Case Study',
  },
  {
    title: 'Quantum Computing: A Primer',
    description: 'An introductory guide to the world of quantum computing and its potential impact on technology.',
    href: '#',
    category: 'E-Book',
  },
  {
    title: 'Mastering Machine Learning Models',
    description: 'Learn to build, train, and deploy machine learning models with our comprehensive tutorial series.',
    href: '#',
    category: 'Tutorial',
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Resources</h2>
          <p className="mt-4 text-lg text-foreground/80">Knowledge to power your journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Link href={resource.href} key={index} className="group block">
              <Card className="h-full flex flex-col bg-card border-border/50 transition-all duration-300 ease-in-out group-hover:border-accent/80 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-accent">{resource.category}</p>
                    <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="mt-2">{resource.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
